import bg from "../img/bg.png";
import { GiReturnArrow } from "react-icons/gi";
import { CiDroplet } from "react-icons/ci";
import { FaWeightScale } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";

const Section = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-20">
      <div className="p-10">
        <h1 className="font-bold text-4xl">
          Skateboarding <br /> done right
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          wooden longboard in best quality for skateboard lovers
        </p>
        <div className="flex items-center space-x-4 mt-7">
          <p className="font-bold "> Order Now</p>

          <GiReturnArrow className="text-yellow-300 text-3xl " />
        </div>
      </div>
      <div className="bg-yellow-300 rounded-full">
        <img src={bg} alt="A boy doing skateboard" />
      </div>
      <div className="mt-10 ml-10 md:block hidden">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-500 p-4 rounded-md">
            <FaWeightScale className="text-2xl font-bold text-white" />
          </div>
          <div>
            <p className="font-bold">Weight</p>
            <span className="text-gray-500 text-sm">8Kg</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 my-10">
          <div className="bg-yellow-500 p-4 rounded-md">
            <CiDroplet className="text-2xl font-bold text-white" />
          </div>
          <div>
            <p className="font-bold">Color</p>
            <span className="text-gray-500 text-sm">Yellow</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-500 p-4 rounded-md">
            <RxDimensions className="text-2xl font-bold text-white" />
          </div>
          <div>
            <p className="font-bold">Dimension</p>
            <span className="text-gray-500 text-sm">24x34</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
