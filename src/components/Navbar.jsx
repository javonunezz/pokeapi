export const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="titlePage"
        src="src/assets/titlePokemon.png"
        alt="Pokemon Image Title"
      />
      <div>
        <button className="infoNavbar">Home</button>
        <button className="infoNavbar">About me</button>
      </div>
    </div>
  );
};
