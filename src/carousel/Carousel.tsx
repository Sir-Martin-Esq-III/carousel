import React, { ReactElement, useEffect, useRef, useState } from 'react'

interface Props {
    width:number,
    height:number
    children:React.ReactNode[],
}

export default function Carousel(props: Props): ReactElement {
    const [currentScroll, setcurrentScroll] = useState<number|undefined>(0)
    const [currentIndex, setcurrentIndex] = useState(0)

    const [mouseDown, setmouseDown] = useState(false)

    const amountOfCards=props.children.length;
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const maxScroll=amountOfCards*props.width
    useEffect(() => {
        if (currentScroll!==undefined){
        currentScroll&&console.log(Math.floor((amountOfCards*currentScroll)/maxScroll)+1);
        setcurrentIndex(Math.floor((amountOfCards*currentScroll)/maxScroll)+1)
        }
    }, [currentScroll])
    

    const getScrollPosition=()=>{
        if (scrollRef!==undefined){
            console.log(scrollRef.current?.scrollLeft);
            
            scrollRef&&setcurrentScroll(scrollRef.current?.scrollLeft)    
        }
    }

    return (
        <div>
            <div className="carousel" ref={scrollRef} style={{display:'flex',width:props.width,overflow:"scroll"}} onScroll={getScrollPosition} onMouseDown={()=>setmouseDown(true)}>
                {props.children}
            </div>
            {`${currentIndex} of ${amountOfCards}`}
        </div>
    )
}
