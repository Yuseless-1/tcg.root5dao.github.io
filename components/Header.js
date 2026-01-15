'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(10, 22, 40, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid rgba(255, 235, 59, 0.3)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#f4e4c1',
              textShadow: '0 0 20px rgba(255, 235, 59, 0.6)',
              letterSpacing: '3px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '28px' }}>👑</span>
              ROOT5
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              color: '#ffeb3b',
              letterSpacing: '2px',
              fontWeight: '600'
            }}>
              TCG
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}>
            {['Home', 'Game', 'DAO', 'Docs', 'Community'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? 'https://root5dao.com' : `https://root5dao.com/${item.toLowerCase()}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#f4e4c1',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 235, 59, 0.1)'
                  e.target.style.color = '#ffeb3b'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#f4e4c1'
                }}
              >
                {item}
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="https://root5dao.com"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                fontWeight: '700',
                color: '#0a0a0a',
                background: 'linear-gradient(135deg, #ffeb3b 0%, #fdd835 100%)',
                padding: '10px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(255, 235, 59, 0.4)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 6px 20px rgba(255, 235, 59, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 15px rgba(255, 235, 59, 0.4)'
              }}
            >
              Visit ROOT5DAO
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffeb3b',
              fontSize: '28px',
              cursor: 'pointer',
              padding: '5px'
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(10, 22, 40, 0.98)',
            padding: '20px',
            display: 'none'
          }}
          className="mobile-menu"
          >
            {['Home', 'Game', 'DAO', 'Docs', 'Community'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? 'https://root5dao.com' : `https://root5dao.com/${item.toLowerCase()}`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#f4e4c1',
                  textDecoration: 'none',
                  padding: '15px 20px',
                  display: 'block',
                  borderRadius: '8px',
                  marginBottom: '5px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 235, 59, 0.1)'
                  e.target.style.color = '#ffeb3b'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#f4e4c1'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
