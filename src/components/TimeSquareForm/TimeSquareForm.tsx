import { Field, Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import { TimeSquareFormButton } from '../TimeSquareFormButton/TimeSquareFormButton';

export interface TimeSquareFormProps {

}
export function TimeSquareForm({ ...props }: TimeSquareFormProps) {
    const handleOnClick = () => {

    }
    return (
        <>
            <Formik
                initialValues={{ name: '', startTime: '', elapsedTime: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
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
                        <Field
                            name="startTime"
                            style={{
                                textAlign: 'center'
                            }}
                        >
                            {({
                                // @ts-ignore
                                field, // { name, value, onChange, onBlur }
                                // @ts-ignore
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                // @ts-ignore
                                meta,
                            }) => (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Start time"
                                        style={{
                                            textAlign: 'center'
                                        }}
                                        {...field}
                                    />
                                    {meta.touched && meta.error && (
                                        <div className="error">{meta.error}</div>
                                    )}
                                </div>
                            )}
                        </Field>
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
                        {/* <Button type="submit">Update</Button> */}
                        <TimeSquareFormButton
                            onClick={handleOnClick}
                        ></TimeSquareFormButton>
                    </Form>
                )}
            </Formik>

        </>
    )
}