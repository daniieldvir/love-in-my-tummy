
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import type { NavItem, SocialMediaItem } from "../types/variance";

export const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Products',
        href: '/products'
    },
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]


export const socialMediaItems: SocialMediaItem[] = [
    {
        label: 'Facebook',
        icon: <FaFacebook />
    },
    {
        label: 'Instagram',
        icon: <FaInstagram />
    },
    {
        label: 'Whatsapp',
        icon: <FaWhatsapp />
    }
]

