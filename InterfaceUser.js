import { DomElements } from './DomElements.js'
import { WRAPPER_INPUT_NAME_ID, SPAN_EVENT_NAME_ID, WRAPPER_INPUT_DATE_ID, SPAN_EVENT_DATE_ID, BUTTON_ID, WARNING_PARAGRAPH_ID } from './DomElements.js';
import { Event } from './Event.js';
// import { MyDate } from './myDate.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.event = new Event();
        
        this.bindToElements()
        this.pressButton();
        this.getEventNameFromInput();
        this.getEventDateFromInput();
    }

    bindToElements() {
        this.inputName = this.bindToElement(WRAPPER_INPUT_NAME_ID);
        this.inputDate = this.bindToElement(WRAPPER_INPUT_DATE_ID);
        this.spanParagraphName = this.bindToElement(SPAN_EVENT_NAME_ID);
        this.spanParagraphDate = this.bindToElement(SPAN_EVENT_DATE_ID)
        this.warningParagraph = this.bindToElement(WARNING_PARAGRAPH_ID)
        this.button = this.bindToElement(BUTTON_ID);
    }

    getEventNameFromInput() {
        this.inputName.addEventListener('keyup', this.eventName());
    }

    eventName() {
        if (!this.eventNameHandler) {
            this.eventNameHandler = (e) => {
                let eventName = [];
                eventName.push(e.target.value);
                this.event.getName(eventName)
            }
            return this.eventNameHandler
        }

    };

    pressButton() {
        this.button.addEventListener('click', () => {
            console.log('click');
            console.log(this.event);
            this.event.showWarningMessage();
            this.event.createCurrentTime();
            console.log(this.event.eventDate);
            console.log(this.event.currentTime);
        })
        
    }

    getEventDateFromInput() {
        this.inputDate.addEventListener('keyup', this.eventDate())
    }

    eventDate() {
        if (!this.eventDateHandler) {
            let eventDate = []
            this.eventDateHandler = (e) => {
                eventDate.push(e.target.value)
                this.event.cutDate(eventDate);
            }
        }

        return this.eventDateHandler
    }

}

// @ts-ignore

export const interfaceUser = new InterfaceUser();

