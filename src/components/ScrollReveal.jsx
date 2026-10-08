import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Provides silky-smooth dynamic reveal animations as the user scrolls up or down.
 * When elements enter the viewport, they animate with optical blur-in and subtle scale.
 */
export const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'
  delay = 0,
  duration = 650,
  threshold = 0.12,
  once = false, // Set false so scrolling back UP dynamically re-triggers animations
  as = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // Respect users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          // Allows dynamic animation when scrolling back up
          setIsVisible(false);
        }
      });
    }, {
      threshold,
      rootMargin: '0px 0px -30px 0px'
    });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, once]);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-7 scale-[0.985] blur-[0.5px]';
        case 'fade-down':
          return 'opacity-0 -translate-y-7 scale-[0.985] blur-[0.5px]';
        case 'fade-left':
          return 'opacity-0 -translate-x-6';
        case 'fade-right':
          return 'opacity-0 translate-x-6';
        case 'zoom-in':
          return 'opacity-0 scale-95 blur-[0.5px]';
        case 'fade':
          return 'opacity-0';
        default:
          return 'opacity-0 translate-y-7';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0';
  };

  const Component = as;

  return (
    <Component
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        willChange: 'transform, opacity'
      }}
      className={`transition-all transform-gpu ${getAnimationStyles()} ${className}`}
    >
      {children}
    </Component>
  );
};
