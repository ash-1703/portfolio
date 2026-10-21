import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";

const roles = [
  {title:"Software Development Engineer",company:"Imperial Platforms Inc.",location:"Dallas, TX",period:"Sep 2025 – Jul 2026",achievements:[
    "Delivered 10+ full-stack features and modernized 20+ legacy workflows using React Native, Next.js, Node.js and MongoDB.",
    "Built REST API integrations and optimized queries across workflows handling 5,000+ records."
  ]},
  {title:"Software Developer",company:"Telgoo5 Inc.",location:"New York City, NY",period:"Mar 2025 – Aug 2025",achievements:[
    "Built a telecom operations platform supporting 20+ workflows across five user roles.",
    "Optimized SQL queries and dashboard performance, reducing response latency by 300ms."
  ]},
  {title:"Software Engineer Intern",company:"Interview Buddies",location:"Arlington, TX",period:"Nov 2024 – Mar 2025",achievements:[
    "Built Python and Gemini workflows to process and generate 300+ resumes.",
    "Developed a LaTeX/Jinja2 pipeline generating documents in under five seconds."
  ]},
  {title:"Research Assistant",company:"University of Texas at Arlington",location:"Arlington, TX",period:"Jul 2024 – Mar 2025",achievements:[
    "Built a clinical RAG prototype with SQL-backed retrieval.",
    "Evaluated 500+ LLM responses for factual reliability and medical ethics."
  ]},
  {title:"Software Developer",company:"Dr Tupe Skin and Hair Clinic",location:"Mumbai, India",period:"Jan 2021 – Jun 2022",achievements:[
    "Developed Java/Spring Boot modules for appointments, billing and patient records with SQL-backed storage.",
    "Improved clinic administrative efficiency by 50%."
  ]}
];
const internships=[
  {title:"Data Science Intern",company:"Elite Techno Groups",location:"Remote",period:"Aug 2021 – Sep 2021",achievements:["Created a Python/JSON inventory management system for stock and purchase tracking, reducing manual work by 30%."]},
  {title:"Machine Learning Intern",company:"Pie Infocomm Pvt. Ltd.",location:"Remote",period:"Jul 2021 – Aug 2021",achievements:["Modeled COVID-19-era airport traffic with decision trees and exploratory data analysis; reported 99.89% model accuracy."]}
];
const community=[
  {title:"Volunteering Intern",company:"Youth Empowerment Foundation",location:"Remote",period:"Jul 2021 – Aug 2021",achievements:["Led 3 educational webinars for 100+ participants and helped organize menstrual-health fundraising and COVID-19 relief."]},
  {title:"Technical Team Member",company:"Google Developer Student Clubs",location:"University Campus",period:"Aug 2021 – Aug 2022",achievements:["Conducted 4 coding workshops for 150+ participants and organized 3 Google Cloud Study Jams.","Built a Google Lens clone with Android Studio and Google Vision API."]}
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-14 py-14">
      <header className="space-y-4">
        <p className="section-eyebrow">EXPERIENCE / CAREER &amp; COMMUNITY</p>
        <h1 className="section-heading">Experience</h1>
        <p className="muted-text max-w-2xl text-sm leading-7">Selected contributions across full-stack software development, applied AI and community programs. Short, measurable and easy to scan.</p>
      </header>
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        {roles.map(item=><ExperienceCard key={item.company} {...item}/>)}
      </section>
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Earlier Internships</h2>
        {internships.map(item=><ExperienceCard key={item.company} {...item}/>)}
      </section>
      <section id="community" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold">Volunteering &amp; Community</h2>
        {community.map(item=><ExperienceCard key={item.company} {...item}/>)}
      </section>
      <Link href="/#experience" className="btn-outline">← Back to homepage</Link>
    </div>
  );
}
