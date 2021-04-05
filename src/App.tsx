import React, {useState} from 'react';
import './App.css';

import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontroledRating";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0) //для  <StarControl value={starValue}
    // onClick={setStarValue}/>, <StarControlValueType > тип хранит 1|2|3|4|5
     let [collapsed, setCollapsed] = useState<boolean>(false);
    console.log("App rendering")
    return (
        <div className="App">
            {/*<PageTitle title="Hello"/>*/}
            {/*<PageTitle title="Hello friend"/>*/}
            < UncontrolledAccordion title={"MENU"}/>
            <Accordion title={"menu"} collapsed={collapsed}  onClick={() => {setCollapsed(!collapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <OnOff/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitle  rendering")
    return <h1>{props.title}</h1>
}

export default App;
