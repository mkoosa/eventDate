
import { DomElements, WARNING_PARAGRAPH_ID } from './DomElements.js'
import { WRAPPER_INPUT_ID, BUTTON_ID, WRAPPER_SPAN_PARAGRAPH_ID } from './DomElements.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.bindToElements()


    }

    bindToElements() {
        this.button = this.bindToElement(BUTTON_ID);
        this.input = this.bindToElement(WRAPPER_INPUT_ID);
        this.spanParagraph = this.bindToElement(WRAPPER_SPAN_PARAGRAPH_ID);
        this.warningParagraph = this.bindToElement(WARNING_PARAGRAPH_ID)

    }


}


const interfaceUser = new InterfaceUser();


