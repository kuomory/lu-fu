import { atom } from "jotai";

export type Page = {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objectIDs: string[];
  backgroundColor?: string;
  templateId?: string;
};

const pageAtom = atom<Page>();
