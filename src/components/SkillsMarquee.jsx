import React from 'react';
import { playCyberHover } from '../utils/audio';

const skillsWithLogos = [
  {
    name: 'React',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 115.3 100" fill="currentColor">
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(30 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(90 57.65 50)" />
        <ellipse cx="57.65" cy="50" rx="16.5" ry="50" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(150 57.65 50)" />
        <circle cx="57.65" cy="50" r="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 7.5v9l8.5-10v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 8.5h5M7.5 8.5v8M13 14.5c.7.8 1.7 1.2 2.8 1.2 1.3 0 2-.6 2-1.4 0-1-.8-1.3-2.3-1.8-2-.6-3-1.5-3-3 0-1.8 1.4-3 3.5-3 1.2 0 2.2.4 2.9 1.1l-1.1 1.6c-.5-.5-1.1-.8-1.8-.8-.9 0-1.5.5-1.5 1.2 0 .8.7 1.1 2.2 1.7 2.1.7 3.1 1.6 3.1 3.2 0 2-1.5 3.2-3.9 3.2-1.6 0-2.7-.5-3.6-1.5l1.3-1.6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-3.1 0-5 1.3-5 3.4v2.5h5.1v.8H4.6C2.5 8.7 1 10.3 1 13.4c0 3.1 1.7 4.7 4.3 4.7h1.7v-2.3c0-1.9 1.6-3.4 3.5-3.4h5.2c1.7 0 3-1.4 3-3V5.4C18.7 3.3 16.9 2 11.9 2zm-2.2 1.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2.4 18.2c3.1 0 5-1.3 5-3.4v-2.5H12v-.8h7.4c2.1 0 3.6-1.6 3.6-4.7 0-3.1-1.7-4.7-4.3-4.7H17v2.3c0 1.9-1.6 3.4-3.5 3.4H8.3c-1.7 0-3 1.4-3 3v4.1c0 2.1 1.8 3.4 6.8 3.4zm2.2-1.8a1 1 0 1 1 0-2 1 1 0 0 1 0-2z" />
      </svg>
    ),
  },
  {
    name: 'TailwindCSS',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.129 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.872 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.64 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.872 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.19 1c-.13 0-.25.04-.36.1C11.66 1.19 5.8 4.7 5.8 12.92c0 5.24 3.4 9.17 6.19 10.08.13.04.25.04.38 0 2.78-.91 6.19-4.84 6.19-10.08 0-8.22-5.86-11.73-6.03-11.82-.11-.06-.23-.1-.34-.1zm-.19 2.5v7.24c-1.84-2.58-2.61-4.87-2.61-4.87 1.19-1.39 2.61-2.37 2.61-2.37zm.38 0c0 0 1.42.98 2.61 2.37 0 0-.77 2.29-2.61 4.87V3.5zm-.38 9.38v8.66c-2.37-.87-4.78-4.14-4.78-8.62 0-2.47.78-4.66 1.76-6.32 1.15 2.19 3.02 6.28 3.02 6.28zm.38 0s1.87-4.09 3.02-6.28c.98 1.66 1.76 3.85 1.76 6.32 0 4.48-2.41 7.75-4.78 8.62v-8.66z" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.36 17.65L7.24 1.2a.5.5 0 0 1 .95-.08l2.9 5.88-6.73 10.65zm14.88.35L17.5 8.1a.5.5 0 0 0-.9-.12l-1.9 3.42 4.54 6.6zm-8.86-7.86l2.12-4.18a.5.5 0 0 1 .9 0l2.36 4.67-5.38-.49zm9.22 8.71L14.7 2.82a.5.5 0 0 0-.94-.05L2.3 18.85a.5.5 0 0 0 .18.63l8.9 5.08a1.2 1.2 0 0 0 1.24 0l8.9-5.08a.5.5 0 0 0 .08-.63z" />
      </svg>
    ),
  },
  {
    name: 'Framer Motion',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: 'GenAI & LLMs',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8.8 5.1v10.1L12 22.3l-8.8-5.1V7.2L12 2zm0 2.3L5.2 8.3v7.4L12 19.7l6.8-4V8.3L12 4.3z" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path d="M13 3.5L8 13h5l-2 7.5 8-10.5h-6l2-6.5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="8.5" ry="3" stroke="currentColor" />
        <path d="M3.5 6v6c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3V6" stroke="currentColor" />
        <path d="M3.5 12v6c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3v-6" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function SkillsMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-[#39FF6A]/25 bg-[#0D100E] py-4 select-none">
      {/* HUD Corner Accent Details */}
      <div className="absolute top-0 left-4 font-mono text-[9px] text-[#39FF6A]/60 z-10">
        [SYS: STACK_MATRIX // RUNNING_LTR]
      </div>

      {/* Running Left-to-Right Marquee Container */}
      <div className="flex w-max animate-marquee-ltr">
        {/* First copy */}
        <div className="flex items-center gap-8 sm:gap-10 px-4 shrink-0">
          {skillsWithLogos.map((skill, index) => (
            <React.Fragment key={`first-${index}`}>
              <div
                onMouseEnter={playCyberHover}
                className="group flex items-center gap-2.5 cursor-pointer text-[#8E8E93] hover:text-[#39FF6A] transition-colors duration-200"
              >
                <span className="text-[#8E8E93] group-hover:text-[#39FF6A] group-hover:drop-shadow-[0_0_8px_#39FF6A] transition-all duration-200">
                  {skill.icon}
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-[#EDEDED] group-hover:text-[#39FF6A] transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] shadow-[0_0_8px_#39FF6A] shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate copy for seamless infinite loop */}
        <div className="flex items-center gap-8 sm:gap-10 px-4 shrink-0" aria-hidden="true">
          {skillsWithLogos.map((skill, index) => (
            <React.Fragment key={`second-${index}`}>
              <div
                onMouseEnter={playCyberHover}
                className="group flex items-center gap-2.5 cursor-pointer text-[#8E8E93] hover:text-[#39FF6A] transition-colors duration-200"
              >
                <span className="text-[#8E8E93] group-hover:text-[#39FF6A] group-hover:drop-shadow-[0_0_8px_#39FF6A] transition-all duration-200">
                  {skill.icon}
                </span>
                <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-[#EDEDED] group-hover:text-[#39FF6A] transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#39FF6A] shadow-[0_0_8px_#39FF6A] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
