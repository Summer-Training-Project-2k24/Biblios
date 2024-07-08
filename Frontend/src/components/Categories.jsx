import Card from "./Card"
export default function Categories({ one, two, three }) {
    return <section class="categories">
        <h2>Explore our Top Categories</h2>
        <div class="categories-navigation">
            <button class="prev">←</button>
            <button class="next">→</button>
        </div>
        <div class="categories-navigation">
            <Card input="Books" />
            <Card input="Management" />
            <Card input="Aabcdef" />
        </div>
        <a href="#" class="view-more">View More →</a>
    </section>
}