import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to create and manage 3D interactions for GlamCS interactive elements.
 * This hook leverages the three.js library to create a modern, luxurious user experience
 * that reflects the high-end nature of the GlamCS brand.
 * 
 * @returns {Object} - An object containing the 3D scene, camera, and renderer.
 */
export const use3D = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Set background color to white
    scene.background = new THREE.Color(0xffffff);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffa500, 1);
    scene.add(directionalLight);
    
    // Create a 3D model (e.g., a cosmetic container)
    const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500, roughness: 0.5 });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);
    
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cylinder.rotation.y += 0.01; // Rotate the cylinder for 3D effect
      renderer.render(scene, camera);
    };
    
    animate();

    // Clean up on unmount
    return () => {
      if (renderer) {
        renderer.dispose();
      }
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return { sceneRef, cameraRef, rendererRef };
};