import { useDispatch, useSelector } from 'react-redux'

const useStore = () => {
    const dispatch = useDispatch()
    const { products, meta, product, error_server } = useSelector(state => state.products)
    const { auth, token, isUser, isAdmin, users, total, user } = useSelector(state => state.auth)
    const { addresses } = useSelector(state => state.addresses)
    const { categories, error } = useSelector(state => state.categories)
    const { accessories } = useSelector(state => state.initData)
    const { cartItems } = useSelector(state => state.cart)
    const { orders, totalOrder, chart } = useSelector(state => state.order)
    return {
        dispatch,
        meta,
        products,
        product,
        auth,
        token,
        isAdmin,
        isUser,
        addresses,
        categories,
        accessories,
        cartItems,
        orders,
        totalOrder,
        users,
        total,
        user,
        error,
        error_server,
        chart
    }
}

export default useStore