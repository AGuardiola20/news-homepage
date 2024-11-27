import Card from "./components/Card";
import Image1 from "./assets/images/image-retro-pcs.jpg";
import "./styles.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Card
        text="What happens when old PCs are given modern upgrades?"
        titleNumber="01"
        title="Reviving Retro PCs"
        img={Image1}
      />
    </>
  );
}

export default App;
