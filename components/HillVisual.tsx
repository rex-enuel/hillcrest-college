'use client'

import { useState, useEffect } from 'react'

// Nsibidi-inspired symbolic patterns as SVG paths
const nsibidiPatterns = [
  // Unity symbol - interlocked circles
  { id: 'unity', path: 'M10,50 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0 M50,50 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0', meaning: 'Unity' },
  // Leadership - arrow up with base
  { id: 'leadership', path: 'M30,70 L30,20 L15,35 M30,20 L45,35', meaning: 'Leadership' },
  // Knowledge - open book
  { id: 'knowledge', path: 'M15,70 L15,20 L55,20 L55,70 Z M35,20 L35,70', meaning: 'Knowledge' },
  // Heritage - traditional hut/structure
  { id: 'heritage', path: 'M15,70 L15,35 L35,15 L55,35 L55,70 Z M25,70 L25,45 L45,45 L45,70', meaning: 'Heritage' },
  // River flow - wavy lines
  { id: 'river', path: 'M10,50 Q25,30 40,50 Q55,70 70,50', meaning: 'River' },
  // Conservation - leaf
  { id: 'conservation', path: 'M35,70 Q50,50 35,20 Q20,50 35,70', meaning: 'Nature' },
  // First star - achievement
  { id: 'first', path: 'M35,15 L38,30 L53,30 L40,40 L43,55 L35,48 L27,55 L30,40 L17,30 L32,30 Z', meaning: 'First' },
]

// Carnival color palette from Calabar Carnival
const carnivalColors = {
  brightBlue: '#0077FF',
  electricBlue: '#00B4FF',
  gold: '#FFD700',
  deepGold: '#FFB800',
  orange: '#FF6B00',
  coral: '#FF3D3D',
  red: '#E01E1E',
  // Hillcrest brand colors
  primary: '#0A3D3C',
  primaryLight: '#145452',
  primaryLighter: '#A8C9C8',
  accent: '#F45B5B',
  white: '#FFFFFF',
  cream: '#FEF8F0',
}

