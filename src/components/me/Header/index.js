import React, { useState } from "react"
import Styles from "./index.module.css"

import { Link } from "gatsby"

const Header = props => {
    const [showDrawer, setDrawerStatus] = useState(false)

    const Links = () => (
        <>
            <Link onClick={() => setDrawerStatus(false)} to="/">
                Blog
            </Link>
            <Link onClick={() => setDrawerStatus(false)} to="/me#about">
                About
            </Link>
            <Link activeClassName={Styles.Active} onClick={() => setDrawerStatus(false)} to="me/portfolio">
                Portfolio
            </Link>
            <Link onClick={() => setDrawerStatus(false)} to="/me#contact">
                Contact
            </Link>
        </>
    )

    return (
        <header className={Styles.Header}>
            <Link to="/">
                <div className={Styles.Img}>
                    <img src="/img/deee.jpeg" alt="Profile" />
                </div>
            </Link>
            <nav>
                <Links />
            </nav>
            <button
                className={Styles.ShowDrawer}
                onClick={() => setDrawerStatus(true)}
            >
                <i className="fa fa-bars"></i>
            </button>
            {showDrawer && (
                <div className={Styles.Drawer}>
                    <button onClick={() => setDrawerStatus(false)}>
                        <i className="fa fa-times"></i>
                    </button>
                    <nav>
                        <Links />
                    </nav>
                    <span>
                        2019 - {new Date().getFullYear()} &copy; Dillion Megida
                    </span>
                </div>
            )}
        </header>
    )
}

export default Header
