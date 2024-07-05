import React, {ReactNode} from 'react';
import './ItemLayout.scss';

type ItemLayoutProps = {
    children: ReactNode[]
}

function ItemLayout(props: ItemLayoutProps) {
    return (
        <div className="item-layout">
            {props.children}
        </div>
    );
}

export default ItemLayout;
