// src/pages/Settings.jsx
import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { categories } from "../../data/categories";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    const { user, updateUser } = useUser();
    const [formData, setFormData] = useState(user);
    const [currency, setCurrency] = useState("₹");
    const [customCategories, setCustomCategories] = useState([...categories]);
    const [newCategory, setNewCategory] = useState("");

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleSave = () => {
        updateUser(formData);
        alert("Settings saved!");
        navigate("/");
    };

    const handleAddCategory = () => {
        if (newCategory.trim() !== "" && !customCategories.includes(newCategory)) {
            setCustomCategories([...customCategories, newCategory]);
            setNewCategory("");
        }
    };

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="settings-container">
            <div className="container">
                <h2>Settings</h2>

                {/* Profile Section */}
                {/* <div className="settings-section">
                <h3>Profile</h3>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
            </div> */}

                {/* Currency Selection */}
                <div className="settings-section">
                    <h3>Currency</h3>
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option value="₹">INR (₹)</option>
                        <option value="$">USD ($)</option>
                        <option value="€">EUR (€)</option>
                        <option value="£">GBP (£)</option>
                    </select>
                </div>

                {/* Category Management */}
                <div className="settings-section">
                    <h3>Categories</h3>
                    <ul>
                        {customCategories.map((cat, index) => (
                            <li key={index}>{cat}</li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New category"
                    />
                    <button onClick={handleAddCategory}>Add Category</button>
                </div>

                <div className="settings-actions">
                    <button className="save-btn" onClick={handleSave}>Save Settings</button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
