import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { linkedin, githubSvg, medium, resume } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="fixed top-[50%] left-4 flex flex-col z-30 gap-4">
          <div
            onClick={() =>
              window.open("https://www.linkedin.com/in/bansalarnav/", "_blank")
            }
            title="linkedIn"
            className="cursor-pointer bg-white rounded-full p-1 w-10 flex items-center justify-center"
          >
            <img src={linkedin} alt="linkedin" />
          </div>
          <div
            onClick={() =>
              window.open("https://github.com/arnavbansal25", "_blank")
            }
            title="github"
            className="cursor-pointer bg-white rounded-full p-1 w-10 flex items-center justify-center"
          >
            <img src={githubSvg} alt="github" />
          </div>
          <div
            onClick={() => window.open("https://arnav25.medium.com/", "_blank")}
            title="medium"
            className="cursor-pointer bg-white rounded-full p-1 w-10 flex items-center justify-center"
          >
            <img src={medium} alt="medium" />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1rq5cAilgPQE9ZkBxP2wBEAQll1WnTlWp/view",
                "_blank"
              )
            }
            title="resume"
            className="cursor-pointer bg-white rounded-full p-1 w-10 flex items-center justify-center"
          >
            <img src={resume} alt="resume" />
          </div>
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
