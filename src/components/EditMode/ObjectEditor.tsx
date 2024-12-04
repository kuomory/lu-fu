import { SvgObject } from "../../atoms/slideAtom";
import { TextEditor } from "./ObjectEditor/TextEditor";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: SvgObject<any>;
};

export function ObjectEditor(props: Props) {
  const { object } = props;

  if (object.component === "text") return <TextEditor object={object} />;

  return <></>;
}
