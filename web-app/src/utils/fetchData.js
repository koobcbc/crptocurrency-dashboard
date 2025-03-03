import axios from "axios";

export const fetchCryptoPrices = async () => {
  const { data } = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,dogecoin,solana&vs_currencies=usd&include_last_updated_at=true&include_24hr_change=true"
  );

  return data;
};