import React, { useState } from 'react';
import './Tooltip.css';

function Tooltip(props : TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Tooltip-target">
      <div className="Tooltip">
        {props.tooltipContent}
      </div>
      {props.children}
    </div>
  );
}

interface TooltipProps {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
}

export default Tooltip;
