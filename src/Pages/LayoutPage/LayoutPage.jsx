import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
const LayoutPage = () => {
  return (
    <>
     <section className="flex flex-col p-2 shadow gap-3 text-white m-1 p-1 bg-gray-100 min-h-screen">
      
     <Navbar />
     <main>
     <Outlet />
     </main>
 {
 //<HommePage />
 }
    </section>
    
    
    </>
  );
};



export default LayoutPage;