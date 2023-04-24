import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setinput] = React.useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <Formstyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setinput(e.target.value)}
          type="text"
          placeholder="Search..."
          value={input}
        />
      </div>
    </Formstyle>
  );
}
const Formstyle = styled.form`
  margin: 50px auto;
  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 58%;
    border: none;
    background: linear-gradient(89.88deg, #4f4f4f -1.38%, #000000 112.28%);
    color: white;
    padding: 1rem 4rem;
    outline: none;
    border-radius: 1rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    input {
      width: 100%;
    }
  }
  svg {
    position: absolute;
    top: 38%;
    left: 23%;
    transform: translate(100%;-50%);
    color: white;
  }
  @media (max-width: 600px) {
    svg {
      position: absolute;
      top: 38%;
      left: 6%;

      color: white;
    }
  }
`;
export default Search;
