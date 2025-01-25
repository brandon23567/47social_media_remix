import "./oauth_page.css";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from "react";

interface LoaderData{
    access_token: string,
    state: string
};

// export async function loader({request}: LoaderFunctionArgs){
//     const url = new URL(request.url);
//     const hash = url.hash.substring(1);

//     const params = new URLSearchParams(hash);

//     const accessToken = params.get("access_token");
//     const stateValue = params.get("state");

//     return{
//         "access_token": accessToken,
//         "state": stateValue
//     };
// }

export default function OAuthPage(){
    // const loaderData = useLoaderData<LoaderData>();
    const [accessToken, setAccessToken] = useState<string | null>("");
    const [stateValue, setStateValue] = useState<string | null>("");

    useEffect(() => {
        const hash = window.location.hash.substring(1); // Remove the leading '#'
        const params = new URLSearchParams(hash);

        setAccessToken(params.get("access_token"));
        setStateValue(params.get("state"));

        console.log("Access Token:", params.get("access_token"));
        console.log("State:", params.get("state"));

    }, []);

    return(
        <div className="main_outer_oauth_page_container">
            <div className="oauth_page_container">
                <h2>This page will handle all redirects to get the user tokens</h2>
            </div>
        </div>
    )
}