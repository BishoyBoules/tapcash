import React from 'react'
import MainSection from './MainSection/MainSection'
import FirstTypeSection from './FirstTypeSection/FirstTypeSection'
import SecondTypeSection from './SecondTypeSection/SecondTypeSection'
import ThirdTypeSection from './ThirdTypeSection/ThirdTypeSection'
import FourthTypeSection from './FourthTypeSection/FourthTypeSection'
import firstImg from '../assets/logo.png'

const MainPage = () => {
  return (
    <section>
      <MainSection />
      <FirstTypeSection
        firstHeader={'Pay with TapCash'}
        secondHeader={'Everywhere in the World'}
        image={firstImg}
      />
      <FirstTypeSection
        firstHeader={'One App'}
        secondHeader={'Everything You Need'}
        image={firstImg}
      />
      <FirstTypeSection
        firstHeader={'Life has become'}
        secondHeader={'Convenient Free and Happy'}
        image={firstImg}
      />
      <FirstTypeSection firstHeader={'TapCash Visa Card'} image={firstImg} />
      <SecondTypeSection />
      <ThirdTypeSection />
      <FourthTypeSection />
    </section>
  )
}

export default MainPage
