import React, {useState} from 'react'
import {Button, Collapse} from "react-bootstrap"

function CollapsibleBar(props) {
    const [open,
        setOpen] = useState(false);

    return (
        <div>

            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}>
                {props.collapseHeading}
            </Button>

            <Collapse in={open}>
                <div id="example-collapse-text">
                    {props.collapseText}
                </div>
            </Collapse>
        </div>
    );
}

export default CollapsibleBar
