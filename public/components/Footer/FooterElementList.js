import React from 'react'
import Link from 'next/link'
import classes from './FooterElementList.module.css'

const FooterElementList = (props) => {
    const list = props.list
  return (
    <section className={classes.footerElementList}>
        <h3>{props.header}</h3>
        {list.map(item => <Link href={'#'} key={item}>{item}</Link>)}
      </section>
  )
}

export default FooterElementList
