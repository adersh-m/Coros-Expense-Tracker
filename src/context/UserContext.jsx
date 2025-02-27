// src/context/UserContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { getStoredData, setStoredData } from "../utils/storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => getStoredData("userName", null));

    useEffect(() => {
        if (userData) {
            setStoredData("userName", userData);
        }
    }, [userData]);

    const updateUser = (data) => {
        setUserData(data);
    };

    const signOut = () => { 
        setStoredData("userName", null);
        setUserData(null);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);  

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <UserContext.Provider value={{ userData, updateUser , signOut, isModalOpen, openModal, closeModal }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
