import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import classes from './MainSection.module.css'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bgWhite from '../../assets/bg-white.png'
import bgBlue from '../../assets/bg-blue.png'

const MainSection = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <section className={classes.mainSection}>
      <Navbar />
      <section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={classes.imageSection}
      >
        <Image src={hovered ? bgBlue : bgWhite} alt="image" priority={true} />
      </section>
      <article className={classes.header}>
        <p>
          Live <span className={classes.around}>Around</span>
        </p>
        <p>and you are reassured</p>
      </article>
      <article className={classes.paragraph}>
        <p>
          Many different things have evolved over the years, sometimes by
          accident, sometimes on purpose
        </p>
      </article>
      <section className={classes.buttons}>
        <button className={classes.join}>Join Now</button>
        <button className={classes.watch}>
          <icon className={classes.icon}>
            <FontAwesomeIcon icon={faPlayCircle} />
          </icon>
          Watch video
        </button>
      </section>
    </section>
  )
}

export default MainSection
