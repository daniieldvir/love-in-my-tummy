import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import type { FaqItem, InfoCardItem } from "../types/variance";

export const openingHours = [
  "Sun - Thu: 8am - 8pm",
  "Friday: 8am - 14pm",
  "Saturday: Closed",
];

export const infoCards: InfoCardItem[] = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    description: ["123 Bakery Street", "Tel Aviv, Israel"],
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    description: ["+972 50 123 4567", "Happy to take your order!"],
  },
  {
    icon: <FaClock />,
    title: "Opening Hours",
    description: [
      "Sun – Thu: 8am – 8pm",
      "Friday: 8am – 2pm",
      "Saturday: Closed",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you take custom cake orders?",
    answer:
      "Absolutely! Send us a message with your idea and we'll work with you to create something truly special.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes! We deliver within the Tel Aviv area. Our checkout page includes delivery options with scheduling.",
  },
  {
    question: "Can I order for events?",
    answer:
      "Of course! We love catering for birthdays, weddings, and corporate events. Get in touch to discuss.",
  },
];

export const features: InfoCardItem[] = [
  {
    icon: "🌾",
    title: "Organic Flour",
    description: "We use only the highest quality stone-ground organic flour.",
  },
  {
    icon: "⏰",
    title: "Freshly Baked",
    description: "Every item is baked daily to ensure maximum freshness.",
  },
  {
    icon: "❤️",
    title: "Handmade",
    description: "No machines here. Everything is shaped by hand with care.",
  },
];
