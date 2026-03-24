import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../assets/css/preloader.css";

const Preloader = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Prevent layout shift from scrollbar disappearing
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflowY = "hidden";

      tl.to(".texts-container", {
        duration: 0,
        opacity: 0,
        ease: "Power3.easeOut",
      })
        .to(".texts-container", {
          duration: 0,
          opacity: 1,
          ease: "Power3.easeOut",
        })
        .from(".texts-container span", {
          duration: 1.5,
          delay: 1,
          y: 70,
          skewY: 10,
          stagger: 0.4,
          ease: "Power3.easeOut",
        })
        .to(".texts-container span", {
          duration: 1,
          y: 70,
          skewY: -20,
          stagger: 0.2,
          ease: "Power3.easeOut",
        })
        .to(
          ".preloader",
          {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut",
            onComplete: () => {
              document.body.style.paddingRight = "0px";
              document.body.style.overflowY = "auto";
            },
          },
          "-=2"
        )
        .to(".preloader", {
          duration: 0,
          css: { display: "none" },
        });
    });

    return () => {
      ctx.revert();
      document.body.style.paddingRight = "0px";
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Gustavo Hollanda,</span>
        <span>Desenvolvedor</span>
      </div>
    </div>
  );
};

export default Preloader;
