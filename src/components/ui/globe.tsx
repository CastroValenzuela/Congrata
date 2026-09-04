"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface GlobeMarker {
  lat: number;
  lng: number;
  label?: string;
}

export interface GlobeConnection {
  from: [number, number];
  to: [number, number];
}

export interface GlobeProps {
  className?: string;
  size?: number;
  dotColor?: string;
  arcColor?: string;
  markerColor?: string;
  autoRotateSpeed?: number;
  connections?: GlobeConnection[];
  markers?: GlobeMarker[];
}

// Curated Global Network representing CONGRATA's Transnational Mobility hubs
export const CONGRATA_MARKERS: GlobeMarker[] = [
  { lat: 37.78, lng: -122.42, label: "UC California" },
  { lat: 19.43, lng: -99.13, label: "Mexico City (GREP)" },
  { lat: 25.68, lng: -100.31, label: "Monterrey STEM Hub" },
  { lat: 42.36, lng: -71.05, label: "Boston / MIT Hub" },
  { lat: 51.51, lng: -0.13, label: "London Research" },
  { lat: 46.20, lng: 6.14, label: "Geneva / CERN" },
  { lat: 35.68, lng: 139.69, label: "Tokyo Innovation" },
  { lat: -23.55, lng: -46.63, label: "São Paulo LatAm" },
  { lat: 4.71, lng: -74.07, label: "Bogotá Hub" },
  { lat: 48.85, lng: 2.35, label: "Paris Science" },
];

export const CONGRATA_CONNECTIONS: GlobeConnection[] = [
  // Transnational links between UC California & Mexico
  { from: [37.78, -122.42], to: [19.43, -99.13] },
  { from: [37.78, -122.42], to: [25.68, -100.31] },
  
  // Transnational links to Europe (London, Geneva, Paris)
  { from: [19.43, -99.13], to: [51.51, -0.13] },
  { from: [37.78, -122.42], to: [46.20, 6.14] },
  { from: [19.43, -99.13], to: [48.85, 2.35] },

  // Transnational links across Americas
  { from: [19.43, -99.13], to: [4.71, -74.07] },
  { from: [37.78, -122.42], to: [-23.55, -46.63] },

  // Links to Asia & Boston
  { from: [37.78, -122.42], to: [42.36, -71.05] },
  { from: [37.78, -122.42], to: [35.68, 139.69] },
];

function latLngToXYZ(
  lat: number,
  lng: number,
  radius: number
): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(
  x: number,
  y: number,
  z: number,
  angle: number
): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(
  x: number,
  y: number,
  z: number,
  angle: number
): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

function project(
  x: number,
  y: number,
  z: number,
  cx: number,
  cy: number,
  fov: number
): [number, number, number] {
  const scale = fov / (fov + z);
  return [x * scale + cx, y * scale + cy, z];
}

