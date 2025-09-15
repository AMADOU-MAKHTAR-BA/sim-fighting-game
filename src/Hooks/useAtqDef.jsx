import { useState } from "react";
const useAtqDef = () => {

  const [attaque, setAttaque] = useState(30);
  const [pv, setPv] = useState(30);
  const [sante, setSante] = useState(10);
  
  const upAttaque = () => {
    sante < 995
      ? setAttaque(snt => Math.min(snt + 5, 999))
      : setAttaque(snt => Math.min(snt + 4, 999));
  };
  const downAttaque = () => {
    sante <= 995
      ? setAttaque(snt => Math.max(snt - 5, 0))
      : setAttaque(snt => Math.max(snt - 4, 0));
  };
  
  const downPv = () => {
    sante <= 995
      ? setPv(snt => Math.max(snt - 5, 0))
      : setPv(snt => Math.max(snt - 4, 0));
  };
  const upPv = () => {
    sante < 995
      ? setPv(snt => Math.min(snt + 5, 999))
      : setPv(snt => Math.min(snt + 4, 999));
  };
  
  const downSante = () => {
    sante <= 995
      ? setSante(snt => Math.max(snt - 5, 0))
      : setSante(snt => Math.max(snt - 4, 0));
  };
  const upSante = () => {
    sante < 995
      ? setSante(snt => Math.min(snt + 5, 999))
      : setSante(snt => Math.min(snt + 4, 999));
  };
  return {
    attaque,
    upAttaque,
    downAttaque,
    setAttaque,
    pv,
    upPv,
    downPv,
    setPv,
    sante,
    upSante,
    downSante,
    setSante,

  }
};



export default useAtqDef;