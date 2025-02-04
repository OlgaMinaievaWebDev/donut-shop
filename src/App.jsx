import Header from "./components/Header";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <div className="flex flex-col items-center space-y-5 px-[10%]">
        <Header />
        <Shop />
      </div>
    </>
  );
}

export default App;
