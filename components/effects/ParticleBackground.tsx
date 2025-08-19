import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const particles: THREE.Sprite[] = [];
    const particleCount = 1000;
    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('/path/to/particleTexture.png'); // Replace with actual path

    for (let i = 0; i < particleCount; i++) {
      const particleMaterial = new THREE.SpriteMaterial({ 
        map: particleTexture, 
        color: new THREE.Color('orange') 
      });
      const particle = new THREE.Sprite(particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
      particle.scale.set(0.5, 0.5, 0.5);
      particles.push(particle);
      scene.add(particle);
    }

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(particle => {
        particle.rotation.z += 0.01;
      });
      renderer.render(scene, camera);
    };
    
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <motion.h1 
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to GlamCS
        </motion.h1>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-white opacity-20" />
    </div>
  );
};

export default ParticleBackground;