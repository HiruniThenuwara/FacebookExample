

function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        {/* Left Column */}
        <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold text-gray-700 mb-2">Intro</h3>
          <p className="text-gray-600">
            Daraz is the leading online marketplace in South Asia, empowering
            tens of thousands of sellers.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <i className="fas fa-info-circle text-gray-500"></i>
              <span>Shopping & Retail</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fab fa-youtube text-red-500"></i>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                ShopDarazSriLanka
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-link text-gray-500"></i>
              <a
                href="https://daraz.lk"
                className="text-blue-600 hover:underline"
              >
                daraz.lk
              </a>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="w-3/5 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold text-gray-700 mb-2">Featured</h3>
          <div className="flex space-x-4 overflow-x-auto">
            <div className="w-1/2">
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                {/* Replace with image */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="Featured 1"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Daraz 11.11 Biggest Sale is here with amazing deals, best price
                and free delivery.
              </p>
            </div>
            <div className="w-1/2">
              <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                {/* Replace with image */}
                <img
                  src="https://via.placeholder.com/150"
                  alt="Featured 2"
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                When you shop on Daraz, you only get the Best Choices at the
                Best Prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photos and Posts */}
      <div className="mt-6 flex space-x-6">
        {/* Photos */}
        <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold text-gray-700 mb-2">Photos</h3>
          <div className="grid grid-cols-3 gap-2">
            {/* Example images */}
            {Array(6)
              .fill("")
              .map((_, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/100?text=Image+${index + 1}`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-20 object-cover rounded-md"
                />
              ))}
          </div>
          <a href="#" className="block text-blue-600 hover:underline mt-2">
            See all photos
          </a>
        </div>

        {/* Posts */}
        <div className="w-3/5 bg-white p-4 rounded-md shadow-md">
          <h3 className="font-bold text-gray-700 mb-2">Posts</h3>
          <div className="space-y-4">
            {/* Example post */}
            <div className="border-b border-gray-200 pb-4">
              <p className="text-gray-700">
                2 out of 3 is correct! But did you get the best offers?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Click this and get the best offers
                </a>
              </p>
              <img
                src="https://via.placeholder.com/500x200"
                alt="Post 1"
                className="mt-2 rounded-md"
              />
            </div>
            {/* Add more posts as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
