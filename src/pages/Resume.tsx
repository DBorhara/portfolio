import React from "react";
import Box from "@/components/Resume/Box";
import ContactIcon from "@/components/Resume/ContactIcon";
import Section from "@/components/Resume/Section";
// Lottie Files
import linkedin from "@/LottieFiles/linkedIn.json";
import email from "@/LottieFiles/email.json";
import phone from "@/LottieFiles/phone.json";
import github from "@/LottieFiles/github.json";
// Types
import { IconProps } from "@/types";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import { Link } from "react-router-dom";

const ICONS: IconProps[] = [
  { data: phone, label: "917-2047-1702" },
  { data: email, label: "depakborhara@gmail.com", loop: true },
  {
    data: linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/depakborhara",
  },
  {
    data: github,
    label: "GitHub",
    link: "https://github.com/DBorhara",
    loop: true,
  },
];

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col items-center border border-purple-500 shadow-2xl p-8 rounded-lg max-w-prose mx-auto mt-10">
      <h1 className="text-5xl font-bold mb-5 text-purple-500">Depak Borhara</h1>

      <div className="grid md:grid-cols-4 md:gap-6 justify-items-center text-sm dark:text-gray-200 md:mb-6">
        {ICONS.map((icon, idx) => (
          <ContactIcon key={idx} {...icon} />
        ))}
      </div>
      <Link to="/Resume_Depak_Borhara.pdf" target="_blank" download>
        <Button className="mt-5 bg-black text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-white  dark:hover:text-purple-500">
          <DownloadCloud className="mr-2.5" />
          Download Resume
        </Button>
      </Link>

      <Section header="Professional Summary">
        <p className="text-lg dark:text-white">
          Adept software engineer with over three years of experience in
          creating, teaching, deploying, and maintaining large-scale distributed
          applications in the e-commerce and fintech sectors. Demonstrated
          leadership skills, strong work ethic, and extensive understanding of
          software development best practices. Capable of adapting to new
          technologies and contributing to software engineering teams.
        </p>
      </Section>

      <Section header="Skills">
        <div className="grid grid-cols-2 gap-4">
          <Box title="Languages:">
            JavaScript(ES6), TypeScript, Golang, Rust, Ruby, HTML, CSS, Markdown
          </Box>

          <Box title="Front-End Frameworks:">
            React.js, Next.js, Redux, Ruby on Rails, SCSS, Bootstrap,
            TailwindCSS
          </Box>

          <Box title="Back-End/Database Frameworks:">
            Express.js, Node.js, PostgreSQL
          </Box>

          <Box title="Testing:">Capybara, Jest, Playwright, RSpec</Box>

          <Box title="Tools:">
            CircleCI, Docker, Git, Github, Prisma ORM, OAuth, Sequelize ORM
          </Box>
        </div>
      </Section>

      <Section header="Work Experience">
        <Box
          title="IdeaHive Consulting | Software Engineer Consultant | New York,
            NY (3/20 – Present)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Engineer robust full-stack web applications using Next.js
              (leveraging server-side rendering for performance optimization),
              Express (custom middleware development), Node.js (efficient
              event-driven architecture), and PostgreSQL (complex data modeling
              and optimization).
            </li>
            <li className="mb-3.5">
              Design and implement back-end and database infrastructure with
              enhanced features for centralized data management, employing
              RESTful API principles and ensuring data integrity, fidelity, and
              security.
            </li>
            <li className="mb-3.5">
              Implement modern engineering and UX/UI principles, including clean
              code practices, design patterns, and refactoring techniques, to
              enhance the readability and maintainability of codebases.
            </li>
          </ul>
        </Box>
        <Box
          title="NYC Tech Talent Pipeline | Lead Instructor - Contract | Remote - New
            York, NY (2/23 – 9/23)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Led the instructional design and delivery of an advanced
              full-stack web development curriculum for 45 students, focusing on
              React (including hooks and context API), Redux (middleware
              integration), Node.js (async programming, RESTful API design),
              Express (middleware, routing), and PostgreSQL (advanced querying,
              optimization).
            </li>
            <li className="mb-3.5">
              Directed a team of 5 teaching assistants, implementing agile
              methodologies to streamline student support processes, enhancing
              personalized guidance, and reducing issue resolution time by 30%.
            </li>
            <li className="mb-3.5">
              Overhauled 32 outdated lesson plans and exercises, integrating
              modern web development trends and industry best practices,
              resulting in a 25% increase in student satisfaction ratings.
            </li>
          </ul>
        </Box>

        <Box
          title="Enova International - Netcredit | Software Engineer | Remote - New
            York, NY (7/21 – 12/22)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Collaborated in a cross-functional agile team with product
              managers, UX/UI designers, and engineers to prioritize and execute
              development of user-centric features in Ruby (optimizing MVC
              architecture) and TypeScript, coupled with Go for complex business
              logic in a high-volume consumer lending platform.
            </li>
            <li className="mb-3.5">
              Spearheaded the deployment of over 15 innovative features using
              Ruby on Rails and Go, focusing on scalability and security
              enhancements.
            </li>
            <li className="mb-3.5">
              Actively participated in on-call rotations, managing 2
              production-grade incidents, employing rapid response strategies to
              ensure continuity and minimize user impact.
            </li>
            <li className="mb-3.5">
              Mentored 2 new engineers in Ruby on Rails and Go, emphasizing best
              practices in code efficiency and modular design, accelerating
              their onboarding process by 10%
            </li>
          </ul>
        </Box>
      </Section>

      <Section header="Education">
        <div className="space-y-4">
          <Box
            title="Fullstack Academy | Certificate of Completion | Web Development
              Immersive | New York, NY (11/19 - 2/20)"
          >
            Successfully completed an intensive 17-week program, gaining
            expertise in modern web development technologies, including the PERN
            stack (PostgreSQL, Express, React, Node.js)
          </Box>

          <Box
            title="CUNY City College of NY | Bachelor of Arts - Political Science |
              Magna Cum Laude | New York, NY (2014)"
          >
            {" "}
          </Box>
        </div>
      </Section>

      <Section header="Volunteer">
        <div className="space-y-4">
          <Box
            title="Pursuit | Technical Volunteer | Long Island City, NY (2/20 –
              Present)"
          >
            <ul className="dark:text-white">
              <li className="mb-3.5">
                Conduct technical and behavioral interviews for prospective
                software engineering fellows, assessing their potential and
                determination.
              </li>
              <li className="mb-3.5">
                Mentor current fellows on coding best practices, algorithms,
                data structures, and professional development.
              </li>
              <li className="mb-3.5">
                Guide fellows in achieving software development goals and
                preparing for industry entry through actionable feedback and
                recommendations.
              </li>
            </ul>
          </Box>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
