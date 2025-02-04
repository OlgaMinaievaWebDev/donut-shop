import donut from "../assets/main.avif";

function Shop() {
  return (
    <main className="flex flex-col items-center space-y-5 px-4 md:px-10">
      <img
        src={donut}
        alt="picture of donut"
        className="w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover"
      />
      <button className="btn">Cart</button>
    </main>
  );
}

export default Shop;
