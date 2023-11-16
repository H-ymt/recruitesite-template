import AnimationWrapper from './_components/AnimationWrapper';

type Props = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: Props) {
  return <AnimationWrapper>{children}</AnimationWrapper>;
}
