import React from 'react';
import './Sheet.scss';

type SheetProps = {
    children?: JSX.Element
}

function Sheet(props: SheetProps) {
    return (
        <div className="sheet">
            <div className="sheet__content">
                {props.children}
            </div>
        </div>
    );
}

export default Sheet;
