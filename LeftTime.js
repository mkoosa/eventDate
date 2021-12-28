import { interfaceUser } from "./InterfaceUser.js";
import { Event } from "./Event.js";

const MS_IN_MOUNTHS = 30 * 24 * 60 * 60 * 1000;

export class LeftTimeToEvent {
    constructor(times) {
        this.times = times;
    }

    createMsValues(value) {
        const [currentMs, eventMs] = value;
        const timeDifference = eventMs - currentMs; // roznica w ms 

        const eMounthsToDate = timeDifference / MS_IN_MOUNTHS;
        const mounthsToDate = Math.floor(eMounthsToDate);

        let mounthsToDateFix = (mounthsToDate < 1) ? 1 : mounthsToDate;

        const eDaysToDate = (eMounthsToDate % mounthsToDateFix) * 30;
        const daysToDate = Math.floor(eDaysToDate);

        const eHoursToDate = (eDaysToDate - daysToDate) * 24;
        const hoursTodate = Math.floor(eHoursToDate);

        const eMinutesToDate = (eHoursToDate - hoursTodate) *60;
        const minutesToDate = Math.floor(eMinutesToDate);

        const eSecundsToDate = (eMinutesToDate - minutesToDate) *60;
        const secundsTodate = Math.floor(eSecundsToDate);

        return {
            mounths: mounthsToDate,
            days: daysToDate,
            hours: hoursTodate,
            minutes: minutesToDate,
            seconds: secundsTodate,
        }

    }

}
