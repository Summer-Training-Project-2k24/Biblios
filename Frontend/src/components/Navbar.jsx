import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header>
            <div className="logo">
                <h2>Biblio</h2>
            </div>
            <nav>
                <ul>
                    <li onClick={() => navigate("/")} className="active">Home</li>
                    <li onClick={() => navigate("/about")}>About Us</li>
                    <li onClick={() => navigate("/https://66976119b15dac4dff6eeab7--cheerful-frangollo-eac518.netlify.app/")}>Books</li>
                    <li onClick={() => navigate("/new-release")}>New Release</li>
                    <li onClick={() => navigate("/contact")}>Contact Us</li>
                    <li onClick={() => navigate("/blog")}>Blog</li>
                </ul>
            </nav>
            <div className="search-account">
                <a href="/profile">Account</a>
                <a href="/wishlist">Wishlist</a>
            </div>
        </header>
    );
}