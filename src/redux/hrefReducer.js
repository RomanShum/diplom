import {GET_HREF_MENU} from './Actions';


const initialState = [
        {title:'Главная'},
        {title:'Каталог'},
        {title:'О магазине'},
        {title:'Контакты'},
]

export default function hrefReducer(state=initialState, action){
    return state;
}