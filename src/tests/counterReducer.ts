
const initialState = 0;

interface IAddAction {
    type: 'add',
    payload: number
}

interface IResetAction {
    type: 'reset',
}

export type Action = IAddAction | IResetAction;
const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'reset':
            return 0;
        default:
            return state;

    }
}

export default counterReducer;