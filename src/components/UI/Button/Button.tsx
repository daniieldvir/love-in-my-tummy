import './Button.scss';
type Props = {
    text: string;
    designType: 'primary' | 'secondary' | 'tertiary' | 'add-to-basket'
    type: 'button' | 'submit'
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) => void;
};

export const Button = ({ text, designType, type = 'button', className, onClick }: Props) => {
    return <button type={type} className={`button ${designType} ${className}`} onClick={onClick}>
        <span className="button-text">{text}</span>
    </button>
}