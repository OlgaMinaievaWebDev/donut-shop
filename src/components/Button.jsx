function Button({ children }) {
  return (
    <button className="py-2 px-6 bg-rose-300 rounded-md cursor-pointer text-xl hover:bg-rose-400">
      {children}
    </button>
  );
}

export default Button;
