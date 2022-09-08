import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/SuperHero"
import "./style/landingPage.css"
function App() {
    return (
        <div>
            {/* Intro section */}
            <div className="myBG">
                <NavigationBar />
                <Intro />
            </div>
            {/* End of Intro */}

            {/* Trending section */}
            <div className="trending">
                <Trending />
            </div>
            {/* End of Trending */}

            {/* Superhero section */}
            <div className="superhero">
                <SuperHero />
            </div>
            {/* End of SuperHero */}
        </div>
    )
}

export default App