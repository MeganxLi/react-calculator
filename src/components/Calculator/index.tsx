import React, { useState } from "react";
import { Container, Screen, Previous, Current, Button } from "./Styled";


export default function Calculator() {

  //一個是數組，另一個數組存儲狀態的值
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (el: any) => {
    const value = el.target.getAttribute("data");

    //includes判斷陣列是否包含特定的元素，並回傳 true 或 false
    //在到達呼叫 return 的地方後，函式會立即停止
    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const handleAllClear = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };

  // + - * /
  const chooseOperation = (el: any) => {
    if (current === "") return;
    const value = compute();
    if (previous !== "" && value !== undefined) {
      setPrevious((value).toString());
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation(el.target.getAttribute("data"));
  };

  // = 
  const equals = () => {
    const value = compute();
    if (value == undefined || value == null) return;

    setCurrent((value).toString());
    setPrevious("");
    setOperation("");
  };

  //儲存結果
  const compute = () => {
    let result;
    const previousNumber = parseFloat(previous);
    const currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    //計算
    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }

    return result;


  };

  return (
    <Container>
      <Screen>
        <Previous>{previous} {operation}</Previous>
        <Current>{current}</Current>
      </Screen>
      <Button gridSpan={2} control onClick={handleAllClear}>AC</Button>
      <Button control onClick={handleDelete}>DEL</Button>
      <Button data={"÷"} onClick={chooseOperation} operation>÷</Button>
      <Button data={"7"} onClick={appendValue}>7</Button>
      <Button data={"8"} onClick={appendValue}>8</Button>
      <Button data={"9"} onClick={appendValue}>9</Button>
      <Button data={"×"} onClick={chooseOperation} operation>×</Button>
      <Button data={"4"} onClick={appendValue}>4</Button>
      <Button data={"5"} onClick={appendValue}>5</Button>
      <Button data={"6"} onClick={appendValue}>6</Button>
      <Button data={"+"} onClick={chooseOperation} operation>+</Button>
      <Button data={"1"} onClick={appendValue}>1</Button>
      <Button data={"2"} onClick={appendValue}>2</Button>
      <Button data={"3"} onClick={appendValue}>3</Button>
      <Button data={"-"} onClick={chooseOperation} operation>-</Button>
      <Button data={"."} period onClick={appendValue}>.</Button>
      <Button data={"0"} onClick={appendValue}>0</Button>
      <Button gridSpan={2} equals onClick={equals}>=</Button>
    </Container>
  );
}
