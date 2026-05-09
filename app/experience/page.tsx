import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Experience</h1>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Full Stack Delivery + Responsible AI Integration 
        </p>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">Professional Experience</h2>
        
        <ExperienceCard
          title="Software Development Engineer"
          company="Imperial Platforms Inc"
          location="Dallas, TX"
          period="Jan 2026 – Present"
          achievements={[
            "Architected 10+ production-ready features for EdTech and FinTech platforms using React Native and Next.js, directly improving cross-platform user engagement.",
            "Reduced feature lead time by 30% by designing a reusable component architecture across 25+ UI modules, standardizing the frontend development lifecycle.",
            "Mitigated technical debt across 20+ legacy modules by spearheading a strategic migration from PHP to a scalable React/Node.js micro-architecture.",
            "Enhanced system throughput for 5,000+ concurrent records by optimizing MongoDB schemas with advanced indexing and query aggregation strategies.",
            "Spearheaded the overhaul of 10+ core APIs, implementing OAuth2 and Zod validation, which reduced production p99 error rates by 40%."
          ]}
        />

        <ExperienceCard
          title="Software Developer"
          company="Telgoo5 Inc"
          location="New York City, NY"
          period="Mar 2025 – Aug 2025"
          achievements={[
            "Engineered a role-based access control (RBAC) platform using PHP and MySQL, enabling 20+ daily operational workflows across 5 distinct user personas.",
            "Automated the end-to-end SIM/device lifecycle, reducing manual intervention by 25% and streamlining supply chain operations for telecom clients.",
            "Reduced backend latency by 300ms by refactoring inefficient SQL queries and optimizing data retrieval workflows, enhancing real-time system responsiveness.",
            "Achieved 99.9% data consistency by designing end-to-end validation suites to resolve complex API and database synchronization mismatches."
          ]}
        />

        <ExperienceCard
          title="Software Engineer Intern"
          company="Interview Buddies"
          location="Arlington, TX"
          period="Nov 2024 – Mar 2025"
          achievements={[
            "Built a high-throughput AI pipeline using Python and Gemini LLM to automate the generation of 300+ professional resumes with 95%+ parsing accuracy.",
            "Decreased document generation time to <5 seconds by engineering a custom LaTeX rendering engine integrated with Jinja2 and asynchronous subprocess execution.",
            "Optimized LLM output consistency across 8+ resume sections by designing a schema-driven prompt engineering framework to eliminate formatting hallucinations."
          ]}
        />

        <ExperienceCard
          title="Research Assistant"
          company="University of Texas at Arlington"
          location="Arlington, TX"
          period="Jul 2024 – Mar 2025"
          achievements={[
            "Developed a RAG-based LLM system for clinical decision support, increasing response accuracy by 35% on structured medical datasets.",
            "Minimized model hallucinations by architecting a hybrid retrieval system combining vector embeddings with SQL-backed verified medical records.",
            "Quantified LLM performance by designing scoring rubrics and test datasets to evaluate 500+ model responses for medical ethics and factual precision."
          ]}
        />

        <ExperienceCard
          title="Software Developer"
          company="Dr Tupe Skin and Hair Clinic"
          location="Mumbai, IN"
          period="Jan 2021 – Jun 2022"
          achievements={[
            "Digitized 1,500+ patient records by building a full-stack management system (AngularJS/SQL), increasing administrative efficiency by 50%."
          ]}
        />

        <ExperienceCard
          title="Data Science Intern"
          company="Elite Techno Groups"
          location="Remote"
          period="Aug 2021 - Sep 2021"
          achievements={[
            "Developed a comprehensive Inventory Management System using Python and JSON, which automated the process of managing store products, tracking stock levels, and recording purchase histories for retail stores, resulting in a 30% reduction in manual administrative tasks",
            "Utilized JSON files for data storage and manipulation, effectively converting Python dictionaries into JSON format and vice-versa, enabling seamless data retrieval and modification while maintaining data integrity and accuracy",
            "Designed and implemented various functionalities for the system, including product insertion, updating, deletion, and purchase tracking, along with user and admin level features to facilitate smooth operation and enhanced data management"
          ]}
        />

        <ExperienceCard
          title="Machine Learning Intern"
          company="Pie Infocomm Pvt. Ltd."
          location="Remote"
          period="Jul 2021 - Aug 2021"
          achievements={[
            "Developed a machine learning model using Python and DecisionTreeClassifier to analyze the impact of COVID-19 on airport traffic, achieving an impressive accuracy of 99.89% by training on historical data and predicting future traffic patterns",
            "Implemented predictive analytics to forecast passenger flow and airport traffic, utilizing regression analysis and feature engineering to support airports in strategizing business recovery and optimizing resource allocation",
            "Conducted extensive data wrangling, cleaning, and exploratory data analysis on airport traffic datasets from 2016 to 2021, leveraging libraries such as Pandas, Matplotlib, and Seaborn to visualize trends and identify key insights"
          ]}
        />
      </section>

      {/* Volunteering */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">Volunteering & Community</h2>
        
        <ExperienceCard
          title="Volunteering Intern"
          company="Youth Empowerment Foundation"
          location="Remote"
          period="Jul 2021 - Aug 2021"
          achievements={[
            "Led 3 webinars on front-end web development and probability & statistics, providing hands-on experience and training to over 100+ participants, enhancing their understanding of web technologies and mathematical concepts",
            "Secured ₹2,145 in charitable contributions through a campaign to support 50+ underprivileged individuals with access to sanitary pads and raised awareness on menstrual hygiene through 2 dedicated webinars",
            "Provided assistance to 20+ individuals facing medical emergencies and supported 50+ daily wage laborers during the COVID-19 pandemic through organized community relief efforts and virtual awareness sessions"
          ]}
        />

        <ExperienceCard
          title="Technical Team Member"
          company="Google Developer Students Club"
          location="University Campus"
          period="Aug 2021 - Aug 2022"
          achievements={[
            "Conducted 4 hands-on coding workshops for beginner and experienced developers, helping over 150 participants build side projects and compete in the Solution Challenge",
            "Organized and led 3 Google Cloud Study Jams and networking events to enhance cloud computing skills and foster collaboration among 100+ students",
            "Developed a Google Lens Application Clone using Android Studio and the Google Vision API, achieving 90% accuracy in object detection and text recognition"
          ]}
        />
      </section>

      {/* Back to Home */}
      <div className="text-center pt-8">
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
