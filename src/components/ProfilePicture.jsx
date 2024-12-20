import daraz from '../assets/daraz.jpg';

function ProfilePicture() {
  return (
    <div className="w-[180px] h-[180px] rounded-full border-4 border-white overflow-hidden absolute top-[20px] left-[20px]">
      <img
        src={daraz}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfilePicture;