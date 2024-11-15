import { useEffect, useState } from "react";
import { createBus } from "@/services/bus";
import { getAllBrands } from "@/services/brand";
import { Brand, Bus } from "@/interfaces";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CheckboxContainer,
  Container,
  ErrorMessage,
  Form,
  Input,
  Label,
  Select,
  Title,
} from "./CreateBus.styled";

export const CreateBus = () => {
  const [busData, setBusData] = useState<Omit<Bus, "id">>({
    number: "",
    plate: "",
    creationDate: new Date().toISOString(),
    features: "",
    brand: { id: 1, name: "" },
    isActive: true,
  });
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandsList = await getAllBrands();
        setBrands(brandsList);
      } catch (error) {
        console.error("Failed to fetch brands", error);
        setError(
          "No se han podido cargar las marcas. Vuelva a intentarlo más tarde."
        );
      }
    };

    fetchBrands();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setBusData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = brands.find(
      (brand) => brand.id === Number(e.target.value)
    );
    if (selectedBrand) {
      setBusData((prev) => ({
        ...prev,
        brand: selectedBrand,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createBus(busData);
      navigate("/");
    } catch (error) {
      setError(
        "No se ha podido crear el autobús. Por favor, inténtelo de nuevo."
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Crear Nuevo Bus</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleSubmit}>
        <Label>
          Número de bus:
          <Input
            type="text"
            name="number"
            value={busData.number}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Placa:
          <Input
            type="text"
            name="plate"
            value={busData.plate}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Caracteristicas:
          <Input
            type="text"
            name="features"
            value={busData.features}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Marca:
          <Select
            name="brand"
            value={busData.brand.id}
            onChange={handleBrandChange}
            required
          >
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </Select>
        </Label>
        <CheckboxContainer>
          <input
            type="checkbox"
            name="isActive"
            checked={busData.isActive}
            onChange={handleChange}
          />
          Está activo
        </CheckboxContainer>
        <Button type="submit" disabled={loading}>
          {loading ? "Creando..." : "Crear Bus"}
        </Button>
      </Form>
    </Container>
  );
};
