import { GoOn } from "@icon-park/react";

export const BTN_ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  CLEAN: "CLEAN",
  CALC: "CALC",
};

export const Btns: BtnType[] = [
  {
    display: "C",
    keydown: ["Delete"],
    action: BTN_ACTIONS.CLEAN,
    ariaLabel: "clean",
    control: true,
  },
  {
    display: "(",
    keydown: ["(", "ㄞ", "9"],
    ctrl: true,
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: ")",
    keydown: [")", "ㄢ", "0"],
    ctrl: true,
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: "÷",
    keydown: ["/", "ㄥ"],
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "7",
    keydown: ["7", "˙"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "8",
    keydown: ["8", "ㄚ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "9",
    keydown: ["9", "ㄞ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "x",
    keydown: ["*", "＊"],
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "4",
    keydown: ["4", "ˋ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "5",
    keydown: ["5", "ㄓ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "6",
    keydown: ["6", "ˊ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "+",
    keydown: ["+", "＋"],
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "1",
    keydown: ["1", "ㄅ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "2",
    keydown: ["2", "ㄉ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "3",
    keydown: ["3", "ˇ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "-",
    keydown: ["-", "ㄦ"],
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: <GoOn size="28px" />,
    keydown: ["Backspace"],
    action: BTN_ACTIONS.DELETE,
    ariaLabel: "delete",
    control: true,
  },
  {
    display: "0",
    keydown: ["0", "ㄢ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: ".",
    keydown: [".", "ㄡ"],
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "=",
    keydown: ["Enter", "=", "＝"],
    action: BTN_ACTIONS.CALC,
    equals: true,
  },
];
