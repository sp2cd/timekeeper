import { isNil } from "lodash";

export namespace StringUtils {
    export const isBlankString = (s: string) => {
        return isNil(s) || (typeof s === 'string' && s.trim().length === 0);
    }
}