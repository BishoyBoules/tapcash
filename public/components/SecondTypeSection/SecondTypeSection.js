import React from 'react'
import classes from './SecondTypeSection.module.css'
import SecondSectionElement from './SecondSectionElement'
import FirstSection from './FirstSection'
import green from '../../assets/green.png'
import purple from '../../assets/purple.png'
import red from '../../assets/red.png'
import blue from '../../assets/blue.png'

const SecondTypeSection = () => {
  return (
    <section className={classes.secondType}>
      <FirstSection
        SectionWidth={'550px'}
        blueHeader={'WHAT WE DO'}
        blackHeader={'We are here to help you live a happy life'}
        paragraph={
          'Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.'
        }
        button={'Explore all services'}
      />
      <section className={classes.secondSection}>
        <SecondSectionElement
          bgColor={'#E9F6EE'}
          elementImage={green}
          imgWidth={'42px'}
          elementHeader={'Digital Marketing'}
        />
        <SecondSectionElement
          bgColor={'rgba(120, 121, 241, 0.06)'}
          elementImage={purple}
          imgWidth={'26px'}
          elementHeader={'Mobile Development'}
        />
        <SecondSectionElement
          bgColor={'rgba(188, 92, 86, 0.06)'}
          elementImage={red}
          imgWidth={'42px'}
          elementHeader={'UI UX Design'}
        />
        <SecondSectionElement
          bgColor={'rgba(104, 205, 253, 0.08)'}
          elementImage={blue}
          imgWidth={'36px'}
          elementHeader={'Web Development'}
        />
      </section>
    </section>
  )
}

export default SecondTypeSection
