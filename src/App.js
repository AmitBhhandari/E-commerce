import { Fragment } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/body";
import Footer from "./Components/Layout/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Body/>
      <Footer/>
    </Fragment>
  );
}

export default App;
