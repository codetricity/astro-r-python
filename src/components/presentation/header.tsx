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
                Data Science
              </Typography>
              <Typography
                color="blue-gray"
                variant="small"
                className="flex items-center font-bold uppercase"
              >
                Statistical Computing
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 lg:mr-32 leading-tight font-black"
            >
              R & Python: The Right Tool for the Right Job
            </Typography>
            <Typography variant="lead" color="blue-gray" className="lg:pr-32">
              We believe both R and Python are powerful tools, each with unique strengths. Our mission is to help data scientists, analysts, and researchers make informed choices by showcasing R's superior capabilities in statistical computing, data visualization, and reproducible research.<br/><br/>
              Explore practical comparisons, real-world examples, and domain-specific insights to discover where R truly excels—especially in academic and research settings.
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href={`${import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + "/"}blog/`}>
                <Button color="blue" className="flex items-center">
                  Read the Blog
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className="absolute -top-10 right-0 w-1/2 flex justify-center items-center">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
              <rect x="15" y="60" width="15" height="45" rx="4" fill="#4fc3f7"/>
              <rect x="35" y="40" width="15" height="65" rx="4" fill="#66bb6a"/>
              <rect x="55" y="20" width="15" height="85" rx="4" fill="#ffb300"/>
              <rect x="75" y="50" width="15" height="55" rx="4" fill="#e57373"/>
              <rect x="95" y="70" width="15" height="35" rx="4" fill="#ba68c8"/>
              <circle cx="60" cy="60" r="40" stroke="#ffb300" strokeWidth="6" strokeDasharray="60 40 60 40"/>
              <polyline points="20,100 40,80 60,90 80,60 100,80" fill="none" stroke="#4fc3f7" strokeWidth="3"/>
              <polyline points="20,90 40,60 60,70 80,40 100,60" fill="none" stroke="#66bb6a" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default HeroPresentation;
