
import { AboutSection } from "../Components/AboutSection";
import {Hero} from "../Components/Hero";
import {Navbar} from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen" >
        {/* Theme Toggle*/}
        <ThemeToggle/>
        {/*Background Effects */}

        {/*Navbar */}
        <Navbar/>
        {/*Main Content */}
        <Hero/>
        <AboutSection/>
        {/*Footer */}




    </div>
}