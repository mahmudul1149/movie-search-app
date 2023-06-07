import { useAuth } from "@/authcontext/authcontext";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const loggedOut = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar py-4 px-4">
      <header className="flex justify-between items-center">
        <div className="logo">
          <h2 className="text-red-500 text-3xl">MOVIE SEARCH</h2>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          {currentUser && (
            <li>
              <Link href="#">Movies</Link>
            </li>
          )}

          {!currentUser ? (
            <>
              <li>
                <Link href="/login">
                  <button className="btn signin">Sign In</button>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <button className="btn signup">Sign Up</button>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="#">
                <div className="flex items-center gap-2" onClick={loggedOut}>
                  <img
                    className="profile"
                    src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1913928688.jpg"
                    alt=""
                  />
                  <span className="userName">{currentUser.displayName}</span>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
