import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/mrifkiadama" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://twitter.com/mrifkiadama" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-twitter"></i>
        </a>

        <a href="https://behance.com" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-behance"></i>
        </a>

        <a href="https://dribble.com" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-dribbble"></i>
        </a>

        <a href="https://pinterest.com" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-pinterest"></i>
        </a>
    </div>
  )
}

export default HeaderSocials