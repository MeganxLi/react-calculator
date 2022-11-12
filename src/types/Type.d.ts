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
  keydown: string;
  action: string;
  control?: boolean;
  gridSpan?: number;
  data?: string;
  operation?: boolean;
  equals?: boolean;
  control?: boolean;
}
