import { Action, ActionTypes } from '../actions/actionTypes';
import { OriginsState } from '../types';

const initialState: OriginsState = {
    items: [],
    showPanel: false,
    originToAdd: '',
    originToDelete: '',
    showCreateDefaultOriginsDialog: false,
    showDeleteOriginsDialog: false,
    requestResult: '',
    isRequestSuccess: false,
    ErrorMessage: ''
};

export const originsReducer = (state: OriginsState = initialState, action: Action): OriginsState => {
    switch (action.type) {
        case ActionTypes.FETCH_ORIGINS_REQUEST:
            return state;
        case ActionTypes.FETCH_ORIGINS_SUCCESS:
            return {
                ...state,
                ErrorMessage: '',
                items: action.payload
            };
        case ActionTypes.FETCH_ORIGINS_ERROR:
            return {
                ...state,
                ErrorMessage: action.payload
            };
        case ActionTypes.ADD_NEW_ORIGIN_ERROR:
            return {
                ...state,
                isRequestSuccess: false,
                requestResult: action.payload
            };
        case ActionTypes.ADD_NEW_ORIGIN_SUCCESS:
            return {
                ...state,
                isRequestSuccess: true,
                requestResult: 'Done'
            };
        case ActionTypes.TOGGLE_DEFAULT_ORIGIN_DIALOG:
            return {
                ...state,
                showCreateDefaultOriginsDialog: action.payload
            };
        case ActionTypes.CREATE_DEFAULT_ORIGIN_REQUEST:
            return {
                ...state,
                showCreateDefaultOriginsDialog: false
            };
        case ActionTypes.TOGGLE_DELETE_ORIGIN_DIALOG:
            return {
                ...state,
                showDeleteOriginsDialog: action.payload
            };
        case ActionTypes.TOGGLE_ORIGIN_PANEL:
            return {
                ...state,
                showPanel: action.payload,
                requestResult: ''
            };
        case ActionTypes.SET_ORIGIN_TO_DELETE:
            return {
                ...state,
                originToDelete: action.payload
            };
        case ActionTypes.DELETE_ORIGIN_REQUEST:
            return {
                ...state,
                showDeleteOriginsDialog: false
            };
        case ActionTypes.SET_ORIGIN_TO_ADD:
            return {
                ...state,
                originToAdd: action.payload
            };
        default: return state;
    }
};
