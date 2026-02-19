import './CopyrightFooter.scss';
export const CopyrightFooter = () => {
    const year = new Date().getFullYear();
    return <div className="footer-bottom">
        <p>&copy; {year} Love in my tummy. All rights reserved.</p>
    </div>
}