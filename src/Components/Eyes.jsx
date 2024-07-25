import React, { useEffect } from 'react';
import './Eyes.css';
import './scroll';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal",
    });

    const blocks = document.querySelectorAll(".block[data-block-section]");
    scroll.on("scroll", (args) => {
      blocks.forEach((block) => {
        const attr = block.getAttribute("data-block-section");
        const section = document.querySelector(`section[data-block-section='${attr}']`);

        if (section.getBoundingClientRect().left <= block.offsetWidth * attr) {
          block.classList.add("fixed");
          block.classList.remove("init");
          block.classList.remove("active");
          block.style.left = "";
        } else if (
          section.getBoundingClientRect().left >=
          window.innerWidth - block.offsetWidth * (blocks.length - attr)
        ) {
          block.classList.add("init");
          block.classList.remove("active");
          block.classList.remove("fixed");
          block.style.left = "";
        } else {
          block.classList.add("active");
          block.classList.remove("init");
          block.classList.remove("fixed");
        }

        if (block.classList.contains("active")) {
          block.style.left = section.getBoundingClientRect().left + "px";
        }
      });
    });
  }, []);

  return (
    <div>
      <div className="blocks">
        <div className="block init" data-block-section="1" data-href="home">
          <div className="block__title">ABOUT US</div>
          <div className="block__number">01</div>
        </div>
        <div className="block init" data-block-section="2" data-href="collection">
          <div className="block__title">COMPANY</div>
          <div className="block__number">02</div>
        </div>
        <div className="block init" data-block-section="3" data-href="material">
          <div className="block__title">MISSION</div>
          <div className="block__number">03</div>
        </div>
        <div className="block init" data-block-section="4" data-href="production">
          <div className="block__title">VALUES</div>
          <div className="block__number">04</div>
        </div>
        <div className="block init" data-block-section="5" data-href="journal">
          <div className="block__title">FUTURE</div>
          <div className="block__number">05</div>
        </div>
      </div>
      <main data-scroll-container>
        <div className="wrap" data-scroll-section>
          <section className="section home" data-block-section="1" id="home">
          <p id='para'>
              Nike, Inc. is a global leader in the design, development, and sales of footwear, apparel, and equipment. 
              Based in Beaverton, Oregon, Nike aims to bring inspiration and innovation to every athlete.
            </p>
          </section>
          <section className="section collection" data-block-section="2" id="collection">
          <p  id='para'>
              Founded in 1964 as Blue Ribbon Sports, Nike officially became Nike, Inc. in 1971. 
              Known for its "Just Do It" slogan and Swoosh logo, Nike collaborates with top athletes globally.
            </p>
          </section>
          <section className="section material" data-block-section="3" id="material">
          <p  id='para'>
              Nike's mission is to bring inspiration and innovation to every athlete. 
              They believe that if you have a body, you are an athlete, and they develop products to help everyone reach their potential.
            </p>
          </section>
          <section className="section production" data-block-section="4" id="production">
          <p  id='para'>
              Nike's core values include innovation, sustainability, and diversity. 
              The company fosters creativity, reduces environmental impact, and promotes equality in all aspects of its business.
            </p>
          </section>
          <section className="section journal" data-block-section="5" id="journal">
          <p  id='para'>
              Nike is pushing the boundaries of innovation to meet the evolving needs of athletes. 
              Investing in digital transformation and sustainability, Nike aims to create a positive impact worldwide.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
