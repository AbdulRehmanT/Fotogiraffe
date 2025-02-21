import Link from "next/link";

interface ButtonProps {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  href,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  icon,
}) => {
  const baseClasses = `h-12 rounded-md bg-[#70FAC3] border-2 border-b-4 border-black px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center justify-between gap-2 group [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  ${className}`


  const button = (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {title}
      {icon && <span className="hover:translate-x-1">{icon}</span>}

    </button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

export default Button;
