import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: #f7f9fc;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333333;
`;

export const ErrorMessage = styled.p`
  color: #e63946;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #333333;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 0.5rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-top: 0.5rem;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.5);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #333333;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #ED1E7A;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #A02380;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
