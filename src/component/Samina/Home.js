import React from "react";
import "./Home.css";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            {/* <h3>WELCOME , Nice to meet you...</h3> */}

            <h1>
              Hi, I’m <span>Technopreneur</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Software Developer.",
                      "My Stack includes:",
                      "Back-End Devlopement",
                      "Testing",
                      "Front-End Devlopment",
                      "DevOps Devlopment",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>

            {/* <p>
              💻 I love to create Fullstack applications, My Back-end stack
              include:<br></br>
              <ul>
                <li>&#8226; Spring Framework 5</li>
                <li>&#8226; Functional Programming</li>
                <li>&#8226; Reactive Programming</li>
                <li>&#8226; Microservice Architecture</li>
                <li>&#8226; Design Pattern</li>
                <li>&#8226; Testing</li>
              </ul>
              <br></br>
              My Front-end stack include:<br></br>
              <ul>
                <li>&#8226; JavaScript</li>
                <li>&#8226; ES6</li>
                <li>&#8226; React</li>
                <li>&#8226; Redux</li>
                <li>&#8226; Nextjs</li>
              </ul>
              <br></br>
              My DevOps stack include:<br></br>
              <ul>
                  <li>&#8226; Git, bitbucket</li>
                <li>&#8226; Docker, Kubernetes Heroku, GCP</li>
                <li>&#8226; Jenkin, GitLab, Spinnaker</li>
                <li>&#8226; ELK, Prometheus, Grafana</li>
              </ul>
            </p>
            <p> 🌱 I’m currently learning Fintech stack</p> */}

            <div className="hero_btn d_flex">
              <div className="col_1">
                <span>
                  <h4>FIND ME</h4>
                </span>
                <div className="button">
                  <button className="btn_shadow">
                    <div>
                      <a href="https://github.com/saminahaq">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </button>
                  <button className="btn_shadow">
                    <div>
                      <a href="https://www.linkedin.com/in/saminatechnopreneur/">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4>BEST SKILLS ON</h4>
                <button className="btn_shadow">
                  <div>
                    <i class="fab fa-java"></i>
                  </div>
                </button>
                <button className="btn_shadow">
                  <div>
                    <i class="fab fa-react"></i>
                  </div>
                </button>
                <button className="btn_shadow">
                  <div>
                    <i class="fab fa-bitbucket"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="right"> Kubernetes
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
