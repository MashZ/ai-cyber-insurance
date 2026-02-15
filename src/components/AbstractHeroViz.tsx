import { useEffect, useRef } from 'react';

/**
 * AbstractHeroViz — Ambient animated background visualization.
 * Renders flowing organic shapes, morphing connection lines, and floating nodes
 * suggesting transformation, governance, and strategic navigation.
 * Designed as a full-page fixed background — intentionally subtle.
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

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Palette ──
    const NAVY = { r: 15, g: 43, b: 70 };
    const STEEL = { r: 15, g: 67, b: 119 };
    const LIGHT = { r: 148, g: 176, b: 204 };
    const ACCENT = { r: 59, g: 130, b: 191 };

    // ── Nodes ──
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

    const nodeCount = 22;
    const nodes: Node[] = [];

    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        const baseX = Math.random() * width;
        const baseY = Math.random() * height;
        nodes.push({
          x: baseX, y: baseY,
          baseX, baseY,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: 1.5 + Math.random() * 3,
          phase: Math.random() * Math.PI * 2,
          speed: 0.001 + Math.random() * 0.003,
          orbitRadius: 15 + Math.random() * 50,
          opacity: 0.08 + Math.random() * 0.25,
          ring: Math.random() > 0.7,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }
    initNodes();

    // ── Organic blobs ──
    interface Blob {
      cx: number; cy: number;
      radiusX: number; radiusY: number;
      rotation: number; rotSpeed: number;
      phase: number;
      color: { r: number; g: number; b: number };
      opacity: number;
      breathSpeed: number; breathAmp: number;
    }

    const blobs: Blob[] = [
      {
        cx: 0.7, cy: 0.25,
        radiusX: 220, radiusY: 170,
        rotation: 0, rotSpeed: 0.00025,
        phase: 0, color: STEEL,
        opacity: 0.035,
        breathSpeed: 0.0008, breathAmp: 25,
      },
      {
        cx: 0.3, cy: 0.55,
        radiusX: 180, radiusY: 140,
        rotation: Math.PI / 3, rotSpeed: -0.0003,
        phase: Math.PI / 2, color: NAVY,
        opacity: 0.03,
        breathSpeed: 0.001, breathAmp: 20,
      },
      {
        cx: 0.85, cy: 0.75,
        radiusX: 140, radiusY: 110,
        rotation: Math.PI / 6, rotSpeed: 0.00035,
        phase: Math.PI, color: ACCENT,
        opacity: 0.025,
        breathSpeed: 0.0007, breathAmp: 18,
      },
      {
        cx: 0.15, cy: 0.85,
        radiusX: 120, radiusY: 100,
        rotation: Math.PI / 4, rotSpeed: 0.0002,
        phase: Math.PI * 1.5, color: STEEL,
        opacity: 0.02,
        breathSpeed: 0.0009, breathAmp: 15,
      },
    ];

    // ── Flow line with traveling dot ──
    function drawFlowLine(
      ctx: CanvasRenderingContext2D,
      x1: number, y1: number,
      x2: number, y2: number,
      opacity: number, t: number
    ) {
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const perpX = -dy / dist;
      const perpY = dx / dist;
      const curveOffset = Math.sin(t * 0.0008 + dist * 0.01) * dist * 0.12;
      const cpx = mx + perpX * curveOffset;
      const cpy = my + perpY * curveOffset;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(cpx, cpy, x2, y2);
      ctx.strokeStyle = `rgba(${STEEL.r}, ${STEEL.g}, ${STEEL.b}, ${opacity * 0.2})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();

      // Traveling dot
      const dotT = ((t * 0.0004 + dist * 0.001) % 1);
      const dotX = (1 - dotT) * (1 - dotT) * x1 + 2 * (1 - dotT) * dotT * cpx + dotT * dotT * x2;
      const dotY = (1 - dotT) * (1 - dotT) * y1 + 2 * (1 - dotT) * dotT * cpy + dotT * dotT * y2;

      ctx.beginPath();
      ctx.arc(dotX, dotY, 1.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity * 0.4})`;
      ctx.fill();
    }

    // ── Blob drawing ──
    function drawBlob(ctx: CanvasRenderingContext2D, blob: Blob, t: number) {
      const cx = blob.cx * width;
      const cy = blob.cy * height;
      const breath = Math.sin(t * blob.breathSpeed + blob.phase) * blob.breathAmp;
      const rx = blob.radiusX + breath;
      const ry = blob.radiusY + breath * 0.7;
      const rot = blob.rotation + t * blob.rotSpeed;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);

      ctx.beginPath();
      const pts = 8;
      for (let i = 0; i <= pts; i++) {
        const angle = (i / pts) * Math.PI * 2;
        const noise =
          Math.sin(angle * 3 + t * 0.0008 + blob.phase) * 0.12 +
          Math.sin(angle * 5 + t * 0.0006) * 0.06;
        const r = Math.sqrt(
          Math.cos(angle) ** 2 * rx * rx + Math.sin(angle) ** 2 * ry * ry
        ) * (1 + noise);
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          const pa = ((i - 1) / pts) * Math.PI * 2;
          const ma = (pa + angle) / 2;
          const mn =
            Math.sin(ma * 3 + t * 0.0008 + blob.phase) * 0.15;
          const mr = Math.sqrt(
            Math.cos(ma) ** 2 * rx * rx + Math.sin(ma) ** 2 * ry * ry
          ) * (1 + mn);
          ctx.quadraticCurveTo(Math.cos(ma) * mr, Math.sin(ma) * mr, px, py);
        }
      }
      ctx.closePath();

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(rx, ry));
      grad.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity})`);
      grad.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${blob.opacity * 0.4})`);
      grad.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    // ── Slow scan line ──
    function drawScanLine(ctx: CanvasRenderingContext2D, t: number) {
      const y = ((t * 0.0001) % 1) * height;
      const grad = ctx.createLinearGradient(0, y - 50, 0, y + 50);
      grad.addColorStop(0, 'rgba(59, 130, 191, 0)');
      grad.addColorStop(0.5, 'rgba(59, 130, 191, 0.015)');
      grad.addColorStop(1, 'rgba(59, 130, 191, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, y - 50, width, 100);
    }

    // ── Render loop ──
    function draw(t: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Blobs
      for (const blob of blobs) drawBlob(ctx, blob, t);

      // Scan
      drawScanLine(ctx, t);

      // Connections
      const maxDist = Math.min(width, height) * 0.3;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x = a.baseX + Math.cos(t * a.speed + a.phase) * a.orbitRadius;
        a.y = a.baseY + Math.sin(t * a.speed * 0.7 + a.phase) * a.orbitRadius * 0.6;
        a.baseX += a.vx;
        a.baseY += a.vy;
        if (a.baseX < -60) a.baseX = width + 60;
        if (a.baseX > width + 60) a.baseX = -60;
        if (a.baseY < -60) a.baseY = height + 60;
        if (a.baseY > height + 60) a.baseY = -60;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * Math.min(a.opacity, b.opacity);
            drawFlowLine(ctx, a.x, a.y, b.x, b.y, op, t);
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        const ps = 1 + Math.sin(t * 0.002 + n.pulse) * 0.15;

        if (n.ring) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * ps * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${n.opacity * 0.25})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * ps, 0, Math.PI * 2);
        const dg = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * ps);
        dg.addColorStop(0, `rgba(${LIGHT.r}, ${LIGHT.g}, ${LIGHT.b}, ${n.opacity * 0.7})`);
        dg.addColorStop(1, `rgba(${STEEL.r}, ${STEEL.g}, ${STEEL.b}, ${n.opacity * 0.2})`);
        ctx.fillStyle = dg;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * ps * 2.5, 0, Math.PI * 2);
        const gg = ctx.createRadialGradient(
          n.x, n.y, n.radius * ps * 0.5,
          n.x, n.y, n.radius * ps * 2.5
        );
        gg.addColorStop(0, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${n.opacity * 0.08})`);
        gg.addColorStop(1, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0)`);
        ctx.fillStyle = gg;
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
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
