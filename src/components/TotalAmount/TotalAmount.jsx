import './TotalAmount.css';

const TotalAmount = ({ amount }) => {
    return (
        <div className="total-section">
            <div className="total-label">Total:</div>
            <div className="total-amount">
                ₹ {amount.toFixed(2)}
            </div>
        </div>
    )
};

export default TotalAmount;