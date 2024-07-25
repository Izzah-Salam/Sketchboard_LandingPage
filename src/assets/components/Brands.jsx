import nike from "../img/nike.png";
import board from "../img/board.png";
import baker from "../img/baker.png";
import skate from "../img/skate.jpg";
import volcom from "../img/volcom.png";
const Brands = () => {
  return (
    <div className="flex items-center space-x-20 p-10 mt-5">
      <div>
        <h1 className="text-xl font-bold">Brands Available</h1>
        <h4 className="text-sm text-gray-800 my-2">Famous Brands</h4>
        <p className="text-[10px] text-gray-600">
          We have Available Stock for all famous <br /> brands you can order
          from our website
        </p>
      </div>
      <div className="flex flex-1 mx-20 justify-between">
        <div>
          <img src={nike} alt="" className="w-[80px] h-[50px]" />
        </div>
        <div>
          <img src={board} alt="" className="w-[100px]  h-[50px]" />
        </div>
        <div>
          <img src={baker} alt="" className="w-[80px] h-[50px]" />
        </div>
        <div>
          <img src={volcom} alt="" className="w-[100px] h-[50px]" />
        </div>
        <div>
          <img src={skate} alt="" className="w-[100px] h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
