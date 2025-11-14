import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Experience</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          My journey building impactful products across healthcare, telecom, and AI
        </p>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-400">Professional Experience</h2>
        
        <ExperienceCard
          title="Software Developer"
          company="Telgoo5 Inc"
          location="New York City"
          period="Mar 2025 – Aug 2025"
          achievements={[
            "Engineered a configurable, rule-based enterprise platform for telecom service provisioning and order management, enabling dynamic workflow automation and integration with USPS APIs for address verification",
            "Optimized a scalable, permission-driven SaaS architecture featuring hierarchical access controls and rule engines, reducing custom code dependencies and increasing 39% deployment agility",
            "Introduced features like pagination, filtering, pdf generation, authentication, improving dashboard usability by 25%",
            "Created a Support Case Ticketing System for customer issue tracking and escalation management, reducing average response time by 40% and improving cross-team visibility through automated status notifications",
            "Integrated AI-assisted test automation to validate key workflows and perform regression checks, cutting QA cycle time by 35% and increasing defect detection accuracy"
          ]}
        />

        <ExperienceCard
          title="Software Engineer Intern"
          company="Interview Buddies"
          location="Arlington, TX"
          period="Nov 2024 – Mar 2025"
          achievements={[
            "Built an AI-powered text extraction pipeline using PyPDF2 and Gemini API for structured resume parsing with 25% higher accuracy",
            "Annotated 1,000+ resume samples to improve model readability and reduce format inconsistencies",
            "Automated LaTeX PDF generator, reducing manual document processing from hours to minutes",
            "Collaborated with QA team to refine AI responses through feedback-based evaluation loops"
          ]}
        />

        <ExperienceCard
          title="AI Engineer"
          company="University of Texas at Arlington"
          location="Arlington, TX"
          period="Aug 2023 – Mar 2025"
          achievements={[
            "Conducted research on fine-tuning general LLMs for medical use, leading to MedicoBot, an AI medical assistant, improving diagnostic accuracy by 18%",
            "Implemented LoRA fine-tuning on Mistral-7B for clinical note summarization and evidence-based treatment generation",
            "Designed evaluation prompts and benchmarking datasets to test reasoning, recall, and safety performance, enhancing model reliability",
            "Constructed an LLM evaluation framework using APIs (ChatGPT, Claude, Gemini) to automatically detect jailbreaks and bias, improving safety analysis workflow by 40%"
          ]}
        />

        <ExperienceCard
          title="Software Developer (Full Stack)"
          company="Dr Tupe Skin and Hair Clinic"
          location="India"
          period="June 2021 – June 2022"
          achievements={[
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
