
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // check if the user has a session token
    const token = localStorage.getItem('sessionToken');
    if (token) {
      // set the user as logged in
      setIsLoggedIn(true);

      // start a timer to automatically log out the user after the token expires
      const timer = setTimeout(() => {
        localStorage.removeItem('sessionToken');
        setIsLoggedIn(false);
      }, 30 * 60 * 1000); // expire after 30 minutes

      // save the timer ID in state so we can clear it when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLogin = () => {
    // generate a new session token
    const token = generateRandomString(32);

    // save the token in local storage as a session cookie
    localStorage.setItem('sessionToken', token);

    // set the user as logged in
    setIsLoggedIn(true);

    // start a timer to automatically log out the user after the token expires
    const timer = setTimeout(() => {
      localStorage.removeItem('sessionToken');
      setIsLoggedIn(false);
    }, 30 * 60 * 1000); // expire after 30 minutes

    // save the timer ID in state so we can clear it when the component unmounts
    return () => clearTimeout(timer);
  };

  const handleLogout = () => {
    // remove the session token from local storage
    localStorage.removeItem('sessionToken');

    // set the user as logged out
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Log in</button>
      )}
    </div>
  );
}

