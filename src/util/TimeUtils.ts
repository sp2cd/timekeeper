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

    export const getHourMinuteSecond: (d: Date) => string = (d: Date) => {
        const hours = d.getHours() % 12 === 0 ? 12 : d.getHours() % 12;
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();
        const amPm = d.getHours() >= 12 ? 'PM' : 'AM';
        
        // @ts-ignore 
        // const secs = Math.abs(Date.now() - 0) / 1000;
        // let hours = Math.floor(secs / 3600);
        // let minutes = Math.floor(secs / 60) % 60;
        // let seconds = Math.floor(secs % 60);
        return [hours, minutes, seconds]
            .map(v => ('' + v).padStart(2, '0'))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':') + ' ' + amPm;
    }
}