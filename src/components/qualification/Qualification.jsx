import React from "react";
import "./qual.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="Qualification">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Journey</span>

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
            Experience
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active "
                : "qualification__button "
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master Science</h3>
                <span className="qualification__subtitle">
                  Cumberland University
                </span>
                <span>
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
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
                <h3 className="qualification__title">B. Tech (Computer Science Engineering)</h3>
                <span className="qualification__subtitle">
                Vignan's lara institute of techology and science
                </span>
                <span>
                  CGPA: 8.5
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Aug 2017 – May 2021
                </div>
              </div>
            </div>

          </div>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active button--flex"
                : "qualification__content button--flex"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                Data Engineer
                </h3>
                <span className="qualification__subtitle">Accenture.</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Aug 2021 – Feb 2022
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
                <h3 className="qualification__title">Data Analyst</h3>
                <span className="qualification__subtitle">
                Accenture
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Mar 2022 - Aug 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
