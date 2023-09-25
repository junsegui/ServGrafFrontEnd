import { styled } from "styled-components";
import { Newpurchasemodal } from "../modal/Newpurchasemodal";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Pedido = () => {
  const { isOpenPurchaseModal } = useSelector((state) => state.modals);
  const { user } = useSelector((state) => state.user);
  return (
    <Container>
      {isOpenPurchaseModal ? <Newpurchasemodal /> : false}
      <TopPart>
        <Welcome>Bienvenido, {user.name} ! 👋</Welcome>
        <ButtonsCont>
          <Button to='/pedido/nueva-orden'>+ Nueva Compra</Button>
        </ButtonsCont>
      </TopPart>
      <BottomPart>
        <TableTitle>Pedidos </TableTitle>
        <TableContainer>
          <ColumnHeader>
            <ColumnTitle>Nombre</ColumnTitle>
            <ColumnTitle>Lugar de entrega</ColumnTitle>
            <ColumnTitle>Fecha de retiro</ColumnTitle>
            <ColumnTitle>Cliente</ColumnTitle>
            <ColumnTitle>Cantidad total</ColumnTitle>
            <ColumnTitle>Total</ColumnTitle>
            <LinkTitle>Link</LinkTitle>
          </ColumnHeader>
          <RowsContainer></RowsContainer>
        </TableContainer>
      </BottomPart>
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
  border-bottom: 2px solid #e6e6e7;
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
  font-size: 1.8rem;
  font-weight: 800;
  margin-left: 2%;
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
const BottomPart = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TableTitle = styled.h2`
  font-size: 1.5rem;
  color: #4f4f4f;
  margin-left: 2%;
  width: 98%;
`;
const TableContainer = styled.div`
  width: 98%;
  height: 80vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
const ColumnHeader = styled.div`
  height: 10%;
  width: 100%;
  background-color: #36a28b;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-right: 2.5px solid #36a28b;
  border-left: 2.5px solid #36a28b;
  display: flex;
`;
const ColumnTitle = styled.p`
  width: 15%;
  height: 100;
  color: #4d4d4d;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  border-right: 2px solid #4d4d4d;
  cursor: default;
`;
const LinkTitle = styled.p`
  width: 10%;
  height: 100;
  color: #4d4d4d;
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
`;
const RowsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 2.5px solid #e6e6e7;
  border-bottom: 2.5px solid #e6e6e7;
  border-right: 2.5px solid #e6e6e7;
`;
