import { Button, Form } from "react-bootstrap";
import { TimeSquareForm } from "../TimeSquareForm/TimeSquareForm";
import { TimeSquareFormButton } from "../TimeSquareFormButton/TimeSquareFormButton";

export function TimeSquare({ ...props }) {
    return (
        <>
            <div
                style={{
                    height: '200px',
                    width: '200px',
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '0.25em',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // overflow: 'hidden',
                    alignItems: 'center'
                }}
            >
                <TimeSquareForm></TimeSquareForm>
            </div>
        </>
    )
}