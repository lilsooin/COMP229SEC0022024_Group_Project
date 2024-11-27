import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <>
            {/* Landing Page Header */}
            <header>
                <h2>Welcome to the Library App</h2>
                <p>Your gateway to a world of books and personalized reading experiences.</p>
            </header>

            {/* Call to Action Section */}
            <section>
                <h2>Why Join Us?</h2>
                <p>Explore thousands of books, create your wishlist, and enjoy personalized recommendations tailored just for you.</p>
                <p>
                    <strong>Get Started:</strong> <Link to="/login">Log in</Link> or <Link to="/signup">Sign up</Link> to unlock all features.
                </p>
            </section>

            {/* Instructions Section */}
            <section>
                <h2>How It Works</h2>
                <strong>Read, Share, Achieve</strong>
                <ul>
                    <li>
                        <strong>Books List:</strong> Navigate to the <Link to="/books">Books List</Link> page to view all available books categorized by genre.
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
        </>
    );
}