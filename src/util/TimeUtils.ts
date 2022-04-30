export namespace TimeUtils {
    export const isValid24HourHHMMSS = (s: string) => {
        var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])*?$/.test(s);
        return isValid;
    }

    export const isValid12HourHHMMSS = (s: string) => {
        var isValid = /^(0*[0-9]|[0-1]?[0-2]):([0-5][0-9])(:[0-5][0-9])*\s*(PM|AM)?$/.test(s);
        return isValid;
    }
}