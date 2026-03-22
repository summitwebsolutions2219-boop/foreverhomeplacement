/* Custom SVG tree with long, wide-spreading branches */

interface TreeIconProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function TreeIcon({ className = "", style, color = "currentColor" }: TreeIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Trunk */}
      <line x1="12" y1="22" x2="12" y2="13" />

      {/* Wide bottom canopy layer */}
      <polyline points="2,17 12,8 22,17" />

      {/* Mid canopy layer */}
      <polyline points="4,13 12,4 20,13" />

      {/* Top canopy layer */}
      <polyline points="7,9 12,2 17,9" />

      {/* Long left branch */}
      <line x1="12" y1="15" x2="5" y2="11" />

      {/* Long right branch */}
      <line x1="12" y1="15" x2="19" y2="11" />

      {/* Mid-left branch */}
      <line x1="12" y1="18" x2="7" y2="15" />

      {/* Mid-right branch */}
      <line x1="12" y1="18" x2="17" y2="15" />
    </svg>
  );
}
