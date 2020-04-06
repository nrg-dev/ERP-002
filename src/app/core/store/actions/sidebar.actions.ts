import { Action } from "@ngrx/store";

export enum SidebarActionTypes {
  TOGGLE = "[Header Component] TOGGLE",
}

export class ToggleSidebar implements Action {
  readonly type = SidebarActionTypes.TOGGLE;
}

export type SidebarActions = ToggleSidebar;
