import Nav from "../../components/nav/Nav";
import data from "../../data/data";

const Details = () => {
    return (
        <section>
            <Nav />
                <div key={data[0].id}>
                    <img src={data[0].img_url} alt="" />
                    <div>
                        <h3>{data[0].title}</h3>
                        <p>{data[0].description}</p>
                        <p>{data[0].author}</p>
                    </div>
                </div>
        </section>
    );
};

export default Details;