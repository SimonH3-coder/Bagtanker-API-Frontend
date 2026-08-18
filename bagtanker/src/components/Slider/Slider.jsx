import { useState } from "react";
import breadslidebg01 from '../../assets/slides/breadslidebg01.jpg'
import breadslidebg02 from '../../assets/slides/breadslidebg02.jpg'
import breadslidebg03 from '../../assets/slides/breadslidebg03.jpg'
import breadslidebg04 from '../../assets/slides/breadslidebg04.jpg'
import styles from './Slider.module.scss'

export function Slider() {
    const [ sliderIndex, setSliderIndex ] = useState(0);

    const breadSlides = [ breadslidebg01, breadslidebg02, breadslidebg03, breadslidebg04 ];

    function forward () {
        if (sliderIndex >= breadSlides.length - 1) {
            setSliderIndex(0);
        } else setSliderIndex((prev) => prev + 1);

    }
    function back() {
        if (sliderIndex === 0) {
            setSliderIndex(breadSlides.length - 1);
        }
        else setSliderIndex((prev) => prev - 1);
    }

    return <figure className = {styles.sliderStyle}>
        <img src = {breadSlides[sliderIndex]} />
        <figcaption>
            <button onClick={() =>back()}>Previous</button>
            <button onClick={() =>forward()}>Next</button>
        </figcaption>
    </figure>
}