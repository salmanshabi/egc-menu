export default function FloralBorder() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Top border */}
      <svg className="absolute top-0 left-0 w-full h-16" viewBox="0 0 400 50" preserveAspectRatio="none">
        <rect width="400" height="4" y="2" fill="#A0273A" opacity="0.15" rx="2" />
        {/* Flower garland top */}
        {[30, 80, 130, 180, 230, 280, 330, 370].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="18" r={i % 3 === 0 ? 8 : 6} fill={["#CC2936", "#F5C518", "#E8A0BF", "#5B8FD4"][i % 4]} opacity="0.6" />
            <circle cx={x} cy="18" r={i % 3 === 0 ? 3 : 2.5} fill={["#F5C518", "#fff", "#CC2936", "#fff"][i % 4]} opacity="0.8" />
            <ellipse cx={x - 8} cy="22" rx="6" ry="3" fill="#2D6A4F" opacity="0.4" transform={`rotate(-15 ${x - 8} 22)`} />
            <ellipse cx={x + 8} cy="22" rx="6" ry="3" fill="#4A9E6F" opacity="0.35" transform={`rotate(15 ${x + 8} 22)`} />
          </g>
        ))}
        {/* Vine connecting flowers */}
        <path d="M 10 20 Q 60 30 110 18 Q 160 8 210 20 Q 260 32 310 18 Q 360 8 400 22" stroke="#2D6A4F" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>

      {/* Bottom border */}
      <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 400 50" preserveAspectRatio="none">
        <rect width="400" height="4" y="44" fill="#A0273A" opacity="0.15" rx="2" />
        {[30, 80, 130, 180, 230, 280, 330, 370].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="32" r={i % 3 === 0 ? 8 : 6} fill={["#E8A0BF", "#CC2936", "#F5C518", "#CC2936"][i % 4]} opacity="0.6" />
            <circle cx={x} cy="32" r={i % 3 === 0 ? 3 : 2.5} fill={["#fff", "#F5C518", "#fff", "#E8A0BF"][i % 4]} opacity="0.8" />
            <ellipse cx={x - 7} cy="28" rx="6" ry="3" fill="#2D6A4F" opacity="0.4" transform={`rotate(15 ${x - 7} 28)`} />
            <ellipse cx={x + 7} cy="28" rx="6" ry="3" fill="#4A9E6F" opacity="0.35" transform={`rotate(-15 ${x + 7} 28)`} />
          </g>
        ))}
        <path d="M 10 30 Q 60 20 110 32 Q 160 42 210 30 Q 260 18 310 32 Q 360 42 400 28" stroke="#2D6A4F" strokeWidth="1.5" fill="none" opacity="0.3" />
      </svg>

      {/* Left border */}
      <svg className="absolute top-0 left-0 w-10 h-full" viewBox="0 0 30 800" preserveAspectRatio="none">
        <rect width="3" height="800" x="2" fill="#A0273A" opacity="0.1" rx="1.5" />
        {[60, 140, 220, 300, 380, 460, 540, 620, 700].map((y, i) => (
          <g key={i}>
            <circle cx="14" cy={y} r={i % 2 === 0 ? 7 : 5} fill={["#CC2936", "#F5C518", "#E8A0BF", "#5B8FD4"][i % 4]} opacity="0.5" />
            <ellipse cx="14" cy={y - 10} rx="3" ry="7" fill="#2D6A4F" opacity="0.35" transform={`rotate(-10 14 ${y - 10})`} />
            <ellipse cx="14" cy={y + 10} rx="3" ry="7" fill="#4A9E6F" opacity="0.3" transform={`rotate(10 14 ${y + 10})`} />
          </g>
        ))}
        <path d="M 14 30 Q 22 100 14 170 Q 6 240 14 310 Q 22 380 14 450 Q 6 520 14 590 Q 22 660 14 730" stroke="#2D6A4F" strokeWidth="1.2" fill="none" opacity="0.25" />
      </svg>

      {/* Right border */}
      <svg className="absolute top-0 right-0 w-10 h-full" viewBox="0 0 30 800" preserveAspectRatio="none">
        <rect width="3" height="800" x="25" fill="#A0273A" opacity="0.1" rx="1.5" />
        {[100, 180, 260, 340, 420, 500, 580, 660, 740].map((y, i) => (
          <g key={i}>
            <circle cx="16" cy={y} r={i % 2 === 0 ? 5 : 7} fill={["#F5C518", "#CC2936", "#5B8FD4", "#E8A0BF"][i % 4]} opacity="0.5" />
            <ellipse cx="16" cy={y - 10} rx="3" ry="7" fill="#4A9E6F" opacity="0.35" transform={`rotate(10 16 ${y - 10})`} />
            <ellipse cx="16" cy={y + 10} rx="3" ry="7" fill="#2D6A4F" opacity="0.3" transform={`rotate(-10 16 ${y + 10})`} />
          </g>
        ))}
        <path d="M 16 50 Q 8 120 16 190 Q 24 260 16 330 Q 8 400 16 470 Q 24 540 16 610 Q 8 680 16 750" stroke="#2D6A4F" strokeWidth="1.2" fill="none" opacity="0.25" />
      </svg>

      {/* Corner flowers - larger, more prominent */}
      {/* Top-left */}
      <svg className="absolute top-1 left-1 w-14 h-14" viewBox="0 0 50 50">
        <circle cx="20" cy="20" r="10" fill="#CC2936" opacity="0.7" />
        <circle cx="20" cy="20" r="4" fill="#F5C518" opacity="0.9" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse key={i} cx="20" cy="8" rx="5" ry="8" fill={i % 2 === 0 ? "#CC2936" : "#E8A0BF"} opacity="0.6" transform={`rotate(${angle} 20 20)`} />
        ))}
        <ellipse cx="35" cy="25" rx="8" ry="4" fill="#2D6A4F" opacity="0.5" transform="rotate(-30 35 25)" />
        <ellipse cx="25" cy="35" rx="8" ry="4" fill="#4A9E6F" opacity="0.45" transform="rotate(20 25 35)" />
      </svg>

      {/* Top-right */}
      <svg className="absolute top-1 right-1 w-14 h-14" viewBox="0 0 50 50">
        <circle cx="30" cy="20" r="10" fill="#F5C518" opacity="0.7" />
        <circle cx="30" cy="20" r="4" fill="#CC2936" opacity="0.8" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse key={i} cx="30" cy="8" rx="5" ry="8" fill={i % 2 === 0 ? "#F5C518" : "#E8A0BF"} opacity="0.6" transform={`rotate(${angle} 30 20)`} />
        ))}
        <ellipse cx="15" cy="25" rx="8" ry="4" fill="#2D6A4F" opacity="0.5" transform="rotate(30 15 25)" />
        <ellipse cx="25" cy="35" rx="8" ry="4" fill="#4A9E6F" opacity="0.45" transform="rotate(-20 25 35)" />
      </svg>

      {/* Bottom-left */}
      <svg className="absolute bottom-1 left-1 w-14 h-14" viewBox="0 0 50 50">
        <circle cx="20" cy="30" r="10" fill="#E8A0BF" opacity="0.65" />
        <circle cx="20" cy="30" r="4" fill="#fff" opacity="0.8" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse key={i} cx="20" cy="18" rx="5" ry="8" fill={i % 2 === 0 ? "#E8A0BF" : "#CC2936"} opacity="0.55" transform={`rotate(${angle} 20 30)`} />
        ))}
        <ellipse cx="35" cy="22" rx="8" ry="4" fill="#2D6A4F" opacity="0.5" transform="rotate(-20 35 22)" />
      </svg>

      {/* Bottom-right */}
      <svg className="absolute bottom-1 right-1 w-14 h-14" viewBox="0 0 50 50">
        <circle cx="30" cy="30" r="10" fill="#CC2936" opacity="0.65" />
        <circle cx="30" cy="30" r="4" fill="#F5C518" opacity="0.9" />
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <ellipse key={i} cx="30" cy="18" rx="5" ry="8" fill={i % 2 === 0 ? "#CC2936" : "#F5C518"} opacity="0.55" transform={`rotate(${angle} 30 30)`} />
        ))}
        <ellipse cx="15" cy="22" rx="8" ry="4" fill="#4A9E6F" opacity="0.5" transform="rotate(20 15 22)" />
      </svg>
    </div>
  );
}
