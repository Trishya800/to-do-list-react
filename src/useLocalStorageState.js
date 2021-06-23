import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const localStorageTasks = localStorage.getItem(keyName);
        if (localStorageTasks === null) {
            return initialValue;
        }

        return JSON.parse(localStorage.getItem(keyName))
    }

    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state, keyName]);

    return [state, setState];
};

