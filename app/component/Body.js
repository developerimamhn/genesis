import Footer from './Footer';
import Pagefive from './Pagefive';
import Pagefore from './Pagefore';
import PageLogo from './PageLogo';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';


const Body = () => {
    return (
        <div className='relative overflow-hidden'>
            <PageLogo/>
            <Pagefive/>
            <Pagefore/>
            <Pageone/>
            <Pagetwo/>
            <Pagethree/>
            <Footer/>
        </div>
    );
};

export default Body;