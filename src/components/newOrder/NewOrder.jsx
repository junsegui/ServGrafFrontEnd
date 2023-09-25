import { Form, Formik } from "formik";
import { styled } from "styled-components";
import { newPurchaseValidationSchema } from "../formik/newPurchaseValidationSchema";
import { newPurchase } from "../formik/initialValues";
import { Input } from "../formik/Input";
import { Dropdown } from "../formik/Dropdown";
import Product from "../product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const NewOrder = () => {
  const ERROR_CODES = {
    EMAIL_IN_USE: "auth/emaill-already-in-use",
  };
  return (
    <Container>
      <Title>
        <Back to='/pedido'>
          <BackButton icon={faCircleChevronLeft} />
        </Back>
        Nuevo Pedido
      </Title>
      <FormContainer>
        <FormikContainer
          initialValues={newPurchase}
          validationSchema={newPurchaseValidationSchema}
          onSubmit={async (val, { resetForm }) => {}}>
          <FormikForm>
            <Header>
              <Input
                name={"fecha"}
                htmlFor={"fecha"}
                type={"date"}
                id={"fecha"}>
                Fecha
              </Input>
              <Dropdown
                name={"proveedor"}
                htmlFor={"proveedor"}
                id={"proveedor"}>
                Proveedor
              </Dropdown>
              <Dropdown id={"vendedor"} name={"vendedor"} htmlFor={"vendedor"}>
                Vendedor
              </Dropdown>
              <Input
                id={"lEntrega"}
                htmlFor={"lEntrega"}
                name={"lEntrega"}
                type={"text"}>
                Lugar de entrega
              </Input>
              <Input
                id={"fEntrega"}
                htmlFor={"fEntrega"}
                name={"fEntrega"}
                type={"date"}>
                Fecha de entrega
              </Input>
            </Header>
            <ProductContainer>
              <Product />

              <Product />
            </ProductContainer>
            <TotalContainer>
              <SubmitButton>Enviar</SubmitButton>
              <Total>Total: $50</Total>
            </TotalContainer>
          </FormikForm>
        </FormikContainer>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 1.6rem;
  margin-left: 1%;
  color: #4f4f4f;
  font-weight: 600;
`;
const FormikContainer = styled(Formik)`
  width: 100%;
  height: 100%;
  display: flex;
`;
const FormikForm = styled(Form)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  border-bottom: 1px solid #4d4d4d;
  margin-bottom: 0%;
  padding-bottom: 0%;
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow-y: scroll;
`;
const TotalContainer = styled.div`
  width: 95%;
  border-top: 1px solid #4d4d4d;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const Total = styled.p`
  font-size: 1.4rem;
  margin-left: 1%;
  font-size: #373535;
  font-weight: 800;
`;
const SubmitButton = styled.button`
  width: 8%;
  font-size: 1.4rem;
  padding: 0.2%;
  background-color: #36a28b;
  border: none;
  border-radius: 4px;
  font-size: #373535;
  font-weight: 500;
  cursor: pointer;
`;
const BackButton = styled(FontAwesomeIcon)`
  margin-right: 1%;
  cursor: pointer;
`;
const Back = styled(NavLink)`
  text-decoration: none;
  color: #4f4f4f;
`;
