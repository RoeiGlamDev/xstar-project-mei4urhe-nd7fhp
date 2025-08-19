import { useEffect, useRef } from 'react';

/
 * Custom hook for managing animations in the GlamCS cosmetics website.
 * This hook provides a way to trigger animations for different elements
 * to enhance user experience with elegant and luxurious effects.
 * 
 * @returns {Object} An object containing animation controls 
 */
export const useAnimation = () => {
    const elementRef = useRef<HTMLElement | null>(null);
    const animationClasses = {
        fadeIn: 'animate__animated animate__fadeIn',
        zoomIn: 'animate__animated animate__zoomIn',
        slideIn: 'animate__animated animate__slideInUp',
    };

    /
     * Triggers the specified animation class on the referenced element
     * 
     * @param {string} animationType - The type of animation to apply (fadeIn, zoomIn, slideIn)
     * @param {number} duration - Duration of the animation in milliseconds
     */
    const triggerAnimation = (animationType: keyof typeof animationClasses, duration: number) => {
        if (elementRef.current) {
            const className = animationClasses[animationType];
            elementRef.current.classList.add(className);

            // Remove animation class after duration to allow re-triggering
            setTimeout(() => {
                elementRef.current?.classList.remove(className);
            }, duration);
        }
    };

    return {
        elementRef,
        triggerAnimation,
    };
};