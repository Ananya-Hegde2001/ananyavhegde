"use client";

import { Badge } from "@/components/ui/badge"; // Update based on your Badge import path
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// Define Skill type
export type Skill = {
  title: string;
  icon: string; // or JSX.Element if you're passing components
};

// Props type
interface SkillsProps {
  visibleSkills: Skill[];
  hiddenSkills: Skill[];
}

export default function Skills({ visibleSkills, hiddenSkills }: SkillsProps) {
  const [showAll, setShowAll] = useState(true);

  const allSkills = showAll
    ? [...visibleSkills, ...hiddenSkills]
    : visibleSkills;

  return (
    <section>
      <h2 className="text-xl font-bold">Skills</h2>
      <motion.div
        layout
        className="grid grid-cols-2 gap-5 md:grid-cols-4 sm:grid-cols-2 max-w-[800px]"
      >
        <AnimatePresence initial={false}>
          {allSkills.map((skill) => (
            <motion.div
              key={skill.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col items-center space-y-3 text-center">
                <Icon icon={skill.icon} width={50} height={50} />
                <Badge variant="outline">{skill.title}</Badge>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* {hiddenSkills.length > 0 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mx-auto mt-4 flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition"
        >
          {showAll ? "Show Less" : "Show More"}
          {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      )} */}
    </section>
  );
}
