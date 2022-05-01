import { Button, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { TimeSquare } from '../TimeSquare/TimeSquare';

export interface MainComponentProps {
}
export function MainComponent({...props}: MainComponentProps) {
    const [count, setCount] = useState<number>(1);
    const handleOnClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('We now have', count, 'components')
    }, [count]);

    return (
        <>
            <Row>
                <Col>
                    <TimeSquare></TimeSquare>
                </Col>
            </Row>
        </>
    )
}