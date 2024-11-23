
function FeaturedSection() {
  return (
    <div className="w-3/5 bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Featured</h3>
      <div className="flex space-x-4 overflow-x-auto">
        <div className="w-1/2">
          <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured 1"
              className="rounded-md"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Daraz 11.11 Biggest Sale is here with amazing deals, best price and
            free delivery.
          </p>
        </div>
        <div className="w-1/2">
          <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Featured 2"
              className="rounded-md"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            When you shop on Daraz, you only get the Best Choices at the Best
            Prices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
