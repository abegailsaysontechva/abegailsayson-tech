import React, { useState, useEffect, useRef } from 'react';

export const MouseFollower: React.FC = () => {
  // Global cursor states for the movable orange mouse follow light
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isCurrentlyMoving, setIsCurrentlyMoving] = useState(false);

  // References for tracking velocity & coordinates of mouse
  const lastMousePos = useRef({ x: 0, y: 0, time: Date.now() });
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Global mouse cursor tracker for the orange light follow style
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      const dt = now - lastMousePos.current.time;
      if (dt > 10) {
        lastMousePos.current = { x: e.clientX, y: e.clientY, time: now };
      }

      setIsCurrentlyMoving(true);

      // Debounce to restore static aura
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      moveTimeoutRef.current = setTimeout(() => {
        setIsCurrentlyMoving(false);
      }, 120);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  // Smooth lagging follower loop
  useEffect(() => {
    let animationFrameId: number;
    
    const updateFollower = () => {
      setFollowerPosition((prev) => {
        const easingFactor = 0.16; // Elastic trailing coefficient
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        
        return {
          x: prev.x + dx * easingFactor,
          y: prev.y + dy * easingFactor,
        };
      });
      
      animationFrameId = requestAnimationFrame(updateFollower);
    };

    animationFrameId = requestAnimationFrame(updateFollower);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    /* MOVABLE MOUSE GRAPHICAL LIGHT FOLLOWER */
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 mix-blend-screen hidden md:block"
      style={{
        transform: `translate3d(${followerPosition.x - 24}px, ${followerPosition.y - 24}px, 0)`,
        transition: 'opacity 0.25s ease-out'
      }}
    >
      {/* Inner Light Core (Changes orange on move, blue/purple on standby) */}
      <div className={`absolute left-[18px] top-[18px] w-3 h-3 rounded-full transition-all duration-300 ${
        isCurrentlyMoving 
          ? 'bg-brand-accent scale-125 shadow-[0_0_12px_#f97316]' 
          : 'bg-indigo-400 scale-90 shadow-[0_0_6px_#818cf8]'
      }`} />

      {/* Glowing Light Outer Ring Halo (Dynamic Orange Light on mouse movement!) */}
      <div 
        className="w-12 h-12 rounded-full border border-dashed transition-all duration-300 ease-out flex items-center justify-center"
        style={{
          borderColor: isCurrentlyMoving ? 'rgba(249, 115, 22, 0.7)' : 'rgba(129, 140, 248, 0.25)',
          transform: isCurrentlyMoving 
            ? 'scale(1.2) rotate(180deg)' 
            : 'scale(0.8) rotate(0deg)',
          background: isCurrentlyMoving 
            ? 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(129, 140, 248, 0.04) 0%, transparent 60%)',
          transitionDuration: '250ms'
        }}
      >
        {/* Tiny vector orientation indicators */}
        <div className={`w-1 h-1 rounded-full absolute top-0 ${isCurrentlyMoving ? 'bg-brand-accent' : 'bg-transparent'}`} />
        <div className={`w-1 h-1 rounded-full absolute bottom-0 ${isCurrentlyMoving ? 'bg-brand-accent' : 'bg-transparent'}`} />
      </div>
    </div>
  );
};

export default MouseFollower;
