
import { DomElements } from './DomElements.js'
import { WRAPPER_INPUT_NAME_ID, SPAN_EVENT_NAME_ID, WRAPPER_INPUT_DATE_ID, SPAN_EVENT_DATE_ID, BUTTON_ID, WARNING_PARAGRAPH_ID } from './DomElements.js';
import { Event } from './Event.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.bindToElements()
        this.event = null;
        this.pressButton();
    }

    bindToElements() {
        this.eventNameArray = [];
        this.eventDateArray = [];

        this.inputName = this.bindToElement(WRAPPER_INPUT_NAME_ID);
        this.inputDate = this.bindToElement(WRAPPER_INPUT_DATE_ID);

        this.spanParagraphName = this.bindToElement(SPAN_EVENT_NAME_ID);
        this.spanParagraphDate = this.bindToElement(SPAN_EVENT_DATE_ID)
        this.warningParagraph = this.bindToElement(WARNING_PARAGRAPH_ID)

        this.button = this.bindToElement(BUTTON_ID);
        console.log(this);
        this.getEventNameFromInput();
        this.getEventDateFromInput();

    }

    getEventNameFromInput() {
        this.inputName.addEventListener('keyup', (e) => {
            let eventName = e.target.value;
            this.pushEventName(eventName);

        })
    }

    pushEventName(name) {
        this.eventNameArray.push(name)

    }

    getEventDateFromInput() {
        this.inputDate.addEventListener('keyup', (e) => {
            let eventDate = e.target.value;
            this.pushEventDate(eventDate);

        })
    }

    pushEventDate(name) {
        this.eventDateArray.push(name)

    }

    createEvent() {
        this.event = new Event();

    }

    pressButton() {
        this.button.addEventListener('click', () => {
            this.createEvent()
            this.fillEvent()
            this.clearInput();
            this.clearArrayOfEvents();
        })
    }

    fillEvent() {
        let arrayName = this.eventNameArray;
        let arrayDate = this.eventDateArray;
        this.event.name = arrayName[arrayName.length - 1];
        this.event.date = arrayDate[arrayDate.length - 1];
    }

    clearInput() {
        this.inputDate.value = '';
        this.inputName.value = '';
    }

    clearArrayOfEvents() {
        this.eventNameArray.length = 0;
        this.eventDateArray.length = 0;

    }

}


const interfaceUser = new InterfaceUser();