export function HillVisual() {
  const [mounted, setMounted] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Stagger animation phases
    const timer1 = setTimeout(() => setAnimationPhase(1), 100)
    const timer2 = setTimeout(() => setAnimationPhase(2), 300)
    const timer3 = setTimeout(() => setAnimationPhase(3), 500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-full h-96 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(to bottom, #d4af37, #cc7357)' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-[#fef8f0]/30 rounded-full border-t-[#d4af37] animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full h-96 rounded-xl overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A3D3C 0%, #145452 40%, #0A3D3C 100%)',
        position: 'relative',
      }}
      role="img"
      aria-label="Hilltop Horizon System - Hillcrest College elevated campus visualization with Nigerian heritage symbols"
    >
      {/* Atmospheric sky gradient with animated aurora */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-0 right-0 h-1/2"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,180,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,215,0,0.1) 0%, transparent 50%), radial-gradient(ellipse at 20% 30%, rgba(255,107,0,0.08) 0%, transparent 40%)',
            animation: 'aurora-shift 20s ease-in-out infinite alternate',
          }}
        />
        <style jsx global>{`
          @keyframes aurora-shift {
            0% { transform: translateX(-5%) scale(1); opacity: 0.6; }
            50% { transform: translateX(5%) scale(1.05); opacity: 0.8; }
            100% { transform: translateX(-5%) scale(1); opacity: 0.6; }
          }
        `}</style>
      </div>

      {/* Elevated Arcs Primitive - The Hilltop Horizon System core */}
      <div className="absolute bottom-0 left-0 right-0 h-full" aria-hidden="true">
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{
            filter: 'drop-shadow(0 -10px 30px rgba(0,0,0,0.3))',
          }}
        >
          <defs>
            {/* Gradient for hill arcs */}
            <linearGradient id="hillGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={carnivalColors.primary} />
              <stop offset="40%" stopColor={carnivalColors.primaryLight} />
              <stop offset="70%" stopColor={carnivalColors.primaryLighter} />
              <stop offset="100%" stopColor="#E8F4F3" />
            </linearGradient>

            {/* Carnival accent gradient */}
            <linearGradient id="carnivalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={carnivalColors.brightBlue} />
              <stop offset="25%" stopColor={carnivalColors.electricBlue} />
              <stop offset="50%" stopColor={carnivalColors.gold} />
              <stop offset="75%" stopColor={carnivalColors.orange} />
              <stop offset="100%" stopColor={carnivalColors.coral} />
            </linearGradient>

            {/* River gradient */}
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={carnivalColors.brightBlue} stopOpacity="0.6" />
              <stop offset="50%" stopColor={carnivalColors.electricBlue} stopOpacity="0.4" />
              <stop offset="100%" stopColor={carnivalColors.brightBlue} stopOpacity="0.6" />
            </linearGradient>

            {/* Gold highlight gradient */}
            <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={carnivalColors.gold} stopOpacity="0" />
              <stop offset="50%" stopColor={carnivalColors.gold} stopOpacity="0.3" />
              <stop offset="100%" stopColor={carnivalColors.gold} stopOpacity="0" />
            </linearGradient>

            {/* Nsibidi pattern definitions */}
            <pattern id="nsibidiUnity" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M10,40 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0 M40,40 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0"
                    stroke={carnivalColors.gold} strokeWidth="1.5" fill="none" opacity="0.3"/>
            </pattern>
            <pattern id="nsibidiRiver" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
              <path d="M5,30 Q25,15 50,30 Q75,45 95,30" stroke={carnivalColors.electricBlue} strokeWidth="1" fill="none" opacity="0.2"/>
              <path d="M5,40 Q25,25 50,40 Q75,55 95,40" stroke={carnivalColors.brightBlue} strokeWidth="1" fill="none" opacity="0.15"/>
            </pattern>
            <pattern id="nsibidiLeaf" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30,50 Q42,30 30,10 Q18,30 30,50" stroke={carnivalColors.primaryLighter} strokeWidth="1" fill="none" opacity="0.2"/>
            </pattern>

            {/* Glow filters */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Layer 1: Distant hill arcs (back) */}
          <g className="hill-layer" style={{ animationDelay: '0ms' }}>
            <path
              d="M0,350 Q200,200 400,300 Q600,400 800,320 Q1000,240 1200,350 L1200,400 L0,400 Z"
              fill="url(#hillGradient)"
              opacity="0.4"
              style={{
                animation: 'rise-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                opacity: 0,
                transformOrigin: 'bottom center',
              }}
            />
          </g>

          {/* Layer 2: Mid hill arcs */}
          <g className="hill-layer" style={{ animationDelay: '150ms' }}>
            <path
              d="M0,380 Q180,220 380,330 Q580,440 780,350 Q980,260 1200,380 L1200,400 L0,400 Z"
              fill="url(#hillGradient)"
              opacity="0.6"
              style={{
                animation: 'rise-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                opacity: 0,
                transformOrigin: 'bottom center',
              }}
            />
          </g>

          {/* Layer 3: Foreground hill - main elevated arc */}
          <g className="hill-layer" style={{ animationDelay: '300ms' }}>
            <path
              d="M0,400 Q150,200 350,350 Q550,500 750,360 Q950,220 1200,400 Z"
              fill="url(#hillGradient)"
              style={{
                animation: 'rise-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                opacity: 0,
                transformOrigin: 'bottom center',
              }}
            />

            {/* Golden horizon line - the "crown" of the hill */}
            <path
              d="M0,400 Q150,200 350,350 Q550,500 750,360 Q950,220 1200,400"
              stroke="url(#carnivalGradient)"
              strokeWidth="3"
              fill="none"
              style={{
                animation: 'draw-arc 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards, shimmer 3s ease-in-out 2.5s infinite',
                strokeDasharray: '2000',
                strokeDashoffset: '2000',
                filter: 'url(#glow)',
              }}
            />

            {/* Secondary golden highlight arc */}
            <path
              d="M100,380 Q250,220 400,330 Q550,440 700,340 Q850,240 1100,380"
              stroke={carnivalColors.gold}
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
              style={{
                animation: 'draw-arc 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards, pulse-glow 4s ease-in-out 2.6s infinite',
                strokeDasharray: '1500',
                strokeDashoffset: '1500',
                filter: 'url(#softGlow)',
              }}
            />
          </g>

          {/* River/Delta Motif - Flowing from hilltop */}
          <g className="river-layer" style={{ animationDelay: '500ms' }}>
            {/* Main river flow */}
            <path
              d="M600,350 Q580,300 550,250 Q520,200 500,150 Q480,100 470,50"
              stroke="url(#riverGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                animation: 'flow-draw 2.5s cubic-bezier(0.42, 0, 0.58, 1) 1s forwards, river-flow 4s ease-in-out 3.5s infinite',
                strokeDasharray: '500',
                strokeDashoffset: '500',
                filter: 'url(#glow)',
              }}
            />

            {/* River tributaries */}
            <path
              d="M550,250 Q500,230 460,220 Q420,210 400,190"
              stroke={carnivalColors.electricBlue}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
              style={{
                animation: 'flow-draw 2s cubic-bezier(0.42, 0, 0.58, 1) 1.3s forwards',
                strokeDasharray: '200',
                strokeDashoffset: '200',
              }}
            />
            <path
              d="M550,250 Q600,230 640,220 Q680,210 700,190"
              stroke={carnivalColors.brightBlue}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
              style={{
                animation: 'flow-draw 2s cubic-bezier(0.42, 0, 0.58, 1) 1.4s forwards',
                strokeDasharray: '200',
                strokeDashoffset: '200',
              }}
            />

            {/* Delta fans at base */}
            <g style={{ animation: 'fade-scale 1s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s forwards', opacity: 0, transformOrigin: '600 350' }}>
              <path d="M580,350 Q560,370 540,390" stroke={carnivalColors.electricBlue} strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
              <path d="M600,350 Q600,370 600,390" stroke={carnivalColors.brightBlue} strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
              <path d="M620,350 Q640,370 660,390" stroke={carnivalColors.electricBlue} strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round"/>
            </g>
          </g>

          {/* Conservation/Nature Elements - Trees and foliage on hill */}
          <g className="nature-layer" style={{ animationDelay: '600ms' }}>
            {/* Tree silhouettes on hill slopes */}
            {[
              { x: 150, y: 320, size: 1, delay: 0 },
              { x: 280, y: 300, size: 1.2, delay: 100 },
              { x: 420, y: 340, size: 0.9, delay: 200 },
              { x: 580, y: 310, size: 1.3, delay: 300 },
              { x: 720, y: 330, size: 1.1, delay: 400 },
              { x: 880, y: 320, size: 1, delay: 500 },
              { x: 1020, y: 340, size: 0.8, delay: 600 },
            ].map((tree, i) => (
              <g
                key={i}
                transform={`translate(${tree.x}, ${tree.y}) scale(${tree.size})`}
                style={{
                  animation: `grow-tree 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + tree.delay / 1000}s forwards`,
                  opacity: 0,
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Trunk */}
                <path d="M0,0 L0,-20" stroke={carnivalColors.primary} strokeWidth="3" strokeLinecap="round"/>
                {/* Canopy layers */}
                <ellipse cx="0" cy="-25" rx="18" ry="15" fill={carnivalColors.primary} opacity="0.8"/>
                <ellipse cx="0" cy="-35" rx="14" ry="12" fill={carnivalColors.primaryLight} opacity="0.9"/>
                <ellipse cx="0" cy="-42" rx="10" ry="10" fill={carnivalColors.primaryLighter} opacity="0.7"/>
                {/* Golden highlight on canopy */}
                <ellipse cx="-5" cy="-38" rx="4" ry="3" fill={carnivalColors.gold} opacity="0.4"/>
              </g>
            ))}

            {/* Conservation leaf particles floating */}
            {[1,2,3,4,5,6,7,8].map((_, i) => (
              <path
                key={i}
                d="M0,0 Q8,-8 0,-16 Q-8,-8 0,0"
                fill={i % 2 === 0 ? carnivalColors.primaryLighter : carnivalColors.gold}
                opacity="0.4"
                style={{
                  animation: `float-leaf ${6 + i * 0.5}s ease-in-out ${1.5 + i * 0.2}s infinite`,
                  transformOrigin: 'center',
                  transform: `translate(${100 + i * 130}px, ${200 + (i % 3) * 50}px) rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </g>

          {/* Nsibidi Symbolic Patterns - Floating heritage symbols */}
          <g className="nsibidi-layer" style={{ animationDelay: '800ms' }}>
            {nsibidiPatterns.map((symbol, i) => (
              <g
                key={symbol.id}
                transform={`translate(${120 + i * 140}, ${100 + (i % 3) * 60}) scale(0.6)`}
                style={{
                  animation: `float-symbol ${8 + i * 0.8}s ease-in-out ${1 + i * 0.3}s infinite, fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${1.2 + i * 0.1}s forwards`,
                  opacity: 0,
                  filter: 'url(#softGlow)',
                }}
              >
                <path
                  d={symbol.path}
                  stroke={i % 3 === 0 ? carnivalColors.gold : i % 3 === 1 ? carnivalColors.electricBlue : carnivalColors.orange}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Symbol label - only visible on hover via CSS */}
                <title>{symbol.meaning}</title>
              </g>
            ))}
          </g>

          {/* "First in Nigeria" Heritage Badge */}
          <g className="heritage-badge" style={{ animationDelay: '1000ms' }}>
            <g transform="translate(600, 80)" style={{
              animation: 'badge-appear 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s forwards',
              opacity: 0,
              transformOrigin: 'center',
            }}>
              {/* Outer ring */}
              <circle r="55" fill="none" stroke="url(#carnivalGradient)" strokeWidth="3" opacity="0.8"/>
              <circle r="52" fill="none" stroke={carnivalColors.gold} strokeWidth="1" opacity="0.6"/>

              {/* Inner circle */}
              <circle r="40" fill={carnivalColors.primary} opacity="0.9"/>
              <circle r="38" fill="none" stroke={carnivalColors.gold} strokeWidth="1.5" opacity="0.5"/>

              {/* Star - "First" */}
              <path
                d="M0,-28 L4,-12 L20,-12 L8,-4 L12,12 L0,6 L-12,12 L-8,-4 L-20,-12 L-4,-12 Z"
                fill={carnivalColors.gold}
                style={{ animation: 'star-pulse 2s ease-in-out 2.5s infinite' }}
              />

              {/* Text arc - "FIRST IN NIGERIA" */}
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontSize="9"
                fontWeight="600"
                fill={carnivalColors.gold}
                letterSpacing="1.5"
              >
                FIRST IN NIGERIA
              </text>

              {/* Founded year */}
              <text
                x="0"
                y="18"
                textAnchor="middle"
                fontFamily="var(--font-sans)"
                fontSize="6"
                fontWeight="500"
                fill={carnivalColors.primaryLighter}
                letterSpacing="2"
              >
                EST. 1942
              </text>
            </g>
          </g>

          {/* Campus Buildings - Modern interpretation on hilltop */}
          <g className="buildings-layer" style={{ animationDelay: '1200ms' }}>
            {[
              { x: 380, y: 300, w: 70, h: 60, towers: 1, delay: 0 },
              { x: 520, y: 290, w: 100, h: 80, towers: 2, delay: 150 },
              { x: 680, y: 305, w: 70, h: 60, towers: 1, delay: 300 },
            ].map((building, i) => (
              <g
                key={i}
                transform={`translate(${building.x}, ${building.y})`}
                style={{
                  animation: `rise-build 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.8 + building.delay / 1000}s forwards`,
                  opacity: 0,
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Main building body */}
                <rect
                  x={-building.w/2}
                  y={-building.h}
                  width={building.w}
                  height={building.h}
                  rx="3"
                  fill={carnivalColors.primary}
                  opacity="0.95"
                />
                {/* Window rows */}
                {[...Array(3)].map((_, row) => (
                  <g key={row}>
                    {[...Array(Math.floor(building.w / 15))].map((_, col) => (
                      <rect
                        key={col}
                        x={-building.w/2 + 8 + col * 15}
                        y={-building.h + 10 + row * 20}
                        width="8"
                        height="12"
                        rx="1"
                        fill={carnivalColors.gold}
                        opacity="0.8"
                        style={{ animation: `window-glow 3s ease-in-out ${2.5 + row * 0.3 + col * 0.1}s infinite` }}
                      />
                    ))}
                  </g>
                ))}
                {/* Roof */}
                <path
                  d={`M${-building.w/2 - 5},${-building.h} L0,${-building.h - 15} L${building.w/2 + 5},${-building.h}`}
                  fill={carnivalColors.primaryLight}
                  opacity="0.9"
                />
                {/* Gold roof accent */}
                <path
                  d={`M${-building.w/2},${-building.h} L0,${-building.h - 12} L${building.w/2},${-building.h}`}
                  fill="none"
                  stroke={carnivalColors.gold}
                  strokeWidth="2"
                  opacity="0.7"
                />
                {/* Tower(s) */}
                {building.towers === 2 && [
                  <rect key="t1" x={-building.w/2 + 10} y={-building.h - 25} width="12" height="25" rx="2" fill={carnivalColors.primaryLight} opacity="0.9" />,
                  <rect key="t2" x={building.w/2 - 22} y={-building.h - 25} width="12" height="25" rx="2" fill={carnivalColors.primaryLight} opacity="0.9" />,
                  <path key="ts1" d={'M' + (-building.w/2 + 4) + ',' + (-building.h - 25) + ' L' + (-building.w/2 + 16) + ',' + (-building.h - 40)} fill="none" stroke={carnivalColors.gold} strokeWidth="1.5" opacity="0.6" />,
                  <path key="ts2" d={'M' + (building.w/2 - 16) + ',' + (-building.h - 25) + ' L' + (building.w/2 - 4) + ',' + (-building.h - 40)} fill="none" stroke={carnivalColors.gold} strokeWidth="1.5" opacity="0.6" />,
                ]}
                {building.towers === 1 && (
                  <>
                    <rect x={-6} y={-building.h - 20} width="12" height="20" rx="2" fill={carnivalColors.primaryLight} opacity="0.9" />
                    <path d={'M0,' + (-building.h - 20) + ' L0,' + (-building.h - 35)} fill="none" stroke={carnivalColors.gold} strokeWidth="1.5" opacity="0.6" />
                    <circle cx="0" cy={-building.h - 38} r="4" fill={carnivalColors.gold} opacity="0.8" />
                  </>
                )}
              </g>
            ))}
          </g>

          {/* Carnival Color Burst Particles - Celebration atmosphere */}
          <g className="carnival-particles" aria-hidden="true">
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const radius = 100 + (i % 3) * 50
              const cx = 600 + Math.cos(angle) * radius
              const cy = 200 + Math.sin(angle) * radius * 0.5
              const colors = [carnivalColors.brightBlue, carnivalColors.gold, carnivalColors.orange, carnivalColors.coral, carnivalColors.electricBlue]
              const color = colors[i % colors.length]
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={2 + (i % 3)}
                  fill={color}
                  opacity="0"
                  style={{
                    animation: `particle-burst 3s ease-out ${1.5 + i * 0.1}s infinite`,
                    transformOrigin: '600 200',
                  }}
                />
              )
            })}
          </g>
        </svg>

        {/* CSS Animations injected via style */}
        <style jsx>{`
          @keyframes rise-up {
            from { opacity: 0; transform: translateY(60px) scaleY(0.8); }
            to { opacity: 1; transform: translateY(0) scaleY(1); }
          }
          @keyframes draw-arc {
            to { stroke-dashoffset: 0; opacity: 1; }
          }
          @keyframes shimmer {
            0%, 100% { filter: url(#glow); opacity: 1; }
            50% { filter: url(#glow) brightness(1.3); opacity: 0.8; }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; filter: url(#softGlow); }
            50% { opacity: 1; filter: url(#glow); }
          }
          @keyframes flow-draw {
            to { stroke-dashoffset: 0; opacity: 1; }
          }
          @keyframes river-flow {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-5px); }
          }
          @keyframes fade-scale {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes grow-tree {
            from { opacity: 0; transform: scale(0.3) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes float-leaf {
            0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
            25% { transform: translate(15px, -20px) rotate(90deg); opacity: 0.6; }
            50% { transform: translate(-10px, -30px) rotate(180deg); opacity: 0.3; }
            75% { transform: translate(-20px, -10px) rotate(270deg); opacity: 0.5; }
          }
          @keyframes float-symbol {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -15px) rotate(5deg); }
            50% { transform: translate(-8px, -20px) rotate(-3deg); }
            75% { transform: translate(-12px, -5px) rotate(-8deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes badge-appear {
            from { opacity: 0; transform: scale(0.5) rotate(-10deg); }
            60% { transform: scale(1.1) rotate(3deg); }
            to { opacity: 1; transform: scale(1) rotate(0deg); }
          }
          @keyframes star-pulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px #FFD700); }
            50% { transform: scale(1.1); filter: drop-shadow(0 0 12px #FFD700); }
          }
          @keyframes rise-build {
            from { opacity: 0; transform: translateY(40px) scale(0.9); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes window-glow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; filter: drop-shadow(0 0 4px #FFD700); }
          }
          @keyframes particle-burst {
            0% { opacity: 0; transform: translate(0, 0) scale(0); }
            20% { opacity: 1; }
            100% { opacity: 0; transform: translate(50px, -80px) scale(1.5); }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .hill-layer *, .river-layer *, .nature-layer *, .nsibidi-layer *, .heritage-badge *, .buildings-layer *, .carnival-particles * {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </div>

      {/* Foreground UI Overlay - Interactive Elements */}
      <div className="absolute inset-0 flex items-end justify-center p-8 pointer-events-none">
        <div
          className="text-center max-w-md mx-auto"
          style={{
            animation: 'fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border"
            style={{
              background: 'rgba(10, 61, 60, 0.8)',
              borderColor: 'rgba(168, 201, 200, 0.3)',
              animation: 'fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.2s forwards',
              opacity: 0,
            }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
            </span>
            <span className="text-xs font-medium text-[#A8C9C8] tracking-wide">
              HILLTOP HORIZON SYSTEM ACTIVE
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl md:text-3xl font-medium" style={{ color: carnivalColors.cream }}>
            Elevated Campus on the Horizon
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: 'rgba(254, 248, 240, 0.7)' }}>
            Where heritage meets horizon — Nigeria's first, rising above the delta
          </p>
        </div>
      </div>

      {/* Interactive Legend / Key */}
      <div
        className="absolute md:bottom-4 md:left-auto md:right-4 md:w-72 top-4 left-4 right-4 md:top-auto"
        style={{
          animation: 'slide-down 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.5s forwards',
          opacity: 0,
          transform: 'translateY(-10px)',
        }}
      >
        <div className="backdrop-blur-sm rounded-xl p-4 border md:text-right" style={{
          background: 'rgba(10, 61, 60, 0.85)',
          borderColor: 'rgba(168, 201, 200, 0.2)'
        }}>
          <div className="flex items-center gap-2 mb-3 md:justify-end">
            <div className="w-2 h-2 rounded-full" style={{ background: carnivalColors.gold }} />
            <span className="text-xs font-semibold tracking-wider" style={{ color: carnivalColors.gold }}>LEGEND</span>
          </div>
          <div className="space-y-2 text-xs md:text-right" style={{ color: 'rgba(254, 248, 240, 0.8)' }}>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.gold }}>
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>"First in Nigeria" Heritage Badge</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.electricBlue }}>
                <path d="M2 12C2 12 8 8 12 12C16 16 22 12 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>River Delta Motifs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.primaryLighter }}>
                <path d="M12 22C12 22 17 17 22 12C17 7 12 2 12 2C7 7 2 12 2 12C7 17 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>Nsibidi Heritage Symbols</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.primaryLighter }}>
                <path d="M12 22V12M12 22L7 17M12 22L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 17L12 12L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>Conservation & Nature</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.orange }}>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Carnival Spirit Colors</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: carnivalColors.gold }}>
                <path d="M3 21H21M5 21V7M12 21V7M19 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Elevated Arc Primitives</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}