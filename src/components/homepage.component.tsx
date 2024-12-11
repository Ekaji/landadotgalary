import HeroComp from './hero.component/hero.component.js';
// import About from './About.js';
// import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar.js'

const HomePage = () => (
    <div>
        <Navbar />
        <HeroComp />
        {/* <Switch>
            <Route path='/' component={ HeroComp} exact/>
            <Route path='/about' component={ About} />   
        </Switch> */}
    </div>  
)

export default HomePage;