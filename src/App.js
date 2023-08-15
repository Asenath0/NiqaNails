import Header from "./containers/Header/Header";
import Landing from "./containers/Landing/Landing";
import About from "./containers/About/About";
import Experience from "./containers/Experience/Experience";
import Portfolio from "./containers/Portfolio/Portfolio";
import PostsProvider from "./providers/PostsProvider";
import PriceList from "./containers/PriceList/PriceList";
import Footer from "./containers/Footer/Footer";
import Opinions from "./containers/Opinions/Opinions";

function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Header />
        <Landing />
        <About />
        <Experience />
        <Portfolio />
        <PriceList />
        <Opinions />
        <Footer />
      </div>
    </PostsProvider>
  );
}

export default App;
