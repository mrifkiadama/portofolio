import React, { useState } from 'react';
import "./qualification.css";

function Qualification() {
    const [toggleState,setTonggleState] = useState(2);
    const toggleTab = (index) => {
        setTonggleState(index);
    }

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Informatics Engineering</h3>
                            <span className="qualification__subtitle">UIN Sunan Kalijaga Yogyakarta</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Sep 2016 - August 2020
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
                            <h3 className="qualification__title">Senior High School - Sains</h3>
                            <span className="qualification__subtitle">SMA N 1 NGLUWAR</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> May 2013 - May 2016
                            </div>
                        </div>

                    
                    </div>


                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Fullstack Developer / Full-time</h3>
                            <span className="qualification__subtitle">PT BALEO MOL INDONESIA - Semarang, Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Dec 2021 - Present
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
                            <h3 className="qualification__title">Web Developer / Full-time</h3>
                            <span className="qualification__subtitle">PT BALEO MOL INDONESIA - Semarang, Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2021 - Dec 2021
                            </div>
                        </div>

                    
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend Developer / Full-time</h3>
                            <span className="qualification__subtitle">Koperasi Property Today Indonesia - Yogyakarta, Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Apr 2019 - May 2020
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
                            <h3 className="qualification__title">Mobile Developer / Internship</h3>
                            <span className="qualification__subtitle">PT Olsera Indonesia Pratama - Yogyakarta, Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2019 - May 2019
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification