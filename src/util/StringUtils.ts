import { isNil } from "lodash";

export namespace StringUtils {
    export const isBlankString = (s: string | null | undefined) => {
        return isNil(s) || (typeof s === 'string' && s.trim().length === 0);
    }

    export const trimToUndefined = (s: string | null | undefined) => {
        return isBlankString(s) ? undefined : (typeof s === 'string' ? s.trim() : s);
    }
}