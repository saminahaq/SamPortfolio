import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" />
        </div>

        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          {/* <label>
            <i className="far fa-heart"></i> {props.totalLike}
          </label> */}
        </div>
        <div className="title">
          {/* <h2 onClick={toggleModal}>{props.title}</h2> */}
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text center">
              <h1>{props.title}</h1>
              <div>{props.list}</div>
              {/* <p>
                <Table striped="columns">
                  <tbody>
                    <tr>
                      <th>Programming Language</th>
                      <td>JDK 6 to JDK 17</td>
                    </tr>
                    <tr>
                      <th>Spring Framework 5</th>
                      <td>
                        Spring Core, Spring Web Flux [Reactive Programming],
                        Spring Boot, Spring Cloud, Spring Data, Spring Batch,
                        Spring Security, Spring HATEOS
                      </td>
                    </tr>
                    <tr>
                      <th>Functional Programming</th>
                      <td>
                        Function Composition, Fluent Interface, Streams,
                        Optional and Monad, lambda Expression
                      </td>
                    </tr>
                    <tr>
                      <th>Reactive Programming</th>
                      <td>
                        Transforming Reactive [Mapping, Filtering, collecting,
                        Reducing, Combining], Flux and Mono Reactive types, Hot
                        and Cold Streams, Backpressure
                      </td>
                    </tr>
                    <tr>
                      <th>Microservice Architecture</th>
                      <td>
                        Eureka Service Discovery, Eureka Client, API Gateway,
                        Hystrix Configuration, Hystrix Dashboard Configuration,
                        Cloud Config Server, Zipkin Server (Zipkin Client and
                        Sleuth Library)
                      </td>
                    </tr>
                    <tr>
                      <th>Design Pattern</th>
                      <td>
                        Factory Pattern, Fa??ade Pattern, Compound Pattern [MVC],
                        Observer Pattern, JPA, AOP, CQRS Design Pattern, Event
                        Driven Microservices, REST APIs, GraphQL APIs
                      </td>
                    </tr>
                    <tr>
                      <th>Testing</th>
                      <td>Junit5 and Mockito</td>
                    </tr>
                  </tbody>
                </Table> 
              </p>*/}

              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  LIKE THIS <i class="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  VIEW PROJECT<i class="fas fa-chevron-right"></i>
                </button>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
