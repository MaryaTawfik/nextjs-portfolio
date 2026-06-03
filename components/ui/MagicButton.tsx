import React from 'react';

// 1. Define a clean TypeScript interface for the props
interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right' | string; // Keeps it flexible but suggests intent
  handleClick?: () => void;
  otherClasses?: string;
}

// 2. Destructure the props and apply the interface type
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = '', // Default to empty string if not provided
}: MagicButtonProps) => {
  return (
    <button 
      onClick={handleClick} // Added the click handler
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        {/* Render icon on the left if position is 'left' */}
        {position === 'left' && icon}
        
        {title}
        
        {/* Render icon on the right if position is 'right' */}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;