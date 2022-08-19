import FoodyLogo from "../../images/foody-logo.svg";
import FormImage from "../../images/login-image.svg";
import LoginStyle from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../store/slice/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Dropdowns from "../../utils/Dropdowns";
import { useTranslation } from "react-i18next";
function LoginPage() {
  const { t } = useTranslation();
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Must be 8 characters or more")
        .max(13, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: (values) => {
      if (
        values.username === login.user.userName &&
        values.password === login.user.password
      ) {
        localStorage.setItem("isLogin", true);
        dispatch(setLogin(true));
        navigate("/admin/dashboard");
      }

      toast.success("validation confirmed", {
        position: "bottom-right",
        autoClose: 1055,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      formik.handleReset();
    },
  });
  return (
    <>
      <div className={LoginStyle.container}>
        <div className={LoginStyle.logoImage}>
          <img src={FoodyLogo} alt="foody logo" />
        </div>

        <main>
          <div className={LoginStyle.formContainer}>
            <div className={LoginStyle.formInputContainer}>
              <div className={LoginStyle.formElements}>
                <h2>{t("welcome_login")}</h2>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    name="username"
                    placeholder={t("login_username_placeholder")}
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <span className={LoginStyle.errorMessage}>
                      {formik.errors.username}
                    </span>
                  ) : null}
                  <div className="d-flex justify-content-center">
                    <input
                      placeholder={t("login_username_password")}
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {
                      <span
                        className="display-4 m-1 text-light"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VscEye /> : <VscEyeClosed />}
                      </span>
                    }
                  </div>

                  {formik.touched.password && formik.errors.password ? (
                    <span className={LoginStyle.errorMessage}>
                      {formik.errors.password}
                    </span>
                  ) : null}
                  <button className={LoginStyle.submitBtn} type="submit">
                    {" "}
                    {t("login_sign_in")}
                  </button>
                </form>
              </div>
            </div>
            <div className={LoginStyle.formImageContainer}>
              <div className={LoginStyle.languageButton}>
                <Dropdowns />
              </div>
              <div className={LoginStyle.formImage}>
                <img src={FormImage} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}

export default LoginPage;
