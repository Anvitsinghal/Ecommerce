import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.bg};

  .grid {
    gap: 4.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
    }

    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, rgba(81, 56, 238, 0.2) 10%, rgba(0, 0, 0, 0) 80%);
      transition: opacity 0.4s ease-in-out;
      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
      top: 0;
      left: 0;
    }
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      padding: 2rem;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0px 5px 15px rgba(81, 56, 238, 0.3);
    animation: pulse 2s infinite alternate;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 10px 30px rgba(81, 56, 238, 0.5);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export default Services;