const Brands = () => {
  return (
    <div className="flex items-center space-x-5 p-10">
      <div>
        <h1 className="text-xl font-bold">Brands Available</h1>
        <h4 className="text-sm text-gray-800 my-2">Famous Brands</h4>
        <p className="text-[10px] text-gray-600">
          We have Available Stock for all famous <br /> brands you can order
          from our website
        </p>
      </div>
      <div className="flex flex-1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Brands;
