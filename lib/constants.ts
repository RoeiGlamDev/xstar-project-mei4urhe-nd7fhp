import { ThemeOptions } from '@mui/material/styles';

/
 * Constants and configuration for the GlamCS application.
 * This file contains brand-specific constants, color schemes, and types
 * relevant to the cosmetics industry, ensuring a cohesive and modern design.
 */

export const BRAND_NAME = "GlamCS";
export const PRIMARY_COLOR = "#FFA500"; // Orange
export const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Theme configuration for the GlamCS brand.
 * This theme is designed to reflect the luxurious and modern aesthetics of the cosmetics industry.
 */
export const glamcsTheme: ThemeOptions = {
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            color: PRIMARY_COLOR,
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            color: PRIMARY_COLOR,
        },
        body1: {
            fontWeight: 400,
            fontSize: '1rem',
            color: SECONDARY_COLOR,
        },
    },
};

/
 * Interface representing a cosmetic product in the GlamCS line.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Example of a GlamCS cosmetic product.
 */
export const exampleProduct: CosmeticProduct = {
    id: "1",
    name: "Luxury Lipstick",
    description: "A high-end lipstick that provides a luxurious finish and long-lasting wear.",
    price: 29.99,
    category: "Lips",
    imageUrl: "https://example.com/luxury-lipstick.png",
};

/
 * A collection of GlamCS cosmetic products.
 */
export const glamcsProductCatalog: CosmeticProduct[] = [
    exampleProduct,
    // Additional products can be added here
];