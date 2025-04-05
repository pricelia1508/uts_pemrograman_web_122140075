import Hero from '../components/Hero';
import BookCatalogue from '../components/BookCatalogue';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <>
            <Hero />
            <BookCatalogue pageNow={1} limitNeed={5} />
        </>
    );
}
