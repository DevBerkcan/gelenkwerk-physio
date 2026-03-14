interface GelenkwerkLogoProps {
  size?: number;
  className?: string;
}

export default function GelenkwerkLogo({ size = 40, className }: GelenkwerkLogoProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      width={size}
      height={size * 1.33}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Gelenkwerk Logo"
    >
      {/* Spine dots */}
      <circle cx="68" cy="12" r="5" fill="#1a8a7d" opacity="0.5" />
      <circle cx="72" cy="26" r="5.5" fill="#1a8a7d" opacity="0.55" />
      <circle cx="74" cy="41" r="6" fill="#1a8a7d" opacity="0.6" />
      <circle cx="73" cy="57" r="6.5" fill="#1a8a7d" opacity="0.7" />
      <circle cx="69" cy="73" r="7" fill="#1a8a7d" opacity="0.75" />
      <circle cx="62" cy="88" r="7" fill="#1a8a7d" opacity="0.8" />
      <circle cx="55" cy="103" r="6.5" fill="#1a8a7d" opacity="0.85" />
      <circle cx="50" cy="117" r="6" fill="#1a8a7d" opacity="0.9" />
      <circle cx="48" cy="131" r="5.5" fill="#1a8a7d" opacity="0.95" />
      <circle cx="49" cy="145" r="5" fill="#1a8a7d" />

      {/* Leaf / wave shapes */}
      <path
        d="M55 20 C30 40, 15 70, 25 100 C35 130, 50 145, 50 150 C50 145, 25 120, 30 85 C35 55, 55 35, 55 20Z"
        fill="#2cb5a0"
        opacity="0.7"
      />
      <path
        d="M58 35 C40 50, 28 75, 35 105 C42 130, 50 140, 50 148 C50 140, 35 120, 38 90 C42 65, 58 48, 58 35Z"
        fill="#1a8a7d"
        opacity="0.9"
      />
    </svg>
  );
}
