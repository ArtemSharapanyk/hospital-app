import React, { useContext } from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import { Title as DateTitle} from "../../helpers/Title";
import styled from 'styled-components/native';
import { ClientReceptionInfo, HiddenItemWithActions } from './ClientReceptionInfo';
import {navigationRoutes} from '../../../../App';
import { SwipeListView } from 'react-native-swipe-list-view';
import { months } from '../../../mounthConfig';
import { ReceptionContext } from '../../../States/Contexts/ReceptionContext';

export const ReceptionByData = ({date, receptions, navigationObject}) => {
    const pacientCardRoute = navigationRoutes.cardOfPacient.route;

    const fromIndexOfMounthToMounthInVerb = `${date.split('.')[0]} ` + months[date.split('.')[1] - 1];

    const {removeReception} = useContext(ReceptionContext);



    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
          rowMap[rowKey].closeRow();
        }
    };

    const deleteReception = (rowMap, dataKey, userId, receptionId) => {
        closeRow(rowMap, dataKey);
        setTimeout(() => {
            removeReception(userId, receptionId);
        }, 700);
    }
    const changeReception = (rowMap, dataKey, navigate) => {
        closeRow(rowMap, dataKey);
        navigate();
    };

    
    const renderItem = (data, rowMap) => {
        return (
            <TouchableOpacity key={data.item.id} activeOpacity={1} onPress={navigationObject.navigate.bind(this, pacientCardRoute, data.item)}>
                <ClientReceptionInfo 
                    fullName={data.item.fullName}
                    bindedTime={data.item.bindedTime}
                    diagnose={data.item.diagnose}
                    avatar={data.item.avatar}
                />
            </TouchableOpacity>
        );
    };

    const renderHiddenItems = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                rowMap={rowMap}
                data={data}
                deleteReception={() => deleteReception(
                    rowMap, 
                    data.item.key,
                    data.item.userId,
                    data.item.id
                )}
                changeReception={() => changeReception(rowMap, data.item.key,
                    navigationObject.navigate.bind(
                        this,
                        navigationRoutes.changeReception.route, 
                        {
                            userId: data.item.userId,
                            receptionId: data.item.id
                        }
                    ))}
            />
        )
    };

    const renderWithAnimation = () => {
        return (
            <SwipeListView 
                data={receptions}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItems}
                leftOpenValue={80}
                rightOpenValue={-160}
                disableRightSwipe
            />
        )    
    };

    return (
        <View style={{paddingTop: 20}}>
            <DateTitle>
                {fromIndexOfMounthToMounthInVerb}
            </DateTitle>
            <ListBlock>
                {renderWithAnimation()}
            </ListBlock>
        </View>
    )
};

const ListBlock = styled.View`
    width: 100%;
    margin-top: 20px;
`;


