import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Nav from "../../components/nav/Nav";
import './Home.css'

const Home = () => {
    return (
        <>
            <section className="header_container">
                <Nav />
            </section>
            <section className="main_container">
                <Card
                    text='Welcome to my simple Blog'
                    btnText='Go to the articles'
                    link='/blog'
                />
                
            </section>
        </>
    );
}

export default Home;