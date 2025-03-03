import Image from "next/image";
import Dashboard from "../components/Dashboard";


export default function Home() {
  console.log("loaded");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header></header>
      <main className='flex flex-col items-center justify-center gap-8'>
        {/* <h1>Welcome to Crypto Price Tracker</h1> */}
        <Dashboard/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="http://localhost:3001/docs/project-setup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/koobcbc/crptocurrency-dashboard/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Github Repository
        </a>
      </footer>
    </div>
  );
}
