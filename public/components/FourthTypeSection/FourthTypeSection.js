import React from 'react'
import classes from './FourthTypeSection.module.css'
import Image from 'next/image'
import eclipses from '../../assets/Ellipses.png'
import eclipse1 from '../../assets/Ellipse1.png'
import eclipse2 from '../../assets/Ellipse2.png'
import eclipse3 from '../../assets/Ellipse3.png'
import eclipse4 from '../../assets/Ellipse4.png'
import eclipse5 from '../../assets/Ellipse5.png'
import eclipse6 from '../../assets/Ellipse6.png'
import eclipse7 from '../../assets/Ellipse7.png'
import FourthSectionElement from './FourthSectionElement'

const FourthTypeSection = () => {
  return (
    <section className={classes.fourthTypeSection}>
      <section className={classes.firstSection}>
        <h3>TESTIMONIAL</h3>
        <h1>What do our users say about us?</h1>
      </section>
      <section className={classes.secondSection}>
        <section className={classes.sayings}>
          <FourthSectionElement />
        </section>
        <section className={classes.imageSection}>
          <Image src={eclipses} alt="imageSection" />
        </section>
      </section>
    </section>
  )
}

export default FourthTypeSection
