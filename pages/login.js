import { useAuth } from "@/authcontext/authcontext";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/style.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoader] = useState(false);

  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setLoader(true);
      router.push("/movie");
    } catch (error) {
      console.log(error);
      setError("Failed to login!");
      setLoader(false);
    }
  };
  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      router.push("/movie");
    } catch (error) {}
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {error && (
          <p className="error text-black text3xl bg-red-300 py-2 px-2 mt-2 border-rounded">
            {error}
          </p>
        )}
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              className={styles.inputfield}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              className={styles.inputfield}
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className={styles.btnPrimary}
          >
            Login
          </button>
        </form>

        <p className="text-center text-black text-1xl py-2 or">0r</p>
        <div className="postion-box">
          <div className="text-center">
            <button
              className="btn-google text-1xl "
              onClick={handleLoginWithGoogle}
            >
              <span>LOGIN WITH </span>

              <img
                className="google-icon"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968863.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
