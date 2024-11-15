import styled from "styled-components";

export const SingleBusContainer = styled.div`
  max-width: 800px;
  margin: 8rem auto;
  padding: 3rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333333;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: #333;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.7rem;

  &:hover {
    color: #555;
    background-color: rgba(218, 218, 218, 0.5);
    border-radius: 50%;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #555555;
  margin: 1rem 0;

  & > svg {
    margin-right: 0.5rem;
    color: #666666;
  }

  & > span {
    font-weight: bold;
    color: #333333;
    margin-right: 0.5rem;
  }
`;

export const Badge = styled.span<{ isActive: boolean; }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#e6f4ea" : "#f8d7da")};
  color: ${(props) => (props.isActive ? "#28a745" : "#dc3545")};
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 0.5rem;
`;