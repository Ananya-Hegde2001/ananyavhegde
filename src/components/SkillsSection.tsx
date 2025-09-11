// components/SkillsSection.tsx
export const dynamic = "force-static"; // ✅ add this at the top

import { DATA as skillsData } from "@/data/resume";
import Skills from './Skills';

export default function SkillsSection() {
  const visibleSkills = skillsData.skills.slice(0, 8);
  const hiddenSkills = skillsData.skills.slice(8);

  return (
    <Skills visibleSkills={visibleSkills} hiddenSkills={hiddenSkills} />
  );
}
