import IntroSection from "./IntroSection";
import FeaturedSection from "./FeaturedSection";
import PhotosSection from "./PhotosSection";
import PostsSection from "./PostsSection";

function ProfilePage() {
  return (
    <div className="container mx-auto px-20 py-6 border-t">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent shadow-lg -mt-1"></div>

      
      <div className="grid grid-cols-5 gap-5 p-6">
        <div className="col-span-2 space-y-5">
          <IntroSection />
          <PhotosSection />
        </div>

        
        <div className="col-span-3 space-y-5">
          <FeaturedSection />
          <PostsSection />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;