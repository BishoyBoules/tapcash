import React from 'react'
import classes from './FirstSection.module.css'

const FirstSection = (props) => {
  return (
    <section className={classes.firstSection} style={{width: props.SectionWidth}}>
      <h3>{props.blueHeader}</h3>
      <h1>{props.blackHeader}</h1>
      <p>{props.paragraph}</p>
      <button>{props.button}</button>
    </section>
  )
}

export default FirstSection
