import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-github",
    link: "https://github.com/",
  },
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://linkedin.com/",
  },
  {
    icon: "fab fa-r-project",
    link: "https://www.r-project.org/",
  },
];

const COMPANY = [
  {
    name: "About R",
    link: "https://www.r-project.org/about.html",
  },
  {
    name: "CRAN",
    link: "https://cran.r-project.org/",
  },
  {
    name: "Bioconductor",
    link: "https://bioconductor.org/",
  },
  {
    name: "RStudio",
    link: "https://posit.co/",
  },
];

const HELP = [
  {
    name: "R Documentation",
    link: "https://www.r-project.org/other-docs.html",
  },
  {
    name: "R Help",
    link: "https://stat.ethz.ch/mailman/listinfo/r-help",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/questions/tagged/r",
  },
  {
    name: "R Bloggers",
    link: "https://www.r-bloggers.com/",
  },
];

const RESOURCES = [
  {
    name: "ggplot2",
    link: "https://ggplot2.tidyverse.org/",
  },
  {
    name: "dplyr",
    link: "https://dplyr.tidyverse.org/",
  },
  {
    name: "R Markdown",
    link: "https://rmarkdown.rstudio.com/",
  },
  {
    name: "Shiny",
    link: "https://shiny.rstudio.com/",
  },
];

const TECHS = [
  {
    name: "R",
    link: "https://www.r-project.org/",
  },
  {
    name: "Python",
    link: "https://www.python.org/",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              R Beats Python
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Where R excels in data science and statistics.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Community
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Packages
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Technologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
           
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                oppkey
              </a>
              . Made with ❤️ for a better web.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
