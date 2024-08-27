import { useState } from "react";


const EditTask = ({ id, onEditSaveTask, onCancel }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleClick = () => {
        if(text.trim() === '') {
            return;
        }
        onEditSaveTask(id, text);
        setText('');
        onCancel();
    }

    return (
        // <div className="mt-2 row">
        //     <input className="col form-control form-control-sm input-sm" type="text" value={text} onChange={handleChange} />
        //     <button className="col btn btn-success mt-2 ms-1 me-1" onClick={handleClick} >Save</button>
        //     <button className="col btn btn-outline-secondary mt-2" onClick={onCancel} >Cancel</button>
        // </div>
        <div class="input-group mt-3">
            <input type="text" class="form-control" value={text} onChange={handleChange} />
            <button class="btn btn-success" type="button" onClick={handleClick}>Save</button>
            <button class="btn btn-outline-secondary" type="button" onClick={onCancel}>Cancel</button>
        </div>
    )


}

export default EditTask;