"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "../utils/fetchData";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { FaSpinner } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Dashboard() {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["cryptoPrices"], 
        queryFn: fetchCryptoPrices
    });
    const [searchQuery, setSearchQuery] = useState("");

    console.log("loaded", data)
    const loadingComponent = <div><p className="text-center text-lg">Loading...</p><FaSpinner></FaSpinner></div>;
    if (isLoading) return loadingComponent;

    const filteredData = Object.keys(data).filter((key) =>
        key.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <div className="flex align-center justify-center pb-1">
                <h1 className="text-3xl font-bold text-center text-black dark:text-white p-6">Crypto Price Tracker</h1>
                <IconButton onClick={() => refetch()}
                    sx={{
                        color: "var(--foreground)",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                        marginBottom: "10px",
                        marginTop: "10px"
                      }}
                >
                    <RefreshIcon sx={{ color: "var(--foreground)"}}/>
                    {/* <p sx={{ fontSize: "0.75rem" }}>Refresh</p> */}
                </IconButton>
            </div>
            {/* Search Bar */}
            <SearchBar onSearch={setSearchQuery} />

            {/* Display Crypto Prices */}
            <ul className="mt-4 space-y-3">
                {filteredData.map((key) => (
                <li key={key} className="border p-3 rounded bg-gray-100 dark:bg-gray-800 flex justify-between">
                    <span className="font-semibold text-black dark:text-white">{key.toUpperCase()}</span>
                    {
                        data[key].usd_24h_change > 0 ?
                        <span className="font-bold text-green-600 dark:text-green-400">${data[key].usd}</span>:
                        <span className="font-bold text-blue-600 dark:text-red-400">${data[key].usd}</span>
                    }
                </li>
                ))}
            </ul>
        </div>
    );
}