function PostsSection() {
    return (
      <div className="w-3/5 bg-white p-4 rounded-md shadow-md overflow-y-auto h-[600px]">
        {/* Section Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Posts</h3>
  
        {/* Posts Container */}
        <div className="space-y-4">
          {/* Post 1 */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-700">
              2 out of 3 is correct! But did you get the best offers?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Click this and get the best offers
              </a>
            </p>
            <img
              src="https://via.placeholder.com/500x200"
              alt="Post 1"
              className="mt-2 rounded-md"
            />
          </div>
  
          {/* Post 2 */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-700">
              Explore amazing deals on Daraz 11.11.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Start shopping now!
              </a>
            </p>
            <img
              src="https://via.placeholder.com/500x200"
              alt="Post 2"
              className="mt-2 rounded-md"
            />
          </div>
  
          {/* Post 3 */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-700">
              More deals and offers await you!{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Discover now!
              </a>
            </p>
            <img
              src="https://via.placeholder.com/500x200"
              alt="Post 3"
              className="mt-2 rounded-md"
            />
          </div>
  
          {/* Post 4 */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-700">
              Dont miss out on exclusive offers.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Check them here!
              </a>
            </p>
            <img
              src="https://via.placeholder.com/500x200"
              alt="Post 4"
              className="mt-2 rounded-md"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default PostsSection;
  