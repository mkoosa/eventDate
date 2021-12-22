import { interfaceUser } from "./InterfaceUser.js";
// import { MyDate } from "./myDate.js";

export class Event {
    constructor(name, day, mounth, year) {
        this.name = name;
        this.day = day;
        this.mounth = mounth;
        this.year = year;
        this.eventDate = null

    }
    getName(value) {
        this.name = this.correctElementFromArray(value)[0];
    }

    getDay(value) {
        this.day = this.createNumber(value);
        return this.day;

    }

    getMounth(value) {
        this.mounth = this.createNumber(value)
        return this.mounth;
    }

    getYear(value) {
        this.year = this.createNumber(value)
        return this.year;
    }

    createCurrentTime() {
        this.currentTime = new Date();
        // console.log(this.currentTime);

    }

    createEventTime(value) {
        if (value.length === 10) {

            // value = value.filter((el) => true)

            value = this.removeEmptyValueFromArray(value);
            console.log(value);

            const day = value.slice(0, 2).reduce(this.reducer);
            const mounth = value.slice(2, 4).reduce(this.reducer);
            const year = value.slice(4, 8).reduce(this.reducer);
            this.eventDate = new Date(year, mounth, day);

        }
    }

    reducer(previous, current) {
        return previous + current

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
        
        this.createEventTime(dateToCut)
        this.controlEventDataValue(dateToCut);

        dateToCut =  this.removeEmptyValueFromArray(dateToCut);
        this.controlEventDateLength(dateToCut);

        this.getDay(dateToCut.splice(0, 2));
        this.getMounth(dateToCut.splice(0, 2));
        this.getYear(dateToCut.splice(0, 4));
    }

    removeEmptyValueFromArray(array) {
        return array.filter((el) => true)

    }

    controlEventDateLength(value) {
        if (value.length >= 8) {
            interfaceUser.inputDate.removeEventListener('keyup', interfaceUser.eventDate())
        }

    }
    showWarningMessage() {
        if (!this.name || !this.day || !this.mounth || !this.year) {
            console.log('cos jest nie tak');
        }

    }

    controlEventDataValue(value) {
        for (let i = 0; i < value.length; i++) {
            let correctValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(value[i]);
            return correctValue

        }

    }

}



