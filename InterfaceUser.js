import { DomElements } from './DomElements.js'
import { WRAPPER_INPUT_NAME_ID, SPAN_EVENT_NAME_ID, WRAPPER_INPUT_DATE_ID, SPAN_EVENT_DATE_ID, BUTTON_ID, WARNING_PARAGRAPH_ID } from './DomElements.js';
import { Event } from './Event.js';
import { LeftTimeToEvent } from './LeftTime.js';

export class InterfaceUser extends DomElements {
    constructor() {
        super();
        this.event = new Event();
        this.eventTime = null;
        this.leftTimeToEvent = null;
        this.bindToElements()
        this.pressButton();
        this.getEventNameFromInput();
        this.getEventDateFromInput();
        this.flagBtn = true;
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
                this.event.getName(eventName);
            }
            return this.eventNameHandler;
        }
    };

    pressButton() {
        this.button.addEventListener('click', () => {
            this.event.showWarningMessage();
            if (this.flagBtn) {
                this.eventInterval = setInterval(() => {
                    this.timeToDisplay()
                    this.flagBtn = false;
                    
                }, 1000);
            }
            this.createResetButton();
        })
    }

    timeToDisplay = () => {
        this.event.createCurrentTime();
        this.event.createCurrentTime();
        this.event.createEventTime();
        this.leftTimeToEvent = new LeftTimeToEvent();
     
        let currentTimeinMS = this.event.currentTime.getTime();
        let eventTimeInMS = this.event.createEventTime().getTime();
     
        this.eventValues = this.leftTimeToEvent.createMsValues([currentTimeinMS,eventTimeInMS]);
        this.displayEventValues(this.eventValues);
     
        this.event.showWarningMessage(currentTimeinMS, eventTimeInMS)
        

    }

    resetEvents = () => {
        location.reload()

    }

    createResetButton = () => {
        this.button.textContent = 'clear';
        this.button.addEventListener('click', this.resetEvents)

    }

    displayEventValues = ({ mounths, days, hours, minutes, seconds }) => {
        interfaceUser.warningParagraph.textContent = `${mounths} mounts ${days} dni ${hours} hours ${minutes} minut ${seconds}
        seconds to ${this.event.name}`;
        interfaceUser.warningParagraph.style.fontSize = '1.2rem';
        interfaceUser.warningParagraph.style.color = 'red';
        this.event.showWarningMessage();
    }

    getEventDateFromInput() {
        this.inputDate.addEventListener('keyup', this.eventDate());
    }

    eventDate() {
        if (!this.eventDateHandler) {
            let eventDate = [];
            this.eventDateHandler = (e) => {
                eventDate.push(e.target.value);
                this.event.cutDate(eventDate);
            }
        }

        return this.eventDateHandler;
    }

}

// @ts-ignore

export const interfaceUser = new InterfaceUser();

