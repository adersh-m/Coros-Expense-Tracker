import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete }) => {
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Food/Beverage':
                return '🍽️';
            case 'Travel/Commute':
                return '🚗';
            case 'Shopping':
                return '🛍️';
            default:
                return '📝';
        }
    };

    return (
        <div className="expense-item">
            <div className="expense-info">
                <div className={`expense-icon ${expense.category.split('/')[0].toLowerCase()}-icon`}>
                    {getCategoryIcon(expense.category)}
                </div>
                <div className="expense-details">
                    <div className="expense-category">{expense.name}</div>
                    <div className="expense-date">{expense.date}</div>
                </div>
            </div>
            <div className="expense-actions">
                <div className="expense-amount">~ ₹ {expense.amount.toFixed(2)}</div>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(expense.id)}
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default ExpenseItem;