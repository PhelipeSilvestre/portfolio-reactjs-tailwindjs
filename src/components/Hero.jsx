import React from "react";
import profilepic from "../assets/ppic.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
} from "react-icons/di";
import ShinyEffect from "./ShinyEffect";

const socialMedia = [
  {
    title: "LinkedIn",
    description: "LinkedIn profile",
    links: "https://www.linkedin.com/in/phelipe-silvestre-636683125/",
  },
];

const Hero = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto grid md:grid-cols-8 gap-6 p-10 md:p-0 md:py-40"
      id="home"
    >
      <div className="grid grid-cols-2 md:col-span-5 glass p-8">
        <div className="my-auto">
          <img
            className="w-[800px] mx-auto h-auto "
            src={profilepic}
            alt="profile pic"
          />
        </div>

        <div className="my-auto ml-8  flex-col">
          <p className="text-2xl md:text-4xl font-bold text-gray-200">
            Olá, eu sou o <br /> Phelipe Silvestre <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Backend Dev",
                1000,
                "Fullstack Dev",
                1000,
                "Freelancer Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <p className="text-xl md:text-3xl font-bold text-gray-500">
            com 3 anos de experiência
          </p>
          <button
            href="/"
            title="Download CV"
            role="button"
            class="mt-4 px-4 py-2 text-lg font-bold text-white  bg-primary-color rounded-xl"
          >
            Download CV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1  md:col-span-3 gap-6">
        <div className="text-5xl p-12 glass">
          <p className="text-gray-200 text-xl font-bold mb-4 text-center">
            My Tech Stack
          </p>
          <div className="grid grid-cols-4 gap-4">
            <DiHtml5 className="text-orange-600" />
            <DiCss3 className="text-blue-600" />
            <DiSass className="text-pink-600" />
            <DiBootstrap className="text-purple-600" />
            <DiJavascript1 className="text-yellow-500" />
            <DiReact className="text-blue-500" />
            <DiNodejsSmall className="text-green-500" />
          </div>
        </div>

        <div className="flex justify-center items-center flex-col glass">
          <div className="text-7xl flex justify-start gap-4">
            {/* LinkedIn */}
            <a
              href={socialMedia.links}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              style={{
                fontSize: "48px",
                display: "inline-block",
                padding: "10px",
              }}
            >
              <AiFillLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/seu-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors duration-300"
              style={{
                fontSize: "48px",
                display: "inline-block",
                padding: "10px",
              }}
            >
              <AiFillGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/seu-instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
              style={{
                fontSize: "48px",
                display: "inline-block",
                padding: "10px",
              }}
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden md:overflow-visible">
          <div className="hidden md:block">
            <ShinyEffect left={550} top={100} size={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
