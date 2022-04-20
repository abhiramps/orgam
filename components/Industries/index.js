import React from 'react'
import CarouselComp from './CarouselComp'
import Container from '../Layout/Container'
import IndStyle from '../../styles/Ind.module.scss'

const Industries = () => {
    return (
        <Container>
            <div className={IndStyle.industries}>
                <div className={IndStyle.heading}>
                    <h3>Industries we are serving</h3>
                    <h5>we are terms of thousands of pre-qualified workers ready to go</h5>
                </div>
                <div>
                    <CarouselComp />
                </div>
            </div>
        </Container>
    )
}

export default Industries