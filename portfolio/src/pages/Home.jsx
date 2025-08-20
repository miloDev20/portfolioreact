
import { AboutSection } from "../Components/AboutSection";
import {Hero} from "../Components/Hero";
import {Navbar} from "../Components/Navbar";
import { ThemeToggle } from "../Components/ThemeToggle";
import AnimatedStars from "../Components/AnimatedStars";

export const Home = () => {
    return <div className="min-h-screen" >
        
        {/*Background Effects */}
        <AnimatedStars/>

        {/*Navbar */}
        <Navbar/>

        {/* Theme Toggle*/}
        <ThemeToggle/>
        {/*Main Content */}
        <Hero/>
        <AboutSection/>
        {/*Footer */}




    </div>
}