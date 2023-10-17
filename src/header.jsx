import { useState } from 'react';
import './styles/index.css'
import logo from './images/cart-white.png'; // with import
import blackLogo from './images/cart-black.png';
import React from 'react'

const outerwearList = ['Jackets', 'Fleece']
const topsList = ['T-shirts', 'Shirts', 'Sweatshirts', 'Jumpers']
const bottomsList = ['Trousers/ Chinos', 'Jeans', 'Shorts']

const clothingDropdown = {
  dropdownTitle: 'Clothing',
  sections: [
    {sectionTitle: 'Outerwear',
    sectionLinks: ['Jackets', 'Fleece']},
    {sectionTitle: 'Tops',
    sectionLinks: ['T-shirts', 'Shirts', 'Sweatshirts', 'Jumpers', 'Knits']},
    {sectionTitle: 'Bottoms',
    sectionLinks: ['Trousers', 'Chinos', 'Jeans', 'Shorts']},
    {sectionTitle: 'Footwear',
    sectionLinks: ['Trainers', 'Boots', 'Shoes']},
    
  ]
}

const footwearDropdown = {
  dropdownTitle: 'Accessories',
  sections: [
    {sectionTitle: 'Hats',
    sectionLinks: ['Beanies', 'Caps', 'Baseball Caps']},
    {sectionTitle: 'Bags',
    sectionLinks: ['Backpacks', 'Duffel Bags', 'Shoulder Bags', 'Tote Bags']},
    {sectionTitle: 'Else',
    sectionLinks: ['Belts', 'Scarfs', 'Wallets', 'Gloves']},
    
  ]
}

export function Header({mState, mStateResize, zIndexChange, zIndexChangeBack}) {

  const [clothingDropdownState, setClothingDropdownState] = useState(false)
  const [footwearDropdownState, setFootwearDropdownState] = useState(false)
  const [navState, setNavState] = useState(false)
  const [cartState, setCartState] = useState(logo)
  const [dropdownBackdrop, setDropdownBackdrop] = useState(false)


  const clothingDropdownClicked = () => {
    zIndexChange()

    if (navState == false  && clothingDropdownState == false) {
      setClothingDropdownState(true)
      setNavState(true)
      setCartState(blackLogo)
      setDropdownBackdrop(true)
      document.body.style.overflow = "hidden";
    }
    
    if (navState == true && clothingDropdownState == false) {
      setClothingDropdownState(true)
      setNavState(true)
      setFootwearDropdownState(false)
      setCartState(blackLogo)
      setDropdownBackdrop(true)
      document.body.style.overflow = "hidden";
    }

    if (navState == true  && clothingDropdownState == true) {
      setClothingDropdownState(false)
      setNavState(false)
      setCartState(logo)
      setDropdownBackdrop(false)
      zIndexChangeBack()
      document.body.style.overflow = "visible";
    }

  }

  const footwearDropdownClicked = () => {

    zIndexChange()

    if (navState == false  && footwearDropdownState == false) {
      setFootwearDropdownState(true)
      setNavState(true)
      setCartState(blackLogo)
      setDropdownBackdrop(true)
      document.body.style.overflow = "hidden";
    }
    
    if (navState == true && footwearDropdownState == false) {
      setFootwearDropdownState(true)
      setNavState(true)
      setClothingDropdownState(false)
      setCartState(blackLogo)
      setDropdownBackdrop(true)
      document.body.style.overflow = "hidden";
    }

    if (navState == true  && footwearDropdownState == true) {
      setFootwearDropdownState(false)
      setNavState(false)
      setCartState(logo)
      setDropdownBackdrop(false)
      zIndexChangeBack()
      document.body.style.overflow = "visible";
    }

  }

  const backdropClicked = () => {
    setNavState(false)
    setFootwearDropdownState(false)
    setClothingDropdownState(false)
    setDropdownBackdrop(false)
    setCartState(logo)
    zIndexChangeBack()
    document.body.style.overflow = "visible";
  }

  const [hamburgerState, setHamburgerState] = useState(false)
  const [mobileNavState, setMobileNavState] = useState(false)

  const hamburgerClick = () => {
    setHamburgerState(!hamburgerState)
    mState()
    setMobileNavState(!mobileNavState)
    setNavState(!navState)


  if (hamburgerState == false) {
    setCartState(blackLogo)
  } else {
    setCartState(logo)
  }
  }

  React.useEffect(() => {
    function handleResize() {
      if (hamburgerState == true) {
        setHamburgerState(false)
        mStateResize()
      }
      if (cartState == blackLogo) {
        setCartState(logo)
      }
      if (mobileNavState == true) {
        setMobileNavState(false)
      }
      if (navState == true) {
        setNavState(false)
      }

      if (clothingDropdownState || footwearDropdownState == true) {
        setClothingDropdownState(false)
        setFootwearDropdownState(false)
        setDropdownBackdrop(false)
      }
      
      zIndexChangeBack()
      mStateResize()
      document.body.style.overflow = "visible";
}

    window.addEventListener('resize', handleResize)
  })



  
  return <>
    
      <div className='header'>
        <div className='header-left'>
          <div className='header-nav'>
            <NavDropdown data={clothingDropdown} clickFunction={clothingDropdownClicked} dropdownState={clothingDropdownState} colorState={navState}/>
            <NavDropdown data={footwearDropdown} clickFunction={footwearDropdownClicked} dropdownState={footwearDropdownState} colorState={navState}/>
          </div>
        </div>
        <div className='header-middle'><h1 className={`header-title ${navState? 'active' : 'inactive'}`}>aclothesstore</h1></div>
        <div className='header-right'>
          <div className='cart-container'>
            <img className='cart' src={cartState} alt="" />
          </div>
        </div>
      </div>
      <div className='mobile-header'>
        <div className='mobile-headerLeft'>
          <Hamburger func={hamburgerClick} state={hamburgerState}/>
        </div>
        
        <div className='mobile-headerMiddle'>
        <h1 className={`header-title ${navState? 'active' : 'inactive'}`}>aclothesstore</h1>
        </div>
        <div className='mobile-headerRight'>
        <div className='cart-container'>
            <img className='cart' src={cartState} alt="" />
          </div>
        </div>
      </div>

      <div className={`mobile-nav ${mobileNavState? 'active' : 'inactive'}`}>
        <div className='mobile-navContainer'>
          <MobileDropdown data={clothingDropdown}/>
          <MobileDropdown data={footwearDropdown}/>
          <h4  className='mobile-dropdown-title'>About us</h4>
        </div>
      </div>
      <div onClick={backdropClicked} className={`dropdownBackdrop ${dropdownBackdrop? 'active' : 'inactive'}`}></div>
    </>
  ;
}

