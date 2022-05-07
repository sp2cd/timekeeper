import { Button, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { TimeSquare } from '../TimeSquare/TimeSquare';
import { BlankTimeSquare } from '../BlankTimeSquare/BlankTimeSquare';

export interface MainComponentProps {
}
export function MainComponent({...props}: MainComponentProps) {
    const [count, setCount] = useState<number>(1);
    const [maxCount, setMaxCount] = useState<number>(9);
    const [maxCols, setMaxCols] = useState<number>(3);
    const [maxRows, setMaxRows] = useState<number>(3);
    const [renderedComponents, setRenderedComponents] = useState<JSX.Element[]>([]);

    const handleOnClick = () => {
        // setCount(Math.min(count + 1, maxCount));
        renderedComponents.push(<TimeSquare
            id={count + 1}
            key={count + 1}
            handleOnClickCloseButton={handleOnClickCloseButton}
        ></TimeSquare>)
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('We now have', count, 'components')
    }, [count]);

    const handleOnClickCloseButton = (id: number) => {
        console.log('removing component w/ id:', id);
        const newArray = renderedComponents.splice(id, 1);
        setRenderedComponents(newArray);
    }

    useEffect(() => {
        console.log('rendered components array was updated.')
        setCount(renderedComponents.length);
    }, [renderedComponents]);

    return (
        <>
            {
                renderedComponents.map((_, i) => {
                    return (
                        <TimeSquare
                            id={i}
                            key={i}
                            handleOnClickCloseButton={handleOnClickCloseButton}
                        ></TimeSquare>
                    )
                })
            }
            <BlankTimeSquare
                onClick={handleOnClick}
            ></BlankTimeSquare>
            {/* <Row>
                <Col>
                    
                    <BlankTimeSquare
                        onClick={handleOnClick}
                    ></BlankTimeSquare>
                </Col>
            </Row> */}
        </>
    )
}