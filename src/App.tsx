import Card from "./components/Card";
import Image1 from "./assets/images/image-retro-pcs.jpg";
import Image2 from "./assets/images/image-gaming-growth.jpg";
import Image3 from "./assets/images/image-top-laptops.jpg";
import "./styles.css";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <CardContainer>
        <Card
          text="What happens when old PCs are given modern upgrades?"
          titleNumber="01"
          title="Reviving Retro PCs"
          img={Image1}
        />
        <Card
          text="Our best picks for various needs and budgets."
          titleNumber="02"
          title="Top 10 Laptops of 2024"
          img={Image2}
        />
        <Card
          text="How the pandemic has sparked fresh opportunities."
          titleNumber="03"
          title="The Growth of Gaming"
          img={Image3}
        />
      </CardContainer>
    </>
  );
}

export default App;
