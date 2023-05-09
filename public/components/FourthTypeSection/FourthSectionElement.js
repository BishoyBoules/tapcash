import React from 'react'
import classes from './FourthSectionElement.module.css'
import Image from 'next/image'

const FourthSectionElement = (props) => {
  return (
    <section className={classes.fourthSectionElement}>
      <section className={classes.firstSection}>
        <Image src={props.img} alt="img" />
        <h1>{props.name}</h1>
      </section>
      <section className={classes.paragraph}>
        <p>
          A distinctive update in the sense of the word. Maybe the best
          application is a fair application that is presented and a card, but my
          problem is that it is not satisfied that it enters my account easily
          and slowly.
        </p>
      </section>
    </section>
  )
}

export default FourthSectionElement
