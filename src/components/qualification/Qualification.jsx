import React, { useState } from 'react';
import "./qualification.css";

export const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    };
    return (
      <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    BTech in Information Technology
                  </h3>
                  <span className="qualification__subtitle">
                    Dr B R Ambedkar National Institute of Technology Jalandhar
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2020-2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Senior Secondary Education
                  </h3>
                  <span className="qualification__subtitle">
                    Star Plus Convent School, Raman Mandi, Bhatinda
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2019-2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Secondary Education</h3>
                  <span className="qualification__subtitle">
                    The Sirsa School, Sirsa
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2017-2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Senior Software Engineer
                  </h3>
                  <span className="qualification__subtitle">HCL Tech.</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2024-Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Intern</h3>
                  <span className="qualification__subtitle">
                    HCL Tech. - Noida
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> May-July,2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};
