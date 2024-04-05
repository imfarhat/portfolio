import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { IoGlobeOutline } from "react-icons/io5";
import { MdInstallDesktop } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Projects() {
  sessionStorage.setItem("previousPage", window.location.pathname);

  return (
    <>
      <Header />
      <main className="py-4 md:pt-8 pb-16 ficjc flex-col gap-8 bg-[#16181d]">
        <section className="w-full flex flex-col ficjc gap-8">
          <article className="max-w-7xl flex flex-col items-center justify-center gap-4 text-[#f5f5f5] md:rounded-md overflow-hidden p-2 md:p-4">
            <h1 className="font-semibold px-2 text-center text-3xl">
              Projects
            </h1>
            <p className="px-2 md:px-4 text-justify text-[#f5f5f5]/75 drop-shadow shadow-black flex flex-wrap gap-x-1">
              Welcome to my
              <span className="text-[#f5f5f5]">digital gallery</span>
              where pixels meet passion! Below, you'll find a curated selection
              of my proudest creations. From sleek website designs to robust
              <span className="text-[#f5f5f5]">web applications,</span> each
              project represents a unique journey of creativity and
              craftsmanship.
            </p>
            <h1>Here are some of my recent projects</h1>
          </article>
        </section>
        <section className="md:rounded-md overflow-hidden px-2 py-8 md:px-4 md:py-12 w-full ficjc bg-gradient-to-r from-[#16181d] to-[#646674]/25">
          <article className="max-w-7xl w-full items-center justify-center ffwicjc gap-4 md:gap-6">
            <div
              onClick={() =>
                window.open("https://github.com/imfarhat/AttendQR")
              }
              className="projects-card"
            >
              <figure>
                <img
                  src="https://raw.githubusercontent.com/imfarhat/AttendQR/main/public/AttendQR.png"
                  alt="AttendQR Logo"
                  loading="eager"
                />
              </figure>

              <h3>
                AttendQR
                <span>
                  <Link
                    to="https://attendqr.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/AttendQR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <p>
                <em>
                  QR Code based Attendance Management <code>Mar'24</code>
                </em>
                <span>
                  <strong>React JS</strong>
                  <strong>Tailwind CSS</strong>
                  <strong>HTML</strong>
                </span>
              </p>
            </div>

            <div
              onClick={() => window.open("https://github.com/imfarhat/SkipPi")}
              className="projects-card"
            >
              <figure>
                <img
                  src="https://raw.githubusercontent.com/imfarhat/SkipPi/main/icon.png"
                  alt="SkipPi Logo"
                  loading="eager"
                />
              </figure>
              <h3>
                SkipPi
                <span>
                  <Link
                    to="https://github.com/imfarhat/SkipPi?tab=readme-ov-file#installation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdInstallDesktop />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/SkipPi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <p>
                <em>
                  YouTube Ad-Skipping Extension <code>Feb'24</code>
                </em>
                <span>
                  <strong>JavaScript</strong>
                  <strong>JSON</strong>
                  <strong>HTML</strong>
                </span>
              </p>
            </div>

            <div
              onClick={() => window.open("https://tis.pages.dev")}
              className="projects-card"
            >
              <figure>
                <img
                  src="https://raw.githubusercontent.com/imfarhat/The-International-School/main/contents/images/logo/main-icon.png"
                  alt="TIS Logo"
                  loading="eager"
                />
              </figure>

              <h3>
                T.I.S.
                <span>
                  <Link
                    to="https://tis.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/imfarhat/The-International-School"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <p>
                <em>
                  The International Shcool <code>Nov'23</code>
                </em>
                <span>
                  <strong>JavaScript</strong>
                  <strong>Tailwind CSS</strong>
                  <strong>HTML</strong>
                </span>
              </p>
            </div>

            <div
              onClick={() => window.open("https://farhateservices.pages.dev")}
              className="projects-card"
            >
              <figure>
                <img
                  src="https://raw.githubusercontent.com/farhateservices/fesa/main/logo-head-black.png"
                  alt="FeSA Logo"
                  loading="eager"
                />
              </figure>
              <h3>
                FeSA
                <span>
                  <Link
                    to="https://farhateservices.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoGlobeOutline />
                  </Link>
                  <Link
                    to="https://github.com/farhateservices/fesa/tree/main/eCommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </Link>
                </span>
              </h3>
              <p>
                <em>
                  Business Portfolio Website <code>Aug'23</code>
                </em>
                <span>
                  <strong>JavaScript</strong>
                  <strong>CSS</strong>
                  <strong>HTML</strong>
                </span>
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Projects;
