import React, { useContext } from 'react'
import CollabSection from '../sections/CollabSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowCaseSection from '../sections/ShowCaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import FlashsaleSection from '../sections/FlashsaleSection'
import InfoSection from '../sections/InfoSection'
import { FeaturedProductsContext,SquareProductsContext } from '../contexts/contexts'



const HomeView = () => {
  const products = useContext(FeaturedProductsContext);
  const square = useContext(SquareProductsContext);
  window.top.document.title = 'Fixxo.'

  return (
    <>
    <header>
      <MainMenuSection />
      <ShowCaseSection />
    </header>
      <ProductGridSection title="Featured Products" products={products} />
      <CollabSection />
      <TopPicksSection products={square} />
      <FlashsaleSection products={square} />
      <InfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView