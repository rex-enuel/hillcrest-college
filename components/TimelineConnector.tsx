'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Brand colors for gradients
const brandColors = {
  primary: '#0A3D3C',
  primaryLight: '#145452',
  primaryLighter: '#A8C9C8',
  accent: '#F45B5B',
  gold: '#FFD700',
  deepGold: '#FFB800',
  electricBlue: '#00B4FF',
  brightBlue: '#0077FF',
}

// SVG path generator for winding "snake" connector
function generateSnakePath(
  nodeCount: number,
  containerHeight: number,
  containerWidth: number,
  nodeRadius: number,
  isMobile: boolean
): string {
  const centerX = containerWidth / 2
  const topMargin = 60
  const bottomMargin = 60
  const availableHeight = containerHeight - topMargin - bottomMargin
  const nodeSpacing = availableHeight / (nodeCount - 1)

  let path = `M ${centerX} ${topMargin + nodeRadius}`

  for (let i = 1; i < nodeCount; i++) {
    const y = topMargin + i * nodeSpacing
    const prevY = topMargin + (i - 1) * nodeSpacing
    const midY = (prevY + y) / 2

    // Alternate winding direction for snake effect
    const amplitude = isMobile ? containerWidth * 0.12 : containerWidth * 0.18
    const direction = i % 2 === 1 ? 1 : -1
    const controlX1 = centerX + direction * amplitude * 0.6
    const controlX2 = centerX + direction * amplitude
    const controlX3 = centerX + direction * amplitude * 0.6

    // Cubic bezier for smooth winding
    path += ` C ${controlX1} ${midY - nodeSpacing * 0.15}, ${controlX2} ${midY}, ${controlX3} ${midY + nodeSpacing * 0.15}`
    path += ` C ${centerX - direction * amplitude * 0.3} ${midY + nodeSpacing * 0.3}, ${centerX + direction * amplitude * 0.15} ${y - nodeSpacing * 0.2}, ${centerX} ${y - nodeRadius}`
  }

  return path
}

// Mechanical tree branch path generator
function generateTreePath(
  nodeCount: number,
  containerHeight: number,
  containerWidth: number,
  nodeRadius: number,
  isMobile: boolean
): string {
  const centerX = containerWidth / 2
  const topMargin = 60
  const bottomMargin = 60
  const availableHeight = containerHeight - topMargin - bottomMargin
  const nodeSpacing = availableHeight / (nodeCount - 1)

  const paths: string[] = []

  // Main trunk
  paths.push(`M ${centerX} ${topMargin + nodeRadius} L ${centerX} ${containerHeight - bottomMargin - nodeRadius}`)

  // Branches to each node
  for (let i = 0; i < nodeCount; i++) {
    const y = topMargin + i * nodeSpacing
    const branchLength = isMobile ? containerWidth * 0.15 : containerWidth * 0.22

    // Alternate left/right branches
    const direction = i % 2 === 0 ? -1 : 1
    const branchX = centerX + direction * branchLength

    // Curved branch with slight organic feel
    const ctrlY = y - nodeSpacing * 0.3
    paths.push(`M ${centerX} ${y} Q ${centerX + direction * branchLength * 0.5} ${ctrlY}, ${branchX} ${y}`)
  }

  return paths.join(' ')
}

