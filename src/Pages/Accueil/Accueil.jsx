import {useState , useEffect} from "react";
import Carte from "../../components/Carte/Carte.jsx"
const Accueil = () => {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";
 
 const [persos , setPersos] = useState([]);
 
      useEffect( () => {
       fetchPersos()
     } , [] )
     
     async function fetchPersos() {
       try {
        const myFetch = await fetch(url)
        
          .then(res => res.json())
          .then(data => {
            setPersos(data)
          })
          .catch(err => console.error(err));
       }
       catch (error) {
         console.error( "erreur lors du fetch" , error);
       }
     };
  return (
     <div className="flex justify-center items-center flex-wrap gap-1.5 ">
      {persos.map((perso, index) =>  
        <Carte key={index} person={perso} />

      )}
    </div>
  );
};



export default Accueil;