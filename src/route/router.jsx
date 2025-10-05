import { createBrowserRouter } from "react-router";
import AdminSidebar from "../sidebar/AdminSidebar";
import NotFoundPage from "../components/not-found-page/NotFoundPage";
import AllProperties from "../pages/admin/properties/AllProperties";
import AddProperties from "../pages/admin/properties/AddProperties";
import AdminLoginPage from "../auth/admin-auth/AdminLoginPage";
import HomePage from "../pages/admin/home/HomePage";
import AddAgents from "../pages/admin/agents/AddAgents";
import AllAgents from "../pages/admin/agents/AllAgents";
import AllClients from "../pages/admin/clients/AllClients";
import ClientRequest from "../pages/admin/clients/ClientRequest";
import PrivacyUpload from "../pages/admin/content/PrivacyUpload";
import BlogUpload from "../pages/admin/content/BlogUpload";
import AboutUpload from "../pages/admin/content/AboutUpload";
import TermsUpload from "../pages/admin/content/TermsUpload";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <AdminLoginPage/>
    },
    {
        path : "/admin-dashboard",
        element : <AdminSidebar></AdminSidebar>,
        children : [
            {
                path : "",
                element : <HomePage></HomePage>
            },
            {
                path : "properties",
                element : <AllProperties></AllProperties>
            },
            {
                path : "properties/add",
                element : <AddProperties></AddProperties>
            },
            {
                path : "agents/add",
                element : <AddAgents></AddAgents>
            },
            {
                path : "agents",
                element : <AllAgents></AllAgents>
            },
            // clients 

            {
                path : "clients",
                element : <AllClients></AllClients>
            },
            {
                path : "clients/requests",
                element : <ClientRequest></ClientRequest>
            },
            // content 
            {
                path : "content/privacy",
                element : <PrivacyUpload></PrivacyUpload>
            },
            {
                path : "content/blogs",
                element : <BlogUpload></BlogUpload>
            },
            {
                path : "content/about",
                element : <AboutUpload></AboutUpload>
            },
            {
                path : "content/terms",
                element : <TermsUpload/>
            }
        ]
    },
    

















    {
        path : "*",
        element : <NotFoundPage></NotFoundPage>
    }

])