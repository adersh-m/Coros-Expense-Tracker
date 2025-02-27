import './Header.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Header = ({ onOpenModal }) => {
    const { userData, signOut, openModal  } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <h1>Coros Expense Tracker</h1>
            <div className="actions">
                {userData ? (
                    <>
                        <div className="user-info">
                            <span>👤 {userData.name}</span>
                            <div className="profile-pic">
                                <img src="https://placehold.co/40" alt="Profile" />
                            </div>
                        </div>
                        <div className="menu-container">
                            <button onClick={toggleMenu} className="menu-button">
                                ☰ Menu
                            </button>
                            {menuOpen && (
                                <div className="dropdown">
                                    <Link to="/" className='dropdown-item' onClick={() => setMenuOpen(false)}>Home</Link>
                                    <Link to="/settings" className='dropdown-item' onClick={() => setMenuOpen(false)}>Settings</Link>
                                    <button onClick={() => { setMenuOpen(false); signOut() }} className='dropdown-item logout'>Sign Out</button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <button onClick={openModal} className="sign-in-btn">Sign In</button>
                )}

            </div>
        </header >
    )

};

export default Header;