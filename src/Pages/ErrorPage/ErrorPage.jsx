import { NavLink } from "react-router-dom"; 

const ErrorPage = () => {
  return (
 <div className="h-[100svh] flex flex-col justify-center items-center p-6 bg-gradient-to-br from-sky-100 to-blue-100 text-center">
  <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md">
    <h1 className="font-bold text-blue-600 text-2xl mb-4">
      🤡 VOUS AVEZ LE DON POUR VOUS ÉGARER !
    </h1>
    
    <p className="text-gray-700 mb-3 leading-relaxed">
      Félicitations… vous venez d’atteindre un endroit que même le développeur 
      n’arrive pas à retrouver sans boussole 🧭
    </p>
    
    <p className="text-gray-600 mb-6 italic">
      Rassurez-vous, vous n’êtes pas seul… même les algorithmes s’y perdent parfois 😅
    </p>

    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm ">
      <p className="text-sm text-blue-500">
        <span className="font-mono">// Note du développeur :</span>
        <br/>
        "Je dois avouer que je n’avais pas prévu un tel niveau d’exploration. 
        Merci de mettre à l’épreuve les limites de mon imagination 👨‍💻✨"
      </p>
      <p className="text-blue-600 mt-3">
      Bref si vous estimez avoir brillamment accompli votre mission d’infiltration, 
      il est temps de retourner :
              <br/>
      <NavLink to = {"/"} className="underline text-blue-700 font-extrabold hover:text-blue-900">
      À LA PAGE D’ACCUEIL 🚀
      </NavLink>
      </p>
    </div>
  </div>
</div>
  );
};

export default ErrorPage;