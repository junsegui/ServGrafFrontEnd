import styled from "styled-components";
import { Dropdown } from "../formik/Dropdown";
import { Input } from "../formik/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";

const Product = ({ children }) => {
  return (
    <ProductContainer>
      <Dropdown id={"producto"} htmlFor={"producto"} name={"producto"}>
        Producto
      </Dropdown>
      <Input
        id={"cantidad"}
        htmlFor={"cantidad"}
        name={"cantidad"}
        type={"number"}>
        Cantidad
      </Input>
      <Input id={"unidad"} htmlFor={"unidad"} name={"unidad"} type={"number"}>
        Unidad
      </Input>
      <Input id={"cortes"} htmlFor={"cortes"} name={"cortes"} type={"number"}>
        Cortes
      </Input>
      <Input
        id={"medidaMM"}
        htmlFor={"medidaMM"}
        name={"medidaMM"}
        type={"number"}>
        Medida/MM
      </Input>
      <Input id={"p/u"} htmlFor={"p/i"} name={"p/u"} type={"number"}>
        P/U U$S
      </Input>
      <Input id={"ml"} htmlFor={"ml"} name={"ml"} type={"number"}>
        ML
      </Input>
      <TotalContainer>
        <Label>Total</Label>
        $0
      </TotalContainer>
      <IconContainer>
        <Add icon={faPlus} />
      </IconContainer>
      <RemoveContainer>
        <Remove icon={faRemove} />
      </RemoveContainer>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  width: 95%;
  display: flex;
  margin-top: 1.5%;
  margin-left: 2.4%;
`;
const TotalContainer = styled.div`
  width: 20%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Label = styled.div`
  font-size: 1.3rem;
  margin-right: 1%;
  color: #4d4b4a;
  text-align: left;
  font-weight: 600;
  @media (max-width: 508px) {
    font-size: 1rem;
  }
`;
const Add = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #373535;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36a28b;
  width: 12%;
  height: 55%;
  margin-top: 1%;
  border-radius: 4px;
  cursor: pointer;
`;
const RemoveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7%;
  height: 40%;
  margin-top: 1.3%;
  border-radius: 40px;
  cursor: pointer;
  margin-left: 0.4%;
  border: 2px solid red;
`;
const Remove = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: red;
`;
