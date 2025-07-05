
declare module "grid-layout-mannan" {
  import { ReactNode } from "react";

  interface GridLayoutProps {
    columnsCountBreakPoints: Record<number, number>;
    gutter?: string;
    children: ReactNode;
  }

  const GridLayout: React.FC<GridLayoutProps>;
  export default GridLayout;
}