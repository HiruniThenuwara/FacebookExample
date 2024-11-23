import img1 from "../assets/icons/img1.jpg";
import img2 from "../assets/icons/img2.jpg";
import img3 from "../assets/icons/img3.jpg";
import img4 from "../assets/icons/img4.jpg";
import img5 from "../assets/icons/img5.jpg";
import img6 from "../assets/icons/img6.jpg";
import img7 from "../assets/icons/img7.jpg";
import img8 from "../assets/icons/img8.jpg";
import img9 from "../assets/icons/img9.jpg";

function PhotosSection() {
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="w-2/5 bg-white p-4 rounded-md shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Photos title with hover effect */}
        <h3 className="text-xl font-bold text-gray-800 cursor-pointer hover:underline">
          Photos
        </h3>
        <a href="#" className="text-blue-600 hover:underline">
          See all photos
        </a>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-40 object-cover rounded-md" // Adjusted height to `h-40`
          />
        ))}
      </div>
    </div>
  );
}

export default PhotosSection;
