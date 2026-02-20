import "./Button.scss";
type Props = {
  text: string;
  designType: "primary" | "secondary" | "tertiary" ;
  className?: string;
  type: "button" | "submit";
  disabled?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>,
  ) => void;
};

export const Button = ({
  text,
  designType,
  type = "button",
  className,
  disabled,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      className={`button ${designType} ${disabled ? "disabled" : ""} ${className ?? ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-text">{text}</span>
    </button>
  );
};
