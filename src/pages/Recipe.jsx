import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setdetails] = useState({});
  const [activetab, setactivetab] = useState("Instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setdetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <span></span>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activetab === "Instructions" ? "active" : ""}
          onClick={() => setactivetab("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activetab === "Ingredients" ? "active" : ""}
          onClick={() => setactivetab("Ingredients")}
        >
          Ingredients
        </Button>
        {activetab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activetab === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 7rem;
  margin-bottom: 5rem;
  position: relative;
  display: flex;
  @media (max-width: 1393px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  .active {
    background: linear-gradient(89.77deg, #f15b2b -18.87%, #951a1d 137.41%);
    color: white;
  }
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    color: #4f4f4f;
  }
  @media (max-width: 1393px) {
    h2 {
      display: flex;
      justify-content: center;
    }
  }
  img {
    border-radius: 20px;
  }
  @media (max-width: 1393px) {
    img {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  span {
    border-radius: 20px;
    position: absolute;
    width: 554px;
    height: 377px;
    background-color: red;
    heigth: 500px;
    /* top: 11%; */
    z-index: -1;
    /* left: 10%; */
    margin: 3px -10px;
    background: linear-gradient(89.77deg, #f15b2b -18.87%, #951a1d 137.41%);
  }
  @media (max-width: 1393px) {
    span {
      display: none;
    }
  }
  h3 {
    font-size: 1rem;
  }
  @media (max-width: 1393px) {
    h3 {
      font-weight: 400;
    }
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  ul li::marker {
    font-size: 1.5rem;
    color: #f15b2b;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
  color: black;
  background: white;
  border: 2px solid black;
  text-transform: uppercase;
  margin-right: 2rem;
  font-weigth: 600;
  @media (max-width: 1393px) {
    padding: 1rem 2rem;
    color: black;
    background: white;
    border: 2px solid black;
    text-transform: uppercase;
    margin-right: 2rem;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    margin-block: 10px;
    border: 2px solid #00000063;
  }
`;
const Info = styled.div`
  margin-left: 10rem;
  @media (max-width: 1393px) {
    margin: 55px 0px;
    color: #4f4f4f;
  }
`;
export default Recipe;
