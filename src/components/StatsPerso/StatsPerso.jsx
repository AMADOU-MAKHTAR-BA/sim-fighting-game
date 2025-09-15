import { useState } from "react"; 
import Button from "../Buttons/Button.jsx";

const StatsPerso = ({ stat, value }) => {
  const [stateValue , setStateValue] = useState(Number(value));

  
  const updateStateValue = (update) => {
    setStateValue(currentValue => {
      const increment = currentValue <= 995 ? 5 : 4;
      const newStateValue = update === "up" ? currentValue + increment : currentValue - increment;
      return Math.max(0, Math.min(newStateValue, 999)); // oscie entre 0 et 999
    });
  };

  return (
    <div className="flex justify-between items-center">
      <h2 className="font-bold">{stat} :</h2>
      <div className="flex">
        <Button onClick={() => updateStateValue("down")}> 🔽 </Button>
        <p className="font-bold text-center m-2">{stateValue}</p>
        <Button onClick={() => updateStateValue("up")}> 🔼 </Button>
      </div>
    </div>
  );
};

export default StatsPerso;