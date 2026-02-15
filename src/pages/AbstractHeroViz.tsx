import { useEffect, useRef } from 'react';

/**
 * AbstractHeroViz — A premium animated visualization inspired by Bain's Strategy hero.
 * Renders flowing organic shapes, morphing connection lines, and floating governance nodes
 * that suggest transformation, risk assessment, and strategic navigation.
 *
 * Uses pure Canvas API for smooth 60fps animation. Falls back gracefully on low-power devices.
 */
export default function AbstractHeroViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number;
    let height: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // ── Resize ──
    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Color palette (Discimen navy/steel blue) ──
    const NAVY = { r: 15, g: 43, b: 70 };      // #0f2b46
    const STEEL = { r: 15, g: 67, b: 119 };     // #0f4377
    const LIGHT = { r: 148, g: 176, b: 204 };   // muted blue-gray
    const ACCENT = { r: 59, g: 130, b: 191 };   // vibrant mid-blue

    // ── Nodes — floating strategic decision points ──
    interface Node {
      x: number; y: number;
      baseX: number; baseY: number;
      vx: number; vy: number;
      radius: number;
      phase: number;
      speed: number;
      orbitRadius: number;
      opacity: number;
      ring: boolean;
      pulse: number;
    }

    const nodeCount = 18;
    const nodes: Node[] = [];

    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;
        nodes.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2 + Math.random() * 4,
          phase: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.004,
          orbitRadius: 20 + Math.random() * 60,
          opacity: 0.15 + Math.random() * 0.45,
          ring: Math.random() > 0.65,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }
    initNodes();

    // ── Organic blobs — morphing shapes suggesting transformation ──
    interface Blob {
      cx: number; cy: number;
      radiusX: number; radiusY: number;
      rotation: number;
      rotSpeed: number;
      phase: number;
      color: { r: number; g: number; b: number };
      opacity: number;
      breathSpeed: number;
      breathAmp: number;
    }

    const blobs: Blob[] = [
      {
        cx: 0.65, cy: 0.3,
        radiusX: 180, radiusY: 140,
        rotation: 0, rotSpeed: 0.0003,
        phase: 0,
        color: STEEL,
        opacity: 0.06,
        breathSpeed: 0.001,
        breathAmp: 20,
      },
      {
        cx: 0.4, cy: 0.6,
        radiusX: 150, radiusY: 120,
        rotation: Math.PI / 3, rotSpeed: -0.0004,
        phase: Math.PI / 2,
        color: NAVY,
        opacity: 0.05,
        breathSpeed: 0.0012,
        breathAmp: 25,
      },
      {
        cx: 0.8, cy: 0.7,
        radiusX: 110, radiusY: 90,
        rotation: Math.PI / 6, rotSpeed: 0.0005,
        phase: Math.PI,
        color: ACCENT,
        opacity: 0.04,
        breathSpeed: 0.0008,
        breathAmp: 15,
      },
    ];

    // ── Flow lines — curved paths connecting nodes ──
    function drawFlowLine(
      ctx: CanvasRenderingContext2D,
      x1: number, y1: number,
      x2: number, y2: number,
      opacity: number,
      t: number
    ) {
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Perpendicular offset for curve
      const perpX = -dy / dist;
      const perpY = dx / dist;
      const curveOffset = Math.sin(t * 0.001 + dist * 0.01) * dist * 0.15;

      const cpx = mx + perpX * curveOffset;
      const cpy = my + perpY * curveOffset;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(cpx, cpy, x2, y2);
      ctx.strokeStyle = `rgba(${STEEL.r}, ${STEEL.g}, ${STEEL.b}, ${opacity * 0.35})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Traveling dot along the line
      const dotT = ((t * 0.0005 + dist * 0.001) % 1);
      const dotX = (1 - dotT) * (1 - dotT) * x1 + 2 * (1 - dotT) * dotT * cpx + dotT * dotT * x2;
      const dotY = (1 - dotT) * (1 - dotT) * y1 + 2 * (1 - dotT) * dotT * cpy + dotT * dotT * y2;

      ctx.beginPath();
      ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity * 0.6})`;
      ctx.fill();
    }

    // ── Draw an organic blob shape ──
    function drawBlob(
      ctx: CanvasRenderingContext2D,
      blob: Blob,
      t: number
    ) {
      const cx = blob.cx * width;
      const cy = blob.cy * height;
      const breath = Math.sin(t * blob.breathSpeed + blob.phase) * blob.breathAmp;
      const rx = blob.radiusX + breath;
      const ry = blob.radiusY + breath * 0.7;
      const rot = blob.rotation + t * blob.rotSpeed;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      // Organic shape using multiple bezier curves with noise
      ctx.beginPath();
      const points = 8;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const noise = Math.sin(angle * 3 + t * 0.001 + blob.phase) * 0.15 +
                      Math.sin(angle * 5 + t * 0.0007) * 0.08;
        const r = (Math.cos(angle) * Math.cos(angle) * rx * rx + Math.sin(angle) * Math.sin(angle) * ry * ry);
        const radius = Math.sqrt(r) * (1 + noise);
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          const prevAngle = ((i - 1) / points) * Math.PI * 2;
          const prevNoise = Math.sin(prevAngle * 3 + t * 0.001 + blob.phase) * 0.15 +
                            Math.sin(prevAngle * 5 + t * 0.0007) * 0.08;
          const prevR = Math.sqrt(
            Math.cos(prevAngle) * Math.cos(prevAngle) * rx * rx +
            Math.sin(prevAngle) * Math.sin(prevAngle) * ry * ry
          ) * (1 + prevNoise);

          const midAngle = (prevAngle + angle) / 2;
          const midNoise = Math.sin(midAngle * 3 + t * 0.001 + blob.phase) * 0.2;
          const midR = Math.sqrt(
            Math.cos(midAngle) * Math.cos(midAngle) * rx * rx +
            Math.sin(midAngle) * Math.sin(midAngle) * ry * ry
          ) * (1 + midNoise);

          const cpx = Math.cos(midAngle) * midR;
          const cpy = Math.sin(midAngle) * midR;
          ctx.quadraticCurveTo(cpx, cpy, px, py);
        }
      }
      ctx.closePath();

      // Gradient fill
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
      grad.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity * 1.2})`);
      grad.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity * 0.5})`);
      grad.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    }

    // ── Scan line — horizontal sweep suggesting assessment ──
    function drawScanLine(ctx: CanvasRenderingContext2D, t: number) {
      const y = ((t * 0.00015) % 1) * height;
      const grad = ctx.createLinearGradient(0, y - 40, 0, y + 40);
      grad.addColorStop(0, 'rgba(59, 130, 191, 0)');
      grad.addColorStop(0.5, 'rgba(59, 130, 191, 0.03)');
      grad.addColorStop(1, 'rgba(59, 130, 191, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - 40, width, 80);
    }

    // ── Main animation loop ──
    function draw(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Layer 1: Organic blobs (background)
      for (const blob of blobs) {
        drawBlob(ctx, blob, t);
      }

      // Layer 2: Scan line
      drawScanLine(ctx, t);

      // Layer 3: Update and draw connections between nearby nodes
      const connectionDist = Math.min(width, height) * 0.35;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        // Orbital drift
        a.x = a.baseX + Math.cos(t * a.speed + a.phase) * a.orbitRadius;
        a.y = a.baseY + Math.sin(t * a.speed * 0.7 + a.phase) * a.orbitRadius * 0.6;
        // Slow wander
        a.baseX += a.vx;
        a.baseY += a.vy;
        // Wrap around
        if (a.baseX < -50) a.baseX = width + 50;
        if (a.baseX > width + 50) a.baseX = -50;
        if (a.baseY < -50) a.baseY = height + 50;
        if (a.baseY > height + 50) a.baseY = -50;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * Math.min(a.opacity, b.opacity);
            drawFlowLine(ctx, a.x, a.y, b.x, b.y, opacity, t);
          }
        }
      }

      // Layer 4: Draw nodes
      for (const node of nodes) {
        const pulseScale = 1 + Math.sin(t * 0.003 + node.pulse) * 0.2;

        if (node.ring) {
          // Ring node — suggests governance checkpoint
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * pulseScale * 1.8, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${node.opacity * 0.4})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
        const dotGrad = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * pulseScale
        );
        dotGrad.addColorStop(0, `rgba(${LIGHT.r}, ${LIGHT.g}, ${LIGHT.b}, ${node.opacity})`);
        dotGrad.addColorStop(1, `rgba(${STEEL.r}, ${STEEL.g}, ${STEEL.b}, ${node.opacity * 0.3})`);
        ctx.fillStyle = dotGrad;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale * 2.5, 0, Math.PI * 2);
        const glowGrad = ctx.createRadialGradient(
          node.x, node.y, node.radius * pulseScale * 0.5,
          node.x, node.y, node.radius * pulseScale * 2.5
        );
        glowGrad.addColorStop(0, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${node.opacity * 0.15})`);
        glowGrad.addColorStop(1, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0)`);
        ctx.fillStyle = glowGrad;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden="true"
    />
  );
}
