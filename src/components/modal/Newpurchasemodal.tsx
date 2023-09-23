import { faClose, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { openModal } from "../../redux/modalsReducer/actionModalReducer";
import { Form, Formik } from "formik";
import { newPurchase } from "../formik/initialValues";
import { newPurchaseValidationSchema } from "../formik/newPurchaseValidationSchema";
import { Input } from "../formik/Input";

export const Newpurchasemodal = () => {
  const dispatch = useDispatch();
  const ERROR_CODES = {
    EMAIL_IN_USE: "auth/emaill-already-in-use",
  };
  return (
    <ModalFade>
      <ModalContainer>
        <CrossContainer>
          <Cross icon={faClose} onClick={() => dispatch(openModal())} />
        </CrossContainer>
        <FormContainer>
          <FormikContainer
            initialValues={newPurchase}
            validationSchema={newPurchaseValidationSchema}
            onSubmit={async (val, { resetForm }) => {}}>
            <FormikForm>
              <HeaderForm>
                <Title>Nuevo pedido</Title>
                <Input
                  name={"fecha"}
                  htmlFor={"fecha"}
                  type={"date"}
                  id={"fecha"}>
                  Fecha
                </Input>
                <Input
                  name={"proveedor"}
                  htmlFor={"proveedor"}
                  type={"text"}
                  id={"proveedor"}>
                  Proveedor
                </Input>
                <Input
                  name={"lentrega"}
                  htmlFor={"lentrega"}
                  type={"text"}
                  id={"lentrega"}>
                  Lugar de entrega
                </Input>
                <Input
                  name={"vendedor"}
                  htmlFor={"vendedor"}
                  type={"text"}
                  id={"vendedor"}>
                  Vendedor
                </Input>
                <Input
                  name={"ncuenta"}
                  htmlFor={"ncuenta"}
                  type={"text"}
                  id={"ncuenta"}>
                  N de cuenta
                </Input>

                <Input
                  name={"fentrega"}
                  htmlFor={"fentrega"}
                  type={"date"}
                  id={"fentrega"}>
                  Fecha de entrega
                </Input>
              </HeaderForm>
              <BodyForm>
                <SubTitle></SubTitle>
              </BodyForm>
            </FormikForm>
          </FormikContainer>
        </FormContainer>
      </ModalContainer>
    </ModalFade>
  );
};

const ModalFade = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
`;
const ModalContainer = styled.div`
  width: 95%;
  height: 93%;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cross = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  margin-top: 1%;
  margin-right: 1%;
  cursor: pointer;
`;
const CrossContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: right;
`;
const FormContainer = styled.div`
  width: 98%;
  height: 92%;
  display: flex;
  flex-direction: column;
`;
const FormikContainer = styled(Formik)`
  width: 100%;
  height: 100%;
  display: flex;
`;
const FormikForm = styled(Form)`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HeaderForm = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
const BodyForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;
const Title = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #4d4b4a;
  font-weight: 800;
  margin-left: 2%;
  border-bottom: 1px solid #4d4b4a;
`;
const SubTitle = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #4d4b4a;
  font-weight: 800;
  margin-left: 2%;
  border-bottom: 1px solid #4d4b4a;
`;
