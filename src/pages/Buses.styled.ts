import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 1.4rem;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color: #6b7280;
  font-weight: 700;
  font-size: 1.4rem;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f9fafb;
  }
`;

export const TableData = styled.td`
  padding: 1rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const StatusBadge = styled.span<{ isActive: boolean; }>`
  display: inline-block;
  padding: 0.2rem 0.8rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ isActive }) => (isActive ? "#047857" : "#b91c1c")};
  background-color: ${({ isActive }) => (isActive ? "#d1fae5" : "#fee2e2")};
  text-align: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding: 1rem;
`;

export const PaginationButton = styled.button`
  padding: 1rem 1.2em;
  margin: 1em;
  font-size: 1.4rem;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  background-color: ${({ disabled }) => (disabled ? "#d3d3d3" : "#ED1E7A")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#d3d3d3" : "#A02380")};
  }
`;

export const PaginationText = styled.span`
  font-size: 1.2rem;
  color: #333333;
`;

export const PageSizeContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PageSizeSelect = styled.select`
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  color: #333333;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007bff;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 150px;
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;