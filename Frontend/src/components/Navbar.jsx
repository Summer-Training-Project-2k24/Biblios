import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function Navbar()    {
return  <header>
        <div class="logo">
          <h2>Biblio</h2>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="http://localhost:5173/about">About Us</a></li>
                <li><a href="http://localhost:3001">Books</a></li>
                <li><a href="#">New Release</a></li>
                <li><a href="http://localhost:5173/contact">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        
        <div class="search-account">
            <a href="http://localhost:5173/Profile">profile</a>
            <a href="http://localhost:5173/login">login</a>
            
            <a href="#">Wishlist</a>
        </div>
    </header>
=======
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
                    <li onClick={() => navigate("/books")}>Books</li>
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
>>>>>>> 14d1b06164b399399ac0ae76dab5f4a6120430d6
}