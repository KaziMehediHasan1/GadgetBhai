
"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface FAIconProps {
  icon: IconDefinition; 
  className?: string; 
  size?:
    | "xs"
    | "sm"
    | "lg"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  
}

const FAIcon: React.FC<FAIconProps> = ({ icon, className, size, ...rest }) => {
  return (
    <FontAwesomeIcon icon={icon} className={className} size={size} {...rest} />
  );
};

export default FAIcon;
