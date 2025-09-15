import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
  <nav className=" w-full flex justify-between items-center text-bold bg-red-300 shadow shadow-blue-50  ">
        <NavLink to= "/">
        design des persos
        </NavLink>
  </nav>
  );
};
export default Navbar;