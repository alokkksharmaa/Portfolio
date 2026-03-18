import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-10 px-6 pt-20 sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:items-center lg:justify-between lg:text-left">
      {/* Left: Text Content */}
      <div className="w-full text-center lg:w-1/2 lg:text-left">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Alok Kumar
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn vision into reality with code. Whether I&apos;m working on
              a website or any digital product, I bring my commitment to design
              excellence and user-centered thinking to every project I work on.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript
              and web development.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/in.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Punjab, India
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>

      {/* Right: Circular Profile Image */}
      <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-end">
        <AnimatePresence>
          <FadeUp key="hero-profile" duration={0.7} delay={0.2}>
            <div className="profile-circle-wrapper">
              <div className="profile-circle-ring">
                <div className="profile-circle-inner">
                  <Image
                    src="/images/profile.png"
                    alt="Alok Kumar - Profile"
                    width={480}
                    height={480}
                    className="profile-circle-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .profile-circle-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
        }

        .profile-circle-ring {
          width: 380px;
          height: 380px;
          border-radius: 50%;
          padding: 5px;
          background: conic-gradient(
            from 0deg,
            #00bfff,
            #007bff,
            #a855f7,
            #ec4899,
            #00bfff
          );
          box-shadow:
            0 0 40px rgba(0, 191, 255, 0.35),
            0 0 80px rgba(168, 85, 247, 0.2);
          animation: spin-ring 6s linear infinite;
        }

        @media (min-width: 640px) {
          .profile-circle-ring {
            width: 440px;
            height: 440px;
          }
        }

        @keyframes spin-ring {
          0% {
            background: conic-gradient(
              from 0deg,
              #00bfff,
              #007bff,
              #a855f7,
              #ec4899,
              #00bfff
            );
          }
          25% {
            background: conic-gradient(
              from 90deg,
              #00bfff,
              #007bff,
              #a855f7,
              #ec4899,
              #00bfff
            );
          }
          50% {
            background: conic-gradient(
              from 180deg,
              #00bfff,
              #007bff,
              #a855f7,
              #ec4899,
              #00bfff
            );
          }
          75% {
            background: conic-gradient(
              from 270deg,
              #00bfff,
              #007bff,
              #a855f7,
              #ec4899,
              #00bfff
            );
          }
          100% {
            background: conic-gradient(
              from 360deg,
              #00bfff,
              #007bff,
              #a855f7,
              #ec4899,
              #00bfff
            );
          }
        }

        .profile-circle-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #0a0a0a;
          background: #0a0a0a;
        }

        .profile-circle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 50%;
          display: block;
          transition: transform 0.4s ease;
        }

        .profile-circle-wrapper:hover .profile-circle-img {
          transform: scale(1.04);
        }

        .profile-circle-wrapper:hover .profile-circle-ring {
          box-shadow:
            0 0 60px rgba(0, 191, 255, 0.55),
            0 0 120px rgba(168, 85, 247, 0.35);
        }
      `}</style>
    </div>
  );
}
