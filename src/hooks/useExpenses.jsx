import { useState, useEffect } from "react";

export const useExpenses = () => {
    const sampleExpenses = [
        {
            id: 1,
            name: "Dinner",
            amount: 12.00,
            category: "Food/Beverage",
            date: "21 May 2021"
        },
        {
            id: 2,
            name: "Cafe",
            amount: 240.00,
            category: "Travel/Commute",
            date: "21 May 2021"
        },
        {
            id: 3,
            name: "Cafe",
            amount: 240.00,
            category: "Food/Beverage",
            date: "21 May 2021"
        }
    ];

    const [expenses, setExpenses] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const savedExpense = localStorage.getItem("expense");
        if (savedExpense) {
            setExpenses(JSON.parse(savedExpense));
        }
        else {
            setExpenses(sampleExpenses);
            localStorage.setItem("expense", JSON.stringify(sampleExpenses));
        }
    }, []);

    useEffect(() => {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        setTotalAmount(total);

        localStorage.setItem("expense", JSON.stringify(expenses));
     }, [expenses]);

    const addExpense = (name, amount, category) => {
        let isAmount = /^\d+(\.\d{1,2})?$/.test(amount);
        // validate input
        if (!name.trim() || !isAmount || amount <= 0 || !category) {
            return false;
        }

        const newExpense = {
            id: crypto.randomUUID(),
            name: name,
            amount: parseFloat(amount),
            category: category,
            date: new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            })
        };
        setExpenses(prevExpense => [...prevExpense, newExpense]);
        return true;
    };

    const deleteExpense = (id) => {
        const newExpense = expenses.filter(expense => expense.id !== id);
        setExpenses(newExpense);
    };


    return { expenses, totalAmount, addExpense, deleteExpense };
}