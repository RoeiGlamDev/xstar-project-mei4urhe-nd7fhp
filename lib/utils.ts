import { format, parseISO } from 'date-fns';

/
 * GlamCS Utility Functions
 * 
 * This file contains utility functions specific to the GlamCS cosmetics business,
 * including class name generation and formatting functions designed to enhance user experience.
 * 
 * @module utils
 */

/
 * Generates a className string by conditionally applying classes based on the provided flags.
 * 
 * @param {string[]} classes - Array of class names to apply.
 * @param {boolean[]} conditions - Array of boolean values that determine whether to apply the respective class.
 * @returns {string} - A string of class names joined by a space.
 * 
 * @example
 * const className = cn(['base', 'highlight', 'disabled'], [true, false, true]); // "base disabled"
 */
export const cn = (classes: string[], conditions: boolean[]): string => {
    return classes.filter((_, index) => conditions[index]).join(' ');
};

/
 * Formats a date to a more readable string for display on GlamCS product pages.
 * 
 * @param {string} dateString - The date string in ISO format.
 * @returns {string} - Formatted date string for the cosmetics industry context.
 * 
 * @example
 * const formattedDate = formatDate('2023-10-01T12:00:00Z'); // "October 1, 2023"
 */
export const formatDate = (dateString: string): string => {
    const date = parseISO(dateString);
    return format(date, 'MMMM d, yyyy');
};

/
 * Formats a price string to a currency format for GlamCS products.
 * 
 * @param {number} price - The price of the product.
 * @returns {string} - Formatted price string with a dollar sign and two decimal places.
 * 
 * @example
 * const formattedPrice = formatPrice(19.99); // "$19.99"
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * Represents a product in the GlamCS cosmetics line.
 * 
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {number} price - Price of the product.
 * @property {string} launchDate - Launch date of the product in ISO format.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    launchDate: string;
}

/
 * Filters products based on a minimum price for GlamCS cosmetics.
 * 
 * @param {Product[]} products - Array of products to filter.
 * @param {number} minPrice - Minimum price to filter products.
 * @returns {Product[]} - Array of products that meet the minimum price requirement.
 * 
 * @example
 * const filteredProducts = filterProductsByPrice(products, 20); // Filters products priced $20 and above.
 */
export const filterProductsByPrice = (products: Product[], minPrice: number): Product[] => {
    return products.filter(product => product.price >= minPrice);
};