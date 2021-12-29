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
            setInterval(() => {
                this.timeToDisplay()

            }, 1000);

        })

    }


    timeToDisplay = () => {
        this.event.createCurrentTime();
        this.event.createCurrentTime();
        this.event.createEventTime();
        this.leftTimeToEvent = new LeftTimeToEvent();
        this.eventValues = this.leftTimeToEvent.createMsValues([this.event.currentTime.getTime(), this.event.createEventTime().getTime()]);
        this.displayEventValues(this.eventValues);

    }


    displayEventValues = ({ mounths, days, hours, minutes, seconds }) => {


        interfaceUser.warningParagraph.textContent = `${mounths} mounts ${days} dni ${hours} hours ${minutes} minut ${seconds}
        seconds do ${this.event.name}`;
        interfaceUser.warningParagraph.style.fontSize = '2rem';
        interfaceUser.warningParagraph.style.color = 'black';

        this.event.showWarningMessage();



        console.log('miesiace', mounths);
        console.log('dni', days);
        console.log('godziny', hours);
        console.log('minuty', minutes);
        console.log('secundy', seconds);
        console.log(this.event.name);

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

