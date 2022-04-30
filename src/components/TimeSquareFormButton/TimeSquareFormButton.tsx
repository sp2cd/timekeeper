import { useField, useFormikContext } from "formik";
import { Button } from "react-bootstrap";
import _ from "lodash";
import { StringUtils } from "../../util/StringUtils";

export interface TimeSquareFormButtonProps {
    started: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function TimeSquareFormButton({ started, onClick, ...props }: TimeSquareFormButtonProps) {
    const { values, submitForm } = useFormikContext();
    const [input, meta, helper] = useField('startTime');

    const buttonText = started ? 'Update' : 'Start the count-up';

    return (
        <>
            <Button
                className={'btn'}
                onClick={submitForm}
                disabled={StringUtils.isBlankString(input.value) || !!meta.error}
            >
                <span className={'bi bi-plus'}>{buttonText}</span>
            </Button>
        </>
    )
}