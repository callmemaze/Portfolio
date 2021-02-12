import {useEffect,useState} from 'react'


export default function UseElementPos(el) {
    function getElement(x,y) {
        return{
            x: x,
            y: y
        }
        
    }
    const [elementPos, setElementPos] = useState(getElement)
    useEffect(() => {
        function handlePos() {
            let element = el.current
            let x = element.getBoundingClientRect().left + 
            document.documentElement.scrollLeft +
            element.offsetWidth / 2
            let y = element.getBoundingClientRect().top + 
            document.documentElement.scrollTop +
            element.offsetWidth / 2
            setElementPos(getElement(x,y))
            
        }
        handlePos()
    },[el])

    return elementPos
}
