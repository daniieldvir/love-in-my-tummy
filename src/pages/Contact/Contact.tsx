import { useState } from "react";
import FrequentlyAsked from "../../components/FrequentlyAsked/FrequentlyAsked";
import { ContactHero } from "../../components/Hero/ContactHero";
import { MessageUs } from "../../components/MessageUs/MessageUs.tsx";
import { InfoCards } from "../../components/UI/InfoCards/InfoCards.tsx";
import { infoCards } from "../../constants/storeInfo.tsx";
import type { FormData } from "../../types/variance";
import "./Contact.scss";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const canSubmit =
    !!formData.name &&
    !!formData.email &&
    !!formData.subject &&
    !!formData.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <ContactHero />
      <InfoCards
        className="container"
        infoCards={infoCards}
        variant="designed-icon"
      />
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <MessageUs
              submitted={submitted}
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              isFormValid={canSubmit}
            />
            <FrequentlyAsked />
          </div>
        </div>
      </section>
    </div>
  );
};
