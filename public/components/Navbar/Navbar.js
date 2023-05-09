import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <section className={classes.navbar}>
      <section className={classes.logo}>
        <Image src={logo} alt="logo" priority={true} />
      </section>
      <section className={classes.navbarLinks}>
        <Link href={!loggedIn ? '#' : '/home'} className={classes.home}>
          Home
        </Link>
        <Link href={!loggedIn ? '#' : '/about'} className={classes.navbarLink}>
          About
        </Link>
        <Link
          href={!loggedIn ? '#' : '/history'}
          className={classes.navbarLink}
        >
          History
        </Link>
        <Link href={!loggedIn ? '#' : '/news'} className={classes.navbarLink}>
          News
        </Link>
        <Link href={!loggedIn ? '#' : '/events'} className={classes.navbarLink}>
          Events
        </Link>
        <Link
          href={!loggedIn ? '#' : '/committees'}
          className={classes.navbarLink}
        >
          Committees
          <icon className={classes.icon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </icon>
        </Link>
      </section>
      <section className={classes.navbarButtons}>
        <button className={classes.login}>Login</button>
        <button className={classes.signup}>Create Account</button>
      </section>
    </section>
  )
}

export default Navbar
