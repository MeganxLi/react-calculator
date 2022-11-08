import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tool = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeButton = styled.div`
  background: var(--Button-Container);
  border-radius: 10px;
  > span {
    display: inline-block;
    padding: 8px 10px;

    &:not(.action) {
      opacity: 0.5;
    }
  }
`;

export const Screen = styled.div`
  flex: 1 0;
  display: grid;
  grid-template-rows: 40px auto 50px;
  gap: 1rem;
  padding: 10px;
  color: var(--Text);
  font-weight: 500;
  word-wrap: break-word; /*標明瀏覽器再單詞內進行斷行，防止字符串太長找不到他的自然斷句產生溢出*/
  word-break: break-all; /*標明怎麼怎麼進行單詞內的斷句*/
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: var(--Previous);
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Current = styled.div<{ $fontSize: number }>`
  font-size: ${(props) => props.$fontSize}px;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 75px);
  gap: 0.5rem;
  padding: 2rem 1rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--Button-Container);
`;

export const Button = styled.button<{
  gridSpan?: number;
  data?: string;
  operation?: boolean;
  equals?: boolean;
  control?: boolean;
}>`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  font-weight: 500;
  color: var(--Text);
  background: transparent;
  &:hover {
    background-color: var(--Background);
  }

  /*EXPANDED FORM EXAMPLE 擴展表格JS*/
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan};`;
    }
  }}

  /*上面簡化後變下面的*/
  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}
  ${({ operation }) => operation && "color: var(--Green)"}
  ${({ control }) => control && "color: var(--Blue)"}
  ${({ equals }) => equals && "background-color: var(--Background-Green);"}
`;
