function Button({ children }) {
  return (
    <button className="py-2 px-6 bg-yellow-400 rounded-md cursor-pointer text-white text-xl hover:bg-yellow-500">
      {children}
    </button>
  );
}

export default Button;
