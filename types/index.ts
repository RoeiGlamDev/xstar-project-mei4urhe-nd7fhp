import { Product } from './productTypes';

/
 * Interface representing a brand for the GlamCS cosmetics application.
 */
export interface Brand {
    name: string; // The name of the brand, which is "GlamCS"
    colorPrimary: string; // Primary color for branding, which is orange
    colorSecondary: string; // Secondary color for branding, which is white
}

/
 * Interface representing a cosmetic product in the GlamCS catalog.
 */
export interface GlamCSProduct extends Product {
    category: string; // The category of the cosmetic product (e.g., lipstick, foundation)
    price: number; // The price of the product
    isFeatured: boolean; // Indicates if the product is featured
    description: string; // A detailed description of the product
    ingredients: string[]; // List of ingredients used in the product
}

/
 * Interface representing a customer for the GlamCS cosmetics application.
 */
export interface Customer {
    id: string; // Unique identifier for the customer
    name: string; // The name of the customer
    email: string; // The email address of the customer
    purchaseHistory: GlamCSProduct[]; // List of products purchased by the customer
}

/
 * Interface representing the shopping cart in the GlamCS cosmetics application.
 */
export interface ShoppingCart {
    items: GlamCSProduct[]; // List of products in the shopping cart
    totalPrice: number; // Total price of items in the shopping cart
    addItem: (product: GlamCSProduct) => void; // Method to add a product to the cart
    removeItem: (productId: string) => void; // Method to remove a product from the cart
}

/
 * Interface representing an order in the GlamCS cosmetics application.
 */
export interface Order {
    orderId: string; // Unique identifier for the order
    customerId: string; // The id of the customer who made the order
    products: GlamCSProduct[]; // List of products included in the order
    totalAmount: number; // Total amount for the order
    orderDate: Date; // Date when the order was placed
}

/
 * Interface representing the GlamCS cosmetics application state.
 */
export interface GlamCSAppState {
    products: GlamCSProduct[]; // Array of products available in the store
    cart: ShoppingCart; // The shopping cart for current user
    currentUser: Customer | null; // Currently logged-in user
    orders: Order[]; // List of orders made by customers
}

/
 * The main brand object for GlamCS cosmetics.
 */
export const glamCSBrand: Brand = {
    name: "GlamCS",
    colorPrimary: "#FFA500", // Hex code for orange
    colorSecondary: "#FFFFFF" // Hex code for white
};