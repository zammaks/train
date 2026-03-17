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
        <img src={books} alt="" className="book__picture" />
        <div className="book__text__board">
          <p className="book__">The story begins with you</p>
        </div>
        <p className="book__year">1837</p>
      </div>

      <div className="contact__title">
        ХОТИТЕ УЗНАТЬ БОЛЬШЕ? НАПИШИТЕ НАМ!
      </div>

      <img src={key} alt="" className="key__picture"/>
      <img src={mail_wrapper} alt="" className="mail__picture" />
      <img src={print} alt="" className="print__picture" />


      <form onSubmit={handleSubmit} className="mail__form">
        <div>
          {/* <label>Ваше имя</label> */}
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="mail__input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* <label>Телефон или e-mail</label> */}
          <input
            type="text"
            name="contact"
            placeholder="Телефон или e-mail"
            className="mail__input"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div>
          {/* <label>Сообщение</label> */}
          <input
            type="text"
            name="message"
            placeholder="Сообщение"
            className="mail__input"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="consent"
              // className="mail__input"
              checked={formData.consent}
              onChange={handleChange}
            />
            Даю согласие на обработку <span className="spec__color">персональных данных</span>
          </label>
        </div>

        <button type="submit" className="mail__button">Отправить</button>
      </form>
    </section>
  );
};