'use client'

export default function Compass({ rotation }) {
  // Convert rotation from radians to degrees
  const degrees = ((rotation * 180) / Math.PI) % 360

  return (
    <div style={{
      position: 'fixed',
      top: '120px',
      left: '30px',
      zIndex: 900,
      pointerEvents: 'none'
    }}>
      {/* Compass container */}
      <div style={{
        width: '120px',
        height: '120px',
        background: 'rgba(10, 22, 40, 0.95)',
        borderRadius: '50%',
        border: '3px solid rgba(255, 235, 59, 0.4)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(255, 235, 59, 0.1)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Compass rose background */}
        <div style={{
          position: 'absolute',
          width: '90%',
          height: '90%',
          opacity: 0.3
        }}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              style={{
                position: 'absolute',
                width: '2px',
                height: '50%',
                background: 'linear-gradient(to bottom, #ffeb3b, transparent)',
                left: '50%',
                top: '0',
                transformOrigin: 'bottom center',
                transform: `translateX(-50%) rotate(${angle}deg)`
              }}
            />
          ))}
        </div>

        {/* Cardinal directions */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: `rotate(${-degrees}deg)`,
          transition: 'transform 0.3s ease-out'
        }}>
          {/* N */}
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Cinzel', serif",
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#ff4444',
            textShadow: '0 0 10px rgba(255, 68, 68, 0.8)'
          }}>
            N
          </div>
          
          {/* E */}
          <div style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: "'Cinzel', serif",
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#f4e4c1'
          }}>
            E
          </div>
          
          {/* S */}
          <div style={{
            position: 'absolute',
            bottom: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Cinzel', serif",
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#f4e4c1'
          }}>
            S
          </div>
          
          {/* W */}
          <div style={{
            position: 'absolute',
            left: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontFamily: "'Cinzel', serif",
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#f4e4c1'
          }}>
            W
          </div>
        </div>

        {/* Rotating needle */}
        <div style={{
          position: 'absolute',
          width: '4px',
          height: '40px',
          transform: `rotate(${degrees}deg)`,
          transformOrigin: 'center center',
          transition: 'transform 0.3s ease-out'
        }}>
          {/* North pointer (red) */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: '20px solid #ff4444',
            transform: 'translateX(-4px)',
            filter: 'drop-shadow(0 0 4px rgba(255, 68, 68, 0.8))'
          }} />
          
          {/* South pointer (white) */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '20px solid #f4e4c1',
            transform: 'translateX(-4px)'
          }} />

          {/* Center dot */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '8px',
            height: '8px',
            background: '#ffeb3b',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px rgba(255, 235, 59, 0.8)'
          }} />
        </div>

        {/* Outer ring ticks */}
        {[...Array(36)].map((_, i) => {
          const angle = i * 10
          const isMajor = angle % 30 === 0
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: isMajor ? '3px' : '1px',
                height: isMajor ? '8px' : '5px',
                background: isMajor ? '#ffeb3b' : 'rgba(244, 228, 193, 0.5)',
                top: '2px',
                left: '50%',
                transformOrigin: '0 56px',
                transform: `translateX(-50%) rotate(${angle}deg)`
              }}
            />
          )
        })}
      </div>

      {/* Compass label */}
      <div style={{
        marginTop: '10px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: '12px',
        fontWeight: '600',
        color: '#ffeb3b',
        letterSpacing: '1px',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
      }}>
        COMPASS
      </div>

      {/* Rotation display */}
      <div style={{
        marginTop: '5px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
        fontSize: '11px',
        color: '#f4e4c1',
        opacity: 0.7
      }}>
        {Math.round(degrees)}°
      </div>
    </div>
  )
}
