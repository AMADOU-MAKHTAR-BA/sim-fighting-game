

const Input = ({ label , className ,
  ...props }) => {
  return (
   <div className="w-full m-1.5 p-1.5">
  <label className="block text-sm font-medium text-gray-500 mb-0.5">
    {label}
  </label>
  <input
  {...props}
    className="w-full px-4 py-2 border border-gray-300 rounded-xl text-black
               focus:ring-1 focus:ring-blue-500 focus:border-blue-100 
               outline-none transition shadow-sm"
    
  />
</div>
  );
};


export default Input