import ProfilePicture from "./ProfilePicture";
import img from "../assets/icons/profile.png";
import ic from "../assets/icons/verified.svg";
import like from "../assets/icons/like.svg";
import message from "../assets/icons/messenger.png";
import shop from "../assets/icons/shop.png";

function PageTitleSection() {
  return (
    <div className=" container w-full h-full mx-auto px-20">
    <div className="relative bg-gray-800 bg-opacity-0 h-[10px]">
      <div className="container top-0 left-0 w-full h-full bg-opacity-0"></div>
      <div className="relative container mx-auto px-20 py-10">
        <ProfilePicture />
        <div className="pl-[200px] pt-8">
        <h1 className="text-gray-900 text-4xl font-bold flex items-center">
          Daraz Online Shopping
          <span className="ml-2 text-blue-500">
            <img
              src={ic}
              alt="Verified"
              width="20"
              height="20"
              className="inline-block"
            />
          </span>
        </h1>
        <p className="text-gray-500 font-bold text-sm mt-2 style={{ fontSize: '1.25rem' }">15M likes · 15M followers</p>
        <div className="flex items-center justify-between mt-2">
        <div className="flex relative">
        {Array(8)
          .fill(0) // Create an array of length 8
          .map((_, index) => (
            <img
              key={index}
              src={img}
              alt="Profile"
              className={`w-10 h-10 rounded-full border-2 border-white -ml-2 ${
                index === 0 ? "ml-0" : ""
              }`}
            />
          ))}
          </div>

          {/* Buttons aligned to the right */}
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              <img src={shop} alt="Shop" className="w-5 h-5 mr-2" />
              Shop Now
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              <img src={message} alt="Message" className="w-5 h-5 mr-2" />
              Message
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              <img src={like} alt="Like" className="w-5 h-5 mr-2" />
              Like
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default PageTitleSection;