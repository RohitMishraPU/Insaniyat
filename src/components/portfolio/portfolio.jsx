import React from 'react';
import './portfolio.css';
// import IMG1 from '../../assets/portfolio1.jpg';
// import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';

const data = [
  {
    id: 1,
    // image: IMG1,
    title: 'Education & Child Care',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    // image: IMG2,
    title: 'Community Development',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    // image: IMG3,
    title: 'Sports Development',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    // image: IMG4,
    title: 'Environment',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Works at Insaaniyat Reborn</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article className="portfolio__item">
                <div className='portfolio__item-image'>
                 <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio;