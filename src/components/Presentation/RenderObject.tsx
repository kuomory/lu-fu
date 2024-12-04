import { SvgObject } from "../../atoms/slideAtom";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: SvgObject<any>;
};

export function RenderObject(props: Props) {
  const { object } = props;
  const Component = object.component;
  return <Component {...object.props}>{object.children}</Component>;
}
