import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* Header Section */}
            <header>
                <h2>Welcome Back to the Library App</h2>
                <p>
                    Manage your library, keep track of your wishlist, and explore new books tailored for you.
                </p>
            </header>

            {/* Instructions Section */}
            <main>
                <section>
                    <h2>Your Library Hub</h2>
                    <ul>
                        <li>
                            <strong>Books List:</strong> Visit the <Link to="/books">Books List</Link> to view all available books by genre.
                        </li>
                        <li>
                            <strong>Wishlist:</strong> Manage your wishlist:
                            <ul>
                                <li>Add books you love.</li>
                                <li>View and organize your list.</li>
                                <li>Update notes or remove books when done.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}