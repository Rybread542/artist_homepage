import { content_portfolio } from "./modal_components/content/content_portfolio"
import { content_process } from "./modal_components/content/content_process"
import { content_prices } from "./modal_components/content/content_prices"
import { terms_conditions } from "./modal_components/content/content_terms-conditions"
import { content_contact_form } from "./modal_components/content/content_contact-form"

export function controls_bar(showModal) {

    const modalContent = { 
        portfolio : {title : 'Portfolio', 
                     content: <content_portfolio />},

        process : {title : 'Process',
                   content: <content_process />},

        prices : {title : 'Pricing', 
                  content: <content_prices />},

        terms_conditions : {title: 'Terms & Conditions', 
                            content: <terms_conditions />},
                            
        contact : {title: 'Contact', 
                   content: <content_contact_form />}
     }

    return (

        <div className="controls-container">
            
            <div id="portfolio" className="controls-item-container" onClick={showModal(modalContent.portfolio)}>
                <h2>Portfolio</h2>
            </div>

            <div id="process" className="controls-item-container" onClick={showModal(modalContent.process)}>
                <h2>Process</h2>
            </div>

            <div id="prices" className="controls-item-container" onClick={showModal(modalContent.prices)}>
                <h2>Prices</h2>
            </div>

            <div id="terms-conditions" className="controls-item-container" onClick={showModal(modalContent.terms_conditions)}>
                <h2>Terms & Conditions</h2>
                
            </div>

            <div id="contact" className="controls-item-container" onClick={showModal(modalContent.contact)}>
                <h2>Get in touch!</h2>
            </div>


        </div>

    )

}
