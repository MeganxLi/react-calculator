import styled from "styled-components";


export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  box-shadow: 2px 2px 10px #333;
`;

export const Screen = styled.div`
  flex: 1 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word; /*標明瀏覽器再單詞內進行斷行，防止字符串太長找不到他的自然斷句產生溢出*/
  word-break: break-all; /*標明怎麼怎麼進行單詞內的斷句*/
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Previous = styled.div`
  color: rgba(255,255,255,0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;    
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat( 4, 1fr );
  grid-template-rows: repeat( 5, 75px );
  gap: 0.5rem;
  padding: 2rem 1rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--Button-Container);
`;

export const Button = styled.button<{
  gridSpan?: number,
  data?: string,
  operation?: boolean,
  equals?: boolean,
  control?: boolean
}>`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  font-weight: 500;
  color: var(--Text);
  background: transparent;
  &:hover{
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