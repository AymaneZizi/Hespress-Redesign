import React, { useState } from 'react'
import Sep from 'components/Sep'
import SelectCountries from './SelectCountries'
import Axios from 'axios';



export default function ArticleInformations(props) {
    const { img, onChange, handleChangeImage, handleRemoveImage, country } = props;
    return (
        <div>
            <div className='article-informations'>
                <h3>معلومات المقال</h3>

                <Sep color='grey' />

                <div className="input img-input">
                    <input type='file' value={img ? '' : ''} id="file" onChange={handleChangeImage} accept="image/*"></input>
                    <div>
                        <label htmlFor="file">اختر صورة </label>
                        {img && <button onClick={handleRemoveImage}><span className="mbri-trash"></span></button>}
                    </div>
                    <img src={img} alt="" />
                </div>

                <div className='input'>
                    <SelectCountries onChange={onChange} name="country" />
                    <span className="mbri-arrow-down"></span>
                </div>

                <div className="input">
                    <input style={{ paddingLeft: 30 }} type="date" name="date" onChange={onChange} value={country} placeholder='تاريخ النشر' />
                    <span className="mbri-calendar"></span>
                </div>

                <Input title='التصنيف' placeholder='اضف تصنيفا' name='category' DataSrc='/api/categories/' />

                <Input title='شخصيات دات علاقة' placeholder='أضف شخصية جديدة' name='personalities' />

            </div>
        </div>
    )
}

const Input = (props) => {
    let { title, placeholder, name, DataSrc } = props;

    const [Suggestions, setSuggestions] = useState([]);
    const [Selected, setSelected] = useState([])
    const [value, setValue] = useState(props.value);
    const [message, setMessage] = useState('')

    const onChange = (e) => {
        const value = setValue(e.target.value);
        Axios.get(DataSrc + value)
            .then(res => setSuggestions(res.data))
            .catch(err => setMessage(err.response))
    }

    const handleSelect = (e) => {
        setSelected([...Selected, e.target.text])
    }


    return (
        <div className="input-group">
            <h5>{title}</h5>
            <div className='input'><input type='text' placeholder={placeholder} onChange={onChange} name={name} value={value} /><span className="mbri-plus" /></div>
            {
                Suggestions.map(e => <p onClick={handleSelect} key={e.id}>{e.name}</p>)
            }
        </div>
    )
}


