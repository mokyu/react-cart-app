import React, {ReactNode} from 'react';
import './Sheet.scss';

type SheetProps = {
    children?: ReactNode
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
