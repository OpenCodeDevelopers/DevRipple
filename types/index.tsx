export type IconType = React.ElementType;

export interface FeatureProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export interface CallToActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}
