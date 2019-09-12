import React from 'react'
import Dp from '../common/Dp';
import NavLinks from '../Nav/NavLinks';
import Copyright from '../common/Copyright';
import TwitterFollow from '../SocialMedia/TwitterFollow';
import Styles from '../../styles/Mainleft.module.css';


let Mainleft = (props) => (
    <div className={Styles.Mainleft}>
        <section>
            <Dp imgDivClass={Styles.ImgDiv}/>
            <h1>Dillion Megida <span role='img' aria-label='true'>&#128640;</span></h1>
            <p>Front End Developer and <br/>Technical Writer</p>
        </section>
        <nav style={{height: '50px'}} className={Styles.navSection}>
            <NavLinks/>
        </nav>
        <TwitterFollow />
        <Copyright color='white'/>
    </div>
)

export default Mainleft;