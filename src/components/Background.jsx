import background from "../assets/background.png";




const Background = () => {
  return (
    <div className="conta bg-gradient-to-b from-purple-500 via-blue-300 to-white-500 ">
      {/* Background Image with Container */}
      <div className="container w-full h-full mx-auto px-20">
        <img
          src={background}
          alt="Background Overlay"
          className="w-full h-full container"
        />
      </div>
    </div>
  );
};

export default Background;