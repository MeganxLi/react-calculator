import { useEffect, useState } from "react";
import { Moon, SunOne, History, Copy } from "@icon-park/react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { changeTheme, saveExpression } from "../../store/calculatorSlice";

import { Btns, BTN_ACTIONS } from "../../contexts/ButtonConfig";
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
import HistoryList from "./HistoryList";
import Message from "../../components/Message";
import { CopyScope } from "../../contexts/EnumType";

export default function Calculator() {
  const dispatch = useAppDispatch();
  const { darkTheme } = useAppSelector((state) => state.calculator);
  const [OpenHistoryList, setOpenHistoryList] = useState<boolean>(false);

  // 一個是數組，另一個數組存儲狀態的值
  const [current, setCurrent] = useState<string>("");
  const [previous, setPrevious] = useState<string>("");

  // copy meg
  const [isCopied, setIsCopied] = useState<boolean>(false);
  // 判斷是否有點擊 ctrl
  const [isClickCtrl, setIsClickCtrl] = useState<boolean>(false);

  const appendValue = (value: string) => {
    // includes 判斷陣列是否包含特定的元素，並回傳 true 或 false
    //在到達呼叫 return 的地方後，函式會立即停止

    const lastText = current.slice(-1);
    if (
      (value === "." && lastText === ".") ||
      (value === "+" && lastText === "+") ||
      (value === "-" && lastText === "-") ||
      (value === "x" && lastText === "x") ||
      (value === "÷" && lastText === "÷") ||
      ((lastText === "+" || lastText === "-") && (value === "x" || value === "÷"))
    )
      return;

    // 若沒有數字情況下點擊按鈕，需補 0 在前面
    setCurrent((prev: string) => {
      if (prev.length === 0 && (value === "." || value === "+" || value === "-" || value === "x" || value === "÷")) {
        return 0 + value;
      } else {
        return prev + value;
      }
    });
  };

  // ←
  const handleDelete = () => {
    setCurrent((prev) => prev.slice(0, -1));
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
      tempCurrent = tempCurrent.replace(/x/g, "*");
    }
    if (tempCurrent.includes("÷")) {
      tempCurrent = tempCurrent.replace(/÷/g, "/");
    }

    return tempCurrent;
  };

  // =
  const equals = () => {
    if (current === "") return;

    let sliceTempCurrent = current;

    // 排除最後一個字非數字
    const lastText = sliceTempCurrent.slice(-1);
    if (isNaN(Number(lastText)) && lastText !== ")") {
      sliceTempCurrent = String(sliceTempCurrent).slice(0, -1);
    }

    try {
      const newPrevious = sliceTempCurrent + "=";
      const total = eval(handleReplaceText(sliceTempCurrent)).toString();

      setPrevious(newPrevious);
      setCurrent(total);

      // history
      dispatch(saveExpression({ expression: newPrevious, total: total }));
    } catch {
      setPrevious(current + "=");
      setCurrent("Syntax err");
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

  // 鍵盤事件
  const specialKey = (key: string) => {
    if (key === "Control" || key === "Shift") {
      setIsClickCtrl(!isClickCtrl);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    // click ctrl or shift keydown
    specialKey(event.key);

    const checkKeyDownBtn = Btns.findIndex((item: BtnType) => {
      const clickCtrl = isClickCtrl ? item.ctrl : !item.ctrl;
      return item.keydown.some((key: string) => event.key === key) && clickCtrl;
    });

    if (checkKeyDownBtn === -1) return;
    btnClick(Btns[checkKeyDownBtn]);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    specialKey(event.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // copy expression
  const copyTextToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCopy = (scope: number) => {
    if (scope === CopyScope.Previous) {
      copyTextToClipboard(previous + current);
    } else if (scope === CopyScope.Current) {
      copyTextToClipboard(current);
    }
  };

  return (
    <Container className="container ">
      <Screen className="screen">
        <Tool>
          <ThemeButton onClick={() => dispatch(changeTheme())}>
            <SunOne size="20px" className={darkTheme ? undefined : "action"} />
            <Moon size="20px" className={darkTheme ? "action" : undefined} />
          </ThemeButton>
          <History size="20px" onClick={() => setOpenHistoryList(true)} />
        </Tool>
        <Previous onClick={() => handleCopy(CopyScope.Previous)}>{previous}</Previous>
        <Current className="current" onClick={() => handleCopy(CopyScope.Current)}>
          {current}
        </Current>
      </Screen>
      <ButtonContainer>
        {Btns.map((item, index) => (
          <Button
            aria-label={item.ariaLabel}
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
      <HistoryList
        OpenHistoryList={OpenHistoryList}
        setOpenHistoryList={setOpenHistoryList}
        setCurrent={setCurrent}
        setPrevious={setPrevious}
      />
      <Message
        text={
          <>
            <Copy /> Copied!
          </>
        }
        isCopied={isCopied}
      />
    </Container>
  );
}
