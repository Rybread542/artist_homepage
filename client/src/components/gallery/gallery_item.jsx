import { useState } from 'react'
import '../../assets/styles/gallery.css'

export function Gallery_Item({img}) {

    const [transformStyle, setTransformStyle] = useState({
        transform: 'translate(0, 0) scale(1)'
    })

    const handleMouseMove = (e) => {

        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const offsetX = (x-centerX) / centerX
        const offsetY = (y-centerY) / centerY

        const multiplier = 10

        const translateX = -offsetX * multiplier
        const translateY = -offsetY * multiplier

        const scale = 1.05

        console.log(y)
        console.log(transformStyle)
        setTransformStyle({
            transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`
        })
    }

    const handleMouseLeave = () => {
        setTransformStyle({
            transform : 'translate(0,0) scale(1)'
        })
    }

    const handleMouseDown = (e) => {
        e.preventDefault()
    }

    return (
        <div className="gallery-item" 
        style={{
            ...transformStyle 
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}>
            <img src={img} alt="Sample" />
        </div>
    )

}