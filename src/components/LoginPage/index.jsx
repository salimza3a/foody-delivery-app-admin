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
function LoginPage() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(login, "login");

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
                <h2>Welcome Admin</h2>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <span className={LoginStyle.errorMessage}>
                      {formik.errors.username}
                    </span>
                  ) : null}

                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className={LoginStyle.errorMessage}>
                      {formik.errors.password}
                    </span>
                  ) : null}
                  <button type="submit"> sign in</button>
                </form>
              </div>
            </div>
            <div className={LoginStyle.formImageContainer}>
              <div className={LoginStyle.languageButton}>
                <img
                  src="https://toppng.com/uploads/preview/olf-flag-with-pole-vector-golf-flag-icon-11562881002ezceap6bqe.png"
                  width={50}
                  height={50}
                  alt=""
                />
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
