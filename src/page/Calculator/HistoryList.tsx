import React from "react";
import { DeleteFour } from "@icon-park/react";
import { HistoryContainer, HistoryBlock, HistoryItem } from "../../styled/Container";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { cleanExpression, clickExpressionItem } from "../../store/calculatorSlice";

interface props {
  OpenHistoryList: boolean;
  setOpenHistoryList: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  setPrevious: React.Dispatch<React.SetStateAction<string>>;
}

const HistoryList = ({ OpenHistoryList, setOpenHistoryList, setCurrent, setPrevious }: props) => {
  const dispatch = useAppDispatch();
  const { history } = useAppSelector((state) => state.calculator);

  const CloseHistoryList = () => {
    setOpenHistoryList(false);
  };
  const Stop = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  const CleanHistoryList = () => {
    dispatch(cleanExpression());
  };

  const CreateExpression = (item: historyType, idx: number) => {
    setCurrent(item.total);
    setPrevious(item.expression);

    CloseHistoryList();
    dispatch(clickExpressionItem(idx));

  };

  return (
    <HistoryContainer show={OpenHistoryList} onClick={CloseHistoryList}>
      <HistoryBlock onClick={Stop} className="slide-top">
        <DeleteFour size="20px" onClick={CleanHistoryList} />
        {history.map((item, idx) => {
          return (
            <HistoryItem key={idx} onClick={() => CreateExpression(item, idx)}>
              <span>{item.expression}</span>
              <span>{item.total}</span>
            </HistoryItem>
          );
        })}

      </HistoryBlock>
    </HistoryContainer>
  );
};

export default HistoryList;
