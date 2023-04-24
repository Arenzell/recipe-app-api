import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = React.useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  console.log(cuisine);
  React.useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <Flex
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.image}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Flex>
  );
}

const Flex = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    object-fit: cover;
    margin: 10px;
    width: 312px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    padding: 10px;
    text-align: center;
    width: 248px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 10px;
  }
`;

export default Cuisine;
