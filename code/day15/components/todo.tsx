import React, { useState } from "react";

interface Props {
    todo: {
        index: number,
        title: string
    }
}

export default function (props: Props) {
    return <div>
        <span style={{display: "inline-block", width:50}}>{props.todo.index}</span>
        <span style={{width:200}}>{props.todo.title}</span>
    </div>
}