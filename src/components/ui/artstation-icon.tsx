import React from 'react';

interface ArtStationIconProps {
  size?: number;
  className?: string;
}

const ArtStationIcon: React.FC<ArtStationIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.378.482-.866.482-1.467zM4.419 16.019h11.433L9.419 4.334 4.419 16.019z"/>
    </svg>
  );
};

export default ArtStationIcon;