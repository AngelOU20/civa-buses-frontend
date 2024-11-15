export interface ApiResponse {
  message: string;
  object: {
    content: Bus[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    last: boolean;
  };
}

export interface Brand {
  id: number;
  name: string;
}

export interface Bus {
  id: number;
  number: string;
  plate: string;
  creationDate: string;
  features: string;
  brand: Brand;
  isActive: boolean;
}
