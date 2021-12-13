
import { DomElements } from './DomElements.js'
import { WRAPPER_INPUT_NAME_ID, SPAN_EVENT_NAME_ID, WRAPPER_INPUT_DATE_ID, SPAN_EVENT_DATE_ID, BUTTON_ID, WARNING_PARAGRAPH_ID } from './DomElements.js';
import { Event } from './Event.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.bindToElements()
        this.event = null;
        this.event = new Event();
        this.pressButton();

    }

    bindToElements() {
        this.eventNameArray = [];
        this.evenDateArray = [];
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
        this.inputName.addEventListener('keyup', (e) => {
            // @ts-ignore
            let eventName = e.target.value;

        })
    }

    getEventDateFromInput() {
        this.inputDate.addEventListener('keyup', (e) => {
            // @ts-ignore
            let eventDate = e.target.value;
            this.evenDateArray.push(eventDate);
            this.evenDateArray.splice(0, this.evenDateArray.length - 1);
            this.dateEventWithoutDot(this.evenDateArray.join(' '));

        })
    }

    dateEventWithoutDot(value) {
        let stringDataValue = '';
        for (let i = 0; i < value.length; i++) {
            if(value[i] !== '.'){
                stringDataValue += value[i]
            }
        }
        console.log(stringDataValue);

    }

    pressButton() {
        this.button.addEventListener('click', () => {
            this.fillEvent()
            this.clearInput();
            this.clearArrayOfEvents();
        })
    }

    fillEvent() {
        let arrayName = this.eventNameArray;
        // @ts-ignore
        this.event.name = arrayName[arrayName.length - 1];

    }

    clearInput() {
        // @ts-ignore
        this.inputDate.value = '';
        // @ts-ignore
        this.inputName.value = '';
    }

    clearArrayOfEvents() {
        this.eventNameArray.length = 0;
        console.log(this.event);

    }

}


// @ts-ignore
const interfaceUser = new InterfaceUser();




