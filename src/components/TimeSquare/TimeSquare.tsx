import { Button, Form } from "react-bootstrap";
import { TimeKeeper } from "../TimeKeeper/TimeKeeper";
import { TimeSquareForm } from "../TimeSquareForm/TimeSquareForm";

export function TimeSquare({ ...props }) {
    return (
        <>
            <div
                style={{
                    height: '8em',
                    width: '8em',
                    backgroundColor: 'white',
                    color: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}
                className={'time-square'}
            >
                {/* @ts-ignore */}
                <TimeSquareForm></TimeSquareForm>
            </div>
        </>
    )
}