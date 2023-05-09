import React from 'react'
import classes from './FirstTypeSection.module.css'
import Image from 'next/image'

const FirstTypeSection = (props) => {
  return (
    <section className={classes.firstType}>
      <section className={classes.header}>
        <p>{props.firstHeader}</p>
        <p>{props.secondHeader}</p>
      </section>
      <section className={classes.image}>
        <Image src={props.image} alt='img'/>
      </section>
    </section>
  )
}

export default FirstTypeSection
