import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      trips: "Trips",
      reservations: "Reservations",
      notes: "Notes",
      profile: "Profile",
      settings: "Settings",
      login: "Login",
      about: "Wherever you go, we will take you there",
      aboutUs: "about us",
      questions: "questions",
      partners: "partners",
      holiday: "Let’s make your next holiday amazing",
      routes:
        "Choose your favorite countries and cities, create routes, at any convenient time",
      chukotka:
        "Chukotka! She either doesn't accept or doesn't let go. We (we traveled as a family) were lucky; Chukotka settled in our hearts forever!  To say that everyone definitely needs it - no, I won’t say it. Chukotka is not for everyone, that's for sure. To understand this region, you need strong nerves, calmness, only positivity at the construction site and joy throughout the world.",
      ben: "Ben",
      igor: "Igor",
      sergey: "Sergey",
      kamchatka:
        "Just returned from a trip yesterday. A very interesting tour. Kamchatka is extraordinary. We weren’t always lucky with the weather, but it didn’t upset us; we saw everything that was planned. Everything was excellent, all locations, transport, support at the highest level. The hotel is good, it has everything you need for a vacation. We already miss the volcanoes and will be planning our next visits!",
      khibiny:
        "The Khibiny mountains don’t let go... it’s been three weeks since we returned, and part of me is still there, in the mountains, in the land of the never-setting sun, the crazy beauty of nature, where you start the day with the anticipation of new miracles, and end with a feeling of complete happiness.",
      addNote: "Add note",
      title: "title",
      text: "text",
      remove: "Remove",
      name: "Name:",
      age: "Age:",
      city: "City",
      yourself: "Tell us about yourself",
      Yname: "Your name",
      Yage: "Your age",
      Ycity: "Your city",
      information: "Information about you",
      send: "Send",
      Ymail: "Your mail",
      Ylogin: "Your login",
      exit: "Exit",
      authorization: "Authorization",
      change: "Change",
      changeLang: "Change language",
      changeTheme: "Change theme",
      infoTrip: "Trip information",
      date: "Date",
      hotel: "Hotel",
      fullPage: "Full page",
      addTrip: "Add trip",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      trips: "Путешествия",
      reservations: "Бронирование",
      notes: "Заметки",
      profile: "Профиль",
      settings: "Настройки",
      login: "Личный кабинет",
      about: "Куда бы вы ни пошли, мы отвезем вас туда",
      aboutUs: "о нас",
      questions: "вопросы",
      partners: "партнеры",
      holiday: "Давайте сделаем ваш следующий отпуск потрясающим",
      routes:
        "Выбирайте любимые страны и города, создавайте маршруты в любую удобное время",
      chukotka:
        "Чукотка! Она либо не принимает, либо не отпускает. Нам (мы путешествовали всей семьей) повезло; Чукотка навсегда поселилась в наших сердцах!  Сказать, что это обязательно нужно всем – нет, не скажу. Чукотка не для всех, это точно. Чтобы понять этот регион, нужны крепкие нервы, спокойствие, только позитив на стройке и радость во всем мире.",
      ben: "Бэн",
      igor: "Игорь",
      sergey: "Сергей",
      kamchatka:
        "Только вчера вернулся из поездки. Очень интересный тур. Камчатка необыкновенна. С погодой нам не всегда везло, но это нас не расстраивало; мы увидели все, что было запланировано. Все было отлично, все локации, транспорт, поддержка на высшем уровне. Отель хороший, в нем есть все необходимое для отдыха. Мы уже скучаем по вулканам и будем планировать следующие визиты!",
      khibiny:
        "Хибинские горы не отпускают... прошло уже три недели, как мы вернулись, а часть меня все еще там, в горах, в стране никогда не заходящего солнца, сумасшедшей красоты природы, где день начинаешь с предвкушения новых чудес, а заканчиваешь ощущением полного счастья.",
      addNote: "Добавить заметку",
      title: "название",
      text: "текст",
      remove: "удалить",
      name: "имя",
      age: "возраст",
      city: "город",
      yourself: "Расскажите нам о себе:",
      Yname: "Ваше имя",
      Yage: "Ваш возраст",
      Ycity: "Ваш город",
      information: "Информация о вас",
      send: "Отправить",
      Ymail: "Ваша почта",
      Ylogin: "Ваш логин",
      exit: "Выход",
      authorization: "Авторизация",
      change: "Изменить",
      changeLang: "Изменить язык",
      changeTheme: "Изменить тему",
      infoTrip: "Информация о поездке",
      date: "Дата",
      hotel: "Отель",
      fullPage: "Полная страница",
      addTrip: "Добавить поездку",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
