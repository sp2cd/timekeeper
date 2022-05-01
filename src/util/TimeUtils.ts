export namespace TimeUtils {
    export const isValid24HourHHMMSS = (s: string) => {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])*?$/.test(s);
        return isValid;
    }

    export const isValid12HourHHMMSS = (s: string) => {
        var isValid = /^(0*[0-9]|[0-1]?[0-2]):([0-5][0-9])(:[0-5][0-9])*\s*(PM|AM)?$/.test(s);
        return isValid;
    }

    export interface MyTime {
        hours: number | null;
        minutes: number | null;
    }
    export const parseTimeString = (s: string) => {
        if (TimeUtils.isValid24HourHHMMSS(s)) {
            const regexp = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])*?$/;
            const capturingGroups = s.match(regexp);
            console.log(capturingGroups);
            const hours = capturingGroups?.[1];
            const minutes = capturingGroups?.[2];
            console.log(hours, 'hours and', minutes, 'minutes');
            return {
                hours: +hours!,
                minutes: +minutes!
            } as MyTime
        } else if (TimeUtils.isValid12HourHHMMSS(s)) {
            const regexp = /^(0*[0-9]|[0-1]?[0-2]):([0-5][0-9])(:[0-5][0-9])*\s*(PM|AM)?$/;
            const capturingGroups = s.match(regexp);
            console.log(capturingGroups);
            const hours = capturingGroups?.[1];
            const minutes = capturingGroups?.[2];
            const period = capturingGroups?.[4];
            console.log(hours, 'hours and', minutes, 'minutes');
            return {
                hours: period === 'AM' ? +hours! : +hours! + 12,
                minutes: +minutes!
            } as MyTime
        } else {
            return {
                hours: null,
                minutes: null
            }
        }
    }
}