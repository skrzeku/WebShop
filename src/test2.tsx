import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {State} from "./store/rootReducer";

interface IMessageProps {
    defeultTimes: number
}

interface IMessageState {
    times: number
}




const Test3 = ({text}: {text:string})=> {

    //React fragment Shorten
return(<>{text}</>)
}





class Test4 extends React.Component<IMessageProps, IMessageState> {

    constructor(props: IMessageProps) {
        super(props);
    }

    static defaultProps = {
        defaultTimes: 3,
    };


    readonly state: IMessageState = {
        times: 0
}
    render(): React.ReactNode {
        return (
            <div><h1>Hi</h1>
            <button onClick={()=> this.setState(({times}) => ({times: times + 1}))}>I need more love   {this.state.times}</button>

            </div>

        )
    }


}


const Test2:FC = ()=> {

    const lol = useSelector((state: State) => state.products);
    console.log(lol);
    return(<div><Test3 text={'siema'}/>
    <Test4 defeultTimes={0}/></div>)
}





export default Test2;