import {ADD_USER, CHANGE_RECEPTION_DATA} from '../../actionsTypes';

const initialState = {
    users: [
        {
            fullName:'Анжела Матиева',
            id: Math.random().toString(),
            phoneNumber: '+79992006655',
            avatar: 'https://www.pngkey.com/png/full/940-9400019_mindy-circle-girl.png',
            receptions: [
                {
                    bindedTime: '12.30',
                    diagnose: 'пульпит, удаление зуба',
                    id: Math.random().toString(),
                    date: '12.10.2021',
                    price: '1500 Р',
                    numberOfTooth: 13
                },
                {
                    bindedTime: '13.30',
                    diagnose: 'удаление гноя',
                    id: Math.random().toString(),
                    date: '12.10.2021',
                    price: '1500 Р',
                    numberOfTooth: 22
                }
            ]
        },
        {
            fullName:'Светлана Игоревна',
            id: Math.random().toString(),
            phoneNumber: '+520851826',
            avatar: 'https://www.pngfind.com/pngs/m/154-1548230_circle-headshot-girl-hd-png-download.png',
            receptions: [
                {
                    bindedTime: '12.30',
                    diagnose: 'кариес, боль в ухе',
                    id: Math.random().toString(),
                    date: '12.11.2021',
                    price: '200 Р',
                    numberOfTooth: 15
                },
            ]
        },
        {
            fullName:'Екатерина Великая',
            id: Math.random().toString(),
            phoneNumber: '+10210244',
            avatar: 'https://www.nicepng.com/png/detail/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png',
            receptions: [
                {
                    bindedTime: '10.00',
                    diagnose: 'боль в ухе',
                    id: Math.random().toString(),
                    date: '12.11.2021',
                    price: '200 Р',
                    numberOfTooth: 15
                },
            ]
        },
    ]
};

export const usersReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case CHANGE_RECEPTION_DATA:
            return {
                ...state, 
                users: payload
            }
        case ADD_USER:
            return {
                ...state, users: payload
            }
        default:
            return state;
    }
};