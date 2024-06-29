import React from 'react'

export const Info = () => {
    return (
      <div className="about__info grid">
        <div className="about__box">
          <i class="bx bx-award about_icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">
            Senior Software Engineer at HCL Tech
          </span>
        </div>

        <div className="about__box">
          <i class="bx bx-code-block about_icon"></i>
          <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">40+ Projects</span>
        </div>

        <div className="about__box">
          <i class="bx bx-support about_icon"></i>
          <h3 className="about__title">Available</h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
    );
};