export function Globe({
  className,
  size = 600,
  dotColor = "rgba(34, 211, 238, ALPHA)", // Cyan
  arcColor = "rgba(34, 211, 238, 0.45)",
  markerColor = "rgba(45, 212, 191, 1)", // Teal
  autoRotateSpeed = 0.0018,
  connections = CONGRATA_CONNECTIONS,
  markers = CONGRATA_MARKERS,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotYRef = useRef(0.4);
  const rotXRef = useRef(0.3);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startY: number;
    startRotY: number;
    startRotX: number;
  }>({ active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0 });
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  // Generate globe dots (Fibonacci sphere distribution)
  const dotsRef = useRef<[number, number, number][]>([]);

  useEffect(() => {
    const dots: [number, number, number][] = [];
    const numDots = 1200;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.cos(phi);
      const z = Math.sin(theta) * Math.sin(phi);
      dots.push([x, y, z]);
    }
    dotsRef.current = dots;
  }, []);

  // Track canvas dimensions and visibility
  const dimensionsRef = useRef<{ w: number; h: number; dpr: number }>({ w: 0, h: 0, dpr: 1 });
  const isVisibleRef = useRef(true);

  const draw = useCallback(() => {
    if (!isVisibleRef.current) {
      animRef.current = requestAnimationFrame(draw);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h, dpr } = dimensionsRef.current;
    if (w === 0 || h === 0) return;

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.38;
    const fov = 600;

    // Auto rotate if not dragging
    if (!dragRef.current.active) {
      rotYRef.current += autoRotateSpeed;
    }

    timeRef.current += 0.015;
    const time = timeRef.current;

    ctx.clearRect(0, 0, w, h);

    // Outer atmospheric glow
    const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
    glowGrad.addColorStop(0, "rgba(8, 145, 178, 0.08)");
    glowGrad.addColorStop(0.5, "rgba(34, 211, 238, 0.03)");
    glowGrad.addColorStop(1, "rgba(8, 145, 178, 0)");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, w, h);

    // Globe outline
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(34, 211, 238, 0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const ry = rotYRef.current;
    const rx = rotXRef.current;

    // Draw dots
    const dots = dotsRef.current;
    for (let i = 0; i < dots.length; i++) {
      let [x, y, z] = dots[i];
      x *= radius;
      y *= radius;
      z *= radius;

      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);

      if (z > 0) continue; // back-face cull

      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const depthAlpha = Math.max(0.1, 1 - (z + radius) / (2 * radius));
      const dotSize = 1 + depthAlpha * 0.9;

      ctx.beginPath();
      ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = dotColor.replace("ALPHA", depthAlpha.toFixed(2));
      ctx.fill();
    }

    // Draw connections as flight arcs
    for (const conn of connections) {
      const [lat1, lng1] = conn.from;
      const [lat2, lng2] = conn.to;

      let [x1, y1, z1] = latLngToXYZ(lat1, lng1, radius);
      let [x2, y2, z2] = latLngToXYZ(lat2, lng2, radius);

      [x1, y1, z1] = rotateX(x1, y1, z1, rx);
      [x1, y1, z1] = rotateY(x1, y1, z1, ry);
      [x2, y2, z2] = rotateX(x2, y2, z2, rx);
      [x2, y2, z2] = rotateY(x2, y2, z2, ry);

      if (z1 > radius * 0.3 && z2 > radius * 0.3) continue;

      const [sx1, sy1] = project(x1, y1, z1, cx, cy, fov);
      const [sx2, sy2] = project(x2, y2, z2, cx, cy, fov);

      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const midZ = (z1 + z2) / 2;
      const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
      const arcHeight = radius * 1.25;
      const elevX = (midX / midLen) * arcHeight;
      const elevY = (midY / midLen) * arcHeight;
      const elevZ = (midZ / midLen) * arcHeight;
      const [scx, scy] = project(elevX, elevY, elevZ, cx, cy, fov);

      ctx.beginPath();
      ctx.moveTo(sx1, sy1);
      ctx.quadraticCurveTo(scx, scy, sx2, sy2);
      ctx.strokeStyle = arcColor;
      ctx.lineWidth = 1.3;
      ctx.stroke();

      // Traveling pulse dot along the arc
      const t = (Math.sin(time * 1.3 + lat1 * 0.15) + 1) / 2;
      const tx = (1 - t) * (1 - t) * sx1 + 2 * (1 - t) * t * scx + t * t * sx2;
      const ty = (1 - t) * (1 - t) * sy1 + 2 * (1 - t) * t * scy + t * t * sy2;

      ctx.beginPath();
      ctx.arc(tx, ty, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = markerColor;
      ctx.shadowColor = markerColor;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Draw markers
    for (const marker of markers) {
      let [x, y, z] = latLngToXYZ(marker.lat, marker.lng, radius);
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);

      if (z > radius * 0.1) continue;

      const [sx, sy] = project(x, y, z, cx, cy, fov);

      // Pulse ring animation
      const pulse = Math.sin(time * 2 + marker.lat) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(sx, sy, 4 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34, 211, 238, ${0.25 + pulse * 0.35})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Core luminous dot
      ctx.beginPath();
      ctx.arc(sx, sy, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();

      // Location label
      if (marker.label) {
        ctx.font = "600 11px Outfit, -apple-system, sans-serif";
        ctx.fillStyle = "rgba(226, 232, 240, 0.85)";
        ctx.fillText(marker.label, sx + 9, sy + 3.5);
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, [dotColor, arcColor, markerColor, autoRotateSpeed, connections, markers]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ResizeObserver: only update canvas dimensions when actually resized
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;
        if (width > 0 && height > 0) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          const ctx = canvas.getContext("2d");
          if (ctx) ctx.scale(dpr, dpr);
          dimensionsRef.current = { w: width, h: height, dpr };
        }
      }
    });
    resizeObserver.observe(canvas);

    // IntersectionObserver: pause rendering when globe is offscreen
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [draw]);

  // Pointer drag event handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      startRotY: rotYRef.current,
      startRotX: rotXRef.current,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    rotYRef.current = dragRef.current.startRotY + dx * 0.005;
    rotXRef.current = Math.max(
      -1,
      Math.min(1, dragRef.current.startRotX + dy * 0.005)
    );
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current.active = false;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full cursor-grab active:cursor-grabbing select-none touch-none", className)}
      style={{ width: size, height: size }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    />
  );
}

export default Globe;
