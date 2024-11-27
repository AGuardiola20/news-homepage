import styled from "styled-components";
import Banner from "../assets/images/image-web-3-desktop.jpg";
import Btn from "./Btn";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Title = styled.h2`
  flex: 1;
  font-size: 3rem;
  font-weight: 800;
`;

const ReadMoreContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewsContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

type NewsItemProps = {
  title: string;
  text: string;
};

const NewsItem = ({ title, text }: NewsItemProps) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};

const MainContent = () => {
  function handleReadMore() {
    console.log("Funciona");
  }

  return (
    <Container>
      <MainContainer>
        <MainImage src={Banner} alt="Banner" />
        <InfoContainer>
          <Title>The Bright Future of Web 3.0?</Title>
          <ReadMoreContainer>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Btn text="Read More" onClick={handleReadMore} />
          </ReadMoreContainer>
        </InfoContainer>
      </MainContainer>
      <NewsContainer>
        <h2>New</h2>
        <NewsItem
          title="Hydrogen VS Electric Cars"
          text="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewsItem
          title="The Downsides of AI Artistry"
          text="What are the possible adverse effects of on-demand AI image generation?"
        />
        <NewsItem
          title="Is VC Funding Drying Up?"
          text="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </NewsContainer>
    </Container>
  );
};

export default MainContent;
