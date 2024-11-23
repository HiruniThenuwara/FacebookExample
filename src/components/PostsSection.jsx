import daraz from "../assets/daraz.jpg";
import img1 from "../assets/icons/img1.jpg";
import img2 from "../assets/icons/img2.jpg";
import img3 from "../assets/icons/img3.jpg";
import img4 from "../assets/icons/img4.jpg";
import profileicon from "../assets/profileicon.png";
import ic from "../assets/icons/verified.svg";

function PostsSection() {
  // Define post content dynamically
  const posts = [
    {
      logo: daraz,
      title: "Daraz Online Shopping",
      date: "November 4 at 2:14 AM",
      text: "Discover exclusive deals on your favorite items this 11.11 shopping festival!",
      link: "Click to explore now!",
      image: img1,
    },
    {
      logo: daraz,
      title: "Daraz Online Shopping",
      date: "November 5 at 9:30 AM",
      text: "Your favorite brands are now more affordable. Don’t miss out on these amazing discounts!",
      link: "Shop the best offers today!",
      image: img2,
    },
    {
      logo: daraz,
      title: "Daraz Online Shopping",
      date: "November 6 at 1:00 PM",
      text: "Limited-time flash sales are here! Grab what you love before it's gone.",
      link: "View flash sales now!",
      image: img3,
    },
    {
      logo: daraz,
      title: "Daraz Online Shopping",
      date: "November 7 at 8:45 PM",
      text: "Get rewarded for shopping! Earn exclusive cashback and vouchers today.",
      link: "Claim your rewards here!",
      image: img4,
    },
  ];

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
        {posts.map((post, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            {/* Post Header */}
            <div className="flex items-center px-5 py-4">
              <img
                className="h-12 w-12 rounded-full"
                src={post.logo}
                alt={post.title}
              />
              <div className="ml-4">
                <p className="text-base font-semibold text-gray-800">
                  {post.title}
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
                  <span>{post.date}</span>
                  <span>🌐</span>
                </div>
              </div>
            </div>

            {/* Post Body */}
            <p className="text-gray-700 font-semibold text-lg">{post.text}</p>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              {post.link}
            </a>
            <img
              src={post.image}
              alt={`Post ${index + 1}`}
              className="mt-2 rounded-md"
            />

            {/* Post Footer */}
            <div className="mt-4 px-5">
              <div className="flex justify-between items-center border-t pt-2">
                {/* Loop through actions */}
                {[
                  { icon: "thumb_up", label: "Like" },
                  { icon: "comment", label: "Comment" },
                  { icon: "send", label: "Send" },
                  { icon: "share", label: "Share" },
                ].map((action, idx) => (
                  <button
                    key={idx}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    {/* Material Icon */}
                    <span className="material-icons">{action.icon}</span>
                    {/* Action Text */}
                    <span className="ml-1">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Input Section */}
            <div className="flex items-center mt-2 p-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
              {/* Profile Picture */}
              <img
                src={profileicon}
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
        ))}
      </div>
    </div>
  );
}

export default PostsSection;
