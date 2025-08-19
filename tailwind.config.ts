import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // GlamCS Orange
        },
        white: {
          DEFAULT: '#FFFFFF', // GlamCS White
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
      opacity: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
});

// Business-specific types and interfaces

/
 * Represents a product in the GlamCS cosmetics line.
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'makeup' | 'skincare' | 'fragrance';
}

/
 * Represents a user in the GlamCS cosmetics website.
 */
export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // In a real application, this should be hashed
}

/
 * GlamCS Cosmetics business logic for handling products.
 */
export class GlamCSBusinessLogic {
  private products: Product[] = [
    {
      id: 1,
      name: 'Luxury Foundation',
      description: 'A smooth and flawless foundation for a radiant look.',
      price: 45.99,
      imageUrl: '/images/luxury-foundation.jpg',
      category: 'makeup',
    },
    {
      id: 2,
      name: 'Hydrating Face Cream',
      description: 'Moisturize your skin with our rich and hydrating cream.',
      price: 35.99,
      imageUrl: '/images/hydrating-face-cream.jpg',
      category: 'skincare',
    },
    {
      id: 3,
      name: 'Elegant Perfume',
      description: 'A sophisticated fragrance for the modern woman.',
      price: 60.00,
      imageUrl: '/images/elegant-perfume.jpg',
      category: 'fragrance',
    },
  ];

  /
   * Gets all products available in the GlamCS store.
   * @returns Array of products.
   */
  public getProducts(): Product[] {
    return this.products;
  }
}

// Exporting the business logic for external usage
export const glamCSBusinessLogic = new GlamCSBusinessLogic();