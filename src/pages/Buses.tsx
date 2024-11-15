import { Bus } from "@/interfaces";
import { getAllBuses } from "@/services/bus";
import { useEffect, useState, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Container,
  Table,
  TableData,
  TableHeader,
  TableRow,
  StatusBadge,
  PaginationContainer,
  PaginationButton,
  PaginationText,
  PageSizeContainer,
  PageSizeSelect,
  DropdownMenu,
  DropdownItem,
  CreateButton,
} from "./Buses.styled";
import { formatDate } from "@/utils/utils";
import { SlOptions } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { BiSolidDetail } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

export const Buses = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentPage = Number(searchParams.get("page")) || 0;
  const pageSize = Number(searchParams.get("size")) || 5;

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await getAllBuses(currentPage, pageSize);
        setBuses(response.object.content);
        setTotalPages(response.object.totalPages);
      } catch (error) {
        console.error("Error fetching buses:", error);
      }
    };

    fetchBuses();
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setSearchParams({ page: page.toString(), size: pageSize.toString() });
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = Number(event.target.value);
    setSearchParams({ page: "0", size: newSize.toString() });
  };

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleOptionClick = (busId: number, action: string) => {
    console.log(`Acción: ${action} para el bus con ID: ${busId}`);
    setOpenMenuIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Listado de buses</h1>

      <CreateButton to="/create-bus">Crear nuevo bus</CreateButton>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>Número de bus</TableHeader>
            <TableHeader>Marca</TableHeader>
            <TableHeader>Placa</TableHeader>
            <TableHeader>Estado</TableHeader>
            <TableHeader>Fecha de Creación</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {buses.map((bus, index) => (
            <TableRow key={bus.id}>
              <TableData>{bus.number}</TableData>
              <TableData>{bus.brand.name}</TableData>
              <TableData>{bus.plate}</TableData>
              <TableData>
                <StatusBadge isActive={bus.isActive}>
                  {bus.isActive ? "Activo" : "Inactivo"}
                </StatusBadge>
              </TableData>
              <TableData>{formatDate(bus.creationDate)}</TableData>
              <TableData style={{ position: "relative" }}>
                <SlOptions
                  onClick={() => toggleMenu(index)}
                  style={{ cursor: "pointer" }}
                />
                {openMenuIndex === index && (
                  <DropdownMenu ref={dropdownRef}>
                    <DropdownItem
                      as={Link}
                      to={`/bus/${bus.id}`}
                      onClick={() => handleOptionClick(bus.id, "Ver detalles")}
                    >
                      <BiSolidDetail /> Ver detalles
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleOptionClick(bus.id, "Editar")}
                    >
                      <CiEdit /> Editar
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => handleOptionClick(bus.id, "Eliminar")}
                    >
                      <MdOutlineDelete /> Eliminar
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Anterior
        </PaginationButton>
        <PaginationText>
          Página {currentPage + 1} de {totalPages}
        </PaginationText>
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage + 1 >= totalPages}
        >
          Siguiente
        </PaginationButton>
      </PaginationContainer>

      <PageSizeContainer>
        <label htmlFor="pageSize" style={{ fontSize: "1.4rem" }}>
          Buses por página:
        </label>
        <PageSizeSelect
          id="pageSize"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </PageSizeSelect>
      </PageSizeContainer>
    </Container>
  );
};
