import React, {useState} from "react";

type UncontrolledStylePropsType = {
    title: string
   // collapsed: boolean удалить
}

function UncontrolledAccordion(props: UncontrolledStylePropsType ) {
    // if (props.collapsed === true) {
    //     return <StyleTitle title={props.title}/>
    // } else {
    let [collapsed, setCollapsed] = useState(false);
        console.log("Style rendering")
        return <div>
            <StyleTitle title={props.title}  onClick={() => { setCollapsed(!collapsed)}}/>
            {/*вешаем онклик на h3*/}
            {/*<button onClick={() => { setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {/* в стейте collapsed стоит лож .при клике функция возращает новую переменную*/}
            {/*setCollapsed с противоположным значением collapsed */}
            { !collapsed && <StyleBody collapsed/>}
            {/*обходим if пишем !  калапсет=== false отрисуй<StyleBody collapsed/>*/}
            {/*можно записать так { const collapsed ===false && <StyleBody collapsed/>}*/}
        </div>

}

type StyleTitle = {
    title: string
    onClick: () => void
}

function StyleTitle(props: StyleTitle) {
    console.log("StyleTitle rendering")
    return <h3 className="StyleTitle"  onClick={() => { props.onClick()}}>{props.title}</h3>;
}
type StyleBodyPropsType = {
    collapsed: boolean
}
function StyleBody(props: StyleBodyPropsType  ) {
    console.log("StyleBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default  UncontrolledAccordion;