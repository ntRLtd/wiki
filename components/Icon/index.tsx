interface IconProps {
  name: string;
  size?: string;
  width?: string;
  height?: string;
  color?: string;
  stroke?: string;
  fill?: string;
  rtl?: string;
  spin?: string;
}
export const Icon = (props: IconProps) => {
  // @ts-expect-error
  return <iconpark-icon {...props} />;
};
