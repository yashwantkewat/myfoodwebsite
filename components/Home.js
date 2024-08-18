import React, { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
import VanillaTilt from 'vanilla-tilt';
import "../allcss/Home.css";
import pic1 from "../img/french1.jpg"
import pic2 from "../img/italian.jpg"
import pic3 from "../img/paneer.jpg"

const Home = () => {
  useEffect(() => {
    const initializeSlider = () => {
      const sliderContainer = document.querySelector(".slider");
      if (sliderContainer) {
        tns({
          container: ".slider",
          items: 3,
          speed: 500,
          mouseDrag: true,
          autoplay: false,
          center: true,
          loop: false,
          nav: false,
          controlsContainer: "#custom-control",
          controlsPosition: "bottom",
        });
      }
    };

    const initializeVanillaTilt = () => {
      VanillaTilt.init(document.querySelectorAll('.tilt'), {
        glare: true,
        'max-glare': 0.5,
      });
    };

    const initializeTypingEffect = () => {
      const txt = "example@domain.com";
      const speed = 150;
      const emailId = document.getElementById("email-id");
      let i = 0;

      const type = () => {
        if (i < txt.length) {
          emailId.setAttribute("placeholder", emailId.getAttribute("placeholder") + txt.charAt(i));
          i++;
          setTimeout(type, speed);
        }
      };

      setTimeout(type, 1600);
    };

    const initializeFormValidation = () => {
      const form = document.getElementById("form");
      const emailId = document.getElementById("email-id");
      const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      form.addEventListener("submit", (e) => {
        const emailInputValue = emailId.value;
        if (emailInputValue.match(mailRegex)) {
          e.preventDefault();
          form.innerHTML = `<p style="font-size: 2rem; font-weight: 500; color: rgb(118, 167, 63);">Subscribed! 🎉</p>`;
          setTimeout(() => {
            window.location.href = "#about";
          }, 1500);
        } else {
          emailId.classList.add("error");
        }
      });

      emailId.addEventListener("input", () => {
        emailId.classList.remove("error");
      });
    };

    initializeSlider();
    initializeVanillaTilt();
    initializeTypingEffect();
    initializeFormValidation();
  }, []);

  return (
    <div className="home" id='home'>
      <div className="description">
        <h1 className="title gradient-text">
          Welcome to <br /> Our <span className="gradient-text">Website</span>
        </h1>
        <p className="paragraph">
        Life's too short to eat bad food.Good food, good mood.
        </p>
        <form id="form">
          <input
            type="email"
            id="email-id"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>

      <section className="featured-dishes">
        <h2 style={{color:"white",}}>Featured Dishes</h2>
        <div className="slider">
          <div className="item">
            <img src={pic1} alt="Dish 3" />
            <h3>fish curry</h3>
            <p>Delicious description of Dish 1.</p>
          </div>
          <div className="item">
            <img src={pic2} alt="Dish 3" />
            <h3>paneer copta</h3>
            <p>Delicious description of Dish 2.</p>
          </div>
          <div className="item">
            <img src={pic3} alt="Dish 3" />
            <h3>French</h3>
            <p>Delicious description of Dish 3.</p>
          </div>
        </div>
        <div id="custom-control" className="custom-control">
          <button className="prev">Prev</button>
          <button className="next">Next</button>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The best food delivery service I've ever used! The food is always fresh and delivered on time."</p>
          <h4>- Customer 1</h4>
        </div>
        <div className="testimonial">
          <p>"Excellent variety and quality. Highly recommend this service to anyone who loves great food."</p>
          <h4>- Customer 2</h4>
        </div>
      </section>

      <section className="promotional-offer">
        <h2>Special Offer</h2>
        <p>Get 20% off on your first order! Use code <strong>WELCOME20</strong> at checkout.</p>
      </section>
    </div>
  );
};

export default Home;
