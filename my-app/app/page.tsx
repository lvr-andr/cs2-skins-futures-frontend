export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-white text-xl font-semibold">CS2 Skins Futures</h1>
        
        <div className="flex items-center gap-4">
         {/* Search Bar */}
         <input
            type="text"
            placeholder="Search skins..."
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400 placeholder-gray-400 w-64"
          />
         
         
          

          {/* Currency Dropdown */}
          <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="rub">RUB</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>

          {/* Language Dropdown */}
          <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="ru">Русский</option>
          </select>

          {/* Login Button */}
          <button className="bg-green-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition-colors shadow-lg shadow-green-400/25">
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
