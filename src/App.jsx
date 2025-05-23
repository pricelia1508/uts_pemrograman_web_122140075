import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Katalog from './pages/Katalog';
import MainLayout from './Layout';
import About from './pages/About';
import BookDetail from './pages/BookDetail';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="katalog" element={<Katalog />} />
                <Route path="book/:id" element={<BookDetail />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
