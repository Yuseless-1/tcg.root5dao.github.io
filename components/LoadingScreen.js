'use client'

import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      {/* Animated crown */}
      <div style={{
        fontSize: '80px',
        marginBottom: '30px',
        animation: 'float 3s ease-in-out infinite'
      }}>
        👑
      </div>

      {/* Title */}
      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#f4e4c1',
        textShadow: '0 0 30px rgba(255, 235, 59, 0.8), 0 0 60px rgba(255, 235, 59, 0.4)',
        letterSpacing: '6px',
        marginBottom: '10px'
      }}>
        ROOT5
      </div>

      {/* Subtitle */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '24px',
        color: '#ffeb3b',
        letterSpacing: '3px',
        marginBottom: '40px'
      }}>
        Loading The Fifth Root{dots}
      </div>

      {/* Loading bar */}
      <div style={{
        width: '300px',
        height: '4px',
        background: 'rgba(255, 235, 59, 0.2)',
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, transparent, #ffeb3b, transparent)',
          animation: 'loading 1.5s ease-in-out infinite'
        }} />
      </div>

      {/* Additional info */}
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        color: '#f4e4c1',
        opacity: 0.6,
        marginTop: '30px',
        letterSpacing: '1px'
      }}>
        Preparing the game world
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
