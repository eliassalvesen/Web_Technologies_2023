import Label from "./Label";
import Square from "./Square";

export default function Card(props){
    const cStyle={
        width: '100px',
        height: '200px',
        padding: '0',
        margin: '10px',
        filter: 'drop-shadow(0px 0px 5px #666)'
    }

    return <div style={cStyle} onClick={() => props.clickHandler(props.cColor)}>

        <Square sColor={props.cColor} />
        <Label lColor={props.cColor}/>
    </div>
}