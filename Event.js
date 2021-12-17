// import { interfaceUser } from "./InterfaceUser.js";

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



    cutDate(value) {
        value = this.correctElementFromArray(value);
        let dateToCut = []
        let date = value.join();
        console.log(date);
        for (let i = 0; i < date.length; i++) {
            if (date[i] !== '.') {
                dateToCut[i] = date[i]
            }
        }

        dateToCut = dateToCut.filter((el) => true)
      
        this.getDay(dateToCut.splice(0,2))
        this.getMounth(dateToCut.splice(0,2))
        this.getYear(dateToCut.splice(0,4))
        
    }


    
    getDay(value){
        this.day = this.createNumber(value)

    }
    getMounth(value){
        this.mounth = this.createNumber(value)

    }
    getYear(value){
        this.year = this.createNumber(value)

    }

    createNumber(value){
        let partOfDay = '';
        for(let i = 0; i < value.length; i++){
            partOfDay += value[i]
        }
        
        return +partOfDay
    
    }

    correctElementFromArray(value, index) {
        let element = value.splice(length - 1, value.length);
        return element;
    }



}



