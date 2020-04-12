import React, { Component } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }

    sendEmail = (e) => {
        e.preventDefault();
        const { name, email, message } = this.state

        let templateParams = {
            from_name: name, 
            to_name: email,
            message_html: message,
        }
        console.log(name)
        console.log(email)
        console.log(message)
        emailjs.send('gmail', 'profile_template', templateParams, 'user_EvDSCV5c0YpwSjKoPcYon')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
        this.resetForm()
      }

      resetForm() {
          this.setState({
              name: '',
              email: '',
              message: '',
          })
      }

      handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
    
    render() {
        return (
            <div className="form_controls">
                <h2 className="contact_header">Get in Touch!</h2>
                <form className="contact-form" onSubmit={this.sendEmail.bind(this)}>
                    <input className="input_form" type="hidden" name="contact_number" />
                    <label className="label_form">Name:</label>
                    <input className="input_form" type="text" onChange={this.handleChange.bind(this, 'name')} name="user_name" value={this.state.name} />
                    <label className="label_form">Email:</label>
                    <input className="input_form" type="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} name="user_email" />
                    <label className="label_form">Message:</label>
                    <textarea className="text_area" name="message" value={this.state.message} onChange={this.handleChange.bind(this, 'message')}></textarea>
                    <input className="send_button" type="submit" value="Send" />
                </form>
                <ul className="contact_list">
                    <div className="">
                        <li><FontAwesomeIcon size="2x" icon={['fab', 'github']} ></FontAwesomeIcon></li>
                        <span>GitHub</span>
                    </div>
                    <div>
                        <li><FontAwesomeIcon size="2x" icon={['fab', "linkedin-in"]}></FontAwesomeIcon></li>
                        <span>Linkedin</span>
                    </div>
                    <div>
                        <li><FontAwesomeIcon size="2x" icon="envelope-open-text" ></FontAwesomeIcon></li>
                        <span>Email</span>
                    </div>
                </ul>
            </div>
        )
    }
}
