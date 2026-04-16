export interface Menu{
    id : number,
    restaurant : string,
    name : string,
    price : number,
    type : 'kr' | 'ch' | 'jp' | 'all',
    taste : 'mild' | 'hot' | 'all'
}

export const initMenu:Menu = {
    id : 0,
    restaurant : '',
    name : '',
    price : 0,
    type : 'all',
    taste : 'all'
}

// 메뉴 등록시 타입
export type MenuCreate = Omit<Menu, 'id'>

// 메뉴 수정시 타입(patch)
export type MenuUpdatePath = Pick<Menu, 'id'> & Partial<Omit<Menu, 'id'>>

// 메뉴 삭제
export type MenuDelete = Pick<Menu, 'id'>



