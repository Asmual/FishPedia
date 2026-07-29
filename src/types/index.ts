export type FishCategory =
  | 'guppy'
  | 'molly'
  | 'platy'
  | 'fighter'
  | 'tetra'
  | 'monster-fish'
  | 'aquatic-plants'
  | 'accessories';

export type FishStatus = 'available' | 'sold' | 'reserved';
export type TemperamentType = 'peaceful' | 'semi-aggressive' | 'aggressive';
export type WaterType = 'freshwater' | 'brackish' | 'saltwater';

export type UserRole = 'buyer' | 'admin';
export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  role: UserRole;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFishProduct {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  category: FishCategory;
  images: string[];
  createdBy?: string;
  attributes?: {
    size?: string;
    age?: string;
    temperament?: TemperamentType;
    waterType?: WaterType;
    origin?: string;
  };
  status: FishStatus;
  featured?: boolean;
  views?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IFishFilterQuery {
  search?: string;
  category?: FishCategory;
  minPrice?: number;
  maxPrice?: number;
  status?: FishStatus;
  sortBy?: 'price-asc' | 'price-desc' | 'latest' | 'popular';
  page?: number;
  limit?: number;
}

export interface IOrder {
  _id?: string;
  buyerId: string;
  productId: string;
  productDetails: {
    title: string;
    price: number;
    category: FishCategory;
    image: string;
  };
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed';
  shippingAddress: string;
  contactNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}