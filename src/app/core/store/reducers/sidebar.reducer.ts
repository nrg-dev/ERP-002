import {
  SidebarActionTypes,
  SidebarActions,
} from "./../actions/sidebar.actions";
import { LocalStorageHelper } from "src/app/helpers/local-storage.helper";

let initialState = LocalStorageHelper.getItem("showSidebar") || false;

export function SidebarReducer(state = initialState, action: SidebarActions) {
  switch (action.type) {
    case SidebarActionTypes.TOGGLE:
      const newState = !state;
      LocalStorageHelper.setItem("showSidebar", newState);
      return newState;
    default:
      return state;
  }
}
