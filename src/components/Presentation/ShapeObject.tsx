import { SvgObject } from "../../atoms/slideAtom";

type Props = {
  object: SvgObject<any>;
};

export function ShapeObject(props: Props) {
  const { object } = props;
  const Component = object.component;
  return <Component {...object.props}>{object.children}</Component>;
}
