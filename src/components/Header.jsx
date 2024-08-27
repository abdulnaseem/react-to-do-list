import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import logo from '../assets/images/essay.png';


const Header = ({ filter }) => {
    const [selectedValue, setSelectedValue] = useState('all');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        filter(event.target.value);
    }

    console.log(selectedValue);

    return (
        <div className='title'>

            <img src={logo} className='logo' /> <br/>
            <span>My To Do List</span>

            <Form.Select 
                className="drop-down mt-3" 
                aria-label="Default select example"
                value={selectedValue}
                onChange={handleChange}
            >
                <option value="all">All</option>
                <option value="to-do">To Do</option>
                <option value="completed">Completed</option>
            </Form.Select>

        </div>
    )
}

export default Header;