interface State { to: string, params: {} }

interface SubMenu {
    label: string,
    state: State,
    active?: boolean
}

export class Menu {
    constructor(args: {
        type: Type,
        label: string,
        icon?: string,
        state?: State,
        subMenus?: SubMenu[],
        active?: boolean
    }) {
        Object.assign(this, args);
    }
}

export enum Type {
    TITLE,
    LINK,
    HASSUBMENUS
}