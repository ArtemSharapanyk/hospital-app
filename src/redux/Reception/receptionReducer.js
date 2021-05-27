import { CHANGE_RECEPTION, CREATE_RECEPTION, REMOVE_RECEPTION } from "../actionsTypes";

const initialState = {
    receptions: [
        {
            date: '11 сентября',
            receptions: [
                {
                    fullName: 'Анжела Матиева',
                    bindedTime: '12.30',
                    order: 'пульпит, удаление зуба',
                    avatar: 'https://www.pngkey.com/png/full/934-9343148_2p2a2179-circle-girl.png',
                    id: Math.random().toString()
                },
                {
                    fullName: 'Ната Ганиева',
                    bindedTime: '14.00',
                    order: 'периодонтит',
                    avatar: 'https://www.pngjoy.com/pngm/182/3614808_cammy-circle-picture-profile-girl-png-transparent-png.png',
                    id:Math.random().toString()
                }
            ]
        },
        {
            date: '12 сентября',
            receptions: [
                {
                    fullName: 'Анжела Матиева',
                    bindedTime: '12.30',
                    order: 'пульпит, удаление зуба',
                    avatar: 'https://www.pngkey.com/png/full/934-9343148_2p2a2179-circle-girl.png',
                    id: Math.random().toString()
                },
                {
                    fullName: 'Ната Ганиева',
                    bindedTime: '14.00',
                    order: 'периодонтит',
                    avatar: 'https://www.pngjoy.com/pngm/182/3614808_cammy-circle-picture-profile-girl-png-transparent-png.png',
                    id:Math.random().toString()
                }
            ]
        }
    ]
};

export const receptionReducer = (state = initialState, {type, payload}) => {
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