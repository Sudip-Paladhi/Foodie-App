const ShimmerUi = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 w-full px-10 pt-20">
      {Array(16)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="w-full h-52 rounded  bg-gray-300"></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
