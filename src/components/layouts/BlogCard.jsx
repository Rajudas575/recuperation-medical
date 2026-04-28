const BlogCard = ({ img, headLines }) => {
  return (
    <div
      className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-lg space-y-2 
    cursor-pointer hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        className="h-64 md:h-96 lg:h-40 w-full rounded-lg object-cover"
        src={img}
        alt="img"
      />

      <h1 className="text-lg text-center font-semibold">{headLines}</h1>

      <p className="text-center text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        quidem sit nisi iusto quasi repellendus!
      </p>
    </div>
  );
};

export default BlogCard;
