import _ from "lodash";
import { useEffect, useState } from "react";

export interface TimeKeeperProps {
    startCountingFromThisDate?: Date;
}
export function TimeKeeper({ startCountingFromThisDate, ...props }: TimeKeeperProps) {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // TODO - almost there...
    const formatTime = (secs: number) => {
        let hours = Math.floor(secs / 3600);
        let minutes = Math.floor(secs / 60) % 60;
        let seconds = Math.floor(secs % 60);
        return [hours, minutes, seconds]
            .map(v => ('' + v).padStart(2, '0'))
            .filter((v, i) => v !== '00' || i > 0)
            .join(':');
    }

    const formatDateIntoTime = (start: Date) => {
        // @ts-ignore
        var diff = Math.abs(Date.now() - start);
        return formatTime(diff / 1000);
    }

    return _.isNil(startCountingFromThisDate) ? (null) : (
        <div
            style={{
                textAlign: 'center',
                fontSize: '2em'
            }}
        >
            {/* @ts-ignore */}
            {formatDateIntoTime(startCountingFromThisDate)}
        </div>
    );
}