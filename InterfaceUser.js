
import { DomElements } from './DomElements.js'
import { WRAPPER_INPUT_NAME_ID, SPAN_EVENT_NAME_ID, WRAPPER_INPUT_DATE_ID, SPAN_EVENT_DATE_ID, BUTTON_ID, WARNING_PARAGRAPH_ID } from './DomElements.js';
import { Event } from './Event.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.event = new Event();

        this.bindToElements()
        this.pressButton();

    }

    bindToElements() {
        this.inputName = this.bindToElement(WRAPPER_INPUT_NAME_ID);
        this.inputDate = this.bindToElement(WRAPPER_INPUT_DATE_ID);

        this.spanParagraphName = this.bindToElement(SPAN_EVENT_NAME_ID);
        this.spanParagraphDate = this.bindToElement(SPAN_EVENT_DATE_ID)
        this.warningParagraph = this.bindToElement(WARNING_PARAGRAPH_ID)
        this.button = this.bindToElement(BUTTON_ID);
        this.getEventNameFromInput();
        this.getEventDateFromInput();

    }

    getEventNameFromInput() {
        this.inputName.addEventListener('keyup', this.eventName())
    }

    eventName() {
        let eventName = [];
        return (e) => {
            eventName.push(e.target.value)
            this.event.getName(eventName)
        }

    };

    pressButton() {
        this.button.addEventListener('click', () => {
            console.log('click');
            console.log(this.event);
        })
    }

    getEventDateFromInput() {
        this.inputDate.addEventListener('keyup', this.eventDate())
    }


    eventDate() {
        let eventDate = []
        return (e) => {
            eventDate.push(e.target.value)
            this.event.cutDate(eventDate);
        }
    }
}

// @ts-ignore
export const interfaceUser = new InterfaceUser();




