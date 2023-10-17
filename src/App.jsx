import { useState } from 'react';
import './index.css'
import { Header } from './header';
import { Link } from './link';
import { ThreeSquares } from './hero';
import { Carousel } from './Carousel';

export function App() {

    const [mainState, setMainState] = useState(false)
    const [linkState, setLinkState] = useState(false)

    const linkZindex = () => {
        setLinkState(true)
    }

    const linkZindexBack = () => {
        setLinkState(false)
    }

    const changeMainState = () => {
        setMainState(!mainState)
        setLinkState(false)
    }

    const changeMainStateResize = () => {
        setMainState(false)
        setLinkState(false)
    }

    return <>
        <Header mState={changeMainState} mStateResize={changeMainStateResize} zIndexChange={linkZindex} zIndexChangeBack={linkZindexBack}/>
        <div className={`main ${mainState? 'active' : 'inactive'}`}>
            <Link state={linkState}/>
            <ThreeSquares />
            <Carousel />
        </div>
    </>
}