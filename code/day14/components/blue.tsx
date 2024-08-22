import React from "react";

interface Props {
    style: any;
}

export default function({ style }: Props) {
    return <>
        <div style={ style }></div>
    </>
}