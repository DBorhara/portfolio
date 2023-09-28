import React from "react";
import { BoxProps } from "@/types";

const Box: React.FC<BoxProps> = ({ title, children }) => (
  <div className="p-4 border-2 hover:bg-purple-200 dark:hover:bg-teal-600 border-indigo-500 rounded">
    {title && (
      <h3 className="text-lg font-semibold mb-2 dark:text-purple-200">
        {title}
      </h3>
    )}
    <div className="dark:text-white">{children}</div>
  </div>
);

export default Box;
