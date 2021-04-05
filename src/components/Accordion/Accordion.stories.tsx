import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const onClickCallback = action("some item was clicked");

const Template:Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallback,
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args= {
    title:'Menu',
    collapsed: true,
    items:[],
   ...callbacksProps
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args= {
    title:'Menu',
    collapsed: true,
    items: [{title: "dima",value: 1},{title: "valera",value: 2},
{title: "artem",value: 3},{title: "viktor",value: 4}],
    ...callbacksProps
}

// export const MenuCollapsedMode = ()=> <Accordion title={'Menu'} collapsed={true} onChange={callback}
//                                                 items={[]} onClick={onClickCallback} />;
// export const UsersUncollapsedMode = ()=> <Accordion title={'Users'} collapsed={false} onChange={callback}
//                                                    items={[{title: "dima",value: 1},{title: "valera",value: 2},
//                                                        {title: "artem",value: 3},{title: "viktor",value: 4}]}
//                                                     onClick={onClickCallback}/>;

export const ModeChanging = ()=> {
const [value, setValue]= useState<boolean>(true)

    return <Accordion title={'Users'} collapsed={value} onChange={() => setValue(!value)}
                      items={[
                          {title: "dima",value: 1},
                          {title: "valera",value: 2},
                          {title: "artem",value: 3},
                          {title: "viktor",value: 4}]}
                      onClick={(value:any) => {alert(1)}}/>
};


