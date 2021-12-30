import { interfaceUser } from "./InterfaceUser.js";

// import { LeftTimeToEvent } from "./LeftTime.js";



export class Event {
    constructor(name, day, mounth, year) {
        this.name = name;
        this.day = day;
        this.mounth = mounth;
        this.year = year;

    }
    getName(value) {
        this.name = this.correctElementFromArray(value)[0];
    }

    getDay(value) {
        this.day = this.createNumber(value);
        return this.day;

    }

    getMounth(value) {
        this.mounth = this.createNumber(value);
        return this.mounth;
    }

    getYear(value) {
        this.year = this.createNumber(value);
        return this.year;
    }

    createEvent(value) {

        if (value.length === 10) {
            value = this.removeEmptyValueFromArray(value);

        }
    }

    createEventTime() {
        const evenTime = new Date(this.year, this.mounth - 1, this.day);
        // console.log(object);
        return evenTime;

    }

    createCurrentTime() {
        this.currentTime = new Date();


    }

    reducer(previous, current) {
        return previous + current;

    }

    createNumber(value) {
        let partOfDay = '';
        for (let i = 0; i < value.length; i++) {
            partOfDay += value[i];
        }

        return +partOfDay;
    }

    correctElementFromArray(value, index) {
        let element = value.splice(length - 1, value.length);

        return element;
    }

    cutDate(value) {
        // debugger
        value = this.correctElementFromArray(value);
        let dateToCut = [];
        let date = value.join();
        let valueLength = date.length;

        for (let i = 0; i < date.length; i++) {
            if (date[i] !== '.') {
                dateToCut[i] = date[i];
            }
        }

        this.createEvent(dateToCut);
        this.controlEventDataValue(dateToCut);
        dateToCut = this.removeEmptyValueFromArray(dateToCut);
        this.controlEventDateLength(dateToCut);
        this.getDay(dateToCut.splice(0, 2));
        this.getMounth(dateToCut.splice(0, 2));
        this.getYear(dateToCut.splice(0, 4));

    }

    removeEmptyValueFromArray(array) {
        return array.filter((el) => true);

    }

    controlEventDateLength(value) {
        if (value.length >= 8) {
            interfaceUser.inputDate.removeEventListener('keyup', interfaceUser.eventDate());
        }

    }

    showWarningMessage(currentTimeinMS, eventTimeInMS) {

        if (!this.name || !this.day || !this.mounth || !this.year || currentTimeinMS > eventTimeInMS) {

            if (currentTimeinMS > eventTimeInMS) {
                interfaceUser.warningParagraph.textContent = 'Upps, to early';
            } else {
                interfaceUser.warningParagraph.textContent = 'Upps, not Correct format';
            }
            interfaceUser.warningParagraph.style.color = 'red';
            interfaceUser.warningParagraph.style.fontSize = '2rem';
            clearInterval(interfaceUser.eventInterval)


        }
    }


    controlEventDataValue(value) {
        for (let i = 0; i < value.length; i++) {
            let correctValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(value[i]);
            return correctValue;
        }

    }

}



