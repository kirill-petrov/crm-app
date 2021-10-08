import {
  CREATE_USER,
  CREATE_ITEM,
  CREATE_WORK_CENTER,
  EDIT_WORK_CENTER,
  EDIT_USER,
  EDIT_ORDER,
  EDIT_ITEM,
  GET_WORK_CENTERS,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  GET_LIST_OF_USERS,
  GET_LIST_OF_ORDERS,
  GET_LIST_OF_ITEMS,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAIL,
  LOGOUT_USER,
  CREATE_ORDER,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  CLEAR_MESSAGE,
  TAKE_ORDER_IN_WORK,
  GET_ORDER_IN_WORK,
  SUBMIT_ITEM_PARTS,
  CLOSE_ORDER,
  GET_ORDER_LIST,
  GET_RANDOM_ORDER_NUM,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  GET_LIST_OF_ITEMS_SUCCESS,
  GET_LIST_OF_ITEMS_FAIL,
  EDIT_ORDER_SUCCESS,
  EDIT_ORDER_FAIL,
  CREATE_WORK_CENTER_SUCCESS,
  CREATE_WORK_CENTER_FAIL,
  EDIT_WORK_CENTER_SUCCESS,
  EDIT_WORK_CENTER_FAIL,
} from '../actionTypes.jsx';

const initState = {
  load: false,
  error: false,
  message: '',
  data: '',
  userList: [],
  itemList: [],
  workCenterList: [],
  orderList: [],
  currentOrderId: null,
  currentOrder: null,
  user: null,
  jobtitle: null,
  iduser: null,
  wccode: null,
  status: null,
  wcid: null,
  randomOrderNum: null,
};

const persistedState = JSON.parse(window.localStorage.getItem('state')); // loadState

function reducer(state = persistedState ?? initState, action) {
  switch (action.type) {
    // CREATE USER
    case CLEAR_MESSAGE:
      return {
        ...state,
        error: false,
        message: '',
      };
    case CREATE_USER:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    // CREATE USER - END
    // CREATE ITEM
    case CREATE_ITEM:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case CREATE_ITEM_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    // CREATE ITEM - END
    case CREATE_WORK_CENTER:
      return {
        ...state,
        load: true,
        error: false,
      };
    case CREATE_WORK_CENTER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    case CREATE_WORK_CENTER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case GET_WORK_CENTERS:
      return {
        ...state,
        workCenterList: action.payload,
      };
    case GET_LIST_OF_USERS:
      return {
        ...state,
        userList: action.payload,
      };
    case GET_LIST_OF_ORDERS:
      return {
        ...state,
        orderList: [...action.payload.message],
      };
    case GET_LIST_OF_ITEMS:
      return {
        ...state,
        itemList: [],
      };
    case GET_LIST_OF_ITEMS_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        itemList: [...action.payload],
      };
    case GET_LIST_OF_ITEMS_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case EDIT_WORK_CENTER:
      /* eslint-disable */
      return {
        ...state,
        load: true,
        error: false,
      };
    case EDIT_WORK_CENTER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    case EDIT_WORK_CENTER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };

    case EDIT_USER:
      console.log('reducer');
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case EDIT_USER_SUCCESS:
      console.log(action);
      return {
        ...state,
        load: false,
        message: action.payload,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };

    case EDIT_ORDER:
      return {
        ...state,
        load: true,
        error: false,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        message: action.payload,
      };
    case EDIT_ORDER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    case EDIT_ITEM:
      return {
        ...state,
        // itemList: copyItemList,
      };

    // LOGIN USER
    case LOGIN_USER:
      return {
        ...state,
        load: true,
        error: false,
        message: '',
      };
    case GET_ORDER_LIST:
      return {
        ...state,
        orderList: [...action.payload.message],
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        load: false,
        error: false,
        user: action.payload.data.name,
        userlastname: action.payload.data.lastname,
        jobtitle: action.payload.data.jobtitle,
        iduser: action.payload.data.id,
        wccode: action.payload.data.wccode,
        status: action.payload.data.status,
        wcid: action.payload.data.wcid,
        message: action.payload.message,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        load: false,
        error: true,
        message: action.payload,
      };
    // LOGIN USER - END
    // LOGOUT USER
    case LOGOUT_USER:
      return {
        ...initState,
      };
    // LOGIN USER - END
    // GET ITEMS
    case GET_LIST_OF_ITEMS:
      return {
        ...state,
        error: false,
        itemList: [...action.payload],
      };
    // GET ITEMS - END
    // CREATE GET_ORDERS_LIST
    case CREATE_ORDER:
      return {
        ...state,
        error: false,
        load: true,
        message: '',
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        error: true,
        load: false,
        message: action.payload,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        error: false,
        load: false,
        randomOrderNum: null,
        message: action.payload,
      };
    // CREATE ORDER - END
    case TAKE_ORDER_IN_WORK:
      console.log('reducer');
      console.log(action.payload);
      return {
        ...state,
        currentOrderId: action.payload.orderId,
        currentOrder: null,
      };
    case GET_ORDER_IN_WORK:
      return {
        ...state,
        currentOrder: action.payload.data,
        currentOrderId: action.payload.data.id,
      };
    case SUBMIT_ITEM_PARTS:
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          ...action.payload.data,
        },
      };
    case CLOSE_ORDER:
      return {
        ...state,
        currentOrderId: null,
        currentOrder: null,
      };
    case GET_RANDOM_ORDER_NUM:
      return {
        ...state,
        randomOrderNum: action.payload,
      };
    /* eslint-enable */
    default:
      return state;
  }
}

export default reducer;
