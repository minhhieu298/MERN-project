import React, { useEffect, useRef, useState } from 'react'
import { SlideWrap } from './style'
import banner_1 from '../../assets/banner_1.webp'
import banner_2 from '../../assets/banner_2.webp'
import banner_3 from '../../assets/banner_3.webp'
import { Slide } from "react-slideshow-image";

const image = [
    {
        url: banner_1
    },
    {
        url: banner_2
    },
    {
        url: banner_3
    }
]

let delay = 2500

const Slider = () => {
    const [index, setIndex] = useState(0)
    const timeoutRef = React.useRef(null);

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? image.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= image.length ? 0 : newIndex);
    };

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === image.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <SlideWrap
            // style={{ transform: `translate3d(${-index * 0}%, 0, 0)` }}
        >
            {
                image.filter((_, ind) => ind === index).map((item, index) => (
                    <div className="slider" key={index}>
                        <img src={item.url} alt="" />
                    </div>
                ))
            }
            {/* <div>{index}</div> */}
            {/* <button onClick={handleNext}>next</button>
            <button onClick={handlePrevious}>prev</button> */}
        </SlideWrap>
    )
}

export default Slider