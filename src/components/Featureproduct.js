import React from 'react'
import {useProductContext} from "../context/productcontext";
import styled from 'styled-components';
import Productt from './Productt';
const Featureproduct = () => {
    const {isLoading,fetauredproducts}=useProductContext();
    if(isLoading){
        <div>....Loading</div>
    }
  return (
    <>
       <Wrapper>
        <div className="container">
             <div className="intro-data">Check Now</div>
             <div className="common-heading">Our Feature Services</div>
             <div className="grid grid-three-column">
                {
                    fetauredproducts.map((curr)=>{
                        return <Productt key={curr.id} {...curr}/>
                    })
                }
             </div>
            </div></Wrapper>  
    </>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: hidden;

  .container {
    max-width: 120rem;
    transition: transform 0.3s ease-in-out;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    border-radius: 1rem;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover img {
      transform: scale(1.2) rotate(2deg);
      filter: brightness(1.1);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.4s ease-in-out;
    }

    &:hover .caption {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: scale(1.05) rotate(-1deg);
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    }

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      transition: color 0.3s ease-in-out;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      border: 0.1rem solid transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      border-radius: 2rem;
      transition: all 0.3s ease-in-out;
      box-shadow: 0px 5px 15px rgba(98, 84, 243, 0.3);

      &:hover {
        background: linear-gradient(45deg, #2575fc, #6a11cb);
        transform: translateY(-3px);
        box-shadow: 0px 10px 20px rgba(98, 84, 243, 0.5);
      }

      &:hover a {
        color: #fff;
      }

      a {
        color: #fff;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
`;


export default Featureproduct;
