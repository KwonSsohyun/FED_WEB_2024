import React from "react";

interface Props {
    style: any;
}

export default function(props: Props) {
    return <>
        <div style={props.style}></div>;
    </>
}