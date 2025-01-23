import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "47SocialMedia" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div>
			<h1>Hello brandon</h1>

			<Link to={"/dashboard"}>Go to dashboard page</Link>
			<Link to="/user_signup">Signup page</Link>
			<Link to="/user_signin">Signin page</Link>
		</div>
	);
}
