import { Gallery_Item } from "./gallery_item"


export function Gallery() {

    const galleryImages = ['1', '2', '3', '4']

    return (
        <div className="gallery-container">
            {galleryImages.map(item => <Gallery_Item img={item} />)}
        </div>
    )

}