import { atom } from "jotai";
import { ElementType, ComponentProps } from "react";

export type SvgObject<T extends ElementType & string> = {
  id: string;
  component: T;
  props: ComponentProps<T>;
};

export const objectAtom = atom<SvgObject<any>>();
