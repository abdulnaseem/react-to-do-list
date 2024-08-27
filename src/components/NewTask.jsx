import { useState } from "react";


const NewTask = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(event.target.value);
    }

    const handleClick = () => {
        if(text.trim() === '') {
            return;
        }
        onAdd(text);
        setText('');
    }

    return (
        <div>
            <input type="text" name="" id="" onChange={handleChange} value={text} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default NewTask;