import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Footer from "../pages/Footer"

export default function () {
    return <div>
        <Navbar />
        <Slider />
        <Categories one="Higher Education" two="Management Books" three="" />
        <Footer />
    </div>
}
