import Footer from "@/components/Footer/footer";
import Globe from "@/components/Footer/globe";
import Collaboration from "@/components/collaboration/collaboration";
import HeroSection from "@/components/herosection/hero";
import Navbar from "@/components/navbar/navbar";
import StickyNavbar from "@/components/navbar/stickynav";
import Productivity from "@/components/productivity/productivity";
import Security from "@/components/security/security";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative lg:flex lg:justify-center">
        <div className="absolute z-10">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative">
            <Image
              width={4377}
              height={2000}
              alt="landing image"
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 translate-y-[40rem] scale-[3] sm:translate-x-60 max-md:-translate-x-44 max-sm:-translate-x-72 max-sm:translate-y-[20rem]"
            />
          </div>
          <div className="hero-section px-3">
            <HeroSection />
          </div>
          <StickyNavbar />
          <div className="px-4 pt-8 overflow-hidden mb-0" id="productivity">
            <Productivity />
          </div>
          <div className="px-4 pt-8 overflow-hidden" id="collaboration">
                <Collaboration />
          </div>
          <div id="security" className="px-4 pt-8 pb-16 overflow-hidden">
                 <Security />
          </div>
          <Globe />
          <div className="max-w-[1280px] mx-auto relative z-[2] px-5">
            <ul className="lg:w-9/12 text-sm pt-16 text-[#7d8590] space-y-1">
            <li><sup id="footnote-1">1</sup> The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.</li>
              <li><sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of open source software.</li>
            
            </ul>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
