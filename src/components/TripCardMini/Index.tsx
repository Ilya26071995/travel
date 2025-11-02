import { useState } from "react";
import s from "./TripCardMini.module.scss";
import { MiniTripType, ThemeState } from "../../Types";
import { t } from "i18next";
import { removeTrip } from "../../store/slices/trip.slice";
import { Button } from "../Button/Index";
import { useDispatch, useSelector } from "react-redux";
import { TripCard } from "../TripCard/Index";

const TripCardMini = ({ item }: MiniTripType) => {
  const dispatch = useDispatch();
  const [fullTrip, setFullTrip] = useState(false);
  const { Theme } = useSelector((state: ThemeState) => state);
  const showFullTrip = () => {
    setFullTrip(!fullTrip);
  };
  return (
    <div className={!Theme.type ? s.containerDark : s.container}>
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
        <Button title={t("fullPage")} click={showFullTrip} />
        <Button title={t("remove")} click={() => dispatch(removeTrip(item))} />
      </div>
      {fullTrip ? (
        <div className={s.modal}>
          <TripCard object={item} close={showFullTrip} />
        </div>
      ) : undefined}
    </div>
  );
};

export { TripCardMini };
