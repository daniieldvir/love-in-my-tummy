import './Button.scss';
type Props = {
    text: string;
    type: 'primary' | 'secondary' | 'tertiary' | 'add-to-basket'
    className: string;
    onClick: () => void;
};

export const Button = ({ text, type, className, onClick }: Props) => {
    return <button className={`button ${type} ${className}`} onClick={onClick}>
        <span className="button-text">{text}</span>
    </button>
}