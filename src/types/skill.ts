import { ReactNode } from "react";

export interface Skill {
  id: string;
  name: string;
  description: string;
  level: number;
  category: string;
  icon: ReactNode;
}