export function TimelineConnector({
  nodeCount = 4,
  variant = 'snake', // 'snake' | 'tree'
  className = '',
}: {
  nodeCount?: number
  variant?: 'snake' | 'tree'
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const isMobile = dimensions.width < 768
  const nodeRadius = 12

  // Generate the path based on variant
  const pathData = variant === 'snake'
    ? generateSnakePath(nodeCount, dimensions.height, dimensions.width, nodeRadius, isMobile)
    : generateTreePath(nodeCount, dimensions.height, dimensions.width, nodeRadius, isMobile)

  // Gradient definitions for the path
  const gradientId = `timeline-gradient-${variant}-${nodeCount}`

  if (dimensions.width === 0 || dimensions.height === 0) {
    return (
      <div
        ref={containerRef}
        className={`relative ${className}`}
        style={{ minHeight: '400px' }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width: '100%',
        height: dimensions.height,
        minHeight: '400px'
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          overflow: 'visible',
          filter: 'drop-shadow(0 4px 20px rgba(10, 61, 60, 0.15))'
        }}
      >
        <defs>
          {/* Main gradient for snake variant */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={brandColors.electricBlue} stopOpacity="0.9" />
            <stop offset="20%" stopColor={brandColors.brightBlue} stopOpacity="0.8" />
            <stop offset="40%" stopColor={brandColors.primaryLighter} stopOpacity="0.7" />
            <stop offset="60%" stopColor={brandColors.primaryLight} stopOpacity="0.8" />
            <stop offset="80%" stopColor={brandColors.gold} stopOpacity="0.9" />
            <stop offset="100%" stopColor={brandColors.deepGold} stopOpacity="0.9" />
          </linearGradient>

          {/* Glow filter for path */}
          <filter id="path-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Soft glow for tree branches */}
          <filter id="branch-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for tree trunk */}
          <linearGradient id="trunk-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={brandColors.primary} />
            <stop offset="50%" stopColor={brandColors.primaryLight} />
            <stop offset="100%" stopColor={brandColors.primaryLighter} />
          </linearGradient>

          {/* Gradient for branches */}
          <linearGradient id="branch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={brandColors.primaryLight} />
            <stop offset="50%" stopColor={brandColors.primaryLighter} />
            <stop offset="100%" stopColor={brandColors.gold} />
          </linearGradient>
        </defs>

        {/* Animated path drawing */}
        <AnimatePresence mode="wait">
          <motion.path
            ref={pathRef}
            key={variant}
            d={pathData}
            stroke={'url(#' + gradientId + ')'}
            strokeWidth={variant === 'snake' ? 4 : 3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: variant === 'snake' ? 'url(#path-glow)' : 'none',
            }}
            initial={false}
            animate={
              prefersReducedMotion
                ? { pathLength: 1, pathOffset: 0 }
                : { pathLength: [0, 1], pathOffset: [0, 0] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 2.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.3,
                  }
            }
          />

          {/* Secondary animated glow path for snake variant */}
          {variant === 'snake' && !prefersReducedMotion && (
            <motion.path
              d={pathData}
              stroke={'url(#' + gradientId + ')'}
              strokeWidth={6}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.3}
              style={{ filter: 'url(#path-glow)' }}
              animate={{
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
              }}
              transition={{
                duration: 4,
                ease: 'linear',
                repeat: Infinity,
                delay: 1,
              }}
            />
          )}

          {/* Tree trunk (for tree variant) */}
          {variant === 'tree' && (
            <motion.path
              d={`M ${dimensions.width / 2} ${60 + nodeRadius} L ${dimensions.width / 2} ${dimensions.height - 60 - nodeRadius}`}
              stroke="url(#trunk-gradient)"
              strokeWidth={4}
              fill="none"
              strokeLinecap="round"
              initial={false}
              animate={
                prefersReducedMotion
                  ? { pathLength: 1 }
                  : { pathLength: [0, 1] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }
              }
              style={{ filter: 'url(#branch-glow)' }}
            />
          )}

          {/* Tree branches (for tree variant) */}
          {variant === 'tree' && (
            <>
              {Array.from({ length: nodeCount }).map((_, i) => {
                const y = 60 + i * (dimensions.height - 120) / (nodeCount - 1)
                const direction = i % 2 === 0 ? -1 : 1
                const branchLength = isMobile ? dimensions.width * 0.15 : dimensions.width * 0.22
                const branchX = dimensions.width / 2 + direction * branchLength
                const ctrlY = y - (dimensions.height - 120) / (nodeCount - 1) * 0.3

                return (
                  <motion.path
                    key={'branch-' + i}
                    d={`M ${dimensions.width / 2} ${y} Q ${dimensions.width / 2 + direction * branchLength * 0.5} ${ctrlY}, ${branchX} ${y}`}
                    stroke="url(#branch-gradient)"
                    strokeWidth={2.5}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={false}
                    animate={
                      prefersReducedMotion
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: [0, 1], opacity: [0, 1] }
                    }
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : {
                            duration: 1.2,
                            ease: [0.34, 1.56, 0.64, 1],
                            delay: 0.5 + i * 0.15
                          }
                    }
                    style={{ filter: 'url(#branch-glow)' }}
                  />
                )
              })}
            </>
          )}
        </AnimatePresence>

        {/* Reduced motion styles are handled in globals.css */}
      </svg>
    </div>
  )
}

// Interactive hover variant that responds to mouse position
export function InteractiveTimelineConnector({
  nodeCount = 4,
  variant = 'snake',
  className = '',
  onNodeHover,
}: {
  nodeCount?: number
  variant?: 'snake' | 'tree'
  className?: string
  onNodeHover?: (index: number) => void
}) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ minHeight: '400px' }}
      onMouseLeave={() => {
        setHoveredNode(null)
        onNodeHover?.(-1)
      }}
    >
      <TimelineConnector
        nodeCount={nodeCount}
        variant={variant}
      />

      {/* Invisible hit areas for node hover detection */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: nodeCount }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-auto rounded-full"
            style={{
              top: `calc(60px + ${i} * calc((100% - 120px) / ${nodeCount - 1}))`,
              transform: 'translateX(-50%) translateY(-50%)',
            }}
            onMouseEnter={() => {
              setHoveredNode(i)
              onNodeHover?.(i)
            }}
            onMouseLeave={() => {
              setHoveredNode(null)
              onNodeHover?.(-1)
            }}
          />
        ))}
      </div>
    </div>
  )
}