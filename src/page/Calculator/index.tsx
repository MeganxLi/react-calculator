import { useEffect, useRef, useState } from "react";
import { Moon, SunOne, History } from "@icon-park/react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeTheme, saveExpression } from "../../store/calculatorSlice";

import { Btns, BTN_ACTIONS } from "../../contexts/btnsConfig";
import {
  Container,
  Screen,
  Previous,
  Current,
  Button,
  ButtonContainer,
  Tool,
  ThemeButton,
} from "../../styled/Container";

const currentMaxFontSize = 40;

export default function Calculator() {
  const dispatch = useAppDispatch();
  const { darkTheme } = useAppSelector((state) => state.calculator);

  // 一個是數組，另一個數組存儲狀態的值
  const [current, setCurrent] = useState<string>("");
  const [previous, setPrevious] = useState<string>("");

  // 變更 current font-size
  const ScreenRef = useRef<HTMLDivElement>(null);
  const CurrentRef = useRef<HTMLDivElement>(null);
  const [AllotCurrentFontSize, setAllotCurrentFontSize] = useState<number>(currentMaxFontSize);

  // const listenerAlive = () => {
  //   if (ScreenRef.current && CurrentRef.current) {
  //     const ScreenWidth = ScreenRef.current.scrollWidth;
  //     const CurrentWidth = parseFloat(window.getComputedStyle(CurrentRef.current, null).getPropertyValue("width"));
  //     const CurrentFontSize = parseFloat(
  //       window.getComputedStyle(CurrentRef.current, null).getPropertyValue("font-size")
  //     );
  //     console.log(
  //       "ScreenWidth",
  //       ScreenWidth,
  //       CurrentWidth,
  //       CurrentFontSize,
  //       Math.floor((CurrentFontSize * (ScreenWidth - 20)) / CurrentWidth),
  //       Math.min(Math.floor((CurrentFontSize * ScreenWidth) / CurrentWidth), currentMaxFontSize)
  //     );

  //     setAllotCurrentFontSize(
  //       Math.min(Math.floor((CurrentFontSize * (ScreenWidth - 20)) / CurrentWidth), currentMaxFontSize)
  //     );
  //   }
  // };

  useEffect(() => {
    console.log(AllotCurrentFontSize);
  }, [AllotCurrentFontSize]);

  const appendValue = (value: string) => {
    console.log("rup4", value, value === "x");
    // console.log(value, current.slice(-1), value === "x", current.slice(-1) === "x");

    // includes 判斷陣列是否包含特定的元素，並回傳 true 或 false
    //在到達呼叫 return 的地方後，函式會立即停止
    if (
      (value === "." && current.slice(-1) === ".") ||
      (value === "+" && current.slice(-1) === "+") ||
      (value === "-" && current.slice(-1) === "-") ||
      (value === "x" && current.slice(-1) === "x") ||
      (value === "÷" && current.slice(-1) === "÷") ||
      current.length > 12
    )
      return;

    // 若沒有數字情況下點擊按鈕，需補 0 在前面
    if (current.length === 0 && (value === "." || value === "+" || value === "-" || value === "x" || value === "÷")) {
      setCurrent(0 + value);
    } else {
      setCurrent(current + value);
    }
    // listenerAlive();
  };

  // ←
  const handleDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };

  // C
  const handleAllClear = () => {
    setCurrent("");
    setPrevious("");
  };

  // 處理文字，取代 x 和 ÷
  const handleReplaceText = (expression: string): string => {
    let tempCurrent = expression;

    if (tempCurrent.includes("x")) {
      tempCurrent = tempCurrent.replace("x", "*");
    } else if (tempCurrent.includes("÷")) {
      tempCurrent = tempCurrent.replace("÷", "/");
    }

    return tempCurrent;
  };

  // =
  const equals = () => {
    let sliceTempCurrent = current;

    // 排除最後一個字非數字
    if (isNaN(Number(sliceTempCurrent.slice(-1)))) {
      sliceTempCurrent = String(current).slice(0, -1);
    }

    try {
      setPrevious(sliceTempCurrent + "=");
      const total = eval(handleReplaceText(sliceTempCurrent));
      setCurrent(total.toString());

      // history
      dispatch(saveExpression({ expression: sliceTempCurrent + "=", total: total.toString() }));
    } catch {
      setPrevious(current + "=");
      setCurrent("0");
    }
  };

  const btnClick = (btnItem: BtnType) => {
    switch (btnItem.action) {
      case BTN_ACTIONS.ADD:
        return appendValue(btnItem.display);
      case BTN_ACTIONS.DELETE:
        return handleDelete();
      case BTN_ACTIONS.CLEAN:
        return handleAllClear();
      case BTN_ACTIONS.CALC:
        return equals();
      default:
        break;
    }
  };

  useEffect(() => {
    // window.addEventListener("resize", listenerAlive);
    // return () => {
    //   window.removeEventListener("resize", listenerAlive);
    // };
  }, []);

  return (
    <Container className="container ">
      <Screen ref={ScreenRef}>
        <Tool>
          <ThemeButton onClick={() => dispatch(changeTheme())}>
            <SunOne size="20px" className={darkTheme ? undefined : "action"} />
            <Moon size="20px" className={darkTheme ? "action" : undefined} />
          </ThemeButton>
          <History size="20px" />
        </Tool>
        <Previous>{previous}</Previous>
        <Current className="current" ref={CurrentRef} $fontSize={AllotCurrentFontSize}>
          {current}
        </Current>
      </Screen>
      <ButtonContainer>
        {Btns.map((item, index) => (
          <Button
            control={item.control}
            gridSpan={item.gridSpan}
            data={item.data}
            operation={item.operation}
            equals={item.equals}
            onClick={() => btnClick(item)}
            key={index}
          >
            {item.display}
          </Button>
        ))}
      </ButtonContainer>
    </Container>
  );
}
