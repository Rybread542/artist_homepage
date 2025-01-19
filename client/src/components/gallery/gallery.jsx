import { Gallery_Item } from "./gallery_item"
import '../../assets/styles/gallery.css'

export function Gallery() {

    const galleryImagesModule = import.meta.glob('/src/assets/images/*')

    const galleryImages = Object.keys(galleryImagesModule)
    console.log(galleryImages)

    return (
        <div className="gallery-container">
            <div className="gallery-track">
                {galleryImages.map((item, index) => <Gallery_Item key={index} img={item} />)}
                {galleryImages.map((item, index) => <Gallery_Item key={index} img={item} />)}
            </div>
        </div>
    )

}