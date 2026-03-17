import {
  second_background,
  rails,
  card
} from "../../../app/images";

import "./index.css";

export const Impery_way = () => {

  return (
    <section className='impery_way' style={{ backgroundImage: `url(${second_background})` }}>
      <p className="impery_way_title">ПУТЬ ИМПЕРИИ</p>
      <img src={rails} alt="" className='impery_way_picture' />
      <ul className="impery_way_card_wrapper">
        <li className='card' style={{ backgroundImage: `url(${second_background})` }}>
          <div className='card_year first_year'>1837 г.</div>
          <h3 className='card_title'>Открытие первой железной дороги в России</h3>
          <p className='card_text'>Запущена линия
            <span className="spec__color"> Санкт-Петербург - Царское Село,</span>  ставшая первой общественной железной дорогой в империи и показавшей перспективность нового вида транспорта</p>
        </li>
        <li className='card_spec'>
          <img src={card} alt="" />
        </li>
        <li className='card' style={{ backgroundImage: `url(${second_background})` }}>
          <div className='card_year second_year'>1860-1870 г.</div>
          <h3 className='card_title'>Массовое железнодорожное строительство</h3>
          <p className='card_text'>Государство и частный капитал активно инвестирует строительство дорог, формируется разветвлённая сеть, связывающая центральные районы с промышленными и сырьевыми регионами</p>
        </li>
        <li className='card' style={{ backgroundImage: `url(${second_background})` }}>
          <div className='card_year third_year'>1891 г.</div>
          <h3 className='card_title'>Начало строительства Транссибирской магистрали</h3>
          <p className='card_text'>Старт крупнейшего инфраструктурного проекта империи, целью которого было соединение европейской части России и Дальним Востоком</p>
        </li>
        <li className='card' style={{ backgroundImage: `url(${second_background})` }}>
          <div className='card_year fourth_year'>1905 г.</div>
          <h3 className='card_title'>Завершение сквозного движения по Транссибирской магистрали</h3>
          <p className='card_text'>Обеспечено непрерывное железнодорожное сообщение от европейской России до Тихого океана, что ускорило экономическое развитие и заселение восточных территорий</p>
        </li>

      </ul>


    </section >
  );
}