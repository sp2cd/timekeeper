import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { StartTimeField } from '../StartTimeField/StartTimeField';
import { TimeSquareFormButton } from '../TimeSquareFormButton/TimeSquareFormButton';
import _ from 'lodash';
import { TimeUtils } from '../../util/TimeUtils';
import { TimeKeeper } from '../TimeKeeper/TimeKeeper';

export interface TimeSquareFormValues {
    name: string;
    startTime: string;
    elapsedTime: string;
}
export interface TimeSquareFormProps {

}
export function TimeSquareForm({ ...props }: TimeSquareFormProps) {
    const [started, setStarted] = useState<boolean>(false);
    const dateNow = new Date();
    const defaultStartTime: string = TimeUtils.getHourMinuteSecond(dateNow);
    const [countFrom, setCountFrom] = useState<Date>(dateNow);
    

    const formikOnSubmit = (values: TimeSquareFormValues, actions: any) => {
        setStarted(true);
        console.log('Starting the count up!', values.startTime);
        const { hours, minutes } = TimeUtils.parseTimeString(values.startTime)
        var start = new Date();
        start.setHours(hours!, minutes!);
        setCountFrom(start);
    }

    const formikValidate = (values: TimeSquareFormValues) => {
        const errorObject = {};
        // if (StringUtils.isBlankString(values.name)) {
        //     _.set(errorObject, 'name', 'Name is missing!');
        // }
        if (!isValidTime(values.startTime)) {
            _.set(errorObject, 'startTime', 'Start time is not a valid time.');
        }
        return errorObject;
    }

    const isValidTime = (timeString: string) => {
        return TimeUtils.isValid24HourHHMMSS(timeString) || TimeUtils.isValid12HourHHMMSS(timeString);
    }

    useEffect(() => {

    }, [countFrom]);

    return (
        <>
            <Formik
                initialValues={{ name: '', startTime: defaultStartTime, elapsedTime: '' } as TimeSquareFormValues}
                onSubmit={formikOnSubmit}
                validate={formikValidate}
                validateOnChange
                enableReinitialize
            >
                {props => (
                    <Form>
                        <Field
                            name="name"
                            placeholder="Title"
                            style={{
                                textAlign: 'center',
                                fontWeight: '600',
                                backgroundColor: '#3B5998',
                                color: 'white',
                            }}
                        />
                        <StartTimeField
                            name="startTime"
                            style={{
                                textAlign: 'center'
                            }}
                        ></StartTimeField>
                        <TimeKeeper
                            startCountingFromThisDate={countFrom}
                        />
                        {/* <Field
                            disabled
                            name="elapsedTime"
                            placeholder="00:00:00"
                            component={'input'}
                            style={{
                                textAlign: 'center',
                                fontSize: '2.5em'
                            }}
                        /> */}
                        <TimeSquareFormButton
                            started={started}
                        // onClick={handleOnClick}
                        ></TimeSquareFormButton>
                    </Form>
                )}
            </Formik>

        </>
    )
}