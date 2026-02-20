import { FaCheckCircle } from "react-icons/fa";
import "./SuccessIcon.scss";

type Props = {
  backgroundColor?: string;
  color?: string;
};
export const SuccessIcon = ({
  backgroundColor = "#e8f5e9",
  color = "#4caf50",
}: Props) => {
  return (
    <div className="success-icon-wrap" style={{ backgroundColor, color }}>
      <FaCheckCircle style={{ color: color }} />
    </div>
  );
};
