interface stateType {
  darkTheme: boolean;
  history: string[];
}

interface BtnType {
  display: string | Icon;
  action: string;
  control?: boolean;
  gridSpan?: number;
  data?: string;
  operation?: boolean;
  equals?: boolean;
  control?: boolean;
}
