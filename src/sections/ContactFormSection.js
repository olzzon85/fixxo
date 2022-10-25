import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name: '',email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"
        else if(values.name.length < 2)
            errors.name = "Your name must be atlest two characters"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be atlest five characters"


        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)

        return errors;

    }

    const handleChange = (e) => {
        const {id, value} =e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }



    return (
        <section className="contact-form">
            <div className="container">
                {
                    submitted ? 
                    (<div className="d-flex justify-content-center align-items-center">
                        <div>Thank you for your comment!</div>
                    </div>)
                    :
                    (
                        <>
                            <h2>Come in Contact with Us</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div>
                                    <input id="name" type="text" className="error" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.name}</div>
                                </div>
                                <div>
                                    <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.email}</div>
                                </div>
                                <div className="textarea">
                                    <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                                    <div className="errorMessage">{formErrors.comment}</div>
                                </div>
                                <div className="formBtn">
                                    <button title="submit" className="btn-theme">Post Comments</button>
                                </div>
                            </form>
                       </> 
                    )
                }
            </div>
        </section>
    )
}

export default ContactFormSection