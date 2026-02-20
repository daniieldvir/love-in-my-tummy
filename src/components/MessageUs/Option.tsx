import "./Option.scss";

type Props = {
  label: string;
  formData: string;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
};

export const Option = ({ label, formData, setFormData }: Props) => {
  const options = [
    { value: "custom-order", label: "Custom Order" },
    { value: "general", label: "General Question" },
    { value: "delivery", label: "Delivery Inquiry" },
    { value: "event", label: "Event / Catering" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="form-group">
      {label && <label htmlFor="contact-subject">{label}</label>}
      <select
        id="contact-subject"
        name="subject"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
        required
      >
        <option value="">Select a topic...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
