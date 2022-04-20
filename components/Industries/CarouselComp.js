import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import IndStyle from '../../styles/Ind.module.scss'

//svg
import Hospital from './Svg/Hospital';
import Retail from './Svg/Retail';
import Warehouse from './Svg/Warehouse';
import Logistics from './Svg/Logistics';

const CarouselComp = () => {
    const [visibleSldeNo, setVisibleSldeNo] = useState(3)

    useEffect(() => {
        console.log("visibleSldeNo", visibleSldeNo)
        window.addEventListener('resize', autoResize);
        autoResize();
        return () => window.removeEventListener('resize', autoResize);
    }, [visibleSldeNo, setVisibleSldeNo])

    function autoResize() {
        if (window.innerWidth <= 1200) {setVisibleSldeNo(3)}
        if (window.innerWidth <= 970) {setVisibleSldeNo(2)}
        if (window.innerWidth <= 700) { setVisibleSldeNo(1) }
    }
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={50}
                naturalSlideHeight={40}
                totalSlides={4}
                isPlaying={true}
                visibleSlides={visibleSldeNo}
            >
                <Slider>
                    <Slide index={0} className={IndStyle.slideItem}>
                        <div className={IndStyle.slideContent}>
                            <div className={IndStyle.svgIcon}>
                                <Hospital color="#7767E4" w="33.3" h="35.03" />
                            </div>
                            <label className={IndStyle.slideHeading}>Hospitality</label>
                            <ul className={IndStyle.list}>
                                <li className={IndStyle.listItem}>cooks</li>
                                <li className={IndStyle.listItem}>Waiters</li>
                                <li className={IndStyle.listItem}>office/Cleanup</li>
                                <li className={IndStyle.listItem}>Delivery</li>
                            </ul>
                            <div className={IndStyle.link}>
                                <a href='#'>learn more &rarr;</a>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={1} className={IndStyle.slideItem}>
                        <div className={IndStyle.slideContent}>
                            <div className={IndStyle.svgIcon}>
                                <Retail color="#7767E4" />
                            </div>
                            <h5 className={IndStyle.slideHeading}>Retail</h5>
                            <ul className={IndStyle.list}>
                                <li className={IndStyle.listItem}>cashers</li>
                                <li className={IndStyle.listItem}>Sales Associate</li>
                                <li className={IndStyle.listItem}>Store manager</li>
                                <li className={IndStyle.listItem}>Store warehouse</li>
                            </ul>
                            <div className={IndStyle.link}>
                                <a href='#'>learn more &rarr;</a>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={2} className={IndStyle.slideItem}>
                        <div className={IndStyle.slideContent}>
                            <div className={IndStyle.svgIcon}>
                                <Warehouse color="#7767E4" />
                            </div>
                            <h5 className={IndStyle.slideHeading}>Warehousig</h5>
                            <ul className={IndStyle.list}>
                                <li className={IndStyle.listItem}>Waraehouse worker</li>
                                <li className={IndStyle.listItem}>Stock cleark</li>
                                <li className={IndStyle.listItem}>merchandise pickup</li>
                                <li className={IndStyle.listItem}>Dispatchers</li>
                            </ul>
                            <div className={IndStyle.link}>
                                <a href='#'>learn more &rarr;</a>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={3} className={IndStyle.slideItem}>
                        <div className={IndStyle.slideContent}>
                            <div className={IndStyle.svgIcon}>
                                <Logistics color="#7767E4" />
                            </div>
                            <h5 className={IndStyle.slideHeading}>Logistics</h5>
                            <ul className={IndStyle.list}>
                                <li className={IndStyle.listItem}>Waraehouse worker</li>
                                <li className={IndStyle.listItem}>Stock cleark</li>
                                <li className={IndStyle.listItem}>merchandise pickup</li>
                                <li className={IndStyle.listItem}>Dispatchers</li>
                            </ul>
                            <div className={IndStyle.link}>
                                <a href='#'>learn more &rarr;</a>
                            </div>
                        </div>
                    </Slide>
                </Slider>

            </CarouselProvider>
        </div>
    )
}

export default CarouselComp


