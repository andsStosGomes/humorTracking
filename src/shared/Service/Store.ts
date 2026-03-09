// Importa a bibliotéca AsyncStorage para persistência de dados local no telefone
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define as chaves constantes que serão usadas para guardar dados no storage
// O 'as const' garante que esses valores são tipados como constantes (não mudam)
export const STORAGE_KEY = {
    // Chave para guardar o nome do usuário
    USER_NAME: '@humorTracking:userName',
    // Chave para guardar a lista de humores/moods registrados
    MOOD_LIST: '@humorTracking:moodList',
} as const;


// Função genérica para SALVAR dados no storage
// <T> = aceita qualquer tipo de dado (string, número, objeto, array, etc)
// key = identificador do dado (ex: '@humorTracking:userName')
// value = o dado que será salvo (qualquer tipo T)
// Promise<void> = retorna uma promessa que não retorna nada, apenas salva
export async function setStorage<T>(key: string, value: T): Promise<void> {
    // JSON.stringify() = converte o objeto/array para texto (JSON)
    // AsyncStorage.setItem() = salva o texto no storage do telefone
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

// Função genérica para LER dados do storage
// <T> = o tipo de dado que esperamos receber de volta
// key = identificador do dado a ler
// Promise<T | null> = retorna o dado (tipo T) OU null se não existe
export async function getStorage<T>(key: string): Promise<T | null> {
    // AsyncStorage.getItem() = busca o valor guardado no storage (retorna texto ou null)
    const value = await AsyncStorage.getItem(key);
    // Se value existe, converte de texto (JSON) para objeto/tipo T
    // Se value é null/vazio, retorna null diretamente
    return value ? (JSON.parse(value) as T) : null;
}

// Função para DELETAR dados do storage
// key = identificador do dado a ser removido
// Promise<void> = retorna uma promessa que não retorna nada, apenas deleta
export async function removeStorage(key: string): Promise<void> {
    // AsyncStorage.removeItem() = remove dados do storage do telefone pela chave
    await AsyncStorage.removeItem(key);
}