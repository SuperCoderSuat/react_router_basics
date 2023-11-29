import Headline from '../../components/headline/Headline';
import Nav from '../../components/nav/Nav';
import './Home.css'

const Home = () => {
    return (
        <section>
            <Nav />
            <Headline
                text='Speisen'
            />
        </section>
    );
}

export default Home;