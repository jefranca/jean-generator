const Header = () => {
    return (
      <header className="w-full py-4 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Jean Generator</h2>
          <nav>
            <ul className="flex space-x-4">
              <li className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
              <li className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer">About</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header