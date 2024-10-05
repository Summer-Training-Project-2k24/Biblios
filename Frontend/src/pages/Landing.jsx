import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
//import Categories from "./categories"
import WhyUsSlider from '../components/WhyUsSlider'; 

// import AuthorSlider from '../components/AuthorSlider';
import Footer from "./Footer1";
import BookGenresSection from "../components/BookGenre";

const Landing=()=> {
    return <div>
        <Navbar />
        <Slider />
        {/* <Categories one="Higher Education" two="Management Books" three="" /> */}
        {/* <AuthorSlider /> */}
        <BookGenresSection/>
     <section className="why-us-section">
          <h2>Why Should You Buy From Us?</h2>
          <WhyUsSlider />
        </section>
        <Footer/>
    </div>
}
export default Landing;
