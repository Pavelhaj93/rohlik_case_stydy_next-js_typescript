export interface Product {
    name: string;
    id: number;
    image: string;
    price: {
      currency: string;
      full: number;
    };
  }