function NavDropdown({data, clickFunction, dropdownState, colorState}) {

  let title = data.dropdownTitle
  let blur = data.sections

  return <>
  <div className='nav-bit'>
    <h3 className={`dropdown-title ${colorState? 'active' : 'inactive'}`} onClick={clickFunction}>{title}</h3>
    <div className={`dropdown ${dropdownState? 'active' : 'inactive'}`}>
      {blur.map((as, idx) => {
        return <DropdownSection sectionTitle={as.sectionTitle} list={as.sectionLinks} key={idx}/>
      })}
    </div>
  </div>
  </>
}

function DropdownSection({sectionTitle, list}) {

  return <>
    <div className='dropdown-section'>
      <h3 className='dropdown-sectionTitle'>{sectionTitle}</h3>
      {list.map((text, idx) => {
          return <h4 className='dropdown-sectionLink' key={idx}>{text}</h4>
      })}
    </div>
  </>
}

function MobileDropdownSection({sectionTitle, list}) {

  return <>
    <div className='mobileDropdown-section'>
      <h3 className='mobileDropdown-sectionTitle'>{sectionTitle}</h3>
      {list.map((text, idx) => {
          return <h4 className='mobileDropdown-sectionLink' key={idx}>{text}</h4>
      })}
    </div>
  </>
}

function Hamburger({func, state}) {



  return <>
    <div onClick={func} className='mobile-hamburgerContainer'>
      <div className='menu'>
        <span className={`line one ${state? 'active' : 'inactive'}`}></span>
        <span className={`line two ${state? 'active' : 'inactive'}`}></span>
        <span className={`line three ${state? 'active' : 'inactive'}`}></span>
      </div>
    </div>
  </>
}


function MobileDropdown({data}) {
  
  let title = data.dropdownTitle
  let blur = data.sections

  const [dropdownState, setDropdownState] = useState(false)

  const dropdownTitleClick = () => {
    setDropdownState(!dropdownState)
  }
  
  return <>
    <div className='mobile-dropdown-section'>
      <h1 onClick={dropdownTitleClick} className='mobile-dropdown-title'>{title}</h1>
      <div className={`dropdowns ${dropdownState? 'active' : 'inactive'}`}>
        {blur.map((as) => {
        return <MobileDropdownSection sectionTitle={as.sectionTitle} list={as.sectionLinks}/>
      })}
      </div>
      
    </div>
  </>
}