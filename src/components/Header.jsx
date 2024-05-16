import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  let ulRef = useRef();
 
  return (
    <header className="fixed bg-white/10 backdrop-blur-sm bg w-full p-2.5 flex justify-between items-center px-5 sm:px-[80px] md:px-[135px]">
      <div className="flex items-center justify-center gap-[22px]">
        <img
          className="cursor-pointer"
          src="/icons/main-logo.svg"
          alt="main_logo"
        />
        <p className="text-white font-medium text-[15px] max-w-[200px]">
          Разрабатываем фирменные стили с 2009 года
        </p>
      </div>

      <nav>
        <ul
          ref={ulRef}
          className="w-full left-0 md:w-auto md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gray-400 backdrop-blur-sm md:bg-transparent -top-[400px]  p-5 md:p-0 gap-[23px] md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500"
        >
          <li className="py-[7px] px-[30px] border rounded-2xl cursor-pointer border-white text-white font-medium text-base w-[200px] md:w-auto">
            <a href="#" target="_blank">
              +998 97 930 36 66
            </a>
          </li>
          <li className="cursor-pointer py-[23px] md:py-0">
            <img src="/icons/facebook.svg" alt="facebook" />
          </li>
          <li className="cursor-pointer">
            <img src="/icons/instagram.svg" alt="instagram" />
          </li>
        </ul>
      </nav>
      <div className="cursor-pointer md:hidden block">
        <RxHamburgerMenu
          name="menu"
          size={"30"}
          color={"white"}
        />
      </div>
    </header>
  );
};

export default Header;
