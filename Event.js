import { interfaceUser } from "./InterfaceUser.js";

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
        this.day = this.createNumber(value)
    }

    getMounth(value) {
        this.mounth = this.createNumber(value)
    }

    getYear(value) {
        this.year = this.createNumber(value)
    }

    createNumber(value) {
        let partOfDay = '';
        for (let i = 0; i < value.length; i++) {
            partOfDay += value[i]
        }

        return +partOfDay
    }

    correctElementFromArray(value, index) {
        let element = value.splice(length - 1, value.length);

        return element;
    }

    cutDate(value) {
        value = this.correctElementFromArray(value);
        let dateToCut = []
        let date = value.join();
        let valueLength = date.length;

        for (let i = 0; i < date.length; i++) {
            if (date[i] !== '.') {
                dateToCut[i] = date[i]
            }
        }

        this.controlEventDataValue(dateToCut);
        dateToCut = dateToCut.filter((el) => true)
        this.controlEventDateLength(dateToCut);

        this.getDay(dateToCut.splice(0, 2))
        this.getMounth(dateToCut.splice(0, 2))
        this.getYear(dateToCut.splice(0, 4))
    }


    showWarningMessage() {
        if (!this.name || !this.day || !this.mounth || !this.year) {
            console.log('cos jest nie tak');
        }

    }



    controlEventDateLength(value) {
        if (value.length >= 8) {
            interfaceUser.inputDate.removeEventListener('keyup', interfaceUser.eventDate())
        }

    }

    controlEventDataValue(value) {
        for (let i = 0; i < value.length; i++) {
            let correctValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(value[i]);
            return correctValue

        }

    }

}



