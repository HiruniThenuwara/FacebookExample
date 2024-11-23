import logo from "../assets/icons/logo.png"
import friends from "../assets/icons/friends.png"
import home from "../assets/icons/home.png"
import play from "../assets/icons/play.png"
import store from "../assets/icons/store.png"
import video from "../assets/icons/video.png"
import profile from "../assets/icons/profile.png"
import menu from "../assets/icons/menu.png"
import notification from "../assets/icons/notification.png"
import messenger from "../assets/icons/messenger.png"

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 shadow-md">
      <div className=" mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left Section: Logo and Search */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="">
              <img
                src= {logo} // Update with the correct path
                alt="Logo"
                className="h-6 w-6"
              />
            </div>
            <span className="hidden sm:block font-medium">Search Facebook</span>
          </div>
        </div>

        {/* Center Section: Icons */}
        <div className="flex items-center space-x-32">
          <NavLink to="/" className="hover:text-blue-500">
            <img
              src={home} // Update with the correct path
              alt="Home"
              className="h-6 w-6"
            />
          </NavLink>
          <NavLink to="/friends" className="hover:text-blue-500">
            <img
              src={friends}// Update with the correct path
              alt="Friends"
              className="h-6 w-6"
            />
          </NavLink>
          <NavLink to="/video" className="hover:text-blue-500">
            <img
              src={video} // Update with the correct path
              alt="Videos"
              className="h-6 w-6"
            />
          </NavLink>
          <NavLink to="/store" className="hover:text-blue-500">
            <img
              src={store} // Update with the correct path
              alt="Store"
              className="h-6 w-6"
            />
          </NavLink>
          <NavLink to="/play" className="hover:text-blue-500">
            <img
              src={play} // Update with the correct path
              alt="Play"
              className="h-6 w-6"
            />
          </NavLink>
        </div>

        {/* Right Section: Messenger, Notifications, and Profile */}
        <div className="flex items-center space-x-4">
          <NavLink to="/menu" className="hover:text-blue-500">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src= {menu}// Update with the correct path
              alt="Menu"
              className="h-6 w-6"
            />
            </div>
          </NavLink>
          <NavLink to="/messenger" className="relative hover:text-blue-500">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src={messenger} // Update with the correct path
              alt="Messenger"
              className="h-6 w-6"
            />
            </div>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
              1
            </span>
          </NavLink>
          <NavLink to="/notification" className="hover:text-blue-500">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={notification} // Update with the correct path
                alt="Notification"
                className="h-6 w-6"
              />
            </div>
          </NavLink>
          <NavLink to="/profile" className="hover:text-blue-500">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={profile} // Update with the correct path
                alt="Profile"
                className="h-6 w-6"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;