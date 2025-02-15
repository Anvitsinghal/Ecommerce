import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 100rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
           <h2 className="common-heading">Contact Us</h2>
<div style={{ width: "100%", height: "450px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2083868829973!2d77.42486507528983!3d28.653478475653365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1d263d479d5%3A0x1ec65e86735c7cf8!2sGhaziabad%20Junction!5e0!3m2!1sen!2sin!4v1738078653019!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </div>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/myzkwkaa" method="POST" className="contact-inputs">
        <input type="text" placeholder="username" name="username" required autoComplete="off" />
        <input type="email" placeholder="Email" name="Email" required autoComplete="off" />
        <textarea placeholder="Enter Message" name="message" cols="30" rows="20"></textarea>
        <input type="submit" value="send"/>
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
