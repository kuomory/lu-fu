import { ReactNode } from "@tanstack/react-router";
import { atom } from "jotai";
import { ComponentProps, ElementType } from "react";

export type SvgObject<T extends ElementType & string> = {
  id: string;
  component: T;
  props: ComponentProps<T>;
  children?: ReactNode;
};

export type Page = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objects: SvgObject<any>[];
  backgroundColor?: string;
  templateId?: string;
};

export type Slide = {
  title?: string;
  pages: Page[];
};

const testMock: Slide = {
  title: "タイトル",
  pages: [
    {
      objects: [
        {
          id: "aaa",
          component: "polygon",
          props: {
            points: "0,0 1000,0 600,900 0,900",
            fill: "#f0f0f0",
          },
        },
        {
          id: "bbb",
          component: "text",
          props: {
            x: 800,
            y: 420,
            fontSize: 80,
            alignmentBaseline: "central",
            textAnchor: "middle",
          },
          children: "タイトル",
        },
        {
          id: "ccc",
          component: "text",
          props: {
            x: 800,
            y: 520,
            fontSize: 38,
            alignmentBaseline: "central",
            textAnchor: "middle",
          },
          children: "サブタイトル",
        },
      ],
    },
    {
      objects: [
        {
          id: "aaa",
          component: "polygon",
          props: {
            points: "0,0 1000,0 600,900 0,900",
            fill: "#f0f0f0",
          },
        },
        {
          id: "bbb",
          component: "text",
          props: {
            x: 800,
            y: 420,
            fontSize: 80,
            alignmentBaseline: "central",
            textAnchor: "middle",
          },
          children: "2ページ",
        },
        {
          id: "ccc",
          component: "text",
          props: {
            x: 800,
            y: 520,
            fontSize: 38,
            alignmentBaseline: "central",
            textAnchor: "middle",
          },
          children: "目",
        },
      ],
    },
  ],
};

export const slideAtom = atom<Slide>(testMock);
// export const slideAtom = atom<Slide>({
//   pages: [],
// });
