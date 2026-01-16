'use client'

import { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, PerspectiveCamera, Environment } from '@react-three/drei'
import GameMap from './GameMap'

function Model() {
  const modelRef = useRef()
  const { scene } = useGLTF('/obj/root5_tcg_game_center.glb')
  
  // Clone the scene to avoid issues with multiple renders
  const clonedScene = scene.clone()

  useFrame(() => {
    // Optional: Add any animations here
    if (modelRef.current) {
      // modelRef.current.rotation.y += 0.001 // Slow auto-rotation if desired
    }
  })

  return (
    <primitive 
      ref={modelRef}
      object={clonedScene} 
      scale={10}
      position={[0, 0, 0]}
    />
  )
}

function Scene({ onRotationChange, targetLocation }) {
  const controlsRef = useRef()

  useFrame(() => {
    if (controlsRef.current) {
      // Pass the azimuthal angle (horizontal rotation) to the map
      onRotationChange(controlsRef.current.getAzimuthalAngle())
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 30, 50]} fov={60} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[0, 30, 0]} intensity={0.8} color="#ffeb3b" />
      <pointLight position={[-20, 10, 20]} intensity={0.5} color="#4488ff" />
      <pointLight position={[20, 10, -20]} intensity={0.5} color="#ff4400" />

      {/* Environment for reflections */}
      <Environment preset="night" />

      {/* The 3D Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Fog effect */}
      <fog attach="fog" args={['#0a0a0a', 100, 300]} />

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={10}
        maxDistance={200}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />
    </>
  )
}

export default function GameBoard3D() {
  const [rotation, setRotation] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationClick = (zoneId, zoneData) => {
    setSelectedLocation({ id: zoneId, data: zoneData })
    console.log('Location selected:', zoneId, zoneData)
    // Here you could add camera animations to move to specific locations
  }

  return (
    <>
      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)',
        zIndex: -1
      }}>
        {/* Animated stars */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'transparent',
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 90%, white, transparent)
          `,
          backgroundSize: '200% 200%',
          animation: 'twinkle 4s ease-in-out infinite',
          opacity: 0.6
        }} />
      </div>

      {/* Game Map (replaces Compass) */}
      <GameMap rotation={rotation} onLocationClick={handleLocationClick} />

      {/* Controls hint */}
      <div style={{
        position: 'fixed',
        top: '120px',
        right: '30px',
        background: 'rgba(10, 22, 40, 0.95)',
        padding: '20px',
        borderRadius: '12px',
        border: '2px solid rgba(255, 235, 59, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        zIndex: 900,
        maxWidth: '250px'
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#ffeb3b',
          marginBottom: '15px',
          letterSpacing: '1px'
        }}>
          🎮 CONTROLS
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          color: '#f4e4c1',
          lineHeight: '1.8'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#ffeb3b' }}>🖱️ Left Click + Drag:</strong> Rotate
          </div>
          <div style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#ffeb3b' }}>🔄 Scroll:</strong> Zoom In/Out
          </div>
          <div>
            <strong style={{ color: '#ffeb3b' }}>👆 Right Click + Drag:</strong> Pan
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        shadows
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          antialias: true,
          alpha: true
        }}
      >
        <Scene 
          onRotationChange={setRotation} 
          targetLocation={selectedLocation}
        />
      </Canvas>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  )
}

// Preload the model
useGLTF.preload('/obj/root5_tcg_game_center.glb')
