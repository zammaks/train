import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  second_background,
  mail_wrapper,
  key,
  print,
  books
} from "../../../app/images";

import "./index.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Минимум 2 символа")
    .required("Введите имя"),

  contact: Yup.string()
    .required("Введите телефон или email")
    .test(
      "is-valid-contact",
      "Введите корректный email или телефон",
      (value) => {
        if (!value) return false;

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        const phoneRegex = /^[0-9]{7,}$/;

        return emailRegex.test(value) || phoneRegex.test(value);
      }
    ),


  message: Yup.string()
    .min(5, "Минимум 5 символов")
    .required("Введите сообщение"),

  consent: Yup.boolean()
    .oneOf([true], "Необходимо согласие"),
});

export const Contact = () => {
  return (
    <section
      id="contact"
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

      <img src={key} alt="" className="key__picture" />
      <img src={mail_wrapper} alt="" className="mail__picture" />
      <img src={print} alt="" className="print__picture" />

      <Formik
        initialValues={{
          name: "",
          contact: "",
          message: "",
          consent: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="mail__form">
            <div className="mail__input__wrapper">
              <Field
                type="text"
                name="name"
                placeholder="Ваше имя"
                className="mail__input"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="mail__input__wrapper">
              <Field
                type="text"
                name="contact"
                placeholder="Телефон или e-mail"
                className="mail__input"
              />
              <ErrorMessage name="contact" component="div" className="error" />
            </div>

            <div className="mail__input__wrapper">
              <Field
                type="text"
                name="message"
                placeholder="Сообщение"
                className="mail__input"
              />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <div>
              <label className="custom__checkbox">
                <Field
                  type="checkbox"
                  name="consent"
                  className="checkbox__input"
                />
                <span>
                  Даю согласие на обработку{" "}
                  <span className="spec__color">
                    персональных данных
                  </span>
                </span>
              </label>
              <ErrorMessage name="consent" component="div" className="error" />
            </div>

            <button type="submit" className="mail__button">
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};