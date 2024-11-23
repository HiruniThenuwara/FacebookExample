import background from "../assets/background.png";

const Background = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-500 via-blue-300 to-white-500 h-[50vh]">
      {/* Background Image with Container */}
      <div className="absolute inset-0 z-0 w-full h-full mx-auto ">
        <img
          src={background}
          alt="Background Overlay"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Background;
