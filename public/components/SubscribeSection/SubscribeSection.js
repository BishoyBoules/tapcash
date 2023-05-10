import React from 'react'
import classes from './SubscribeSection.module.css'

const SubscribeSection = () => {
  return (
    <section className={classes.subscribeSection}>
      <h1>Subscribe to Our Newsletter</h1>
      <p>You can read our newsletter and get free knowledge</p>
      <section className={classes.inputs}>
        <section className={classes.input}>
          <label>Your Name</label>
          <input type="text" placeholder="Input your name" />
        </section>
        <section className={classes.input}>
          <label>Your Email</label>
          <input type="text" placeholder="Input your email" />
        </section>
        <button>Subscribe</button>
      </section>
    </section>
  )
}

export default SubscribeSection
