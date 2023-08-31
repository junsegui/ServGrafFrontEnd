import { styled } from "styled-components";
import { Newpurchasemodal } from "../modal/Newpurchasemodal";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/modalsReducer/actionModalReducer";

const Pedido = () => {
  const { isOpenPurchaseModal } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  return (
    <Container>
      {isOpenPurchaseModal ? <Newpurchasemodal /> : false}
      <TopPart>
        <Welcome>Bienvenido, Usuario! 👋</Welcome>
        <ButtonsCont>
          <Button onClick={(e) => dispatch(openModal())}>+ Nueva Compra</Button>
          <Button>+ Nueva Cotizacion</Button>
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
const Button = styled.button`
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  margin-right: 0%;
  background-color: #36a28b;
  border: none;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;
const Welcome = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 5%;
  width: 50%;
`;
const ButtonsCont = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
