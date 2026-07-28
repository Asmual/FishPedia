import { NextRequest, NextResponse } from 'next/server';
import { IApiResponse, IFishProduct } from '@/types';

// Mock Data for demonstration
const mockFishes: IFishProduct[] = [
  {
    id: '1',
    title: 'Red Dragon Guppy',
    slug: 'red-dragon-guppy',
    description: 'High quality healthy breeding pair guppy.',
    price: 350,
    quantity: 10,
    category: 'guppy',
    images: ['https://images.unsplash.com/photo-1522069169874-c58ec4b76be5'],
    sellerId: 'seller_123',
    status: 'available',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// GET Method with Strict Return Types and Generics
export async function GET(
  request: NextRequest
): Promise<NextResponse<IApiResponse<IFishProduct[]>>> {
  try {
    // 1. URL Query Parameters Reading
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    // 2. Logic (e.g. database query filtering)
    let fishes = mockFishes;
    if (category) {
      fishes = fishes.filter((f) => f.category === category);
    }

    // 3. Type-safe JSON Response
    return NextResponse.json(
      {
        success: true,
        message: 'Fishes retrieved successfully',
        data: fishes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch fishes',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}