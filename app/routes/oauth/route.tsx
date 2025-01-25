import "./oauth_page.css";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface LoaderData{
    access_token: string,
    state: string
};

export async function loader({request}: LoaderFunctionArgs){
    const url = new URL(request.url);
    const accessToken = url.searchParams.get("access_token");
    const stateValue = url.searchParams.get("state");

    return{
        "access_token": accessToken,
        "state": stateValue
    };
}

export default function OAuthPage(){
    const loaderData = useLoaderData<LoaderData>();

    console.log("access token is: ", loaderData.access_token);
    console.log("state value is: ", loaderData.state);
    
    return(
        <div className="main_outer_oauth_page_container">
            <div className="oauth_page_container">
                <h2>This page will handle all redirects to get the user tokens</h2>
            </div>
        </div>
    )
}