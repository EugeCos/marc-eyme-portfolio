import { useRef, useEffect, useLayoutEffect, useState } from 'react'
import * as s from './TwoColumnCarousel.style'

// Scroll booster
import ScrollBooster from 'scrollbooster'

// Components
import { allImages } from '../../../Images'


const TwoColumnCarousel = ({ selectedTag }) => {
    // State
    const [allPics, setAllPics] = useState([])
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
    useLayoutEffect(() => {
        // Place all photos into one array
        const allPics = []
        for(let gallery in allImages) {
            const gal = allImages[gallery];
            gal?.images.forEach(img => allPics.push(img))
        }

        // Shuffle that array
        shuffleArray(allPics);
        
        // Split into two equal sized arrays
        const row1 = [], row2 = [], midPoint = Math.ceil(allPics.length / 2);
        allPics.forEach((img, index) => {
            if(index + 1 <= midPoint) row1.push(img);
            else row2.push(img)
        })

        // Set all pics
        setAllPics(allPics)

        // Set rows
        setRows({ row1, row2})
    }, [])


    // Update photos based on selected tag
    useEffect(() => {
        const filteredArr = [];
        allPics.forEach(item => {
            item.tags.forEach(tag => tag === selectedTag && filteredArr.push(item)) 
        })

        // Split into two equal sized arrays
        const row1 = [], row2 = [];

        let midPoint = 0;
        if(allPics.length && selectedTag === 'all') {
            midPoint = Math.ceil(allPics.length / 2);
            allPics.forEach((img, index) => {
                if(index + 1 <= midPoint) row1.push(img);
                else row2.push(img)
            })

            // Set rows
            setRows({ row1, row2})
        }
        else if (filteredArr.length && selectedTag !== 'all'){
            midPoint = Math.ceil(filteredArr.length / 2);
            filteredArr.forEach((img, index) => {
                if(index + 1 <= midPoint) row1.push(img);
                else row2.push(img)
            })

            // Set rows
            setRows({ row1, row2})
        }

    }, [selectedTag])


    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


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
                    <s.SliderImage src={item.urlThumbnails} />
                </s.ImageWrapper>
                <s.SliderImageDataWrapper className="data-wrapper">
                  <s.ImageName blackFont={item.name === 'to-do'}>{item.name}</s.ImageName>
                  <s.ImageDescription blackFont={item.name === 'to-do'}>Gallery: {item.gallery}</s.ImageDescription>
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