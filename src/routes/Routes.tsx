import { createBrowserRouter } from "react-router-dom";
import { HomeComp } from "../pages/home/HomeComp";
import HomeLayout from "../layout/HomeLayout";
import SignInLayout from "../layout/SignInLayout";
import SignIn from "../pages/signIn/SignIn";
import Signi1 from "../pages/signIn/Signi1";
import Signin2 from "../pages/signIn/Signin2";
import FinishSignin from "../pages/finishHome/FinishSigninComp";
import Step1 from "../pages/finishHome/Step1";
import HomePageComp from "../pages/home/HomePageComp";
import SignUpLayout from "../layout/SignUpLayout";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
    ],
  },

  {
    path: "/ homepage",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePageComp />,
      },
    ],
  },

  {
    path: "/ signin",
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },

  {
    path: "/ signin1",
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <Signi1 />,
      },
    ],
  },

  {
    path: "/ signin2",
    element: <SignInLayout />,
    children: [
      {
        index: true,
        element: <Signin2 />,
      },
    ],
  },

  {
    path: "/ Finishsignin",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <FinishSignin />,
      },
    ],
  },

  {
    path: "/ step1",
    element: <SignUpLayout />,
    children: [
      {
        index: true,
        element: <Step1 />,
      },
    ],
  },
]);
