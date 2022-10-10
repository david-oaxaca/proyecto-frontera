import React from 'react'
import '../../Assets/Styles/select.scss';
/** 
 *
 * THIS IS A CUSTOM SELECT FOR THE PROJECT 
 *  
 **/
const Select = (props) => {
    const data = props.options;
    return(
        <div className='select-wrapper'>
            <select onChange={e => props.handleChange(e.target.value)} class="form-select form-select-lg mb-3">
                {data.map((object) => (
                    <option value={object.name} >{object.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;