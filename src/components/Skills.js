import React from 'react';
import CircularProgressBar from './CircularProgressBar';

const skillsData = [
  { skill: 'HTML5', percent: 90 },
  { skill: 'CSS3', percent: 85 },
  { skill: 'JavaScript', percent: 80 },
  { skill: 'Python', percent: 95 },
  { skill: 'Java', percent: 80 },
  { skill: 'React', percent: 95 },
  { skill: 'MongoDB', percent: 80 },
  { skill: 'Django', percent: 80 },
];

const SkillsSection = () => {
  return (
    <section className="skills-section py-20 " name='skills'>
      <h2 className='h2 text-accent'>My Skills.</h2>
      <div className=" text-2xl font-bold skills-container mx-auto">
        {skillsData.map((skill, index) => (
          <CircularProgressBar key={index} skill={skill.skill} percent={skill.percent} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
