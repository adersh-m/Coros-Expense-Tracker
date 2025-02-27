import { useUser } from "../context/UserContext";
import { useExpenses } from '../hooks/useExpenses';
import { useState } from 'react';
import TotalAmount from '../components/TotalAmount/TotalAmount';
import ExpenseList from '../components/ExpenseList/ExpenseList';
import ExpenseForm from '../components/ExpenseForm/ExpenseForm';
import Modal from '../components/Modal/Modal';

const Home = () => {
    
    const { userData, saveUserData } = useUser();
    const { expenses, totalAmount, addExpense, deleteExpense } = useExpenses();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="app-container">
            <div className="container">
                <TotalAmount amount={totalAmount} />

                <div className="main-content">
                    <ExpenseList
                        expenses={expenses}
                        onDeleteExpense={deleteExpense} />
                    <ExpenseForm onAddExpense={addExpense} />
                </div>
            </div>


            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={saveUserData}
                initialData={userData}
            />
        </div>
    )

}

export default Home;