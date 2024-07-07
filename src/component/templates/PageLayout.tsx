import React, {ReactNode} from 'react';
import './PageLayout.scss';

type PageLayoutProps = {
    body: ReactNode,
    fab: ReactNode,
}

function PageLayout(props: PageLayoutProps) {
    return (
        <div className="page-layout">
            <div className="page-layout__body">{props.body}</div>
            <div className="page-layout__cart-fab">{props.fab}</div>
        </div>
    );
}

export default PageLayout;
