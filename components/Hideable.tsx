import * as React from 'react';

export interface HideableProps {
    children?: any;
    hidden?: boolean;
}

const hiddenStyle = { display:'none' };

export default function Hideable (props: HideableProps) {
    return props.hidden ? (<div style={hiddenStyle}>{props.children}</div>) : (<div>{props.children}</div>);
}
