import API from "../../../Constants/API";
import { LoginUser, TokenId, UserDetail } from "../../Reducers/AuthReducer/AuthReducer";

const registerUser = async (data, setLoad) => {
    await API.post(`/user/signUp`, data)
        .then(e => {
            if (e?.data?.success == false) {
                setLoad(false);
                alert(e?.data?.data?.errorResult);
            } else {
                alert("Account created successfully");
                setLoad(false);
            };
        })
        .catch(err => {
            // console.log("registerUser Error", err?.response?.data);
            console.log("registerUser Error", err);
            setLoad(false);
            // alert("Something went wrong");
        });
};

const getCategories = async (setGetCat) => {
    await API.get(`/category/getCategory`)
        .then(e => {
            setGetCat(e?.data?.data?.successResult);
        }).catch(err => {
            console.log("getCategories error", err);
        });
};

const LoginUserApi = async (data, dispatch, setLoad) => {
    await API.post(`user/signIn`, data)
        .then(e => {
            if (e?.data?.success == true) {
                dispatch(LoginUser(true));
                dispatch(TokenId(e?.data?.data?.successResult?.token));
                dispatch(UserDetail(e?.data?.data?.successResult?.user));
            };
            if (e?.data?.data?.errorResult == "incorrect password") {
                alert("Please enter correct password");
                setLoad(false);
            };
        })
        .catch(err => {
            console.log("LoginUSer error", err);
            setLoad(false);
        });
};

export {
    registerUser,
    getCategories,
    LoginUserApi,
};