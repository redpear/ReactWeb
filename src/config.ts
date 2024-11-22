
// connects the backend to the front end
const config = {
    baseApiUrl: "https://localhost:4000",
  };
  
  // formats the price of a house on the page
  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  
  export default config;
  export { currencyFormatter };
  