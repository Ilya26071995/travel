export interface NavType {
  name: string;
  link?: string;
}

export interface NotesType {
  title: string;
  text: string;
  id?: number;
}

export interface ButtonType {
  title: string;
  click?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface TripsState {
  Trips: { city: string; date: string; hotel: string; id?: number }[];
}

export interface NoteState {
  Notes: { title: string; text: string; id?: number }[];
}

export interface NotesTripState {
  NotesTrip: { title: string; text: string; id?: number }[];
}

export interface BoolType {
  type: boolean;
}

export interface InfoState {
  Info: { name: string; age: string; city: string; text: string; type: number };
}

export interface MyFormState {
  Form: { name: string; mail: string; type: boolean };
}

export interface ThemeState {
  Theme: { type: boolean };
}

export interface ThemeType {
  type: boolean;
}

export interface FormType {
  name: string;
  mail: string;
  type: boolean;
}

export interface MyInfoType {
  name: string;
  age: string;
  city: string;
  text: string;
  type?: number;
}

export interface TripType {
  city: string;
  date: string;
  hotel: string;
  id?: number;
}

export interface MiniTripType {
  item: { city: string; date: string; hotel: string; id?: number };
}

export interface TripCardType {
  object: { city: string; date: string; hotel: string };
  close: () => void;
}

export interface InfoPayload {
  payload: {
    name: string;
    age: string;
    city: string;
    text: string;
    type: number;
  };
}

export interface NotePayload {
  payload: {
    title: string;
    text: string;
    id?: number;
  };
}

export interface ThemePayload {
  payload: {
    type: boolean;
  };
}
