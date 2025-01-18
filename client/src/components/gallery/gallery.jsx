import { Gallery_Item } from "./gallery_item"


export function Gallery() {

    const galleryImagesModule = import.meta.glob('/src/assets/images/*')

    const galleryImages = Object.keys(galleryImagesModule)
    console.log(galleryImages)

    return (
        <div className="gallery-container">
            {galleryImages.map((item, index) => <Gallery_Item key={index} img={item} />)}
        </div>
    )

}