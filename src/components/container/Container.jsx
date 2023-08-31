import { styled } from "styled-components";
// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  width: "100vw";
  height: "100vh";
  background-color: "red";
  display: flex;
  flex-direction: row;
  margin: 0;
`;
