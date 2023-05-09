import React from 'react'
import FirstSection from '../SecondTypeSection/FirstSection'
import classes from './ThirdTypeSection.module.css'
import Image from 'next/image'
import sally from '../../assets/sally.png'

const ThirdTypeSection = () => {
  return (
    <section className={classes.thirdType}>
      <FirstSection
        SectionWidth={'650px'}
        blueHeader={'ABOUT US'}
        blackHeader={'We are more than just a digital App Cash  in the world'}
        paragraph={
          'Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.'
        }
        button={'Get in touch'}
      />
      <section className={classes.imageSection}>
        <Image alt="img" src={sally} />
      </section>
    </section>
  )
}

export default ThirdTypeSection
