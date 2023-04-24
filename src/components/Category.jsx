import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  @media (max-width: 600px) {
    h4 {
      display: none;
    }
  }
`;
const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(89.88deg, #4f4f4f -1.38%, #000000 112.28%);
  margin: 0 10px;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  @media (max-width: 600px) {
    width: 4rem;
    height: 4rem;
    margin: -12px 7px;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(89.77deg, #f15b2b -18.87%, #951a1d 137.41%);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
