import { useState } from 'react';
import s from './NotesBlock.module.scss';
import {
    BoolType,
    NoteState,
    NotesTripState,
    NotesType,
    ThemeState,
} from '../../Types';
import { Button } from '../Button/Index';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes, removeNotes } from '../../store/slices/notes.slice';
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import {
    addNotesTrip,
    removeNotesTrip,
} from '../../store/slices/tripNote.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { NoteSchema } from '../../validation';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

const NotesBlock = (type: BoolType) => {
    const dispatch = useDispatch();
    const { Notes } = useSelector((state: NoteState) => state);
    const { Theme } = useSelector((state: ThemeState) => state);
    const { NotesTrip } = useSelector((state: NotesTripState) => state);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(NoteSchema),
    });

    const [note, setNote] = useState({
        title: '',
        text: '',
        id: Date.now(),
    });

    const onSubmit = () => {
        type.type ? dispatch(addNotes(note)) : dispatch(addNotesTrip(note));
        setNote({
            title: '',
            text: '',
            id: Date.now(),
        });
    };

    const notesAdd = (
        arr: NotesType[],
        action: ActionCreatorWithPayload<
            { title: string; text: string; id?: number | undefined },
            string
        >
    ) => {
        return arr.map((item) => (
            <div key={item.id} className={Theme.type ? s.note : s.noteDark}>
                <h3 className={s.noteTitle}>{item.title}</h3>
                <p className={s.noteText}>{item.text}</p>
                <div className={s.but}>
                    <Button
                        title={t('remove')}
                        click={() => dispatch(action(item))}
                    />
                </div>
            </div>
        ));
    };

    return (
        <div className={Theme.type ? s.container : s.containerDark}>
            <div className={Theme.type ? s.noteForm : s.noteFormDark}>
                <h1 className={s.title}>{t('addNote')}</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={s.flex}>
                    <label>
                        <input
                            {...register('title')}
                            className={Theme.type ? s.name : s.nameDark}
                            type="text"
                            placeholder={t('title')}
                            value={note.title}
                            onChange={(e) =>
                                setNote({ ...note, title: e.target.value })
                            }
                        />
                        <p className={s.error}>{errors.title?.message}</p>
                    </label>
                    <label>
                        <textarea
                            {...register('text')}
                            className={Theme.type ? s.text : s.textDark}
                            placeholder={t('text')}
                            value={note.text}
                            onChange={(e) =>
                                setNote({ ...note, text: e.target.value })
                            }
                        />
                        <p className={s.error}>{errors.text?.message}</p>
                    </label>
                    <input
                        type="submit"
                        value={t('addNote')}
                        className={!Theme.type ? s.buttonDark : s.button}
                    />
                </form>
            </div>

            {type.type
                ? notesAdd(Notes, removeNotes)
                : notesAdd(NotesTrip, removeNotesTrip)}
        </div>
    );
};

export { NotesBlock };
