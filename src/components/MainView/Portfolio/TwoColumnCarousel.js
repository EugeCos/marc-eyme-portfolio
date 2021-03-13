import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import * as s from './TwoColumnCarousel.style'

// Scroll booster
import ScrollBooster from 'scrollbooster'

// Components
import { Galleries } from '../../../Galleries'


const TwoColumnCarousel = () => {
    // State
    const [rows, setRows] = useState({ row1: [], row2: [] })
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


    // Initialize photo arrays
    useEffect(() => {
        const row1 = [], row2 = [];

        const setRow = (galleryName, rowNumber) => {
            for(let i = 0; i < Galleries[galleryName].size; i++) {
                const newImg = {};
                newImg.name = Galleries[galleryName].name
                newImg.description = Galleries[galleryName].description
                newImg.url = `img/photos/thumbnails/${galleryName}/${galleryName}_0${i + 1}.jpg`
                rowNumber === 1 && row1.push(newImg)
                rowNumber === 2 && row2.push(newImg)
            }
        }

        setRow('forest', 1)
        setRow('toronto', 1)
        setRow('people', 2)
        setRow('neon', 2)

        setRows({ row1, row2})
    }, [])

    const handleZoomClick = (e, gallery) => {
        e.preventDefault()
        // openSlider(true)
        // setGallerySelected(gallery)
    } 

    const Row = ({ arr }) => {
        return arr.map((item, index) => {
            return (
            <s.SliderImageWrapper key={`${index}-${item.name}`}>
                <s.SearchIconContainer onClick={e => handleZoomClick(e, item.name)}>
                  <s.SearchIcon src={'img/icons/search.svg'} />
                </s.SearchIconContainer>
                <s.ImageWrapper className='img-wrapper'>
                    <s.SliderImage src={item.url} />
                </s.ImageWrapper>
                <s.SliderImageDataWrapper className="data-wrapper">
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
                    <Row arr={rows.row1} />
                </s.RowOne>
                <s.RowTwo>
                    <Row arr={rows.row2} />
                </s.RowTwo>
                </s.Content>
            </s.Viewport>
        </s.CarouselWrapper>
    )
}

export default TwoColumnCarousel