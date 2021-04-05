import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import OnOff  from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action('on or off clicked')

// @ts-ignore
export const OnMode = ()=> <OnOff on={true} onChange={callback}/>;
// @ts-ignore
export const OffMode = ()=> <OnOff on={false} onChange={callback}/>;

export const ModeChanging = ()=> {
const [value, setValue]= useState<boolean>(true)
// @ts-ignore
    return <OnOff on={value} onChange={setValue}/>
};


