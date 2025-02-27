// src/components/ExpenseList.jsx
import { useState } from 'react';
import ExpenseItem from '../ExpenseItems/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="expense-section">
      <div className="breakdown-header" onClick={toggleCollapse}>
        <span>Breakdown</span>
        <span className="toggle-icon">{isCollapsed ? '►' : '▼'}</span>
      </div>
      
      {!isCollapsed && (
        <div className="expense-list">
          {expenses.length === 0 ? (
            <div className="no-expenses">No expenses yet. Add one to get started!</div>
          ) : (
            expenses.map(expense => (
              <ExpenseItem 
                key={expense.id} 
                expense={expense} 
                onDelete={onDeleteExpense} 
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;