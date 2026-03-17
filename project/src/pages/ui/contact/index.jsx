import React, { useState } from "react";

import {
  second_background,
  mail_wrapper,
  key,
  print,
  books
} from "../../../app/images";

import "./index.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="contact"
      style={{ backgroundImage: `url(${second_background})` }}
    >
      <div className="book__wrapper">
        <img src={books} alt="" className="book__image" />
        <div className="book__text__board">
          <p className="book__">The story begins with you</p>
        </div>
        <p className="book__year">1837</p>
      </div>

      <div className="contact__title">
        ХОТИТЕ УЗНАТЬ БОЛЬШЕ? НАПИШИТЕ НАМ!
      </div>

      <img src={key} alt="" />
      <img src={mail_wrapper} alt="" />
      <img src={print} alt="" />


      <form onSubmit={handleSubmit} className="mail__form">
        <div>
          <label>Ваше имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Телефон или e-mail</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Сообщение</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            Даю согласие на обработку персональных данных
          </label>
        </div>

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};