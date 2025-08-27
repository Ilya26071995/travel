export interface NavType {
  name: string;
  link?: string;
}

export interface NotesType {
  title: string;
  text: string;
  id?: string;
}

export interface ButtonType {
  title: string;
  click: () => void;
}
