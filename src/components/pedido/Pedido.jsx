import { styled } from "styled-components";
import { Newpurchasemodal } from "../modal/Newpurchasemodal";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Pedido = () => {
  const { isOpenPurchaseModal } = useSelector((state) => state.modals);

  return (
    <Container>
      {isOpenPurchaseModal ? <Newpurchasemodal /> : false}
      <TopPart>
        <Welcome>Bienvenido, Usuario! 👋</Welcome>
        <ButtonsCont>
          <Button to='/pedido/nueva-orden'>+ Nueva Compra</Button>
        </ButtonsCont>
      </TopPart>
    </Container>
  );
};

export default Pedido;

const Container = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TopPart = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled(NavLink)`
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  margin-right: 0%;
  background-color: #36a28b;
  border: none;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0%;
  margin-right: 0%;
`;
const Welcome = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 5%;
  color: #4d4d4d;
  width: 50%;
`;
const ButtonsCont = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-right: 2%;
`;
