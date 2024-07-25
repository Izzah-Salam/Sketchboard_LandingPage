import icon from "../img/icon.png";
import { BsLayoutThreeColumns } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="flex justify-between py-5">
        <span className="font-bold text-2xl pl-10">Dexpress</span>
        <div>
          <BsLayoutThreeColumns className="md:hidden text-xl block mx-5" />
          <ul className="md:flex space-x-10 mr-12 font-semibold hidden">
            <li>
              About Us <hr className="bg-yellow-200 h-1 w-[50%]" />
            </li>
            <li>Decks</li>
            <li>Wheels</li>
            <li>Contact</li>
            <li className="bg-yellow-200 p-1 rounded-full">
              <img src={icon} alt="" className="w-[25px]" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
