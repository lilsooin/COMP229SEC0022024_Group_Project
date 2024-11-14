import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header>
                <Link to="/about">About</Link><br />
                <Link to="/contact">Contact</Link>
                
            </header>
        </>
    );

}
