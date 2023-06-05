const Navbar = () => {
  return (
    <div className="navbar py-4 px-4">
      <header className="flex justify-between items-centerr">
        <div className="logo">
          <h2 className="text-red-500 text-3xl">MOVIE SEARCH</h2>
        </div>
        <ul className="flex items-center gap-4 ">
          <li>
            <a href="#" className="text-white-800">
              Home
            </a>
          </li>

          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="/login">
              <button className="btn signin">Sign In</button>
            </a>
          </li>
          <li>
            <a href="signup">
              <button className="btn signup">Sign Up</button>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img
              className="profile"
              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-260nw-1913928688.jpg"
              alt=""
            />
            <span className="userName">Mahmudul</span>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
