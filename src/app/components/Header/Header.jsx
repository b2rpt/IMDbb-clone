import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import DarkMode from "../DarkMode";
import Menu from "../Menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center  py-6">
      <div className="flex">
        <Menu title="HOME" path="/" Icon={AiFillHome}></Menu>
        <Menu title="ABOUT" path="/about" Icon={BsInfoCircleFill}></Menu>
      </div>
      <div className="flex">
        {/* <DarkMode></DarkMode> */}
        <Link href="/">
          <h2>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg  ">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
export default Header;
