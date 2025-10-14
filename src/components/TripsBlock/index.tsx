import { useState } from "react";
import s from "./TripsBlock.module.scss";
import { Button } from "../Button/Index";
import { t } from "i18next";
import { addTrip } from "../../store/slices/trip.slice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeState, TripsState } from "../../Types";
import { TripCardMini } from "../TripCardMini/Index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TripSchema } from "../../validation";

const TripsBlock = () => {
  const [trip, setTrip] = useState({
    city: "",
    date: "",
    hotel: "",
    id: Date.now(),
  });

  const dispatch = useDispatch();
  const { Trips } = useSelector((state: TripsState) => state);
  const { Theme } = useSelector((state: ThemeState) => state);

  const onSubmit = () => {
    dispatch(addTrip(trip));
    setModal(!modal);

    reset();
  };

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(TripSchema),
  });

  return (
    <div className={Theme.type ? s.container : s.containerDark}>
      <div>
        <Button title={t("addTrip")} click={showModal}></Button>
      </div>
      <div className={modal ? s.modal : s.block}>
        <form
          className={Theme.type ? s.form : s.formDark}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={s.title}>{t("infoTrip")}</h2>
          <label className={s.label}>
            {t("city")}
            <input
              {...register("city")}
              className={Theme.type ? s.input : s.inputDark}
              type="text"
              placeholder={t("city")}
              onChange={(e) => setTrip({ ...trip, city: e.target.value })}
              value={trip.city}
            />
            <p className={s.error}>{errors.city?.message}</p>
          </label>
          <label className={s.label}>
            {t("date")}
            <input
              {...register("date")}
              className={Theme.type ? s.input : s.inputDark}
              type="text"
              placeholder={t("date")}
              onChange={(e) => setTrip({ ...trip, date: e.target.value })}
              value={trip.date}
            />
            <p className={s.error}>{errors.date?.message}</p>
          </label>
          <label className={s.label}>
            {t("hotel")}
            <input
              {...register("hotel")}
              className={Theme.type ? s.input : s.inputDark}
              type="text"
              placeholder={t("hotel")}
              onChange={(e) => setTrip({ ...trip, hotel: e.target.value })}
              value={trip.hotel}
            />
            <p className={s.error}>{errors.hotel?.message}</p>
          </label>

          <input
            type="submit"
            value={t("send")}
            className={!Theme.type ? s.buttonDark : s.button}
          />
          <Button
            type="submit"
            title={t("close")}
            click={() => setModal(!modal)}
          />
        </form>
      </div>
      <div className={s.trip}>
        {Trips.map((item, index) => (
          <div key={index} className={Theme.type ? s.miniTrip : s.miniTripDark}>
            <TripCardMini item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TripsBlock };
