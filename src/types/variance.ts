export type Milestone = {
    year: string;
    title: string;
    description: string;
}

export type NavItem = {
    label: string;
    href: string;
}

export type SocialMediaItem = {
    label: string;
    icon: React.ReactNode;
}

export type InfoCardItem = {
    icon?: React.ReactNode;
    title: string;
    description: string | string[];
}

export type InfoCard = {
    icon: React.ReactNode;
    title: string;
    lines: string[];
}

export type FaqItem = {
    question: string;
    answer: string;
}

export type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}