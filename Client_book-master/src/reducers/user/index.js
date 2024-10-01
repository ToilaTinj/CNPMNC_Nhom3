import * as types from '../../constants/actionsType';
var initialState = {};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER: //Nếu action.type là types.SET_USER, reducer sẽ trả về một đối tượng mới với các thuộc tính từ action.user. Điều này có nghĩa là trạng thái người dùng sẽ được cập nhật với thông tin mới từ action.user
            return { ...action.user };
        default: return state;
    }
}
//Reducer user cập nhật trạng thái người dùng dựa trên hành động SET_USER.
//Nếu hành động không phải là SET_USER, trạng thái hiện tại sẽ được giữ nguyên.
