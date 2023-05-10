import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'
import {
  faLocationDot,
  faPhoneVolume,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'
import FooterElementList from './FooterElementList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.upper}>
        <section className={classes.address}>
          <figure>
            <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />
            Nasr City, Cairo
          </figure>
          <figure>
            <FontAwesomeIcon className={classes.icon} icon={faPhoneVolume} />
            01122334455
          </figure>
          <figure>
            <FontAwesomeIcon className={classes.icon} icon={faMessage} />
            support@msp.com
          </figure>
        </section>
        <FooterElementList
          header={'Services'}
          list={[
            'UI UX Design',
            'Mobile Development',
            'Motion Graphic',
            'Web Development',
            'Digital Marketing',
            'Video Editing',
          ]}
        />
        <FooterElementList
          header={'Company'}
          list={['Service', 'Our Team', 'Portfolio', 'Our trusted partners']}
        />
        <FooterElementList
          header={'Support'}
          list={['Help center', 'Feedbcak', 'Contact us', 'Terms & Conditions']}
        />
        <FooterElementList
          header={'Our Social Media'}
          list={['Facebook', 'Linkedin', 'Instagram', 'Youtube']}
        />
      </section>
      <hr style={{width: '100%'}}/>
      <section className={classes.lower}>
        <section>
            <p>© 2021 msp - All rights reserved.</p>
        </section>
        <section>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Security</Link>
            <Link href={'#'}>Terms</Link>
        </section>
      </section>
    </footer>
  )
}

export default Footer
