import Header from "./containers/Header/Header";
import Landing from "./containers/Landing/Landing";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import PostsProvider from "./providers/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <div className="App">
        <Header />
        <Landing />
        <About />
        <Portfolio />
      </div>
    </PostsProvider>
  );
}

export default App;
