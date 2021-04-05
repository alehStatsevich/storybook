import React from "react";
//типизация
type ItemType ={
    title: string
    value: any
}
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: any
    onChange: () => void
    items: ItemType[]
}

function Accordion(props: AccordionPropsType) {
    // if (props.collapsed === true) {
    //     return <StyleTitle title={props.title}/>
    // } else {
        console.log("Style rendering")
        return <div>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            { !props.collapsed && <AccordionBody collapsed/>}
            {/*обходим if пишем ! прорс калапсет=== false отрисуй<StyleBody collapsed/>*/}
            {/*можно записать так { props.collapsed ===false && <StyleBody collapsed/>}*/}
        </div>

}

type AccordionTitle = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitle) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onClick()} className="StyleTitle1">-- {props.title} --</h3>;
}
type AccordionBodyPropsType = {
    collapsed: boolean
}
function AccordionBody(props:  AccordionBodyPropsType  ) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;