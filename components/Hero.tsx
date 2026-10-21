import Link from "next/link";
import Image from "next/image";
import DeveloperScene from "@/components/DeveloperScene";

export default function Hero() {
  return (
    <section className="hero-section relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="hero-copy relative z-10 space-y-7">
        <div className="eyebrow"><span className="availability-dot" /> AVAILABLE FOR SOFTWARE ENGINEERING ROLES</div>
        <div className="space-y-5">
          <p className="section-kicker">01 / HELLO, WORLD</p>
          <h1 className="hero-heading">Building software with <em>intention.</em></h1>
          <p className="hero-subheading">I'm Aishwarya — a software engineer working across full-stack applications, backend systems, and applied AI.</p>
        </div>
        <p className="hero-description">MS in Computer Science from UT Arlington. I care about thoughtful engineering, useful products, and technology that makes healthcare better.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#projects" className="btn">Explore my work <span aria-hidden="true">↗</span></Link>
          <Link href="/#experience" className="btn-outline">My experience <span aria-hidden="true">↓</span></Link>
        </div>
        <div className="hero-social">
          <a href="https://github.com/ash-1703" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/aishwarya-tupe/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="mailto:aishwaryasambhajitupe@gmail.com">Email ↗</a>
        </div>
      </div>
      <div className="hero-art">
        <DeveloperScene />
        <div className="portrait-frame">
          <Image src="/images/aishwarya_prof.webp" alt="Aishwarya Tupe" width={280} height={340} className="portrait-image" sizes="(max-width: 640px) 140px, 190px" priority />
          <div className="portrait-caption"><span>✿</span> AISHWARYA TUPE / ENGINEER</div>
        </div>
      </div>
    </section>
  );
}
