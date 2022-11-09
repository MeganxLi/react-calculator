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
    action: BTN_ACTIONS.CLEAN,
    control: true,
  },
  {
    display: "(",
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: ")",
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: "÷",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "7",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "8",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "9",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "x",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "4",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "5",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "6",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "+",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: "1",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "2",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "3",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "-",
    action: BTN_ACTIONS.ADD,
    operation: true,
  },
  {
    display: <GoOn size="28px" />,
    action: BTN_ACTIONS.ADD,
    control: true,
  },
  {
    display: "0",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: ".",
    action: BTN_ACTIONS.ADD,
  },
  {
    display: "=",
    action: BTN_ACTIONS.CALC,
    equals: true,
  },
];
