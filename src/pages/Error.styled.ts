import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorPageContainer = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 2rem 1.5rem;
  background-color: #f8f9fa;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  margin-bottom: 2rem;
  width: 80%;
  max-width: 500px;
`;

export const ErrorCode = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #d21f7c;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  color: #333333;
  line-height: 1.25;
`;

export const Message = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #666666;
  line-height: 1.5;
`;

export const BackButton = styled(Link)`
  margin-top: 2.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #d21f7c;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #cf3283;
  }

  &:focus-visible {
    outline: 2px solid #cf3283;
    outline-offset: 2px;
  }
`;