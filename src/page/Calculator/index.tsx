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
import { CopyScope, mathjsOptions } from "../../contexts/EnumType";
import { evaluate, format } from "mathjs";

export default function Calculator() {
  const operators = ["+", "-", "x", "÷"]; 
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

  const  handleOperatorInput = (operators:string[], current: string, value: string): string=> {
    const last = current.slice(-1);
    const secondLast = current.slice(-2, -1);
    // 1. 禁止重複輸入相同符號 (例如 ++、--、xx、÷÷)
    if (last === value ) {
      return current;
    }

    // 2.當沒有數字以及沒有計算列情況下點擊運算(加減乘除)，需補 0 在前面
    if(current.length === 0){
       return 0 + value;
    }

    // 3. 如果最後一個是正負號，倒數第二個是 x ÷
    if ((last === "+" || last === "-") && (secondLast === "x" || secondLast === "÷")) {
      if (value === "x" || value === "÷") {
        // 替換倒數第二個運算符
        return current.slice(0, -2) + value ;
      } else if (value === "+" || value === "-") {
        // 正負號合法疊加 → 只保留最後一個正負號
        return current.slice(0, -1) + value;
      }
    }
    // 4. 尾端是任意運算符，再按 x ÷ → 替換
    if (operators.includes(last) && (value === "x" || value === "÷")) {
      return current.slice(0, -1) + value;
    }

    // 正常情況直接加上
    return current + value;
  };

  const appendValue = (value: string) => {
    // includes 判斷陣列是否包含特定的元素，並回傳 true 或 false
   
    // 判斷是否還在點擊運算
    if(operators.includes(value)){
       setCurrent(prev => handleOperatorInput(operators, prev, value));
    } else {
       // 這邊是判斷點擊數字
      if(previous!==""){
        // 當有計算列的情況下點擊 . 必須以新的開始
          setCurrent(value === "." ? "0." : value);
      } else {
        setCurrent(prev=> prev + value);
      }
    }
     setPrevious("");
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

  // previous 正規化
  const sanitizeFormula=(formula: string): string=>{
    let result = String(formula);

    // 規則 1: 運算符號後面直接跟小數 (.3 → 0.3)
    result = result.replace(/([+\-x÷(])\.(\d+)/g, "$10.$2");

    // 規則 2: 數字後面跟小數點再接運算符號 (0.+6 → 0+6)
    result = result.replace(/(\d+)\.\s*([+\-x÷)])/g, "$1$2");

    // 規則 3: 如果最後一個不是數字或右括號 → 刪掉
    // 規則 4: 連續運算符 → 只保留最後一個，需要使用 while 循環 (0x9x+ → 0x9)
    while (result && isNaN(Number(result.slice(-1))) && result.slice(-1) !== ")") {
      result = result.slice(0, -1);
    }
    
    return result;
  };

  // =
  const equals = () => {
    if (current === "") return;

    let sliceTempCurrent = current;

    sliceTempCurrent = sanitizeFormula(sliceTempCurrent);

    try {
      const newPrevious = sliceTempCurrent + "=";
      const total = format(evaluate(handleReplaceText(sliceTempCurrent)), mathjsOptions).replace(/\.?0+$/, "");
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

  const clickHistoryList = () => {
    setOpenHistoryList(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Container className="container ">
      <Screen className="screen">
        <Tool>
          <ThemeButton onClick={() => dispatch(changeTheme())}>
            <SunOne size="20px" className={darkTheme ? undefined : "action"} />
            <Moon size="20px" className={darkTheme ? "action" : undefined} />
          </ThemeButton>
          <History size="20px" onClick={clickHistoryList} />
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
