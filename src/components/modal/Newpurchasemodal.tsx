import React from "react";
import { styled } from "styled-components";

export const Newpurchasemodal = () => {
  return <ModalFade></ModalFade>;
};

const ModalFade = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
`;
