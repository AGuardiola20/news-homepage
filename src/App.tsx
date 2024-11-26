import Card from "./components/Card";
import Image1 from "./assets/images/image-retro-pcs.jpg";
import "./styles.css";

function App() {
  return (
    <>
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
