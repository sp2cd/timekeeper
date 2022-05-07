import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { StartTimeField } from '../StartTimeField/StartTimeField';
import { TimeSquareFormButton } from '../TimeSquareFormButton/TimeSquareFormButton';
import _ from 'lodash';
import { TimeUtils } from '../../util/TimeUtils';
import { TimeKeeper } from '../TimeKeeper/TimeKeeper';
import { StringUtils } from '../../util/StringUtils';
import { Button } from 'react-bootstrap';

export interface TimeSquareFormValues {
    name: string;
    startTime: string;
    elapsedTime: string;
}
export interface TimeSquareFormProps {

}
export function TimeSquareForm({ ...props }: TimeSquareFormProps) {
    const [started, setStarted] = useState<boolean>(false);
    const [countFrom, setCountFrom] = useState<Date>(new Date());
    
    const [initialValues, setInitialValues] = useState<TimeSquareFormValues>({
        name: '',
        startTime: StringUtils.trimToUndefined(localStorage.getItem('startTime')) || TimeUtils.getHourMinuteSecond(new Date())
    } as TimeSquareFormValues);

    const formikOnSubmit = (values: TimeSquareFormValues) => {
        setStarted(true);
        console.log('Starting the count up!', values.startTime);
        const { hours, minutes } = TimeUtils.parseTimeString(values.startTime)
        var start = new Date();
        start.setHours(hours!, minutes!);
        setCountFrom(start);
        localStorage.setItem('startTime', values.startTime);
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

    const resetStartTime = () => {
        const newStartTime = TimeUtils.getHourMinuteSecond(new Date());
        console.log('new star ttime:', newStartTime);
        formikOnSubmit({
            ...initialValues,
            startTime: newStartTime
        });
    }

    useEffect(() => {

    }, [countFrom]);

    return (
        <>
            <Formik
                initialValues={initialValues}
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
                        <TimeSquareFormButton
                            started={started}
                        // onClick={handleOnClick}
                        ></TimeSquareFormButton>
                        <Button
                            className={'btn btn-danger'}
                            onClick={resetStartTime}
                        >
                            Reset
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    )
}