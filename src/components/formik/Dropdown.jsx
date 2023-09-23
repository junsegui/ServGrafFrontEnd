import { ErrorMessage, Field } from "formik";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export const Dropdown = ({ children, name, htmlFor, id }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors } }) => (
        <InputField>
          <Label htmlFor={htmlFor}>{children}</Label>
          <InputStyled
            id={id}
            {...field}
            isError={errors[field.name]}
            autoComplete='on'></InputStyled>
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputField>
      )}
    </Field>
  );
};
const Label = styled.label`
  font-size: 1.3rem;
  margin-right: 1%;
  color: #4d4b4a;
  text-align: left;
  font-weight: 600;
  @media (max-width: 508px) {
    font-size: 1rem;
  }
`;
const InputStyled = styled.select`
  font-size: 1.2rem;
  border-radius: 4px;
  padding: 1%;
  width: 80%;
  color: #4d4d4d;
  cursor: pointer;
  border: ${({ isError }) => (isError ? "1px solid #fb103d" : "none")};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 508px) {
    width: 90%;
  }
  border: 1px solid #36a28b;
`;

const InputField = styled.div`
  width: 30%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
  @media (max-width: 508px) {
    font-size: 10px;
    text-align: center;
  }
`;
