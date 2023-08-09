import Header from "./containers/Header/Header";
import Landing from "./containers/Landing/Landing";
import About from "./containers/About/About";
import Experience from "./containers/Experience/Experience";
import Portfolio from "./containers/Portfolio/Portfolio";
import PostsProvider from "./providers/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Header />
        <Landing />
        <About />
        <Experience />
        <Portfolio />
      </div>
    </PostsProvider>
  );
}

export default App;
