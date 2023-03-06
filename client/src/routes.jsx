import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import LayoutAdmin from "./containers/Admin/LayoutAdmin";
import Layout from "./containers/Layout/Layout";
import PersitLogin from "./library/PersitLogin";
import PrivivateRoute from "./library/PrivivateRoute";
import { ADDRESS_PAGE, ADMIN_PAGE, CART_PAGE, CATEGORY_PAGE, CHECKOUT_PAGE, DISCOUNT_PAGE, HOME_PAGE, LOGIN_PAGE, ORDER_PAGE, PASSWORD_PAGE, PRODUCT_ADMIN_PAGE, PRODUCT_DETAIL_ADMIN_PAGE, PRODUCT_DETAIL_PAGE, PROFILE_PAGE, REGISTER_PAGE, RESET_PASSWORD_PAGE, MEN_CATEGORY_PRODUCT_PAGE, ACCESSORIES_PAGE, PRODUCT_PAGE, ORDER_PAGE_ADMIN, PROFILTE_ADMIN, USER_ADMIN_PAGE, WOMEN_CATEGORY_PRODUCT_PAGE } from "./setting/constants";

const HomePage = lazy(() => import('./containers/Home/Home'))
// const MenProductPage = lazy(() => import('./containers/Products/Men/MenProducts'))
const MenCategoryPage = lazy(() => import('./containers/Products/Men/MenCategoryPage'))
const WomenCategoryPage = lazy(() => import('./containers/Products/Women/WomenProduct'))
const CartPage = lazy(() => import('./containers/Cart/Cart'))
const DetailPage = lazy(() => import('./containers/Products/ProductDetail'))

const AgentSettingPage = lazy(() => import('./containers/Agent/AccountSetting/AgentSetting'))
const AgentProfilePage = lazy(() => import('./containers/Agent/AccountSetting/AgentProfile'))
const AgentAddressPage = lazy(() => import('./containers/Agent/AccountSetting/AgentAddress'))
const AgentPasswordPage = lazy(() => import('./containers/Agent/AccountSetting/AgentPassword'))
const AgentOrderPage = lazy(() => import('./containers/Agent/AccountDetail/AgentOrder'))
const CheckOutPage = lazy(() => import('./containers/Checkout/Checkout'))

const LoginPage = lazy(() => import('./containers/Auth/Signin/SignIn'))
const RegisterPage = lazy(() => import('./containers/Auth/Signup/SignUp'))
const ResetPasswordPage = lazy(() => import('./containers/Auth/ResetPassword'))

