import React from "react";

export type RatingValueType =  0|1|2|3|4|5;
type RatingPropsType = {
   value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Rating (props: RatingPropsType ) {
    console.log("StarStyle rendering")
    // if (props.value === 1) {

        return <div>
            <Star selected= {props.value > 0} onClick={props.onClick}  value={1}/>
            {/*пробрасываем пропсы  onClick={props.onClick} в function Star */}
            {/*передаем через пропсы value из арр и if не нужен т.к это тоже*/}
            <Star selected={props.value > 1} onClick={props.onClick}  value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick}  value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick}  value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick}  value={5}/>
        </div>
    }
//     if (props.value === 2) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 3) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 4) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={false}/>
//         </div>
//     }
//     if (props.value === 5) {
//         return <div>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//             <Star selected={true}/>
//         </div>
//     }
//
//     return <div>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//         <Star selected={false}/>
//     </div>
// }
type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
function Star(props: StarPropsType) {
    console.log("Star rendering")
    return  <span className="Star" onClick={() =>{props.onClick(props.value)}}>
        { props.selected === true ? <b  className="selectStar"> star </b>:" STAR " }</span>
}
    // if(props.selected === true) { не нужен используем тернарный оператор
    // return<span className="selectStar"> <b>star</b></span>
    // }else {
    //     return <span className="Star"> STAR</span>
    // }
export default Rating;