import { useRef, useLayoutEffect } from 'react'
import * as s from './TwoColumnCarousel.style'

// Scroll booster
import ScrollBooster from 'scrollbooster'


const TwoColumnCarousel = () => {
    // Refs
    const carouselWrapperRef = useRef();
    const viewportRef = useRef();
    const contentRef = useRef();


    // Initialize carousel scroll booster
    useLayoutEffect(() => {
        carouselWrapperRef.current = new ScrollBooster({
        viewport: viewportRef.current,
        content: contentRef.current,    
        direction: "horizontal",
        scrollMode: "transform",
        textSelection: true,
        friction: 0.05,
        emulateScroll: true,
        dragDirectionTolerance: 99,

        onUpdate: state => {
            const posX = Math.round(state.position.x)
            // handleCarouselScroll(posX)
        }
        })
    })

    return (
        <s.CarouselWrapper ref={carouselWrapperRef}>
            <s.Viewport ref={viewportRef}>
                <s.Content ref={contentRef}>
                    CAROUSEL
                </s.Content>
            </s.Viewport>
        </s.CarouselWrapper>
    )
}

export default TwoColumnCarousel