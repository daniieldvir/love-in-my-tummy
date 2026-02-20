import "./FormSections.scss";
type InputFieldProps = {
  placeholder: string;
  type?: string;
  label?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
};
export const InputField = ({
  placeholder,
  type = "text",
  label,
  required = false,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="form-group">
    {label && <label htmlFor={label}>{label}</label>}
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

type TextareaFieldProps = {
  placeholder: string;
  label?: string;
  required?: boolean;

  value: string;
  onChange: (value: string) => void;
};

export const TextareaField = ({
  placeholder,
  label,
  required = false,
  value,
  onChange,
}: TextareaFieldProps) => (
  <div className="form-group">
    {label && <label htmlFor={label}>{label}</label>}
    <textarea
      className="form-control"
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
