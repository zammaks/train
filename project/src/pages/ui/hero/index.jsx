import {
  quote,
  clock,
  message_input,
  train_driver,
  title_picture,
  train_driver_window,
  train,
  tree_train_photo,
  first_background
} from "../../../app/images";



import "./index.css";

export const Hero = () => {

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${first_background})` }}>
      <div className="quote-box">
        <img
          src={quote}
          alt="Кавычки"
          className="quote-icon"
        />
        «Путь империи: от первых составов до трансконтинентальных магистралей. Вы строите не дороги, а новую Россию».
      </div>
      <div className="hero-content">
        <img src={tree_train_photo} alt="" className="historical-picture" />
        <img src={title_picture} alt="" className="text-picture" />
        <img src={train} alt="" className="train-picture" />
        <img src={train_driver_window} alt="" className="assistant-window-picture" />
        <img src={train_driver} alt="" className="assistant-picture" />
        <img src={clock} alt="" className="watch-picture" />
        <img src={message_input} alt="" className="input-picture" />
        <div className="hero-buttons">
          <a href="#impery_way" className="btn primary" >Начать путешествие</a>
          <a href="#about_project" className="btn secondary">О проекте</a>
        </div>
        <form className="message-form">
          <input
            type="text"
            placeholder="Напишите сообщение..."
            className="message-input"
            name="message"
          />
          <button type="submit" className="send-button">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}