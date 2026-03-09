// Hook customizado que recebe:
// - key: a chave do storage (ex: STORAGE_KEY.USER_NAME)
// - initialValue: valor inicial caso não exista nada salvo

import React from "react";

import { getStorage, setStorage, removeStorage } from "../Service";

export function useStoredValue<T>(key: string, initialValue: T) {
    // 1. Estado para guardar o valor
    const [value, setValue] = React.useState<T>(initialValue);
    // 2. Estado para saber se esta carregado. 
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    //3. useEffect que roda uma vez ao montar o componente. 
    React.useEffect(() => {
        // Função async interna (não pode ser async diretamente no useEffect). 
        async function loadFriomStorage() {
            try {
                const stored = await getStorage<T>(key);
                if (stored !== null)
                    setValue(stored);
            } catch (e) {
                console.error(`Error loading key ${key} from storage:`, e);
            } finally {
                setIsLoading(false);
            }
        }

        loadFriomStorage();
    }, [key]); //  Roda de novo se a key mudar. 

    //4. Funcao helper para salvar . 
    async function saveValue(newValue: T) {
        try {
            await setStorage<T>(key, newValue);
            setValue(newValue);
        } catch (e) {
            console.error(`Error saving key ${key} to storage:`, e);
        }
    }

    //5. Funcao helper para limpar (logout/reset)
    async function clearValue() {
        try {
            await removeStorage(key);
            setValue(initialValue);
        } catch (e) {
            console.error(`Error clearing key ${key} from storage:`, e);
        }
    }

    return { value, isLoading, saveValue, setValue, clearValue };
}