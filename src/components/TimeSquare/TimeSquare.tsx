import { Button, CloseButton, Form } from "react-bootstrap";
import { TimeKeeper } from "../TimeKeeper/TimeKeeper";
import { TimeSquareForm } from "../TimeSquareForm/TimeSquareForm";

export interface TimeSquareProps {
    id: number;
    key: number;
    handleOnClickCloseButton: any;
}
export function TimeSquare({ id, key, handleOnClickCloseButton, ...props }:  TimeSquareProps) {
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
                key={id}
                className={'time-square'}
            >
                <CloseButton onClick={() => handleOnClickCloseButton(id)} />
                {/* @ts-ignore */}
                <TimeSquareForm></TimeSquareForm>
            </div>
        </>
    )
}