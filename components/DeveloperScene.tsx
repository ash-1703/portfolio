"use client";

import { useRef } from "react";

const petals = [
  { left: "5%", top: "8%", delay: "-4s", duration: "19s", size: "10px" },
  { left: "20%", top: "30%", delay: "-13s", duration: "24s", size: "8px" },
  { left: "35%", top: "2%", delay: "-8s", duration: "21s", size: "7px" },
  { left: "51%", top: "18%", delay: "-17s", duration: "27s", size: "10px" },
  { left: "68%", top: "7%", delay: "-6s", duration: "23s", size: "9px" },
  { left: "83%", top: "28%", delay: "-12s", duration: "20s", size: "8px" },
  { left: "95%", top: "12%", delay: "-1s", duration: "26s", size: "11px" },
  { left: "57%", top: "59%", delay: "-10s", duration: "25s", size: "7px" },
];

export default function DeveloperScene() {
  const scene = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || !scene.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    scene.current.style.setProperty("--tilt-x", `${(-y * 9).toFixed(2)}deg`);
    scene.current.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
  }

  function resetTilt() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      className="developer-visual"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-hidden="true"
    >
      <div className="visual-orbit" />
      <div className="visual-grid" />
      <div className="sakura-layer">
        {petals.map((petal, i) => (
          <span
            key={i}
            className="sakura-petal"
            style={{
              left: petal.left,
              top: petal.top,
              width: petal.size,
              height: petal.size,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
      </div>
      <div className="scene-perspective">
        <div className="scene-tilt" ref={scene}>
          <div className="floating-note note-api">
            <span className="note-status" /> REST API <strong>200 OK</strong>
          </div>
          <div className="floating-note note-data">
            <span className="note-symbol">◈</span>
            <div><strong>PostgreSQL</strong><small>Data layer</small></div>
          </div>
          <div className="floating-note note-ai">
            <span className="note-symbol">✳</span>
            <div><strong>AI systems</strong><small>Grounded answers</small></div>
          </div>
          <div className="code-window">
            <div className="code-window-top">
              <div className="window-lights"><i /><i /><i /></div>
              <span>portfolio.ts</span>
              <span className="window-mark">⌘</span>
            </div>
            <div className="code-body">
              <div><span className="line-n">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
              <div><span className="line-n">02</span>  name: <span className="code-green">&quot;Aishwarya&quot;</span>,</div>
              <div><span className="line-n">03</span>  focus: <span className="code-green">&quot;full-stack + AI&quot;</span>,</div>
              <div><span className="line-n">04</span>  values: [<span className="code-green">&quot;clarity&quot;</span>, <span className="code-green">&quot;impact&quot;</span>],</div>
              <div><span className="line-n">05</span>{"}"};</div>
              <div className="code-spacer" />
              <div><span className="line-n">06</span><span className="code-purple">await</span> <span className="code-blue">developer</span>.<span className="code-yellow">build</span>();<span className="code-cursor" /></div>
            </div>
            <div className="code-window-bottom">
              <span><span className="mini-dot" /> Ready to ship</span><span>TypeScript · Next.js</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scene-footnote">A LITTLE CODE. A LITTLE SAKURA. A LOT OF CURIOSITY.</div>
    </div>
  );
}
