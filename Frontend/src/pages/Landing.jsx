import Navbar from "./navbar"
import Slider from "./slider"
//import Categories from "./categories"
import WhyUsSlider from './WhyUsSlider'; 

import AuthorSlider from './AuthorSlider';
import Footer from "./footer";
import BookGenresSection from "./genre";

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