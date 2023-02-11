interface historyType {
  expression: string;
  total: string;
}
interface stateType {
  darkTheme: boolean;
  history: historyType[];
}

interface BtnType {
  display: string | Icon;
  keydown: string[];
  ctrl?: boolean;
  action: string;
  ariaLabel?: string; // 無障礙使用
  control?: boolean;
  gridSpan?: number;
  data?: string;
  operation?: boolean;
  equals?: boolean;
  control?: boolean;
}
