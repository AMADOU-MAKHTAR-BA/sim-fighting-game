import Carte from "../Carte/Carte.jsx";

const MapCarte = () => {
  const tableauPersons = [
    {
      src : "AIZEN&KISUKE.png" , 
      nom : "INTELLIGENCE" , 
      santeValue: 750 ,
      attaqueValue: 30 ,
      magieValue: 999
      
    } , 
    {
      src : "Big3Nindo.png" , 
      nom : "NINDO" , 
      santeValue: 400 ,
      attaqueValue: 690 ,
      magieValue: 295
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