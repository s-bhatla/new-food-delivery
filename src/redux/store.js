import {createStore} from 'redux'

const initialStore = {
    orderlist: [],
    count: 0
}

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const RESET = 'RESET';
export const ADD_ALREADY = 'ADD_ALREADY';
export const WRITE_TOTAL = 'WRITE_TOTAL'

const reducer = (state, action) => {
    console.log("state->", state)
    console.log("action->", action)
    if(action.type === ADD){
        return {
            ...state,
            orderlist: [...state.orderlist, action.payload],
            count: state.count+1
        }
    }
    if(action.type === ADD_ALREADY){
        let newlist = state.orderlist
        for(const i of newlist){
            console.log("i.data.name",i.data.name)
            console.log("action.payload.data.name",action.payload.data.name)
            if(i.data.name === action.payload.data.name){
                i.dishcount++;
            }
        }
        console.log("newlist", newlist)
        return {
            ...state,
            orderlist: newlist,
            count: state.count+1
        }
    }
    if(action.type === REMOVE){
        let newlist = state.orderlist
        for(const i of newlist){
            if(i.data.name === action.payload.name){
                if(i.dishcount === 1){
                    newlist = state.orderlist.filter((item)=> {return item.data.name !== i.data.name})
                }
                else{
                    i.dishcount--;
                }
            }
        }
        return {
            ...state,
            orderlist: newlist,
            count : state.count - 1
        }
    }
    if(action.type === RESET){
        return {
            orderlist: [],
            count: 0
        }
    }
    return state;
}

export const store = createStore(reducer, initialStore)