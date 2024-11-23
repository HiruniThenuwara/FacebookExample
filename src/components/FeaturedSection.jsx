import daraz from "../assets/daraz.jpg";
import imageshopping from "../assets/imageshopping.jpg";
import ic from "../assets/icons/verified.svg";
function FeaturedSection() {
  return (
    <div className="w-full bg-white p-5 rounded-md shadow-md overflow-y-auto h-[620px]">
      {/* Featured Heading */}
      <h3 className="text-xl font-bold text-gray-800 mb-5">Featured</h3>
      
      {/* Post Container */}
      <div className="flex space-x-6 overflow-x-auto">
        
        {/* First Post */}
        <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Post Header */}
          <div className="flex items-center px-5 py-4">
            <img
              className="h-12 w-12 rounded-full"
              src={daraz} // Replace with brand logo URL
              alt="Daraz Online Shopping"
            />
            <div className="ml-4">
              <p className="text-base font-semibold text-gray-800">Daraz Online Shopping
              <span className="ml-2 text-blue-500">
            <img
              src={ic}
              alt="Verified"
              width="20"
              height="20"
              className="inline-block"
            />
          </span>
              </p>
              <div className="text-sm text-gray-500 flex items-center space-x-2">
                <span>November 4 at 2:14 AM</span>
                <span>🌐</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-5 py-3 text-gray-800">
            <p>Daraz 11.11 Biggest Sale is here with amazing deals, best price and free delivery.Come shop on Daraz today and experience...</p>
          </div>

          {/* Post Media */}
          <div className="relative">
            <img
              className="w-full h-42 object-cover"
              src={imageshopping} // Replace with the video/image thumbnail URL
              alt="Daraz Sale"
            />
          </div>
        </div>
        
        {/* Second Post */}
        <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Post Header */}
          <div className="flex items-center px-5 py-4">
            <img
              className="h-12 w-12 rounded-full"
              src={daraz} // Replace with brand logo URL
              alt="Daraz Online Shopping"
            />
            <div className="ml-4">
              <p className="text-base font-semibold text-gray-800">Daraz Online Shopping
              <span className="ml-2 text-blue-500">
            <img
              src={ic}
              alt="Verified"
              width="20"
              height="20"
              className="inline-block"
            />
          </span>
              </p>
              <div className="text-sm text-gray-500 flex items-center space-x-2">
                <span>April 16</span>
                <span>🌐</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-5 py-3 text-gray-800">
            <p>
              When you shop on Daraz, you only get the Best Choices at the Best Prices. Come shop on Daraz today and experience...
            </p>
          </div>

          {/* Post Media */}
          <div className="relative">
            <img
              className="w-full h-42 object-cover"
              src={imageshopping} // Replace with the second thumbnail URL
              alt="Daraz Sale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
