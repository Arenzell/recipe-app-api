import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logos from "./my-recipes.svg";
function App() {
  return (
    <div className="App">
      <Blur></Blur>
      <BrowserRouter>
        <Nav>
          <Logo to={"/recipe-app-api"}>
            <img alt="img" src={Logos} width="100px" />
          </Logo>
        </Nav>
        <hr style={{ opacity: 0.4 }} />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}
const Blur = styled.div`
  top: 0;
  right: 0;
  z-index: 0;
  position: absolute;
  width: 528px;
  height: 505px;

  background: linear-gradient(97.37deg, #f15b2b -15.03%, #ff0006 174.67%);
  filter: blur(727px);
  border-radius: 814px;
`;
const Logo = styled(Link)`
  z-index: 200;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Nav = styled.div`
  cursor: pointer;
  margin: 2rem 0rem;
  display: flex;
`;
export default App;
