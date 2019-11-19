interface State { to: string, params: {} }

interface SubMenu {
    label: string,
    state: State,
    active?: boolean
}

export interface Menu {
    type: Type,
    label: string,
    icon?: string,
    state?: State,
    subMenus?: SubMenu[],
    active?: boolean
}

export enum Type {
    TITLE,
    LINK,
    HASSUBMENUS
}