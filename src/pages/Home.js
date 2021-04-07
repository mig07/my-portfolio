import About from '../components/About';
import Contact from '../components/Contact';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import TimeLine from '../components/Timeline';

export const Home = () => (
    <div>
        <Introduction />
        <About />
        <TimeLine />
        <Skills />
        <Contact />
    </div>
)