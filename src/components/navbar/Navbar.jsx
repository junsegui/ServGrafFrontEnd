import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faClipboard,
  faTruck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <StyledContainer>
      <Logo>Servgraf</Logo>
      <ButtonsContainer>
        <ButtonDivContainer>
          <Icons to='pedido'>
            <Icon icon={faClipboard} />
            Pedidos
          </Icons>
        </ButtonDivContainer>
        <ButtonDivContainer>
          <Icons>
            <Icon icon={faBoxes} />
            Proveedor
          </Icons>
        </ButtonDivContainer>
        <ButtonDivContainer>
          <Icons>
            <Icon icon={faTruck} />
            Produccion
          </Icons>
        </ButtonDivContainer>
        <ButtonDivContainer>
          <Icons>
            <Icon icon={faUser} />
            Usuario
          </Icons>
        </ButtonDivContainer>
      </ButtonsContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #fbfbfe;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e6e6e7;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;
const ButtonDivContainer = styled.div`
  width: 95%;
  height: 15%;
  display: flex;
  align-items: center;
  :hover {
    color: #36a28b;
    background-color: #eeeef4;
    fill: #36a28b;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const Icons = styled(NavLink)`
  text-decoration: "none";
  color: #a4a4ab;
  text-decoration: none;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 5%;
`;
const Icon = styled(FontAwesomeIcon)`
  color: #e6e6e7;
  font-size: 1.5rem;
  width: 10%;
  height: 80%;
  padding-right: 5%;
`;
const Logo = styled.h1`
  font-size: 1.8rem;
  color: #36a28b;
  font-weight: 800;
`;
