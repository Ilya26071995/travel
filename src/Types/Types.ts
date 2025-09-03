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
  type?: string;
}
