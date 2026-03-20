import Image from "next/image";

interface GelenkwerkLogoProps {
  size?: number;
  className?: string;
}

const LOGO_WIDTH = 1600;
const LOGO_HEIGHT = 675;

export default function GelenkwerkLogo({
  size = 40,
  className,
}: GelenkwerkLogoProps) {
  const width = Math.round((size * LOGO_WIDTH) / LOGO_HEIGHT);

  return (
    <Image
      src="/logoo_transparent.png"
      alt="Gelenkwerk Logo"
      width={width}
      height={size}
      className={className}
      priority
    />
  );
}
