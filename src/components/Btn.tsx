import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.softRed};
  border: none;
  padding: 10px 40px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

type PropsBtn = {
  text: string;
  onClick: () => void;
};

const Btn = ({ text, onClick }: PropsBtn) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Btn;
