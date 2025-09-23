import React, { useState } from "react";
import s from "./TripsBlock.module.scss";
import { Button } from "../Button/Index";
import { t } from "i18next";
import { addTrip, removeTrip } from "../../store/slices/trip.slice";
import { useDispatch, useSelector } from "react-redux";
import { TripsState } from "../../Types";
import { Link } from "react-router-dom";
import cn from "classnames";
//этот бок добавляет карточку путешествия по принципу заметки, нужно сделать подробную страницу поездки с добавлением заметок о ней

const TripsBlock = () => {
  const [trip, setTrip] = useState({
    city: "",
    date: "",
    hotel: "",
    id: Date.now(),
  });

  const dispatch = useDispatch();
  const { Trips } = useSelector((state: TripsState) => state);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(Trips);
    setTrip({
      city: "",
      date: "",
      hotel: "",
      id: Date.now(),
    });
  };

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    dispatch(addTrip(trip));
    setModal(!modal);
  };

  return (
    <div className={s.container}>
      <div>
        <Button title={t("addTrip")} click={showModal}></Button>
      </div>
      <div className={cn(modal ? s.modal : s.block)}>
        <form className={s.form} onSubmit={handleSubmit}>
          <h2 className={s.title}>{t("infoTrip")}</h2>
          <label className={s.label}>
            {t("city")}
            <input
              className={s.input}
              type="text"
              placeholder={t("city")}
              onChange={(e) => setTrip({ ...trip, city: e.target.value })}
              value={trip.city}
            />
          </label>
          <label className={s.label}>
            {t("date")}
            <input
              className={s.input}
              type="text"
              placeholder={t("date")}
              onChange={(e) => setTrip({ ...trip, date: e.target.value })}
              value={trip.date}
            />
          </label>
          <label className={s.label}>
            {t("hotel")}
            <input
              className={s.input}
              type="text"
              placeholder={t("hotel")}
              onChange={(e) => setTrip({ ...trip, hotel: e.target.value })}
              value={trip.hotel}
            />
          </label>
          <Button type="submit" title={t("send")} click={closeModal} />
        </form>
      </div>
      <div className={s.trip}>
        {Trips.map((item, index) => (
          <div key={index} className={s.miniTrip}>
            <div className={s.item}>
              <h3>{t("city")}:</h3>
              <p>{item.city}</p>
            </div>
            <div className={s.item}>
              <h3>{t("date")}:</h3>
              <p>{item.date}</p>
            </div>
            <div className={s.item}>
              <h3>{t("hotel")}:</h3>
              <p>{item.hotel}</p>
            </div>
            <div className={s.button}>
              <Link to="/bigtrip">{t("fullPage")}</Link>
              <Button
                title={t("remove")}
                click={() => dispatch(removeTrip(item))}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TripsBlock };
