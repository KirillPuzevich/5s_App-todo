import React from "react";
import "./styles.scss";

export const HomePage = () => {
  return (
    <section className="home">
      <div className="container">
        <h1 className="home__title">Добро пожаловать в наше приложение!</h1>
        <p className="home__description">
          Управляйте задачами и отправляйте сообщения легко и быстро.
        </p>

        <div className="home__container">
          <div className="home__container-block">
            <h2 className="home__container-block_subtitle">
              Преимущества приложения:
            </h2>
            <ul className="home__container-block_benefits">
              <li className="home__container-block_item">
                Удобный интерфейс для управления задачами
              </li>
              <li className="home__container-block_item">
                Быстрая отправка сообщений
              </li>
              <li className="home__container-block_item">
                Доступность на различных устройствах
              </li>
            </ul>
          </div>

          <div className="home__container-block">
            <h2 className="home__container-block_subtitle">
              Отзывы пользователей:
            </h2>
            <blockquote className="home__container-block_comment">
              "Это приложение изменило мой подход к управлению задачами. Очень
              удобно!" - Анна
            </blockquote>
          </div>

          <div className="home__container-block">
            <h2 className="home__container-block_subtitle">
              Часто задаваемые вопросы:
            </h2>
            <p className="home__container-block_faq">
              <strong>Как я могу создать новую задачу?</strong>
              <br />
              Просто перейдите в раздел "Задачи" и нажмите кнопку "Добавить
              задачу".
            </p>
          </div>

          <div className="home__container-block">
            <h2 className="home__container-block_subtitle">
              Контактная информация:
            </h2>
            <p className="home__container-block_contact">
              Если у вас есть вопросы, свяжитесь с нами по адресу:{" "}
              <a href="mailto:puzevichk@mail.ru"> support@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
