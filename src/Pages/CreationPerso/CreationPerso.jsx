import { useState } from "react";
import Input from "../../components/Input/Input.jsx";
import InputOption from "../../components/Input/InputOption.jsx";

const CreationPerso = () => {
  const [dataForm, setDataForm] = useState({
    nameInput: "",
    healthInput: "",
    powerInput: "",
    magicInput: "",
    elementInput: "",
    classeInput: ""
  });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm(prev => ({
      ...prev,
      [name]: e.target.type === "number" ? Number(value) : value
    }));
  };
  
  const tabInputs = [
    {
      type: "text",
      name: "nameInput",
      value: dataForm.nameInput,
      placeholder: "saisir le nom de l'avatar",
      required: true,
      label: "NOM :"
    },
    {
      type: "number",
      name: "healthInput",
      value: dataForm.healthInput,
      required: true,
      placeholder: "saisir ses PS",
      label: "Points de Santé :",
    },
    {
      type: "number",
      name: "powerInput",
      label: "Points de Puissance :",
      value: dataForm.powerInput,
      required: true,
      placeholder: "saisir ses PP",
    },
    {
      type: "number",
      name: "magicInput",
      value: dataForm.magicInput,
      required: true,
      placeholder: "saisir ses PM",
      label: "Points de Magie :",
    }
  ];

  const tabSelects = [
    {
      label: "Élément :",
      name: "elementInput",
      value: dataForm.elementInput,
      options: [
        { value: "feu", label: "Feu 🔥" },
        { value: "eau", label: "Eau 💧" },
        { value: "vent", label: "Vent 🌪️" },
        { value: "terre", label: "Terre 🌍" }
      ]
    },
    {
      label: "Classe :",
      name: "classeInput",
      value: dataForm.classeInput,
      options: [
        { value: "guerrier", label: "Guerrier ⚔️" },
        { value: "mage", label: "Mage 🧙" },
        { value: "archer", label: "Archer 🏹" }
      ]
    }
  ];

const handleSubmit = (e) => {
  e.preventDefault();

  // Object.entries(dataForm).forEach(([key, value]) => {
//     console.log(key, value, typeof value);
//   });
};

  return (
    <form 
    onSubmit = {handleSubmit}
    className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6">
      {tabInputs.map((input, index) => (
        <div key={index} className="space-y-2">

          <Input
            type={input.type}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            required={input.required}
            onChange={handleChange}
            label={input.label}
          > </Input>
        </div>
      ))}
      {tabSelects.map((select, index) => (
        <InputOption
          key={index}
          label={select.label}
          name={select.name}
          value={select.value}
          onChange={handleChange}
          options={select.options}
        />
      ))}


      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Créer
      </button>
    </form>
  );
};

export default CreationPerso;