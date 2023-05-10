import React from 'react'
import MainSection from './MainSection/MainSection'
import FirstTypeSection from './FirstTypeSection/FirstTypeSection'
import SecondTypeSection from './SecondTypeSection/SecondTypeSection'
import ThirdTypeSection from './ThirdTypeSection/ThirdTypeSection'
import FourthTypeSection from './FourthTypeSection/FourthTypeSection'
import DownloadSection from './DownloadSection/DownloadSection'
import SubscribeSection from './SubscribeSection/SubscribeSection'
import Footer from './Footer/Footer'
import firstImg from '../assets/logo.png'
import rectangle from '../assets/Rectangle.png'

const MainPage = () => {
  return (
    <section>
      <MainSection />
      <FirstTypeSection
        firstHeader={'Pay with TapCash'}
        secondHeader={'Everywhere in the World'}
        image={rectangle}
      />
      <FirstTypeSection
        firstHeader={'One App'}
        secondHeader={'Everything You Need'}
        image={rectangle}
      />
      <FirstTypeSection
        firstHeader={'Life has become'}
        secondHeader={'Convenient Free and Happy'}
        image={rectangle}
      />
      <FirstTypeSection firstHeader={'TapCash Visa Card'} image={rectangle} />
      <SecondTypeSection />
      <ThirdTypeSection />
      <FourthTypeSection />
      <DownloadSection />
      <SubscribeSection />
      <FirstTypeSection
        firstHeader={'Program participation'}
        image={rectangle}
      />
      <Footer />
    </section>
  )
}

export default MainPage
