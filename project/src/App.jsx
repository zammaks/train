import React from 'react';
import './EmpireRailways.css';

const EmpireRailways = () => {
  return (
    <div className="empire-wrapper">
      {/* ====================== NAVBAR ====================== */}
      <nav className="navbar">
        {/* Поиск */}
        <div className="search-bar">

          <input
            type="text"
            className="search-input"
          />
          <img
            src="/src/pictures/Group 1000003052.svg"
            alt="Поиск"
            className="search-icon-right"
          />
        </div>

        {/* Навигация */}
        <div className="nav-capsule">
          <a href="#" className="nav-item">Главная</a>
          <a href="#" className="nav-item active">О проекте</a>
          <a href="#" className="nav-item">Помощь</a>
          <a href="#" className="nav-item">Связаться с нами</a>
        </div>
      </nav>

      {/* ====================== HERO ====================== */}
      <section className="hero">
        <div className="quote-box">
          <img
            src="/src/pictures/Group 1000003027.svg"  
            alt="Кавычки"
            className="quote-icon"
          />
          «Путь империи: от первых составов до трансконтинентальных магистралей. Вы строите не дороги, а новую Россию».
        </div>
        <div className="hero-content">
          <img src="/src/pictures/historical pictures.png" alt="" className="historical-picture" />
          <img src="/src/pictures/Railways of the Russian Empire.png" alt="" className="text-picture" />
          <img src="/src/pictures/a train.png" alt="" className="train-picture" />
          <img src="/src/pictures/Assistant Window.png" alt="" className="assistant-window-picture" />
          <img src="/src/pictures/Assistant.png" alt="" className="assistant-picture" />
          <img src="/src/pictures/Watch.png" alt="" className="watch-picture" />
          <img src="/src/pictures/Vector 1057.png" alt="" className="input-picture" />
          <div className="hero-buttons">
            <button className="btn primary">Начать путешествие</button>
            <button className="btn secondary">О проекте</button>
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

        {/* Поезд */}
      </section>
      <section className='about_project'>
        <div className="about-project-wrapper">
          <img src="/src/pictures/wrapp.png" alt="" className='wrapper-name-picture'/>
          <p className='wrapper-name-title'>О ПРОЕКТЕ</p>

        </div>

      </section>

      {/* ====================== НИЖНЯЯ СЕКЦИЯ ====================== */}


      {/* ====================== РВАНЫЙ ФУТЕР ====================== */}
    </div>
  );
};

export default EmpireRailways;