const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-xl rounded-lg cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out">
      <div
        className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 
        ease-in-out group-hover:bg-[#abe9dc]">
        {icon}
      </div>

      <h1 className="font-semibold text-lg">{title}</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla
        laborum obcaecati optio minima porro. Dicta iure in aut placeat.
      </p>

      <h3
        className="text-[#00b4d8] cursor-pointer hover:text-[#ade9dc] 
        transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
