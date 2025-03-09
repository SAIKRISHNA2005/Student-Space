import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to, active = false }) => {
  return (
    <li>
      <Link
        to={to}
        className={`flex items-center py-1.5 rounded ${
          active ? 'bg-[#1E3A8A] text-white' : 'hover:bg-[#1E3A8A]'
        }`}
      >
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
