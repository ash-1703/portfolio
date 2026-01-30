import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Experience</h1>
        <p className="text-lg text-slate-200 max-w-2xl mx-auto">
          Full‑Stack Delivery + Responsible AI Integration 
        </p>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">Professional Experience</h2>
        
        <ExperienceCard
          title="GenAI Engineer"
          company="Telgoo5 Inc"
          location="New York City, NY"
          period="Mar 2025 – Aug 2025"
          achievements={[
            "Designed and delivered AI tool training and enablement materials (user guides, evaluation rubrics, prompt templates, and workflow documentation) to support adoption of AI systems across QA and support teams.",
            "Conducted hands-on coaching and one-on-one support for team members using AI-assisted tools, translating complex LLM behavior into practical, role-specific guidance.",
            "Served as a primary reviewer and advisor for ~120 AI-generated outputs per week, evaluating accuracy, hallucinations, tone, and instruction adherence, and providing actionable feedback to improve user trust and adoption.",
            "Developed 10+ standardized evaluation rubrics and training frameworks, improving cross-team consistency and accelerating onboarding for new users and reviewers.",
            "Identified recurring AI failure patterns and converted them into training updates, FAQs, and regression scenarios, reducing repeated user issues and support requests.",
            "Partnered with cross-functional stakeholders to align AI usage guidelines, ensuring consistent support experiences and responsible AI adoption.",
            "Owned frontend implementation for 4 end-to-end dashboard workflows, from API contract definition to production UI.",
            "Built reusable table, form, and modal components used across 8+ internal screens, reducing duplicate UI logic.",
            "Integrated frontend with 10+ backend endpoints, handling pagination, filtering, error states, and empty states.",
            "Implemented client-side validation and loading states that reduced user-reported UI errors during releases.",
            "Reviewed and approved 30+ pull requests, focusing on readability, component structure, and edge cases.",
            "Supported live production issues during releases, investigating frontend logs and API responses to identify root causes."
          ]}
        />

        <ExperienceCard
          title="AI Engineer"
          company="Interview Buddies"
          location="Arlington, TX"
          period="Nov 2024 – Mar 2025"
          achievements={[
            "Supported AI onboarding and training initiatives by preparing structured datasets, examples, and annotated outputs used for demonstrations and evaluator training.",
            "Reviewed and audited 300+ AI-generated outputs, scoring clarity, factual accuracy, and formatting, and translating findings into clear training guidance for annotators and reviewers.",
            "Authored step-by-step annotation and evaluation guidelines, enabling new team members to reach quality benchmarks within two weeks.",
            "Provided ongoing user support and troubleshooting for AI-assisted workflows, identifying common issues and recommending process improvements.",
            "Collaborated with internal teams to refine AI workflows based on user feedback, improving consistency and reducing rework by ~20%.",
            "Processed and normalized data from 1,000+ documents used in automated workflows.",
            "Designed and integrated 10+ REST API endpoints, supporting data ingestion, transformation, and retrieval.",
            "Collaborated with 4 frontend engineers to resolve API edge cases and data mismatches during weekly release cycles.",
            "Added validation checks covering 20+ common data edge cases, reducing manual cleanup work.",
            "Wrote internal documentation covering API contracts and data assumptions used by frontend components."
          ]}
        />

        <ExperienceCard
          title="LLM Engineer"
          company="University of Texas – Arlington"
          location="Arlington, TX"
          period="July 2024 – Mar 2025"
          achievements={[
            "Evaluated and reviewed 300+ AI-generated clinical summaries, focusing on reasoning quality, factual accuracy, and adherence to domain guidelines.",
            "Developed training rubrics and quality standards to support consistent AI output review and user understanding of model limitations.",
            "Reduced unsafe or hallucinated outputs by ~18% by translating evaluation findings into updated training materials and usage guidance.",
            "Created instructional documentation explaining AI behavior, limitations, and best practices for non-technical users participating in evaluation workflows.",
            "Crafted task-specific prompts and evaluation protocols for MedicoBot and tested them on 150+ de-identified clinical cases, outperforming the base model’s diagnostic suggestions.",
            "Applied LoRA fine-tuning to Mistral-7B for clinical note summaries, reviewing dozens of notes per version against clinician-style checklists for missing or unsafe content.",
            "Created evaluation datasets covering 5+ specialties to compare reasoning, recall, and clinical safety across base and fine-tuned models.",
            "Built an LLM evaluation framework that runs hundreds of jailbreaks and bias probes in a single batch across multiple models and flags risky outputs for review.",
            "Logged and clustered dozens of hallucinated diagnoses and off-guideline advice cases and updated prompts and safety instructions to remove recurring issues in later test runs."
          ]}
        />

        <ExperienceCard
          title="Software Developer (Full Stack)"
          company="Dr Tupe Skin and Hair Clinic"
          location="India"
          period="June 2021 – June 2022"
          achievements={[
            "Led end-user onboarding and training for internal technology platforms supporting scheduling, patient records, and billing.",
            "Provided day-to-day technical support to clinic staff, resolving issues and adapting tools based on real-world workflow needs.",
            "Created user documentation and walkthroughs that improved system usability and reduced support requests.",
            "Partnered directly with non-technical users to understand pain points and translate them into system improvements.",
            "Built 5 custom RESTful APIs using Node.js, Express, and MongoDB, enabling seamless backend functionality for appointments, payments, and user authentication",
            "Increased user engagement by 40% by redesigning the homepage, appointment scheduling, and testimonials section using React, HTML, CSS, and JavaScript",
            "Implemented lazy loading, code splitting, image compression (WebP), and Webpack minification, improving user experience, reducing website loading time by 30%"
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
