import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const NeuralNetwork = (props) => {
  const ref = useRef();
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // Additive blending for glow effect
        />
      </Points>
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
      {/* Background gradients for cinematic lighting */}
      <div className="absolute inset-0 bg-[#020617] opacity-70"></div>
      <div className="absolute top-0 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00f0ff]/5 to-transparent blur-[120px] mix-blend-screen pointer-events-none transform -translate-y-1/2"></div>
      
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <fog attach="fog" args={['#000000', 3, 10]} />
        <NeuralNetwork />
      </Canvas>
      
      {/* Overlay noise / grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
};

export default Background3D;
