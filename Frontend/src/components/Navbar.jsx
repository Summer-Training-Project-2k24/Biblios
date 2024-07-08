
export default function Navbar()    {
return  <header>
        <div class="logo">
          <h2>Biblio</h2>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">New Release</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
        <div class="search-account">
            <input type="text" placeholder="Search Books"/>
            <a href="#">Account</a>
            <a href="#">Cart(0)</a>
            <a href="#">Wishlist</a>
        </div>
    </header>
}