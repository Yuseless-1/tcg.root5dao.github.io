'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import LoadingScreen from '@/components/LoadingScreen'

const GameBoard3D = dynamic(() => import('@/components/GameBoard3D'), {
  ssr: false,
  loading: () => <LoadingScreen />
})

export default function Home() {
  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)'
    }}>
      <Header />
      
      <Suspense fallback={<LoadingScreen />}>
        <GameBoard3D />
      </Suspense>

      {/* Work in Progress Banner */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(10, 22, 40, 0.95), transparent)',
        padding: '30px 20px 20px',
        textAlign: 'center',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#ffeb3b',
          textShadow: '0 0 20px rgba(255, 235, 59, 0.6), 0 2px 4px rgba(0,0,0,0.8)',
          letterSpacing: '3px',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          ⚡ WORK IN PROGRESS ⚡
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: '#f4e4c1',
          marginTop: '8px',
          opacity: 0.8
        }}>
          Building the future of ROOT5 TCG
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </main>
  )
}
