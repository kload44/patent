import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ConsultingForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form method="post" className="contact-validation-active" id="contact-form-main" onSubmit={(e) => submitHandler(e)}>
            <div className="form-field">
                <input
                    value={forms.name}
                    type="text"
                    name="name"
                    className="form-control"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Name*" />
                {validator.message('name', forms.name, 'required|alpha_space')}
            </div>
            <div className="form-field">
                <input
                    value={forms.email}
                    type="email"
                    name="email"
                    className='form-control'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Email*" />
                {validator.message('email', forms.email, 'required|email')}
            </div>
            <div className="form-field">
                <input
                    value={forms.phone}
                    type="phone"
                    name="phone"
                    className='form-control'
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Your phone" />
                {validator.message('phone', forms.phone, 'required|phone')}
            </div>
            <div className="form-field">
                <select
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.subject}
                    type="text"
                    className='form-control'
                    name="subject">
                    <option disabled="disabled">Contact subject</option>
                    <option>Family Law</option>
                    <option>Personal Injury</option>
                    <option>Criminal Law</option>
                    <option>Education Law</option>
                    <option>Business Law</option>
                </select>
                {validator.message('subject', forms.subject, 'required')}
            </div>
            <div className="form-field fullwidth">
                <textarea
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                    value={forms.message}
                    type="text"
                    name="message"
                    className='form-control'
                    placeholder="Case Description...">
                </textarea>
                {validator.message('message', forms.message, 'required')}
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn-s3">Submit It Now</button>
            </div>
        </form>
    )
}

export default ConsultingForm;