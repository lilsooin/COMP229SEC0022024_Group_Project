import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* Header Section */}
            <header>
                <h2>Welcome to the Library App</h2>
                <p>
                    {/* Description of the App */}
                    Discover a wide collection of books, manage your wishlist, and enjoy personalized features by logging in.
                </p>
            </header>

            {/* Instructions Section */}
            <main>
                <section>
                    <h2>Instructions</h2>
                    <ul>
                        <li>
                            <strong>Books List:</strong> Navigate to the "Books List" page to view all available books categorized by genre.
                        </li>
                        <li>
                            <strong>Login:</strong> Log in to access personalized features like managing your wishlist.
                        </li>
                        <li>
                            <strong>Wishlist:</strong> After logging in, you can:
                            <ul>
                                <li>Add books to your wishlist.</li>
                                <li>View your current wishlist.</li>
                                <li>Update notes or details for books in your wishlist.</li>
                                <li>Remove books from your wishlist.</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
}