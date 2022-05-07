export interface BlankTimeSquareProps {
    onClick: any;
}
export function BlankTimeSquare({ onClick, ...props }: BlankTimeSquareProps ) {
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
                onClick={onClick}
            >
                {/* @ts-ignore */}
                Click me!
            </div>
        </>
    )
}