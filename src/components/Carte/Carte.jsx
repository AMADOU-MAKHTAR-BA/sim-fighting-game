import Button from "../Buttons/Button.jsx";
import StatsPerso from "../StatsPerso/StatsPerso.jsx"
export default function Carte({person}) {
  const tableauStats = [
    {
      stat: "sante" , value: person.health
    } , 
    {
      stat:"attaque" , value:person.power
    } , 
    {
      stat:"magie" , value:person.magic
    }
    ]
    
    const BoucleTabStats = tableauStats.map((stats , index) => (
      <StatsPerso
      key = {index} 
      stat = {stats.stat}  value = {stats.value}
      ></StatsPerso>
    ))
    
  return (
    <div className="text-2xl text-black bg-blue-200 flex flex-col gap-1 h-[400px] w-[250px] shadow shadow-black m-0.5 p-0  ">
      <div className="w-full h-[200px] bg-amber-100 overflow-hidden p-0">
        <img src = {`../../../public/assets/img/${person.image}`}
           className="w-full h-full object-cover overflow-hidden m-0 
          hover:scale-105"  alt = {person.image}/>
      </div>
      
      <div className="grid">
      
      
        <h1 className="font-bold text-center ">
          {person.name}
        </h1>
        
        
        <div className="grid p-1">
        
        
       
          
        {BoucleTabStats}
           
           
          
        </div>
        <div className="flex justify-between mx-1">
        <Button className="bg-red-400 text-center px-3 py-1 rounded shadow shadow-green-400 my-1">××××</Button>
        <Button className="bg-green-400 text-center px-3 py-1 rounded shadow shadow-red-400 my-1" >ajouter</Button>
        </div>
      </div>
    </div>
  );
}