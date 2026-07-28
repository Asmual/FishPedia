// 1. Defined Fish & Aquatic Product Categories
export type FishCategory =
  | 'guppy'
  | 'molly'
  | 'platy'
  | 'fighter'
  | 'tetra'
  | 'monster-fish'
  | 'aquatic-plants'
  | 'accessories';

// 2. Product Status & Condition
export type FishStatus = 'available' | 'sold' | 'reserved';
export type TemperamentType = 'peaceful' | 'semi-aggressive' | 'aggressive';
export type WaterType = 'freshwater' | 'brackish' | 'saltwater';

// 3. User Roles
export type UserRole = 'user' | 'seller' | 'admin';

// 4. User Profile Interface
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

// 5. Fish & Aquatic Item Document Interface
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
  sellerId: string;
  sellerInfo?: {
    name: string;
    email: string;
    phone?: string;
  };
  attributes?: {
    size?: string; // e.g. "1.5 inches"
    age?: string; // e.g. "3 months"
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

// 6. Search & Filter Parameters Interface
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

// 7. Order / Buy-Sell Transaction Interface
export interface IOrder {
  _id?: string;
  buyerId: string;
  sellerId: string;
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

// 8. General API Response Structure
export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}