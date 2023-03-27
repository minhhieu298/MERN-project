import { callAPI } from "../../api/callApi";
import { CREATE_NEW_ORDER, GET_CHART, GET_ORDER_USER, GET_ORDER_USER_ADMIN, UPDATE_ORDER_ADMIN, UPDATE_STATUS_PAYMENT } from "../constants";

export function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '?';
  keys.forEach((key) => {
    if (urlData[key] !== null && urlData[key] !== '') {
      search += `${key}=${urlData[key]}&`;
    }
  });
  return search.substring(0, search.length - 1);
}

export function setStateToUrl(state) {
  let urlData = {};
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'type':
          urlData[key] =
            state[key] ? state[key] : null;
          break;

        case 'keyword':
          urlData[key] =
            state[key] ? state[key] : null;
          break;

        case 'status':
          urlData[key] =
            state[key] ? state[key] : null;
          break;

        case 'sort':
          urlData[key] =
            state[key] ? state[key] : null;
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }
  return createUrl(urlData)
}

export const getOrderUser = ({ url, token }) => async (dispatch) => {
  const res = await callAPI.get(`/v2/get-user-order${setStateToUrl(url)}`, {
    headers: {
      Authorization: token,
    },
  });
  if (res.status === 200) {
    const { orders } = res.data;
    dispatch({
      type: GET_ORDER_USER,
      payload: orders,
    });
  }
};

export const createOrder = (payload, token) => async (dispatch) => {
  // console.log(payload);
  const res = await callAPI.post("/v2/create-new-order", payload, {
    headers: {
      Authorization: token,
    },
  });
  if (res.status === 201) {
    // console.log(res.data);
    const { order } = res.data;
    dispatch({
      type: CREATE_NEW_ORDER,
      payload: order,
    });
    dispatch(getOrderUser({ token }))
  }
};

//cancel order 
export const updateStatusPayment = (orderId, token) => async (dispatch) => {
  const res = await callAPI.post(
    "/v2/update-status-order",
    { orderId, status: "cancel" },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  if (res.status === 201) {
    dispatch({ type: UPDATE_STATUS_PAYMENT });
    dispatch(getOrderUser({ token }));
  }
};

// admin
export const getOrderAdmin = ({ url, token }) => async (dispatch) => {
  // console.log(url);
  const res = await callAPI.post(
    `/v1/list-orders${setStateToUrl(url)}`, {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
  if (res.status === 200) {
    const { data } = res.data;
    dispatch({
      type: GET_ORDER_USER_ADMIN,
      payload: {
        orders: data?.orders,
        totalOrder: data?.totalOrder
      }
    })
  }
}

export const updateOrderAdmin = (orderId, type, token, url) => async (dispatch) => {
  const res = await callAPI.post('/v1/update-order', {
    orderId, type
  }, {
    headers: {
      Authorization: token,
    },
  })
  if (res.status === 200) {
    dispatch({
      type: UPDATE_ORDER_ADMIN
    })
    dispatch(getOrderAdmin({ url, token }))
  }
}

export const getChartData = (token) => async (dispatch) => {
  const res = await callAPI.get('/v1/get-chart', {
    headers: {
      Authorization: token,
    },
  })
  if (res.status === 200) {
    const { chart } = res.data
    dispatch({
      type: GET_CHART,
      payload: chart
    })
  }
}