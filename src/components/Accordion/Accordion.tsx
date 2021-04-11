import React from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType []
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Style rendering")
    return <div>

        <AccordionTitle title={props.titleValue}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onChange()} className="StyleTitle1">-- {props.title} --</h3>;
}

type AccordionBodyPropsType = {
    items: ItemType []
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)}
                                           key={index}>{i}</li>)}
    </ul>
}


export default Accordion;