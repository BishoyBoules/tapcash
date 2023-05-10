import React from 'react'
import classes from './DownloadSection.module.css'
import Image from 'next/image'
import downloadImg from '../../assets/Home.png'
import android from '../../assets/android.png'
import apple from '../../assets/apple.png'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DownloadSection = () => {
  return (
    <section className={classes.downloadSection}>
      <section className={classes.image}>
        <Image src={downloadImg} alt="img" priority={'true'} />
      </section>
      <section className={classes.paragraph}>
        <h1>Download Our App</h1>
        <p>
          You can install the Tapcash mobile application and enjoy new features,
          earn more points and get discounts You can also scan QR codes in the
          first payment process to get a discount on everything on the site up
          to 70%
        </p>
        <section className={classes.list}>
          <figure>
            <FontAwesomeIcon
              style={{ color: '#01A4F1' }}
              icon={faCheckCircle}
            />
            <label>Best Deals</label>
          </figure>
          <figure>
            <FontAwesomeIcon
              style={{ color: '#01A4F1' }}
              icon={faCheckCircle}
            />
          </figure>
          <figure>
            <FontAwesomeIcon
              style={{ color: '#01A4F1' }}
              icon={faCheckCircle}
            />
          </figure>
          <figure>
            <FontAwesomeIcon
              style={{ color: '#01A4F1' }}
              icon={faCheckCircle}
            />
          </figure>
          <figure>
            <FontAwesomeIcon
              style={{ color: '#01A4F1' }}
              icon={faCheckCircle}
            />
          </figure>
        </section>
        <section className={classes.stores}>
          <figure className={classes.apple}>
            <Image src={apple} alt="apple" />
          </figure>
          <figure className={classes.android}>
            <Image src={android} alt="android" />
          </figure>
        </section>
      </section>
    </section>
  )
}

export default DownloadSection
