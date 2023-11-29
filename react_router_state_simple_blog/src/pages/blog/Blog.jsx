import Nav from "../../components/nav/Nav";
import './Blog.css'
import data from "../../data/data"
import Card from "../../components/card/Card";

const Blog = () => {
    return (
        <>
            <section className="header_blog_container">
                <Nav />
            </section>
            <section>
                {
                    <div className="grid">
                        {data.map(item => (
                            <Card
                                imgUrl={item.img_url}
                                text={item.title}
                                btnText='read more'
                                link='/details'
                            />
                        ))}
                    </div>
                }
            </section>
        </>
    );
}

export default Blog;