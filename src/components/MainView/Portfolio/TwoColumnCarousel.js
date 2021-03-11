import { useRef, useLayoutEffect } from 'react'
import * as s from './TwoColumnCarousel.style'

// Scroll booster
import ScrollBooster from 'scrollbooster'

// Components
import { ImageCollections } from '../../../ImageCollections'


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

    const handleZoomClick = (e, gallery) => {
        e.preventDefault()
        // openSlider(true)
        // setGallerySelected(gallery)
    } 


    const Row = ({ arr }) => {
        return arr.map((item, index) => {
            return (
            <s.SliderImageWrapper key={`${index}-${item}`}>
                <s.SearchIconContainer onClick={e => handleZoomClick(e, item.gallery)}>
                  <s.SearchIcon src={'img/icons/search.svg'} />
                </s.SearchIconContainer>
                <s.SliderImage src={item.url} />
                <s.SliderImageDataWrapper>
                  <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
                  <s.ImageDescription blackFont={item.name === 'to-do'}>{item.description}</s.ImageDescription>
                  <s.DarkOverlay />
                </s.SliderImageDataWrapper>
            </s.SliderImageWrapper>
            )
        })
    }

    return (
        <s.CarouselWrapper ref={carouselWrapperRef}>
            <s.Viewport ref={viewportRef}>
                <s.Content ref={contentRef}>
                <s.RowOne>
                    <Row arr={ImageCollections['purple']} />
                </s.RowOne>
                <s.RowTwo>
                    <Row arr={ImageCollections['forest']} />
                </s.RowTwo>
                </s.Content>
            </s.Viewport>
        </s.CarouselWrapper>
    )
}

export default TwoColumnCarousel