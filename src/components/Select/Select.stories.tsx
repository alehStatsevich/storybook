import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select"


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () =>{
    const [value,setValue]= useState('3')
   return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Warszawa'},
                    {value: '3', title: 'Kiev'},
                ]}/>

    </>}