import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
<<<<<<< HEAD
import Categories from "../components/Categories"
import Footer1 from "./Footer1"
=======
//import Categories from "./categories"
import WhyUsSlider from '../components/WhyUsSlider'; 
>>>>>>> 14d1b06164b399399ac0ae76dab5f4a6120430d6

import AuthorSlider from '..components/AuthorSlider';
import Footer from "./footer1";
import BookGenresSection from "../components/BookGenre";

const Landing=()=> {
    return <div>
        <Navbar />
        <Slider />
        {/* <Categories one="Higher Education" two="Management Books" three="" /> */}
        <AuthorSlider />
        <BookGenresSection/>
     <section className="why-us-section">
          <h2>Why Should You Buy From Us?</h2>
          <WhyUsSlider />
        </section>
        <Footer/>
    </div>
}
export default Landing;