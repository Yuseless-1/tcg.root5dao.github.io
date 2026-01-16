'use client'

import { useState } from 'react'

export default function GameMap({ rotation, onLocationClick }) {
  const [hoveredZone, setHoveredZone] = useState(null)
  const [selectedZone, setSelectedZone] = useState('well-of-life')

  // Convert rotation from radians to degrees
  const degrees = ((rotation * 180) / Math.PI) % 360

  const zones = {
    'well-of-life': { name: 'Well of Life', color: '#ffeb3b', ring: 0 },
    'fire-gate': { name: 'Fire Gate', color: '#ff5722', ring: 1, angle: 0 },
    'nature-gate': { name: 'Nature Gate', color: '#4caf50', ring: 1, angle: 90 },
    'water-gate': { name: 'Water Gate', color: '#2196f3', ring: 1, angle: 180 },
    'energy-gate': { name: 'Energy Gate', color: '#9c27b0', ring: 1, angle: 270 },
  }

  const handleZoneClick = (zoneId) => {
    setSelectedZone(zoneId)
    if (onLocationClick) {
      onLocationClick(zoneId, zones[zoneId])
    }
  }

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      left: '20px',
      zIndex: 900,
      pointerEvents: 'auto'
    }}>
      {/* Map container */}
      <div style={{
        width: '280px',
        background: 'rgba(10, 22, 40, 0.95)',
        borderRadius: '16px',
        border: '2px solid rgba(255, 235, 59, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(255, 235, 59, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '20px',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '15px',
          paddingBottom: '12px',
          borderBottom: '2px solid rgba(255, 235, 59, 0.2)'
        }}>
          <div>
            <div style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#ffeb3b',
              letterSpacing: '1px',
              marginBottom: '4px'
            }}>
              FIFTH ROOT
            </div>
            <div style={{
              fontSize: '11px',
              color: '#f4e4c1',
              opacity: 0.7,
              letterSpacing: '0.5px'
            }}>
              V10: HIDDEN PATHWAYS
            </div>
          </div>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(255, 235, 59, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}>
            ⊗
          </div>
        </div>

        {/* Circular Map */}
        <div style={{
          position: 'relative',
          width: '240px',
          height: '240px',
          margin: '0 auto 15px'
        }}>
          {/* Background circles */}
          <svg width="240" height="240" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* Outer ring (Aether/Dragon spaces) */}
            <circle
              cx="120"
              cy="120"
              r="115"
              fill="none"
              stroke="rgba(156, 39, 176, 0.3)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            
            {/* Middle ring (Training/Defense) */}
            <circle
              cx="120"
              cy="120"
              r="85"
              fill="none"
              stroke="rgba(76, 175, 80, 0.4)"
              strokeWidth="2"
            />
            
            {/* Inner ring (Guild Gates) */}
            <circle
              cx="120"
              cy="120"
              r="55"
              fill="none"
              stroke="rgba(255, 235, 59, 0.5)"
              strokeWidth="3"
            />
            
            {/* Center (Well of Life) */}
            <circle
              cx="120"
              cy="120"
              r="25"
              fill="rgba(255, 235, 59, 0.2)"
              stroke="#ffeb3b"
              strokeWidth="2"
            />

            {/* Pathways from center to gates */}
            {[0, 90, 180, 270].map((angle) => {
              const rad = (angle - 90) * (Math.PI / 180)
              const x1 = 120 + Math.cos(rad) * 25
              const y1 = 120 + Math.sin(rad) * 25
              const x2 = 120 + Math.cos(rad) * 55
              const y2 = 120 + Math.sin(rad) * 55
              
              return (
                <line
                  key={angle}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255, 235, 59, 0.4)"
                  strokeWidth="2"
                />
              )
            })}

            {/* Elemental labels on rings */}
            <text
              x="120"
              y="35"
              textAnchor="middle"
              fill="rgba(244, 228, 193, 0.6)"
              fontSize="9"
              fontFamily="'Inter', sans-serif"
            >
              WATER
            </text>
            <text
              x="205"
              y="125"
              textAnchor="middle"
              fill="rgba(244, 228, 193, 0.6)"
              fontSize="9"
              fontFamily="'Inter', sans-serif"
            >
              METAL
            </text>
            <text
              x="120"
              y="215"
              textAnchor="middle"
              fill="rgba(244, 228, 193, 0.6)"
              fontSize="9"
              fontFamily="'Inter', sans-serif"
            >
              NATURE
            </text>
            <text
              x="35"
              y="125"
              textAnchor="middle"
              fill="rgba(244, 228, 193, 0.6)"
              fontSize="9"
              fontFamily="'Inter', sans-serif"
            >
              FIRE
            </text>
          </svg>

          {/* Well of Life (center) */}
          <div
            onClick={() => handleZoneClick('well-of-life')}
            onMouseEnter={() => setHoveredZone('well-of-life')}
            onMouseLeave={() => setHoveredZone(null)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: selectedZone === 'well-of-life' 
                ? 'radial-gradient(circle, rgba(255, 235, 59, 0.8), rgba(255, 193, 7, 0.3))'
                : 'radial-gradient(circle, rgba(255, 235, 59, 0.5), rgba(255, 193, 7, 0.2))',
              border: '2px solid #ffeb3b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              boxShadow: selectedZone === 'well-of-life' 
                ? '0 0 20px rgba(255, 235, 59, 0.8)'
                : '0 0 10px rgba(255, 235, 59, 0.5)',
              transition: 'all 0.3s',
              zIndex: 10
            }}
            title="Well of Life"
          >
            ⚡
          </div>

          {/* Guild Gates (4 directions) */}
          {[
            { id: 'fire-gate', angle: 180, icon: '🔥', color: '#ff5722', name: 'Fire' },
            { id: 'nature-gate', angle: 90, icon: '🌿', color: '#4caf50', name: 'Nature' },
            { id: 'water-gate', angle: 0, icon: '💧', color: '#2196f3', name: 'Water' },
            { id: 'energy-gate', angle: 270, icon: '⚡', color: '#9c27b0', name: 'Energy' }
          ].map((gate) => {
            const rad = (gate.angle - 90) * (Math.PI / 180)
            const x = 120 + Math.cos(rad) * 55
            const y = 120 + Math.sin(rad) * 55
            const isSelected = selectedZone === gate.id
            const isHovered = hoveredZone === gate.id

            return (
              <div
                key={gate.id}
                onClick={() => handleZoneClick(gate.id)}
                onMouseEnter={() => setHoveredZone(gate.id)}
                onMouseLeave={() => setHoveredZone(null)}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  width: isSelected ? '36px' : '30px',
                  height: isSelected ? '36px' : '30px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${gate.color}, transparent)`,
                  border: `2px solid ${gate.color}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isSelected ? '16px' : '14px',
                  boxShadow: isSelected || isHovered
                    ? `0 0 15px ${gate.color}`
                    : `0 0 5px ${gate.color}`,
                  transition: 'all 0.3s',
                  zIndex: 5
                }}
                title={`${gate.name} Gate`}
              >
                {gate.icon}
              </div>
            )
          })}

          {/* Rotation indicator (player view direction) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '2px',
              height: '30px',
              background: 'linear-gradient(to bottom, #ff4444, transparent)',
              transformOrigin: 'top center',
              transform: `translate(-50%, -50%) rotate(${degrees}deg)`,
              transition: 'transform 0.3s ease-out',
              pointerEvents: 'none',
              zIndex: 15
            }}
          >
            {/* Arrow head */}
            <div style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #ff4444',
              filter: 'drop-shadow(0 0 4px rgba(255, 68, 68, 0.8))'
            }} />
          </div>

          {/* Outer ring nodes (dragon sources) */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle - 90) * (Math.PI / 180)
            const x = 120 + Math.cos(rad) * 110
            const y = 120 + Math.sin(rad) * 110
            
            return (
              <div
                key={`outer-${i}`}
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#9c27b0',
                  border: '1px solid rgba(156, 39, 176, 0.6)',
                  boxShadow: '0 0 5px rgba(156, 39, 176, 0.5)',
                  pointerEvents: 'none'
                }}
              />
            )
          })}
        </div>

        {/* Current Location Info */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
          padding: '12px',
          border: '1px solid rgba(255, 235, 59, 0.2)'
        }}>
          <div style={{
            fontSize: '11px',
            color: '#ffeb3b',
            fontWeight: '600',
            marginBottom: '6px',
            letterSpacing: '0.5px'
          }}>
            CURRENT LOCATION
          </div>
          <div style={{
            fontSize: '14px',
            color: '#f4e4c1',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '16px' }}>
              {selectedZone === 'well-of-life' && '⚡'}
              {selectedZone === 'fire-gate' && '🔥'}
              {selectedZone === 'nature-gate' && '🌿'}
              {selectedZone === 'water-gate' && '💧'}
              {selectedZone === 'energy-gate' && '⚡'}
            </span>
            {zones[selectedZone]?.name || 'Unknown'}
          </div>
          <div style={{
            fontSize: '10px',
            color: '#f4e4c1',
            opacity: 0.6,
            marginTop: '4px'
          }}>
            View Angle: {Math.round(degrees)}°
          </div>
        </div>

        {/* Legend */}
        <div style={{
          marginTop: '12px',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          fontSize: '10px',
          color: '#f4e4c1'
        }}>
          <div style={{ 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#ffeb3b',
            fontSize: '11px'
          }}>
            MAP LEGEND
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '2px', background: '#ffeb3b' }} />
              <span>Guild Gates</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '2px', background: '#4caf50' }} />
              <span>Training Grounds</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '2px', background: '#9c27b0', opacity: 0.6 }} />
              <span>Aether Sources</span>
            </div>
          </div>
        </div>

        {/* Game modes list */}
        <div style={{
          marginTop: '12px',
          padding: '10px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          fontSize: '11px'
        }}>
          <div style={{ 
            fontWeight: '600', 
            marginBottom: '8px',
            color: '#ffeb3b'
          }}>
            GAME MODES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: '#f4e4c1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>⚔️</span>
              <span>Elddesit Harmany</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>🔄</span>
              <span>Mover(4 Rotations/4 PVP)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>✨</span>
              <span>Grace Fusion</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>🌀</span>
              <span>Arcaive Warp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
