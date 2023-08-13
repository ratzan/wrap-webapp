import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Wrap Web App</h1>
            <p>This is the home page of your application.</p>

            <nav>
                <ul>
                    <li>
                        <Link href="/store">
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;
