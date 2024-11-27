import styled from "styled-components";
import Banner from "../assets/images/image-web-3-desktop.jpg";
import Btn from "./Btn";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  margin: 2rem 0;
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

const Text = styled.p`
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NewsContainerTitle = styled.h2`
  color: ${({ theme }) => theme.colors.softOrange};
  font-size: 2rem;
`;

const NewItemContainer = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:last-of-type {
    border: none;
  }
`;

const NewTitle = styled.h3`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.1rem;
`;

const NewText = styled.p`
  color: ${({ theme }) => theme.colors.grayishBlue};
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
    <NewItemContainer>
      <NewTitle>{title}</NewTitle>
      <NewText>{text}</NewText>
    </NewItemContainer>
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
            <Text>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </Text>
            <Btn text="Read More" onClick={handleReadMore} />
          </ReadMoreContainer>
        </InfoContainer>
      </MainContainer>
      <NewsContainer>
        <NewsContainerTitle>New</NewsContainerTitle>
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
