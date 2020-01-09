import React, { Component } from 'react';
import { Link } from 'gatsby';
import App from '../../components/App';
import MainLeft from '../../components/containers/Mainleft';
import Mainright from '../../components/containers/Mainright';
import NavLinks from '../../components/Nav/NavLinks';
import Dp from '../../components/common/Dp';
import Copyright from '../../components/common/Copyright';
import Styles from '../../styles/Mainleft.module.css';

class Layout extends Component {
    state = {
        drawerStatus: false,
        class: 'drawerClosed'
    }
    openNavDrawer = () => {
        this.setState({
            drawerStatus: true,
            class: 'NavDrawerOpened'
        })
    }
    closeNavDrawer = () => {
        this.setState({
            drawerStatus: false,
            class: 'NavDrawerClosed'
        })
    }
    render() {
        return (
            <App
                PageTitle={this.props.PageTitle}
                PageLink={this.props.PageLink}
                PageDescription={this.props.PageDescription}
                PageKeywords={this.props.PageKeywords}
                ImageCard={this.props.ImageCard ? this.props.ImageCard : 'https://res.cloudinary.com/dillionmegida/image/upload/v1567211823/images/website/deee.jpg'}
                LargeTwitterCard = {this.props.LargeTwitterCard}
            >
                <header className='TopSection'>
                    <Link
                        to='/'
                        title='Dillion Megida'
                    >
                        <Dp imgDivClass={Styles.ImgDivSmall}/>
                    </Link>
                    {/* <h3>Dillion Megida <span role='img' aria-label='Rocket Emoji'>&#128640;</span></h3> */}
                    <h3>Dillion Megida <span role='img' aria-label='Rocket Emoji'>&#127876;</span></h3>
                    <button onClick={this.openNavDrawer} className='Hamburger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </header>
                {this.state.drawerStatus ? 
                    <nav className={['NavSection', this.state.class].join(' ')}>
                        <p onClick={this.closeNavDrawer} className='CloseDrawer'>X</p>
                        <section style={{
                                height: '400px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                alignitems: 'center',
                                minWidth: '300px'
                            }}>
                            <NavLinks/>
                            <div style={{height: '1px', width: '100%', backgroundColor: '#eee'}}>

                            </div>
                            <Copyright color='white' />
                        </section>
                    </nav> :
                    null
                }
                <MainLeft />
                <Mainright>
                    {this.props.children}    
                    {
                        //The copyright only shows on the blog page and on each blog for mobile
                        // ...But it always shows for large screens
                        this.props.ShowMobileCopyright ?
                        <footer className='mobile-copyright'>
                            <Copyright color='grey'/>
                        </footer>
                        : 
                        <p style={{textAlign: 'center', color: 'grey'}}>Copyright {new Date().getFullYear()} - Dillion Megida</p>
                    }
                </Mainright>
            </App>  
        )
    }
};

export default Layout;