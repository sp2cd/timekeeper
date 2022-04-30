import { useFormikContext } from "formik";
import { Button } from "react-bootstrap";
import _ from "lodash";

export interface TimeSquareFormButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function TimeSquareFormButton({ onClick, ...props }: TimeSquareFormButtonProps) {
    const { values, submitForm } = useFormikContext();

    const buttonText = _.get(values, 'startTime', '') === '' ? 'Start the count-up' : 'Update';
    
    return (
        <>
            <Button
                className={'btn'}
                onClick={onClick}
            >
                <span className={'bi bi-plus'}>{buttonText}</span>
            </Button>
        </>
    )
}