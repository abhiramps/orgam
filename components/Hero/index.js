import React from 'react'

import BgStlye from '../../styles/Bg.module.scss'
import HeroStyle from '../../styles/Home.module.scss'
import Container from '../Layout/Container'

const Hero = () => {
    return (
        <div className={BgStlye.background}>
            <Container>
                <div className={HeroStyle.hero}>
                    <div className={HeroStyle.Text}>
                        <h1>Flexible staffing at your fingertips.</h1>
                        <h4>Orgam can help you staff quickly to meet your business goals</h4>
                        <div className={HeroStyle.hireButton}>
                            <a href='#'>Start Hiring &rarr;</a>
                        </div>
                    </div>
                    <div className={HeroStyle.iconsList}>
                        <div className={HeroStyle.iconsListItems}>
                            <a href='#' >
                                <img src='/slack.svg' className={HeroStyle.icons} />
                            </a>
                            <a href='#'>
                                <img src='/netflix.svg' className={HeroStyle.icons} />
                            </a>
                            <a href='#'>
                                <img src='/fitbit.svg' className={HeroStyle.icons} />
                            </a>
                            <a href='#'>
                                <img src='/google.svg' className={HeroStyle.icons} />
                            </a>
                            <a href='#'>
                                <img src='/airbnb.svg' className={HeroStyle.icons} />
                            </a>
                            <a href='#'>
                                <img src='/uber.svg' className={HeroStyle.icons} />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Hero