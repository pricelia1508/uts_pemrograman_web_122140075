import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('favoriteBooks');
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (book) => {
        setFavorites((prev) => {
            if (prev.find((b) => b.id === book.id)) return prev;
            return [...prev, book];
        });
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((book) => book.id !== id));
    };

    const isFavorite = (id) => {
        return favorites.some((book) => book.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
