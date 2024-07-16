
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
            <a href="http://localhost:5173/Profile">Account</a>
            <a href="#">Wishlist</a>
        </div>
    </header>
}