import FoodyLogo from "../../images/foody-logo.svg";
import FormImage from "../../images/login-image.svg";
import LoginStyle from "./login.module.css";
function LoginPage() {
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
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <button> sign in</button>
              </div>
            </div>
            <div className={LoginStyle.formImageContainer}>
              <div className={LoginStyle.languageButton}>
                <img
                  src="https://toppng.com/uploads/preview/olf-flag-with-pole-vector-golf-flag-icon-11562881002ezceap6bqe.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={LoginStyle.formImage}>
                <img src={FormImage} alt="image that describes form " />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginPage;
