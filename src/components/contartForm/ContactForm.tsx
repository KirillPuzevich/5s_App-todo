import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';  // Стили для формы

export const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    console.log("Сообщение с формы:", JSON.stringify(formData));

    alert("Сообщение успешно отправлено!");

    navigate('/');

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact__form">
      <h2 className="contact__form-title">Форма обратной связи</h2>
      <form onSubmit={handleSubmit} className="contact__form-form">
        <div className="contact__form-field">
          <label htmlFor="name" className="contact__form-label">Имя</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="contact__form-input"
            placeholder="Введите ваше ФИО"
            required
          />
        </div>

        <div className="contact__form-field">
          <label htmlFor="email" className="contact__form-label">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="contact__form-input"
            placeholder="Введите свою почту"
            required
          />
        </div>

        <div className="contact__form-field">
          <label htmlFor="message" className="contact__form-label">Сообщение</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="contact__form-textarea"
            placeholder="Введите сообщение"
            required
          />
        </div>

        <button type="submit" className="contact__form-button">Отправить</button>
      </form>
    </section>
  );
};