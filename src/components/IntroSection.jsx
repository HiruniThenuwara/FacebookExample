import browse from "../assets/icons/browse.png";
import page from "../assets/icons/page.png";
import shopdaraz from "../assets/icons/shopdaraz.png";

function IntroSection() {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow-md">
      {/* Title Section */}
      <h3 className="text-xl font-bold text-black mb-4">Intro</h3>
      
      {/* Introductory Text */}
      <p className="text-s text-black mb-2 text-center ">
        Daraz is the leading online marketplace in South Asia, empowering tens
        of thousands of sellers.
      </p>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 my-3" />

      {/* Info Section */}
      <div className="mt-4 space-y-2">
        {/* Page Information */}
        <div className="flex items-center space-x-2">
          <img src={page} alt="Info Icon" className="w-5 h-5" />
          <span className="text-gray-700 hover:underline cursor-pointer">
            <span className="font-bold">Page</span> · Shopping & Retail
          </span>
        </div>

        {/* Shop Daraz */}
        <div className="flex items-center space-x-2">
          <img src={shopdaraz} alt="YouTube Icon" className="w-5 h-5" />
          <a href="#" className="font-bold text-blue-600 hover:underline">
            ShopDarazSriLanka
          </a>
        </div>

        {/* Website Link */}
        <div className="flex items-center space-x-2">
          <img src={browse} alt="Website Icon" className="w-5 h-5" />
          <a href="https://daraz.lk" className="text-blue-600 hover:underline">
            daraz.lk
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
