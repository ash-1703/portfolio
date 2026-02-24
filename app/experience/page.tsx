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
          title="Software Developer"
          company="Telgoo5 Inc"
          location="New York City, NY"
          period="Mar 2025 – Aug 2025"
          achievements={[
            "Designed, tested, and shipped 15+ React + TypeScript components used in production dashboards, reducing user task completion time by ~40%.",
            "Built and maintained modular UI and API integrations, improving scalability and reducing repeated custom requests by ~30%.",
            "Collaborated with backend services and SQL databases to optimize data retrieval, improving page load times by 180–300ms.",
            "Troubleshot UI, API, and permission issues across browsers and environments, reducing support tickets by ~20%.",
            "Partnered with QA to validate fixes, document workflows, and ensure continued functionality during releases.",
            "Contributed to 10+ production deployments using Git-based CI/CD pipelines with minimal rollbacks."
          ]}
        />

        <ExperienceCard
          title="Software Engineer Intern"
          company="Interview Buddies"
          location="Arlington, TX"
          period="Nov 2024 – Mar 2025"
          achievements={[
            "Developed Python-based services to parse, validate, and normalize structured data consumed by frontend applications.",
            "Built and consumed REST APIs to automate document generation and data workflows.",
            "Improved backend data accuracy and reliability, reducing manual intervention by ~35%.",
            "Collaborated with frontend and QA teams to debug parsing and API edge cases in production workflows."
          ]}
        />

        <ExperienceCard
          title="Software Engineer"
          company="University of Texas – Arlington"
          location="Arlington, TX"
          period="July 2024 – Mar 2025"
          achievements={[
            "Built and maintained 3 internal React dashboards connected to Python APIs to support research and evaluation workflows.",
            "Developed backend services to process and store results from 500+ evaluation runs in SQL-backed data stores.",
            "Investigated and resolved 30+ UI bugs, API timeouts, and data consistency issues during weekly development cycles.",
            "Created setup guides and system documentation used to onboard 4 new research assistants and support ongoing maintenance."
          ]}
        />

        <ExperienceCard
          title="Software Developer (Full Stack)"
          company="Dr Tupe Skin and Hair Clinic"
          location="Mumbai, IN"
          period="Jan 2021 – Jun 2022"
          achievements={[
            "Built and maintained internal web tools supporting patient records, appointments, and billing for a clinic handling 20–30 visits per day.",
            "Developed frontend interfaces using JavaScript, HTML, and CSS used daily by 6 clinic staff members.",
            "Implemented backend logic and SQL-based storage for 1,500+ patient visits, treatments, and payment records.",
            "Worked directly with clinic staff to gather requirements and resolve 40+ workflow and data issues over time.",
            "Performed regular maintenance, bug fixes, and data updates to ensure uninterrupted system availability."
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
