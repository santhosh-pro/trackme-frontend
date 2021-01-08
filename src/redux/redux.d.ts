export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type Color =
  | "red"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange"
  | "brown"
  | "grey"
  | "blueGrey";

export type Action = {
  id?: string;
  name: string;
  type: "yesNo" | "number";
  target: number;
  unit: string;
  increment: number;
  color: Color;
  icon: string;
  startDate: string;
  endDate: string;
  weekdays: Weekday[];
};

export interface AuthState {
  tokenCheck: boolean;
  token: string;
  userId: string;
}

export interface ActionState {
  actionList: Action[];
}

export interface State {
  auth: AuthState;
  action: ActionState;
}
