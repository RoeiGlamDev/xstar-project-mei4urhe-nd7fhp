import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('floating-elements')?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // orange color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      renderer.dispose();
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute text-center text-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to GlamCS</h1>
        <p className="text-xl">Elevate Your Beauty with Our Luxurious Cosmetics</p>
        <p className="text-lg mt-2">Experience the elegance of GlamCS with our exclusive range of products.</p>
      </motion.div>
      <div id="floating-elements" className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default FloatingElements;