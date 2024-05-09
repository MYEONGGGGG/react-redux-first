let initialState = {
    count: 0,
    value: null
}

// reducer는 store에게 항상 반환해줘야한다.
function reducer(state = initialState, action) {
    // dispatch 가 던져준 action 을 받음
    console.log('dispatch 가 던져준 action 을 받음: ', action);

    if (action.type === "INCREMENT") {
        // return 값을 이용하여 state의 값을 변경한다.
        return {...state, count : state.count + 1, value: '증가'};

        // ...state 로 표기하는 이유?  *기본적으로 사용하는게 좋다.
        // store에 state가 여러개일 경우,
        // 다른 state값은 유지하면서 변경하고자하는 특정값(ex: count)만 변경한다.
        // => 객체내용을 복사하여 새로운 객체에 새로운 값을 전달
    }
    else if (action.type === "DECREMENT") {
        return {...state, count : state.count - 1, value: '감소'};
    }
    else if (action.type === "RESET") {
        return {...state, count : 0, value: '초기화'};
    }

    // if 조건에 해당하지 않을 경우
    // 기본적으로 반환되는 값
    return { ...state }


    // switch문 작성 예시
    // switch (action.type) {
    //     case "INCREMENT":
    //         return {...state, count : state.count + 1, value: '증가'};
    //     case "DECREMENT":
    //         return {...state, count : state.count - 1, value: '감소'};
    //     case "RESET":
    //         return {...state, count : 0, value: '초기화'};
    //
    //     default:
    //         return { ...state }
    // }
}

export default reducer;