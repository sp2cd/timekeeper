import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { StartTimeField } from '../StartTimeField/StartTimeField';
import { TimeSquareFormButton } from '../TimeSquareFormButton/TimeSquareFormButton';
import _ from 'lodash';
import { TimeUtils } from '../../util/TimeUtils';
import { StringUtils } from '../../util/StringUtils';

export interface TimeSquareFormValues {
    name: string;
    startTime: string;
    elapsedTime: string;
}
export interface TimeSquareFormProps {

}
export function TimeSquareForm({ ...props }: TimeSquareFormProps) {
    const [started, setStarted] = useState<boolean>(false);
    const formikOnSubmit = (values: TimeSquareFormValues, actions: any) => {
        setStarted(true);
        console.log('Starting the count up!', values.startTime);
        const { hours, minutes } = TimeUtils.parseTimeString(values.startTime)
        var today = new Date();
        today.setHours(hours!, minutes!);
        console.log('DateTime:', today);
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
        console.log('validating time...');
        return TimeUtils.isValid24HourHHMMSS(timeString) || TimeUtils.isValid12HourHHMMSS(timeString);
    }

    return (
        <>
            <Formik
                initialValues={{ name: '', startTime: '', elapsedTime: '' } as TimeSquareFormValues}
                onSubmit={formikOnSubmit}
                validate={formikValidate}
                validateOnChange
                enableReinitialize
            >
                {props => (
                    <Form>
                        <Field
                            name="name"
                            placeholder="Give me a name..."
                            style={{
                                textAlign: 'center',
                                fontWeight: '600',
                                backgroundColor: '#3B5998',
                                color: 'white'
                            }}
                        />
                        <StartTimeField
                            name="startTime"
                            style={{
                                textAlign: 'center'
                            }}
                        ></StartTimeField>
                        
                        <Field
                            disabled
                            name="elapsedTime"
                            placeholder="00:00:00"
                            component={'input'}
                            style={{
                                textAlign: 'center',
                                fontSize: '2.5em'
                            }}
                        />
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