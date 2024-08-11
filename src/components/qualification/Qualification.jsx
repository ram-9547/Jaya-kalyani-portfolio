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
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
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
                <h3 className="qualification__title">B. Tech (Civil Engineering)</h3>
                <span className="qualification__subtitle">
                Andhra University, Andhra Pradesh
                </span>
                <span>
                  CGPA: 7.8
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Aug 2017 – Aug 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate (MPC)</h3>
                <span className="qualification__subtitle">
                Sri Chaitanya Junior College
                </span>
                <span>
                  Percentage: 87.1%
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Apr 2015 - May 2017
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
                <h3 className="qualification__title">10th </h3>
                <span className="qualification__subtitle">
                Sri Chaitanya Public School
                </span>
                <span>
                  CGPA: 8.2
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Apr 2014 – Apr 2015
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
                Junior Engineer
                </h3>
                <span className="qualification__subtitle">Aparna Exteriors Pvt. Ltd.</span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Jul 2021 – Aug 2023
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
                <h3 className="qualification__title">Analytics Intern</h3>
                <span className="qualification__subtitle">
                Vardhan Consulting Engineers 
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> Jun 2020 - Jul 2020
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
