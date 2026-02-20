import type { FormData } from "../../types/variance";
import { InputField, TextareaField } from "../FormSections/FormSections";
import { Button } from "../UI/Button/Button";
import { SuccessIcon } from "../UI/SuccessIcon/SuccessIcon";
import "./MessageUs.scss";
import { Option } from "./Option";

type Props = {
  submitted: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: React.FormEvent) => void;
  handleReset: () => void;
};
export const MessageUs = ({
  submitted,
  formData,
  setFormData,
  handleSubmit,
  handleReset,
}: Props) => {
  return (
    <div className="contact-form-wrap">
      {submitted ? (
        <div className="form-success">
          <SuccessIcon />
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out. We'll be in touch as soon as possible.</p>
          <Button
            text="Send Another Message"
            type="button"
            designType="secondary"
            onClick={handleReset}
          />
        </div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="contact-form">
          <div className="form-row">
            <InputField
              label="Your Name"
              placeholder=""
              value={formData.name}
              onChange={(v) => setFormData({ ...formData, name: v })}
              required
            />

            <InputField
              label="Email Address"
              placeholder=""
              value={formData.email}
              onChange={(v) => setFormData({ ...formData, email: v })}
              required
            />
          </div>
          <Option
            label="What's this about?"
            formData={formData.subject}
            setFormData={(v) =>
              setFormData({ ...formData, subject: v as string })
            }
          />

          <TextareaField
            label="Your Message"
            placeholder="Tell us what's on your mind..."
            value={formData.message}
            onChange={(v) => setFormData({ ...formData, message: v })}
            required
          />

          <Button
            text="Send Message"
            type="submit"
            className="submit-btn"
            designType="primary"
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      )}
    </div>
  );
};
