declare type ButtonType = {
  children: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  variant?: "primary" | "secondary" | "transparent";
  icon?: React.ReactElement;
  onClick?: () => void;
};

declare type TextType = {
  children: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  fontJakarta?: boolean;
  fontPlay?: boolean;
  fontGaramond?: boolean;
};
