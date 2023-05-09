import React, { useState } from 'react'
import classes from './FourthTypeSection.module.css'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  const arr = [
    {
      img: eclipse1,
      name: 'Ahmed Hassan',
    },
    {
      img: eclipse2,
      name: 'Mahmoud',
    },
    {
      img: eclipse3,
      name: 'Mostafa',
    },
    {
      img: eclipse4,
      name: 'Bishoy',
    },
    {
      img: eclipse5,
      name: 'Marwa',
    },
    {
      img: eclipse6,
      name: 'Waleed',
    },
    {
      img: eclipse7,
      name: 'Mayada',
    },
  ]
  const [shownElement, setShownElement] = useState(0)
  const [lastElement, setLastElement] = useState(false)
  const [firstElement, setFirstElement] = useState(true)
  const rightClickHandler = () => {
    if (shownElement === 5) {
      setLastElement(true)
    }
    if (shownElement != 6) {
      setFirstElement(false)
      setShownElement((prevElement) => prevElement + 1)
      
    }
  }
  const leftClickHandler = () => {
    if (shownElement === 1) {
      setFirstElement(true)
    }
    if (shownElement != 0) {
      setLastElement(false)
      setShownElement((prevElement) => prevElement - 1)
    }
  }
  return (
    <section className={classes.fourthTypeSection}>
      <section className={classes.firstSection}>
        <h3>TESTIMONIAL</h3>
        <h1>What do our users say about us?</h1>
      </section>
      <section className={classes.secondSection}>
        <section className={classes.sayings}>
          <FourthSectionElement
            img={arr[shownElement].img}
            name={arr[shownElement].name}
          />
        </section>
        <section className={classes.scroll}>
          <icon
            onClick={leftClickHandler}
            className={classes.icon}
            style={{ backgroundColor: firstElement ? '#3d3d3f' : '#01a4f1' }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </icon>
          <icon
            onClick={rightClickHandler}
            className={classes.icon}
            style={{ backgroundColor: lastElement ? '#3d3d3f' : '#01a4f1' }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </icon>
        </section>
        <section className={classes.imageSection}>
          <Image src={eclipses} alt="imageSection" priority={'true'}/>
        </section>
      </section>
    </section>
  )
}

export default FourthTypeSection
