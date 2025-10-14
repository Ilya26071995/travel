import React from "react";
import { ThemeState, TripCardType } from "../../Types";
import { Button } from "../Button/Index";
import s from "./TripCard.module.scss";
import { NotesBlock } from "../NotesBlock/Index";
import { useSelector } from "react-redux";
import { t } from "i18next";

const TripCard = ({ object, close }: TripCardType) => {
  const { Theme } = useSelector((state: ThemeState) => state);

  return (
    <div className={s.bigContainer}>
      <div className={!Theme.type ? s.modalDark : s.modal}>
        <div className={!Theme.type ? s.containerDark : s.container}>
          <ul className={!Theme.type ? s.itemListDark : s.itemList}>
            <li className={s.item}>
              {t("city")}: {object.city}
            </li>
            <li className={s.item}>
              {t("date")}: {object.date}
            </li>
            <li className={s.item}>
              {t("hotel")}: {object.hotel}
            </li>
          </ul>
          <Button title={t("close")} click={close} />
        </div>
        <NotesBlock />
      </div>
    </div>
  );
};

export { TripCard };
