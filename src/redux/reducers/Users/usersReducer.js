import { CHANGE_RECEPTION, CREATE_RECEPTION, REMOVE_RECEPTION } from "../../actionsTypes";

const initialState = {
    users: [
        {
            fullName:'Анжела Матиева',
            id: Math.random().toString(),
            phoneNumber: '+7 (999) 200-66-55',
            avatar: 'https://www.pngkey.com/png/full/934-9343148_2p2a2179-circle-girl.png',
            receptions: [
                {
                    bindedTime: '12.30',
                    diagnose: 'пульпит, удаление зуба',
                    id: Math.random().toString(),
                    date: '11.10.2021',
                    price: '1500 Р',
                    numberOfTooth: 13
                },
                {
                    bindedTime: '13.30',
                    diagnose: 'удаление мозга',
                    id: Math.random().toString(),
                    date: '12.10.2021',
                    price: '1500 Р',
                    numberOfTooth: 22
                },
            ]
        },
    ]
};

export const usersReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case CREATE_RECEPTION:
            return {
                ...state,
                receptions: [...state.receptions, payload]
            }
        case REMOVE_RECEPTION:
            return {
                ...state, 
                receptions: state.receptions.filter(({id}) => id !== payload)
            }
        case CHANGE_RECEPTION:
            return {
                ...state,
                receptions: payload
            }
        default:
            return state;
    }
};