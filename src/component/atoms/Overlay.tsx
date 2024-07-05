import React, {ReactNode} from 'react';
import './Overlay.scss';

type OverlayProps = {
    children?: ReactNode,
    onOverlayClick: () => void
}

function Overlay(props: OverlayProps) {
    return (
        <div
            className="overlay"
            onClick={props.onOverlayClick}
        >
            {props.children}
        </div>
    );
}

export default Overlay;
