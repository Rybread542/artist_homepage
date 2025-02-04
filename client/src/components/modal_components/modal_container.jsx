import '../../assets/styles/modal.css'

export function Modal_Container( {modalContent, closeModal} ) {

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-close-button" onClick={closeModal}>
                    X
                </div>
                <div className="modal-content-container">

                    <div className="modal-content-title">
                        <h3>{modalContent.title}</h3>
                    </div>

                    <div className="modal-content">
                        {modalContent.content}
                    </div>
                </div>
            </div>
        </div>
    )
}