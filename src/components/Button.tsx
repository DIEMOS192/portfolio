interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children = "Click Me",
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Sample Buttons
      </h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onClick}
          className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        >
          {children}
        </button>
        <button
          className={`${baseClasses} ${variantClasses.secondary} ${sizeClasses.md}`}
        >
          Secondary
        </button>
        <button
          className={`${baseClasses} ${variantClasses.outline} ${sizeClasses.md}`}
        >
          Outline
        </button>
      </div>
    </div>
  );
};

export default Button;
