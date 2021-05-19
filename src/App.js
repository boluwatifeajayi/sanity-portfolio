import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/Navbar";
// import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";



function App(){
    return(
        
        <BrowserRouter>
        <NavBar/>
            <Switch>
                <Route component={Home} path='/' exact />
                <Route component={About} path='/about' />
                <Route component={SinglePost} path='/post/:slug' />
                <Route component={Post} path='/post' />
                <Route component={Project} path='/project' />
                <Route component={Resume} path='/resume' />
                <Route component={Contact} path='/contact' />
            </Switch>
         {/* <Footer/>  */}
        </BrowserRouter>
        
    )
}

export default App;
