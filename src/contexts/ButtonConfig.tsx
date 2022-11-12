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
    keydown: "Delete",
    action: BTN_ACTIONS.CLEAN,
    ariaLabel: "clean",
    control: true,
  },
  {
    display: "(",
    keydown: "(",
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: ")",
    keydown: ")",
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: "÷",
    keydown: "/",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "7",
    keydown: "7",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "8",
    keydown: "8",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "9",
    keydown: "9",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "x",
    keydown: "*",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "4",
    keydown: "4",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "5",
    keydown: "5",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "6",
    keydown: "6",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "+",
    keydown: "+",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "1",
    keydown: "1",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "2",
    keydown: "2",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "3",
    keydown: "3",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "-",
    keydown: "-",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: <GoOn size="28px" />,
    keydown: "Backspace",
    action: BTN_ACTIONS.DELETE,
    ariaLabel: "delete",
    control: true,
  },
  {
    display: "0",
    keydown: "0",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: ".",
    keydown: ".",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "=",
    keydown: "Enter",
    action: BTN_ACTIONS.CALC,
    equals: true,
  },
];
