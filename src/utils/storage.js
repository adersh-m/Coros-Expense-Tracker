// src/utils/storage.js

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export const getStoredData = (key, defaultValue = null) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? (isJsonString(storedValue) ? JSON.parse(storedValue) : storedValue): defaultValue;
    } catch (error) {
        console.error(`Error getting ${key} from localStorage:`, error);
        return defaultValue;
    }
};

export const setStoredData = (key, value, shouldStringify = true) => {
    try {
        let storeValue = shouldStringify ? JSON.stringify(value) : value;
        localStorage.setItem(key, storeValue);
    } catch (error) {
        console.error(`Error setting ${key} to localStorage:`, error);
    }
};
