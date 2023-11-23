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
            JavaScript(ES6), TypeScript, Ruby, Golang, HTML, CSS, Markdown
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
          title="NYC Tech Talent Pipeline | Lead Instructor - Contract | Remote - New
            York, NY (2/23 – 9/23)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Educated and mentored a cohort of 45 students in cutting-edge
              full-stack web development technologies such as React, Redux,
              Node, Express, and Postgres.
            </li>
            <li className="mb-3.5">
              Managed a team of 5 teaching assistants to ensure students
              received expert guidance and support throughout their learning
              journey.
            </li>
            <li className="mb-3.5">
              Authored curriculum materials by creating 32 lesson plans and
              exercises to align with current industry standards and best
              practices
            </li>
          </ul>
        </Box>

        <Box
          title="Enova International - Netcredit | Software Engineer | Remote - New
            York, NY (7/21 – 12/22)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Worked within a core team of 4, collaborating with a broader
              cross-functional group of over 25 developers and product managers,
              to prioritize and develop features for a large-scale consumer
              lending platform.
            </li>
            <li className="mb-3.5">
              Launched 4 innovative Ruby on Rails and Go features and resolved 5
              critical production bugs.
            </li>
            <li className="mb-3.5">
              Maintained 97% test coverage through extensive unit and
              integration testing using RSpec and Capybara.
            </li>
            <li className="mb-3.5">
              Efficiently addressed 2 production-grade incidents as an on-call
              team member, ensuring smooth resolution.
            </li>
          </ul>
        </Box>

        <Box
          title="Borhara Tech Consulting | Software Engineer Consultant | New York,
            NY (3/20 – 6/21)"
        >
          <ul className="dark:text-white">
            <li className="mb-3.5">
              Developed and designed state-of-the-art full-stack web
              applications using React for the frontend, Express and Node.js for
              the backend, and Postgres for database management.
            </li>
            <li className="mb-3.5">
              Architected and rolled out client-side portals enabling efficient
              data access and accounting automation.
            </li>
            <li className="mb-3.5">
              Leveraged modern UI/UX design principles and frameworks to
              optimize performance metrics, user satisfaction, and data
              accessibility.
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
