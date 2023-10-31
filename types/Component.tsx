import { NextPage } from "next";
import { ReactNode } from "react";

export type Component<T = Record<string, any>> = NextPage<
  { children?: ReactNode } & T
>;
