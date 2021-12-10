

export const WRAPPER_INPUT_NAME_ID = `eventName-input`;
export const SPAN_EVENT_NAME_ID = `span-eventName-paragraph`;

export const WRAPPER_INPUT_DATE_ID = `eventDate-input`;
export const SPAN_EVENT_DATE_ID = `span-eventDate-paragraph`;

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

