import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBusById } from "@/services";
import { Bus } from "@/interfaces";
import { formatDate } from "@/utils/utils";
import { BiArrowBack, BiBus } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import {
  BackButton,
  Badge,
  DetailRow,
  Header,
  SingleBusContainer,
  Title,
} from "./SingelBus.styled";

export const SingleBus = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [bus, setBus] = useState<Bus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBus = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getBusById(Number(id));
        setBus(data);
      } catch (err) {
        setError("No se pudieron cargar los detalles del bus");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBus();
  }, [id]);

  if (loading) return <p>Cargando detalles del bus...</p>;
  if (error) return <p>{error}</p>;

  return (
    <SingleBusContainer>
      <BackButton onClick={() => navigate(-1)}>
        <BiArrowBack />
      </BackButton>
      <Header>
        <Title>
          <BiBus /> Detalles del Bus
        </Title>
      </Header>
      {bus && (
        <>
          <DetailRow>
            <IoMdPricetag /> <span>Número:</span> {bus.number}
          </DetailRow>
          <DetailRow>
            <FaCar /> <span>Marca:</span> {bus.brand.name}
          </DetailRow>
          <DetailRow>
            <FaCar /> <span>Placa:</span> {bus.plate}
          </DetailRow>
          <DetailRow>
            <IoMdPricetag /> <span>Características:</span> {bus.features}
          </DetailRow>
          <DetailRow>
            <BsCircleFill color={bus.isActive ? "#28a745" : "#dc3545"} />
            <span>Estado:</span>
            <Badge isActive={bus.isActive}>
              {bus.isActive ? "Activo" : "Inactivo"}
            </Badge>
          </DetailRow>
          <DetailRow>
            <FaCalendarAlt /> <span>Fecha de Creación:</span>{" "}
            {formatDate(bus.creationDate)}
          </DetailRow>
        </>
      )}
    </SingleBusContainer>
  );
};
