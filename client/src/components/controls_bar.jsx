import { Content_Portfolio } from "./modal_components/content/content_portfolio"
import { Content_Process } from "./modal_components/content/content_process"
import { Content_Prices } from "./modal_components/content/content_prices"
import { Content_Terms_Conditions} from "./modal_components/content/content_terms-conditions"
import { Content_Contact_Form } from "./modal_components/content/content_contact-form"

export function Controls_Bar({showModal}) {

    const modalContent = { 
        portfolio : {title : 'Portfolio', 
                     content: <Content_Portfolio />},

        process : {title : 'Process',
                   content : <Content_Process />},

        prices : {title : 'Pricing', 
                  content : <Content_Prices />},

        terms_conditions : {title: 'Terms & Conditions', 
                            content: <Content_Terms_Conditions />},

        contact : {title: 'Contact', 
                   content: <Content_Contact_Form />}
    }

    return (

        <div className="controls-container">
            
            <div id="portfolio" className="controls-item-container" onClick={() => showModal(modalContent.portfolio)}>
                <h2>Portfolio</h2>
            </div>

            <div id="process" className="controls-item-container" onClick={() => showModal(modalContent.process)}>
                <h2>Process</h2>
            </div>

            <div id="prices" className="controls-item-container" onClick={() => showModal(modalContent.prices)}>
                <h2>Prices</h2>
            </div>

            <div id="terms-conditions" className="controls-item-container" onClick={() => showModal(modalContent.terms_conditions)}>
                <h2>Terms & Conditions</h2>
            </div>

            <div id="contact" className="controls-item-container" onClick={() => showModal(modalContent.contact)}>
                <h2>Get in touch!</h2>
            </div>


        </div>

    )

}
