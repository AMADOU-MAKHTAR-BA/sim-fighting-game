import Carte from "../Carte/Carte.jsx";

const MapCarte = () => {
  const tableauPersons = [
    {
      image : "AIZEN&KISUKE.png" , 
      name : "INTELLIGENCE" , 
      health: 750 ,
      power: 30 ,
      magic: 999
      
    } , 
    {
      image : "Big3Nindo.png" , 
      name : "NINDO" , 
      health: 400 ,
      power: 690 ,
      magic: 295
    } , 
    ]
    

  return (
    <div className="flex justify-center items-center flex-wrap gap-1.5 ">
      {tableauPersons.map((person, index) => (
        <Carte key={index} person={person} />
      ))}
    </div>
  );
};

export default MapCarte;