import daraz from "../assets/daraz.jpg";
import img1 from "../assets/icons/img1.jpg";
import img2 from "../assets/icons/img2.jpg";
import img3 from "../assets/icons/img3.jpg";
import img4 from "../assets/icons/img4.jpg";
import profileicon from "../assets/profileicon.png";
import ic from "../assets/icons/verified.svg";

function PostsSection() {
  return (
    <div className="w-full bg-white p-4 rounded-md shadow-md h-[600px] flex flex-col">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="text-xl font-bold text-gray-800">Posts</h3>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300">
          <span className="mr-2">↹</span>
          Filters
        </button>
      </div>

      {/* Posts Container */}
      <div className="overflow-y-auto space-y-6 flex-1">
        {/* Render Posts */}
        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            {/* Post Header */}
            <div className="flex items-center px-5 py-4">
              <img
                className="h-12 w-12 rounded-full"
                src={daraz} // Replace with brand logo URL
                alt="Daraz Online Shopping"
              />
              <div className="ml-4">
                <p className="text-base font-semibold text-gray-800">
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
                </p>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <span>November 4 at 2:14 AM</span>
                  <span>🌐</span>
                </div>
              </div>
            </div>

            {/* Post Body */}
            <p className="text-gray-700 font-semibold text-lg">
              {`Sample text for Post ${index + 1}.`}
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              {`Learn more about Post ${index + 1}.`}
            </a>
            <img src={img} alt={`Post ${index + 1}`} className="mt-2 rounded-md" />

            {/* Post Footer */}
            <div className="mt-4 px-5">
              <div className="flex justify-between items-center border-t pt-2">
                {["thumb_up", "comment", "send", "share"].map((icon, idx) => (
                  <button
                    key={idx}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <span className="material-icons">{icon}</span>
                    <span className="ml-1">{icon.split("_").join(" ")}</span>
                  </button>
                ))}
              </div>

              {/* Comment Input Section */}
              <div className="flex items-center mt-2 p-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
                {/* Profile Picture */}
                <img
                  src={profileicon} // Replace with actual user profile picture URL
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 bg-transparent px-3 py-1 text-sm outline-none"
                />
                {/* Action Icons */}
                <div className="flex items-center space-x-3 text-gray-500">
                  {["mood", "gif", "image"].map((action, idx) => (
                    <button key={idx} className="hover:text-blue-500">
                      <span className="material-icons text-lg">{action}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsSection;
