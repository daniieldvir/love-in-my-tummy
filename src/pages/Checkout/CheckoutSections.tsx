import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaTruck, FaUser } from "react-icons/fa";
import './Checkout.scss';

type InputFieldProps = {
    placeholder: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
}
export const InputField = ({ placeholder, type = 'text', required = false, value, onChange }: InputFieldProps) => (
    <div className="form-group">
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


type CustomerInfoFormProps = {
    data: {
        name: string;
        email: string;
        phone: string;
    };
    setData: (data: { name: string; email: string; phone: string; }) => void;
}

export const CustomerInfoForm = ({ data, setData }: CustomerInfoFormProps) => (
    <div className="checkout-section">
        <h2><FaUser /> Customer Information</h2>
        <InputField
            placeholder="Full Name"
            required
            value={data.name}
            onChange={(v) => setData({ ...data, name: v })}
        />
        <div className="form-row">
            <InputField
                placeholder="Email Address"
                type="email"
                required
                value={data.email}
                onChange={(v) => setData({ ...data, email: v })}
            />
            <InputField
                placeholder="Phone Number"
                type="tel"
                required
                value={data.phone}
                onChange={(v: string) => {
                    const digitsOnly = v.replace(/\D/g, '');
                    setData({ ...data, phone: digitsOnly });
                }} />
        </div>
        <div className="form-info">
            <AiOutlineInfoCircle style={{ marginRight: "8px", color: "#007bff" }} />
            Please note: payment is made by phone after confirmation of the order.
        </div>
    </div>
);

type ShippingInfoFormProps = {
    data: {
        address: string;
        city: string;
        postalCode: string;
        notes: string;
    };
    setData: (data: { address: string; city: string; postalCode: string; notes: string; }) => void;
}

export const ShippingInfoForm = ({ data, setData }: ShippingInfoFormProps) => (
    <div className="checkout-section">
        <h2><FaTruck /> Delivery Details</h2>
        <InputField
            placeholder="Street Address"
            required
            value={data.address}
            onChange={(v) => setData({ ...data, address: v })}
        />
        <div className="form-row">
            <InputField
                placeholder="City"
                required
                value={data.city}
                onChange={(v) => setData({ ...data, city: v })}
            />
            <InputField
                placeholder="Postal Code (optional)"
                value={data.postalCode}
                onChange={(v) => setData({ ...data, postalCode: v })}
            />
        </div>
        <div className="form-group">
            <textarea
                rows={3}
                placeholder="Delivery Notes (Optional)"
                value={data.notes}
                onChange={(e) => setData({ ...data, notes: e.target.value })}
            ></textarea>
        </div>
    </div>
);


export const OrderSummary = ({ basket, subtotal, shipping, total, handlePlaceOrder, isFormValid }: any) => (
    <div className="order-summary-card">
        <h3>Order Summary</h3>
        {basket.map((item: any) => (
            <div key={item.product.id} className="summary-item">
                <img src={item.product.image} alt={item.product.name} className="item-img" />
                <div className="item-info">
                    <h4>{item.product.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">
                    ${(parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
            </div>
        ))}
        <div className="summary-totals">
            <div className="total-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="total-row"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div className="total-row grand-total"><span>Total</span><span>${total.toFixed(2)}</span></div>
        </div>
        <button className="place-order-btn" onClick={handlePlaceOrder} disabled={!isFormValid}>Complete Order</button>
    </div>
);
