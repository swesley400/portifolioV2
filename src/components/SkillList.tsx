import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Skill } from '../types/skill';
import { GiSkills } from "react-icons/gi";

interface SkillListProps {
  skills: Skill[];
  currentSkill: Skill;
  isPlaying: boolean;
  onSkillSelect: (skill: Skill) => void;
}

export const SkillList: React.FC<SkillListProps> = ({
  skills,
  currentSkill,
  isPlaying,
  onSkillSelect,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill.id}
            onClick={() => onSkillSelect(skill)}
            className={`flex items-center p-3 rounded-lg hover:bg-white/5 cursor-pointer transition ${
              currentSkill.id === skill.id ? 'bg-white/10' : ''
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center mr-4">
              <span className="text-lg"><GiSkills /></span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-400">{skill.level}%</div>
              {currentSkill.id === skill.id && isPlaying && (
                <div className="w-4 h-4 text-green-500">
                  <Pause size={16} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};