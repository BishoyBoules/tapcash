import React from 'react'
import classes from './SecondSectionElement.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SecondSectionElement = (props) => {
  return (
    <section className={classes.secondSectionElement}>
      <section
        className={classes.elementImage}
        style={{ backgroundColor: props.bgColor }}
      >
        <Image
          src={props.elementImage}
          style={{ width: props.imgWidth }}
          alt="image"
        />
      </section>
      <section className={classes.elementHeader}>{props.elementHeader}</section>
      <section className={classes.elementParagraph}>
        That is the simply dummy text the printing and typesetting industry.
      </section>
      <section className={classes.readMore}>
        <Link href="#">Read more</Link>
      </section>
    </section>
  )
}

export default SecondSectionElement
