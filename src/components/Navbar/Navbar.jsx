import { NavLink } from "react-router-dom";
const Navbar = () => {
  
  const pathItems = [
    {
      path : "/accueil" , 
      name : "Accueil" 
    } ,
    {
      path : "/tous-les-persos" , 
      name : "All fighters" 
    } ,
    {
      path : "/creer-un-personnage" , 
      name : "Ajouter un perso"
    }
    ];
  const activeLinkStyle = ({isActive}) => 
  isActive 
    ? "underline font-bold text-blue-600" 
    : "text-gray-600 hover:text-gray-600 transition-colors";
  
  return (
  <nav className=" w-full flex justify-between gap-2 items-center text-bold bg-blue-50 shadow shadow-blue-50 m-0 p-0 text-sm text-black ">
        <NavLink to = {"/"} className={activeLinkStyle}>
        ALL PERSOS
        </NavLink>
        <div className="grow flex justify-around">
        {
          pathItems.map((item , index) => (
            <NavLink className={activeLinkStyle}
            key = {index} to ={item.path}
            > {item.name}</NavLink>
            ))
        }
        </div>
  </nav>
  );
};
export default Navbar;