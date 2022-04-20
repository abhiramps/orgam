import React, { useEffect, useState } from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import IndStyle from '../../styles/Ind.module.scss'

//svg
import Hospital from './Svg/Hospital';
import Retail from './Svg/Retail';
import Warehouse from './Svg/Warehouse';
import Logistics from './Svg/Logistics';
import Bullet from './Svg/Bullet';

const CarouselComp = () => {
    const [visibleSldeNo, setVisibleSldeNo] = useState(3)

    useEffect(() => {
        console.log("visibleSldeNo", visibleSldeNo)
        window.addEventListener('resize', autoResize);
        autoResize();
        return () => window.removeEventListener('resize', autoResize);
    }, [visibleSldeNo, setVisibleSldeNo])

    function autoResize() {
        if (window.innerWidth <= 1400) { setVisibleSldeNo(3) }
        if (window.innerWidth <= 970) { setVisibleSldeNo(2) }
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
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>cooks</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Waiters</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>office/Cleanup</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Delivery</span>
                                </li>
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
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>cashers</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Sales Associate</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Store manager</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Store warehouse</span>
                                </li>
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
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Waraehouse worker</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Stock cleark</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>merchandise pickup</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Dispatchers</span>
                                </li>
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
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Waraehouse worker</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Stock cleark</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>merchandise pickup</span>
                                </li>
                                <li className={IndStyle.listItem}>
                                    <Bullet />
                                    <span>Dispatchers</span>
                                </li>
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