// admin
const DashboardPage = lazy(() => import('./containers/Admin/Dashboard/Dashboard'))
const ProductAdminPage = lazy(() => import('./containers/Admin/Product/ListProduct'))
const ProductDetailAdminPage = lazy(() => import('./containers/Admin/Product/ProductDetail'))
const DiscountPage = lazy(() => import('./containers/Admin/Discount/Discount'))
const CategoryPage = lazy(() => import('./containers/Admin/Categories/Category'))
// const AccessoriesPage = lazy(() => import('./containers/Admin/Accessories/Accessories'))
const OrderPageAdmin = lazy(() => import('./containers/Admin/Order/Order'))
const NotFound = lazy(() => import('./containers/404/404'))
const ProfileAdminPage = lazy(() => import('./containers/Admin/ProflieAdmin/ProfileAdmin'))
const UserAdminPage = lazy(() => import('./containers/Admin/Users/ListUser'))
const LayoutProductPage = lazy(() => import('./containers/Products/LayoutProduct'))

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={HOME_PAGE} element={<Layout />}>
                <Route element={<PersitLogin />}>
                    <Route index element={
                        <React.Suspense fallback={<Loader />}>
                            <HomePage />
                        </React.Suspense>
                    } />
                    <Route path={PRODUCT_PAGE} element={
                        <React.Suspense fallback={<Loader />}>
                            <LayoutProductPage />
                        </React.Suspense>
                    } />
                    <Route path={MEN_CATEGORY_PRODUCT_PAGE} element={
                        <React.Suspense fallback={<Loader />}>
                            <MenCategoryPage />
                        </React.Suspense>
                    } />
                    <Route path={WOMEN_CATEGORY_PRODUCT_PAGE} element={
                        <React.Suspense fallback={<Loader />}>
                            <WomenCategoryPage />
                        </React.Suspense>
                    } />
                    <Route path={PRODUCT_DETAIL_PAGE} element={
                        <React.Suspense fallback={<Loader />}>
                            <DetailPage />
                        </React.Suspense>
                    } />
                    <Route element={<PrivivateRoute allowedRoles={["user", "admin"]} />}>
                        <Route path={CART_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <CartPage />
                            </React.Suspense>
                        } />
                        <Route path={PROFILE_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <AgentSettingPage />
                            </React.Suspense>
                        }>
                            <Route path={PROFILE_PAGE} element={
                                <React.Suspense fallback={<Loader />}>
                                    <AgentProfilePage />
                                </React.Suspense>
                            } />
                            <Route path={ADDRESS_PAGE} element={
                                <React.Suspense fallback={<Loader />}>
                                    <AgentAddressPage />
                                </React.Suspense>
                            } />
                            <Route path={PASSWORD_PAGE} element={
                                <React.Suspense fallback={<Loader />}>
                                    <AgentPasswordPage />
                                </React.Suspense>
                            } />
                            <Route path={ORDER_PAGE} element={
                                <React.Suspense fallback={<Loader />}>
                                    <AgentOrderPage />
                                </React.Suspense>
                            } />
                        </Route>
                        <Route path={CHECKOUT_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <CheckOutPage />
                            </React.Suspense>
                        } />
                    </Route>
                </Route>

                <Route path={LOGIN_PAGE} element={
                    <React.Suspense fallback={<Loader />}>
                        <LoginPage />
                    </React.Suspense>
                } />
                <Route path={REGISTER_PAGE} element={
                    <React.Suspense fallback={<Loader />}>
                        <RegisterPage />
                    </React.Suspense>
                } />
                <Route path={RESET_PASSWORD_PAGE} element={
                    <React.Suspense fallback={<Loader />}>
                        <ResetPasswordPage />
                    </React.Suspense>
                } />
                <Route path="*" element={
                    <React.Suspense fallback={<Loader />}>
                        <NotFound />
                    </React.Suspense>
                } />
            </Route>
            <Route path={ADMIN_PAGE} element={<LayoutAdmin />}>
                <Route element={<PersitLogin />}>
                    <Route element={<PrivivateRoute allowedRoles={['admin']} />}>
                        <Route index element={
                            <React.Suspense fallback={<Loader />}>
                                <DashboardPage />
                            </React.Suspense>
                        } />
                        <Route path={PRODUCT_ADMIN_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <ProductAdminPage />
                            </React.Suspense>
                        } />
                        <Route path={PRODUCT_DETAIL_ADMIN_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <ProductDetailAdminPage />
                            </React.Suspense>
                        } />
                        <Route path={CATEGORY_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <CategoryPage />
                            </React.Suspense>
                        } />
                        <Route path={DISCOUNT_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <DiscountPage />
                            </React.Suspense>
                        } />
                        {/* <Route path={ACCESSORIES_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <AccessoriesPage />
                            </React.Suspense>
                        }
                        /> */}
                        <Route path={ORDER_PAGE_ADMIN} element={
                            <React.Suspense fallback={<Loader />}>
                                <OrderPageAdmin />
                            </React.Suspense>
                        }
                        />
                        <Route path={PROFILTE_ADMIN} element={
                            <React.Suspense fallback={<Loader />}>
                                <ProfileAdminPage />
                            </React.Suspense>
                        }
                        />
                        <Route path={USER_ADMIN_PAGE} element={
                            <React.Suspense fallback={<Loader />}>
                                <UserAdminPage />
                            </React.Suspense>
                        }
                        />
                    </Route>
                </Route>
            </Route>

            {/* </Route> */}
        </Routes>
    )
}