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

export interface NoteState {
  Notes: [{ title: string; text: string; id?: number }];
}

export interface InfoState {
  Info: { name: string; age: string; city: string; text: string; type: number };
}

export interface MyFormState {
  Form: { name: string; mail: string; type: boolean };
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
