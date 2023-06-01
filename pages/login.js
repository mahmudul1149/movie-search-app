import { useAuth } from "@/authcontext/authcontext";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/style.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoader] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setLoader(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("Failed to login!");
      setLoader(false);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {error && (
          <p className="error text-black text3xl bg-red-300 py-2 px-2 mt-2 border-rounded">
            {error}
          </p>
        )}
        <h2 className="text-black text-3xl">Create your account</h2>
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
            <button className="btn-google text-1xl ">
              LOGIN UP WITH GOOGLE
            </button>
          </div>
          <div className="text-center">
            <img
              className="google-icon"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
