import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";
import {
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

export function HeroPresentation() {
 
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-full w-screen place-items-center bg-white relative px-8 py-8 lg:mb-36">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left pt-32">
            <div className="mb-8 inline-flex items-center">
              <Typography
                variant="small"
                color="blue-gray"
                className="mr-3 py-0.5 px-3 font-bold uppercase border-r border-dark"
              >
                Peer-Reviewed
              </Typography>
              <Typography
                color="blue-gray"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Global R Users Group
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              Peer-Reviewed Content from a Global Community
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              Every article here is reviewed by members of the worldwide R Users Group—<b>97 groups, 79,000+ members, 41 countries</b>. This is your trusted source for R insights, best practices, and community-driven knowledge.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#blog-posts">
                <Button color="blue" className="flex items-center">
                  Explore Peer-Reviewed Posts
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="absolute -top-10 right-0 w-1/2 flex justify-center items-center">
            <img src={`${import.meta.env.BASE_URL.replace(/\/?$/, '/') + 'custom/r-user-group.png'}`} alt="R User Group Community" className="w-64 h-64 object-contain" />
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
