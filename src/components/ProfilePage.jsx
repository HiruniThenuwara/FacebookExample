
import IntroSection from "./IntroSection";
import FeaturedSection from "./FeaturedSection";
import PhotosSection from "./PhotosSection";
import PostsSection from "./PostsSection";

function ProfilePage() {
  return (
    <div className="container mx-auto px-20 py-6 border-t">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent shadow-lg -mt-1"></div>

      {/* First Row: Intro and Featured */}
      <div className="flex space-x-5 p-6">
        <IntroSection />
        <FeaturedSection />
      </div>

      {/* Second Row: Photos and Posts */}
      <div className="flex space-x-5 p-6">
        <PhotosSection />
        <PostsSection />
      </div>
    </div>
  );
}

export default ProfilePage;
