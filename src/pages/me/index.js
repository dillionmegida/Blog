import React from "react"
import Styles from "./index.module.css"

import Header from "../../components/Header"
import AboutMe from "../../components/Me/About"
import Portfolio from "../../components/Me/Portfolio"
import Footer from "../../components/Footer"
import Helmet from "../../components/Helmet"

export default () => {
    return (
        <>
            <Helmet
                PageTitle="About me - Dillion Megida"
                PageLink="/me"
                PageDescription="Dillion is a Frontend Developer, a Tecnical Writer and a Graphics Designer."
                smoothScroll
            />
            <div className={Styles.LandingImage}>
                <Header />
                <div className={Styles.Intro}>
                    <p>
                        Hi <span role='img' aria-label='wave'>👋</span>, I'm Dillion, a Front-end developer and Technical
                        writer based in Nigeria.
                    </p>
                    <p>I also do Graphic and UI Designs <span role='img' aria-label='glitter'>✨</span></p>
                </div>
            </div>
            <main>
                <AboutMe />
                <Portfolio />
                <Footer />
            </main>
        </>
    )
}
