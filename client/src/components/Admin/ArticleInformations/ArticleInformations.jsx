import React, { useState } from 'react'
import moment from 'moment'

import Sep from 'components/Sep'
import './ArticleInformations.css'
import InputMultipe from '../InputMultipe/InputMultipe';
import Input from '../../Input/Input'
import AddCategory from '../AddCategory/AddCategory'
import countries from 'countries'



export default function ArticleInformations(props) {
    const [showCategory, setShowCategory] = useState(false)

    const { img, onChange, handleChangeImage, handleRemoveImage, category, date, country } = props;



    return (
        <div className='article-informations'>
            <h3>معلومات المقال</h3>

            <Sep color='grey' />

            <div className="input img-input">
                <input type='file' id="file" onChange={handleChangeImage} accept="image/*"></input>
                <div>
                    <label htmlFor="file">اختر صورة </label>
                    {img && <button className='delete-img' onClick={handleRemoveImage}><span className="la la-trash"></span></button>}
                </div>
                <img src={img} alt="" />
            </div>

            <div className='input'>
                <select value={country} onChange={onChange} name="country"  >
                    <option defaultValue unselectable="true" >البلد</option>
                    {countries.map(e => <option key={e.code} value={e.code}>{e.emoji} {e.name_ar}</option>)}
                </select>
                <span className="la la-toggle-down"></span>
            </div>


            <Input className='input' type="date" style={{ paddingLeft: 30 }} name="date" icon="calendar" onChange={onChange} value={moment(date).format('YYYY-MM-DD')} placeholder='تاريخ النشر' />


            <InputMultipe title='التصنيف' placeholder='اضف تصنيفا' value={category} onChange={props.onChangeMultipe} name='category' DataSrc='/api/categories' />
            <button className="add" onClick={() => { setShowCategory(true) }}>أصف تصنيف جديد</button>

            {/* <InputMultipe title='شخصيات دات علاقة' placeholder='أضف شخصية جديدة' name='personalities' /> */}

            {showCategory && <AddCategory hide={() => setShowCategory(false)} />}

        </div>
    )
}




