import React from "react";
import { SectionProps } from "@/types";

const Section: React.FC<SectionProps> = ({ header, children }) => (
  <section className="space-y-6 text-gray-700 mt-10">
    <h2 className="text-2xl font-bold mb-1 text-purple-600 dark:text-purple-400">
      {header}
    </h2>
    {children}
  </section>
);

export default Section;
