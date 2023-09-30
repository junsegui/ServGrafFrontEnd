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

        <Table>
          <TableRow>
            <TableH>Producto</TableH>
            <TableH>Cliente</TableH>
            <TableH>Usuario</TableH>
            <TableH>Categoria</TableH>
            <TableH>Cantidad</TableH>
            <TableH>Precio</TableH>
            <TableH>Fecha Entrega</TableH>
            <TableH>Observacion</TableH>
            <TableH>Link al item</TableH>
          </TableRow>
          <TableRow>
            <TableD>Etiqueta</TableD>
            <TableD>Marcelo</TableD>
            <TableD>Juan</TableD>
            <TableD>Etiquetas</TableD>
            <TableD>2</TableD>
            <TableD>$50</TableD>
            <TableD>12/05/2023</TableD>
            <TableD>
              Las etiquetas tienen que ser de una largo determinado exacto por
              que si no se veran mal en el envase
            </TableD>
            <TableD>Link</TableD>
          </TableRow>
        </Table>
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

const Table = styled.table`
  width: 97%;
  border-collapse: collapse;
  overflow-x: scroll;
`;
const TableRow = styled.tr``;
const TableH = styled.th`
  background-color: #36a28b;
  font-size: 1.3rem;
  font-weight: bold;
  border: 1px solid black;
`;
const TableD = styled.td`
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  font-size: 1.2rem;
  text-align: center;
`;
