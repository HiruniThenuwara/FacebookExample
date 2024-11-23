import { useState, useEffect, useRef } from "react";

function PageNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const rightDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        rightDropdownRef.current &&
        !rightDropdownRef.current.contains(event.target)
      ) {
        setIsRightDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto px-20">
      <div className="flex items-center justify-between border-t border-gray-300 py-4">
        {/* Tabs */}
        <div className="flex space-x-6">
          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">
            Posts
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-600 pb-2">
            About
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-600 pb-2">
            Mentions
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-600 pb-2">
            Reels
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-600 pb-2">
            Photos
          </button>
          <button className="text-gray-600 font-medium hover:text-blue-600 pb-2">
            Videos
          </button>
          {/* More Button with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-600 font-medium hover:text-blue-600 pb-2"
            >
              More ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                <ul className="text-gray-700">
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Live
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Groups
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Events
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Followers
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Music
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Check-ins
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Sports
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Movies
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    TV shows
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Books
                  </li>
                  <li className="px-4 py-1 text-base font-bold text-black hover:bg-gray-100 cursor-pointer">
                    Reviews given
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Corner Button */}
        <div className="relative" ref={rightDropdownRef}>
          <button
            onClick={() => setIsRightDropdownOpen(!isRightDropdownOpen)}
            className="flex items-center justify-center w-[40px] h-[40px] bg-gray-200 rounded-lg shadow-sm"
          >
            <span className="text-black text-xs">●●●</span>
          </button>
          {isRightDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 shadow-lg rounded-md">
              <ul className="text-gray-700">
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">🔍</span>
                  Search
                </li>
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">🚩</span>
                  Report Page
                </li>
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">⛔</span>
                  Block
                </li>
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">🌍</span>
                  Switch Region
                </li>
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">👥</span>
                  Invite Friends
                </li>
                <li className="flex items-center px-4 py-1 text-sm font-bold text-black hover:bg-gray-100 cursor-pointer">
                  <span className="mr-2 text-gray-500">➕</span>
                  Follow
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageNavbar;
