export default function FloralDivider() {
  return (
    <div className="flex items-center justify-center my-5 px-6">
      {/* Left vine */}
      <svg width="80" height="24" viewBox="0 0 80 24" className="flex-1 max-w-[80px]" preserveAspectRatio="xMaxYMid meet">
        <path d="M0 12 Q20 4 40 12 Q60 20 80 12" stroke="#2D6A4F" strokeWidth="1.2" fill="none" opacity="0.35" />
        <ellipse cx="15" cy="8" rx="5" ry="3" fill="#2D6A4F" opacity="0.3" transform="rotate(-20 15 8)" />
        <ellipse cx="45" cy="16" rx="5" ry="3" fill="#4A9E6F" opacity="0.25" transform="rotate(15 45 16)" />
        <circle cx="65" cy="10" r="3" fill="#F5C518" opacity="0.5" />
        <circle cx="65" cy="10" r="1.2" fill="#CC2936" opacity="0.6" />
        <circle cx="30" cy="14" r="2.5" fill="#E8A0BF" opacity="0.45" />
      </svg>

      {/* Center flower cluster */}
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="mx-1 flex-shrink-0">
        {/* Main flower */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="30"
            cy="14"
            rx="4"
            ry="7"
            fill={i % 2 === 0 ? "#CC2936" : "#E8A0BF"}
            opacity="0.65"
            transform={`rotate(${angle} 30 20)`}
          />
        ))}
        <circle cx="30" cy="20" r="4.5" fill="#F5C518" opacity="0.85" />
        <circle cx="30" cy="20" r="2" fill="#CC2936" opacity="0.5" />

        {/* Side buds */}
        <circle cx="10" cy="22" r="3.5" fill="#F5C518" opacity="0.55" />
        <circle cx="10" cy="22" r="1.5" fill="#fff" opacity="0.6" />
        <circle cx="50" cy="22" r="3.5" fill="#5B8FD4" opacity="0.45" />
        <circle cx="50" cy="22" r="1.5" fill="#fff" opacity="0.6" />

        {/* Leaves */}
        <ellipse cx="6" cy="28" rx="7" ry="3" fill="#2D6A4F" opacity="0.4" transform="rotate(-25 6 28)" />
        <ellipse cx="54" cy="28" rx="7" ry="3" fill="#4A9E6F" opacity="0.35" transform="rotate(25 54 28)" />
        <ellipse cx="20" cy="30" rx="6" ry="2.5" fill="#2D6A4F" opacity="0.3" transform="rotate(10 20 30)" />
        <ellipse cx="40" cy="30" rx="6" ry="2.5" fill="#4A9E6F" opacity="0.25" transform="rotate(-10 40 30)" />
      </svg>

      {/* Right vine */}
      <svg width="80" height="24" viewBox="0 0 80 24" className="flex-1 max-w-[80px]" preserveAspectRatio="xMinYMid meet">
        <path d="M0 12 Q20 4 40 12 Q60 20 80 12" stroke="#2D6A4F" strokeWidth="1.2" fill="none" opacity="0.35" />
        <ellipse cx="65" cy="8" rx="5" ry="3" fill="#2D6A4F" opacity="0.3" transform="rotate(20 65 8)" />
        <ellipse cx="35" cy="16" rx="5" ry="3" fill="#4A9E6F" opacity="0.25" transform="rotate(-15 35 16)" />
        <circle cx="15" cy="10" r="3" fill="#CC2936" opacity="0.45" />
        <circle cx="15" cy="10" r="1.2" fill="#F5C518" opacity="0.7" />
        <circle cx="50" cy="14" r="2.5" fill="#E8A0BF" opacity="0.45" />
      </svg>
    </div>
  );
}
