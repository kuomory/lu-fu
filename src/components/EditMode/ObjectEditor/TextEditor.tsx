import { ChangeEventHandler, ComponentProps, useCallback } from "react";
import { slideAtom, SvgObject } from "../../../atoms/slideAtom";
import { useAtomValue, useSetAtom } from "jotai";
import { focusPageNumAtom } from "../../../atoms/focusPageAtom";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: SvgObject<any>;
};

export function TextEditor(props: Props) {
  const { object } = props;
  const { x, y } = object.props as ComponentProps<"text">;
  const text = typeof object.children !== "string" ? "" : object.children;
  const focusPageNum = useAtomValue(focusPageNumAtom);
  const setSlide = useSetAtom(slideAtom);
  const handleChangeText: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ currentTarget: { value } }) => {
      setSlide((s) => ({
        ...s,
        pages: s.pages.map((page, idx) =>
          idx !== focusPageNum - 1
            ? page
            : {
                ...page,
                objects: page.objects.map((obj) =>
                  obj.id !== object.id ? obj : { ...obj, children: value }
                ),
              }
        ),
      }));
    },
    []
  );
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <input value={text} onChange={handleChangeText} />
    </div>
  );
}
