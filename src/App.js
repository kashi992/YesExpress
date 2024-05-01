import TopBar from "./layout/topBar/topBar";
import Navbar from "./layout/navbar/navbar";
import Routers from "./router/routers";
import Footer from "./layout/footer/footer";
import LoginModal from "./layout/topBar/loginModal";

function App() {
  return (
    <div>
      <TopBar />
      <LoginModal/>
      <Navbar />
      <Routers />
      <Footer/>
    </div>
  );
}

export default App;
