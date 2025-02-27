// src/components/ExpenseForm.jsx
import { useForm } from "react-hook-form";
import './ExpenseForm.css';
import { categories } from "../../data/categories";

const ExpenseForm = ({ onAddExpense }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    

    const onSubmit = (data) => {
        const success = onAddExpense(data.name, data.amount, data.category);

        if (success) {
            reset();
        } else {
            alert('Please fill all fields with valid values');
        }
    };

    return (
        <div className="form-section">
            <form className="add-expense-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-title">Add New Expense</div>

                <div className="form-group">
                    <label htmlFor="expense-amount">Amount (₹)</label>
                    <input
                        type="number"
                        id="expense-amount"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        {...register("amount", { required: "Amount is required", min: 0 })}
                        required
                    />
                    {errors.amount && <p className="error">{errors.amount.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="expense-name">Expense Name</label>
                    <input
                        type="text"
                        id="expense-name"
                        placeholder="e.g., Dinner, Cafe"
                        {...register("name", { required: "Expense name is required" })}
                        required
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <select id="category" {...register("category", { required: true })}>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                    {/* <div className="category-options">
                        <div className="radio-option">
                            <input
                                type="radio"
                                id="food"
                                name="category"
                                value="Food/Beverage"
                                checked={category === 'Food/Beverage'}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label htmlFor="food">Food/Beverage</label>
                        </div>
                        <div className="radio-option">
                            <input
                                type="radio"
                                id="travel"
                                name="category"
                                value="Travel/Commute"
                                checked={category === 'Travel/Commute'}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label htmlFor="travel">Travel/Commute</label>
                        </div>
                        <div className="radio-option">
                            <input
                                type="radio"
                                id="shopping"
                                name="category"
                                value="Shopping"
                                checked={category === 'Shopping'}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label htmlFor="shopping">Shopping</label>
                        </div>
                    </div> */}
                </div>

                <button type="submit" className="add-btn">Add to Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;