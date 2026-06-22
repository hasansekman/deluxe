"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LENS_SIZE = 76;
const ZOOM = 1.45;

type LensState = {
  x: number;
  y: number;
  active: boolean;
};

export function MagnifyHeading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [{ x, y, active }, setLens] = useState<LensState>({
    x: 0,
    y: 0,
    active: false,
  });

  const updateLens = useCallback((clientX: number, clientY: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const rect = wrap.getBoundingClientRect();
    setLens({
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true,
    });
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      updateLens(event.clientX, event.clientY);
    },
    [updateLens]
  );

  const handleMouseLeave = useCallback(() => {
    setLens((current) => ({ ...current, active: false }));
  }, []);

  const radius = LENS_SIZE / 2;

  return (
    <div
      ref={wrapRef}
      className={cn("menu-magnify", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="menu-heading menu-magnify-base">{children}</h2>

      <div
        className={cn("menu-magnify-lens", active && "menu-magnify-lens-visible")}
        aria-hidden="true"
        style={{
          width: LENS_SIZE,
          height: LENS_SIZE,
          transform: `translate(${x - radius}px, ${y - radius}px)`,
        }}
      >
        <h2
          className="menu-heading menu-magnify-zoom"
          style={{
            transform: `translate(${radius - x}px, ${radius - y}px) scale(${ZOOM})`,
          }}
        >
          {children}
        </h2>
      </div>
    </div>
  );
}
