import { FormatOptions } from "mathjs";

export enum CopyScope {
  Previous = 0,
  Current = 1,
}

// https://mathjs.org/docs/reference/functions/format.html
export const mathjsOptions: FormatOptions = {
  notation: "fixed",
  precision: 10
};