import { atom } from "jotai";

export const Mode = {
  editMode: "editMode",
  themeMode: "themeMode",
  previewMode: "previewMode",
} as const;
export type Mode = keyof typeof Mode;

export const modeAtom = atom<Mode>(Mode.editMode);
