import React, {ReactElement, useState} from 'react';

type OptionValue = string | number;

interface IOption<T extends OptionValue> {
    value: T,
    label: string
}


interface IProps<T extends OptionValue> {
    options: IOption<T>[];
    value: T;
    onChange:(value: T) => void;
}


function Select<T extends OptionValue>(props: IProps<T>) {

    function updateValue(e: React.FormEvent<HTMLSelectElement>) {
        const {selectedIndex} = e.currentTarget;
        const selectedOption = props.options[selectedIndex];

        props.onChange(selectedOption.value);
    }

    return(
        <select value={props.value} onChange={updateValue}>
            {props.options.map(({value, label}) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))};
        </select>
    )

}



const Form = () => {

    const options = [
        {
            value: 'react', label: 'React'
        },
        {
            value: 'angular', label: "Angular"
        },
        {
            value: 'vue', label: 'Vue'
        },
        {
            value: 'svelte', label: 'Svelte'
        }
    ];


    const [option, setOption] = useState('react');

    return(
        <div>
        <Select options={options} value={option} onChange={setOption}></Select>
        </div>
    )
}





function Lol():ReactElement {
    return (
        <div>

            </div>
            )
}


export default Lol;