

export const WRAPPER_SPAN_PARAGRAPH_ID = `span-paragraph`;
export const WRAPPER_INPUT_ID = `wrapper-input`;
export const BUTTON_ID = `button`;
export const WARNING_PARAGRAPH_ID = `warning-paragraph`;


export class DomElements {
    constructor(element) {
        if (typeof element === undefined) {
            return
        }

        this.element = element;
    }

    bindToElement(idElement) {
        
        const element = document.getElementById(idElement);
        
        if (!element) {
            throw new Error(`document doesnt't exist`)
        }

        return element
    }



}

