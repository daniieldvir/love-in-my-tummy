import './ShoppingCartButton.scss';
type Props = {
    className: string;
    children: React.ReactNode;
    onClick: () => void;
};

export const ShoppingCartButton = ({className, children, onClick}: Props) => {
    return <button className={`shopping-cart-btn ${className}`} onClick={onClick}>
        {children}
    </button>
}