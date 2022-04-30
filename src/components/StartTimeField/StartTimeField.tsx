import { Field } from "formik";

export interface StartTimeFieldProps {
    name: string;
    style: any;
}

export function StartTimeField({ name, style, ...props }: StartTimeFieldProps) {
    // const [input, meta, helper] = useField(name);
    const handleOnKeyUp = (e: any) => {
        console.log('on key up:', e.target.value);
    }
    const handleOnChange = (e: any) => {
        console.log('on change:', e);
    }
    return (
        <>
            <div>
                <Field
                    name={name}
                    style={style}
                    onKeyUp={handleOnKeyUp}
                    // onChange={handleOnChange}
                >
                    {/* {({
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
                )} */}
                </Field>
            </div>
        </>
    )
}