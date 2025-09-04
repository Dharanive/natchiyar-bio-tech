"use client"

import React, { useState, useEffect, useRef } from "react"
import type { ReactNode } from "react"
import { gsap } from "gsap"
import { Observer } from "gsap/Observer"
import { Award, Shield, CheckCircle, Star } from "lucide-react"

gsap.registerPlugin(Observer)

interface InfiniteScrollItem {
  content: ReactNode
}

interface InfiniteScrollProps {
  width?: string
  maxHeight?: string
  negativeMargin?: string
  items?: InfiniteScrollItem[]
  itemMinHeight?: number
  isTilted?: boolean
  tiltDirection?: "left" | "right"
  autoplay?: boolean
  autoplaySpeed?: number
  autoplayDirection?: "down" | "up"
  pauseOnHover?: boolean
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "100%",
  maxHeight = "28rem",
  negativeMargin = "-0.75rem",
  items = [],
  itemMinHeight = 180,
  isTilted = false,
  tiltDirection = "left",
  autoplay = true,
  autoplaySpeed = 0.6,
  autoplayDirection = "down",
  pauseOnHover = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const getTiltTransform = (): string => {
    if (!isTilted) return "none"
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)"
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (items.length === 0) return

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children)
    if (!divItems.length) return

    const firstItem = divItems[0]
    const itemStyle = getComputedStyle(firstItem)
    const itemHeight = firstItem.offsetHeight
    const itemMarginTop = Number.parseFloat(itemStyle.marginTop) || 0
    const totalItemHeight = itemHeight + itemMarginTop
    const totalHeight = itemHeight * items.length + itemMarginTop * (items.length - 1)

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight)

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight
      gsap.set(child, { y })
    })

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = "grabbing"
        }
      },
      onRelease: ({ target }) => {
        if (target instanceof HTMLElement) {
          target.style.cursor = "grab"
        }
      },
      onChange: ({ deltaY, isDragging, event }) => {
        const d = event.type === "wheel" ? -deltaY : deltaY
        const distance = isDragging ? d * 5 : d * 10
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          })
        })
      },
    })

    let rafId: number
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1
      const speedPerFrame = autoplaySpeed * directionFactor

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          })
        })
        rafId = requestAnimationFrame(tick)
      }

      rafId = requestAnimationFrame(tick)

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId)
        const startTicker = () => {
          rafId = requestAnimationFrame(tick)
        }

        container.addEventListener("mouseenter", stopTicker)
        container.addEventListener("mouseleave", startTicker)

        return () => {
          observer.kill()
          stopTicker()
          container.removeEventListener("mouseenter", stopTicker)
          container.removeEventListener("mouseleave", startTicker)
        }
      } else {
        return () => {
          observer.kill()
          rafId && cancelAnimationFrame(rafId)
        }
      }
    }

    return () => {
      observer.kill()
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [items, autoplay, autoplaySpeed, autoplayDirection, pauseOnHover, isTilted, tiltDirection, negativeMargin])

  return (
    <>
      <style>{`
        .infinite-scroll-wrapper {
          max-height: ${maxHeight};
          overflow: hidden;
        }
        .infinite-scroll-container {
          width: ${width};
          cursor: grab;
          user-select: none;
          margin: 0;
        }
        .infinite-scroll-item {
          height: ${itemMinHeight}px;
          margin-top: ${negativeMargin};
        }
      `}</style>

      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div className="infinite-scroll-container" ref={containerRef} style={{ transform: getTiltTransform() }}>
          {items.map((item, i) => (
            <div className="infinite-scroll-item" key={i}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: <Award className="h-12 w-12" aria-hidden="true" />,
      year: "2020",
      color: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      description: "Environmental Management",
      icon: <Shield className="h-12 w-12" aria-hidden="true" />,
      year: "2021",
      color: "text-green-600",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "HACCP Certified",
      description: "Food Safety Management",
      icon: <CheckCircle className="h-12 w-12" aria-hidden="true" />,
      year: "2019",
      color: "text-orange-600",
      badgeColor: "bg-orange-100 text-orange-800",
    },
    {
      id: 4,
      name: "GMP Certified",
      description: "Good Manufacturing Practices",
      icon: <Star className="h-12 w-12" aria-hidden="true" />,
      year: "2022",
      color: "text-emerald-700",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
  ]

  const items = certifications.map((cert) => ({
    content: (
      <div className="w-full">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="flex flex-col items-center text-center gap-6">
            <div aria-hidden="true" className={`h-12 w-12 ${cert.color}`}>
              {cert.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-base text-gray-600">{cert.description}</p>
            </div>
            <div className="mt-2">
              <span className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${cert.badgeColor}`}>
                Certified {cert.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  }))

  // Certificate images data
  const certificateImages = [
    {
      id: "iso-logo",
      img: "/images/c3.jpg",
      name: "ISO Certification",
      description: "International Organization for Standardization"
    },
    {
      id: "agmark",
      img: "/images/c3.jpg",
      name: "AGMARK",
      description: "Agricultural Marketing Standards"
    },
  ]

  return (
    <section className="pt-16 pb-0 bg-white relative overflow-hidden min-h-screen">
      {/* Wheat Background Image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/farmingagri.jpeg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-600 mb-4 text-balance">CERTIFICATIONS</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our commitment to quality and excellence is demonstrated through our comprehensive certifications and
            adherence to international standards.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Infinite Scroll Extended to Left Edge */}
          <div 
            className="bg-transparent  rounded-r-3xl overflow-hidden h-[42rem] relative"
            style={{ 
              marginLeft: 'calc(-50vw + 50%)',
              paddingLeft: '2rem'
            }}
          >
            <div className="w-full h-full">
              <InfiniteScroll
                items={items}
                width="100%"
                maxHeight="42rem"
                negativeMargin="1rem"
                itemMinHeight={280}
                isTilted={true}
                tiltDirection="left"
                autoplay
                autoplaySpeed={0.8}
                autoplayDirection="up"
                pauseOnHover
              />
            </div>
          </div>

          {/* Right Column - Certificate Image Cards */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {certificateImages.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`transform transition-all duration-700 ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <div className="relative overflow-hidden flex items-center justify-center">
                      <img
                        src={cert.img}
                        alt={cert.name}
                        className="max-w-full h-auto object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications