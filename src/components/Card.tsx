import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
  max-width: 400px;
  height: 10rem;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const CardImage = styled.img`
  height: 10rem;
`;

const TitleNumber = styled.h2`
  color: ${({ theme }) => theme.colors.softRed};
  font-size: 2rem;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1rem;
`;

const Text = styled.h3`
  color: ${({ theme }) => theme.colors.grayishBlue};
  font-size: 0.8rem;
  font-weight: 300;
`;

type CardProps = {
  titleNumber: string;
  title: string;
  text: string;
  img: string;
};

const Card = ({ titleNumber, title, text, img }: CardProps) => {
  return (
    <CardContainer>
      <CardImage src={img} alt={`${title} image`} />
      <CardInfo>
        <TitleNumber>{titleNumber}</TitleNumber>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
