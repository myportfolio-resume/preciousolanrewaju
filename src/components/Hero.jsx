// src/components/Hero.jsx
import React from "react";


const heroData = {
  title: "Hello, I'm Precious",
  subtitle: "UI & UX Designer",
  description:
    "Passionate about creating user-friendly interfaces, turning complex ideas into simple solutions.",
  ctaButtons: [
    { text: "Contact Me", link: "#contact", style: "primary" },
    { text: "View My Work", link: "#portfolio", style: "secondary" },
  ],
  image: {
    src: "/images/lady-hero.png",
    alt: "UI/UX Designer smiling in suit",
    background: {
      type: "blob",
      colorGradient: "from-purple-400 via-purple-500 to-purple-600",
      animation: "animate-pulse",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-16 md:py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold">
            {heroData.title}{" "}
            <span className="text-purple-600">{heroData.subtitle}</span>
          </h1>
          <p className="mt-4 text-gray-600">{heroData.description}</p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            {heroData.ctaButtons.map((btn, index) => (
              <a
                key={index}
                href={btn.link}
                className={`px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 ${
                  btn.style === "primary"
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>

        {/* Image + Background Blob */}
        <div className="relative w-72 md:w-96 mb-10 md:mb-0">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${heroData.image.background.colorGradient} ${heroData.image.background.animation} blur-3xl opacity-60`}
          ></div>
          <img
            src={heroData.image.src}
            alt={heroData.image.alt}
            className="relative z-10 w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
