import TopBar from "./layout/topBar/topBar";
import Navbar from "./layout/navbar/navbar";
import Routers from "./router/routers";
import Footer from "./layout/footer/footer";
import ScrollTop from "./router/ScrollTop";

function App() {
  return (
    <div>
      <ScrollTop/>
      <TopBar />
      <Navbar />
      <Routers />
      <Footer/>
    </div>
  );
}

export default App;
