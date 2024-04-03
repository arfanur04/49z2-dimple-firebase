import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
	//
	const [user, setUser] = useState(null);

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const loggedUser = result.user;
				console.log(`loggedUser:`, loggedUser);
				setUser(loggedUser);
			})
			.catch((err) => console.error("err", err));
	};

	return (
		<>
			<h1>firebase + React</h1>
			<button onClick={handleGoogleSignIn}>Google Sign In</button>
			{user && (
				<div className="card">
					<h1>User: {user.displayName}</h1>
				</div>
			)}
		</>
	);
}

export default App;
