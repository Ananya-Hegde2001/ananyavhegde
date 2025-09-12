/* eslint-disable react/no-unescaped-entities */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import SkillsSection from "@/components/SkillsSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex items-center gap-3">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                {/* Online status indicator */}
                <span className="relative inline-flex items-center justify-center ml-2 sm:ml-3 self-center flex-shrink-0" aria-hidden="false">
                  {/* Pulsing ring - slightly smaller on very small screens */}
                  <span className="absolute rounded-full bg-green-400 opacity-75 animate-ping h-4 w-4 sm:h-5 sm:w-5" />
                  {/* Core dot - scales with screen size */}
                  <span
                    className="relative rounded-full bg-green-500 shadow-[0_0_6px_3px_rgba(34,197,94,0.9)] h-2 w-2 sm:h-2.5 sm:w-2.5"
                    title="Online"
                  />
                  <span className="sr-only">Online</span>
                </span>
              </div>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-36 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: DATA.summary }}
            className="text-sm text-muted-foreground font-sans"
          />
        </BlurFade>
      </section>
      <SkillsSection />
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                key={work.company + id}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                // href={work.href}
                // badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">My Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple websites to complex Applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="flex flex-col items-center space-y-8 py-12">
          <h2 className="text-3xl font-bold">What People Say</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {DATA.testimonials?.map((testimonial, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 shadow-sm bg-background dark:bg-muted text-sm"
              >
                <p className="italic">"{testimonial.quote}"</p>
                <p className="mt-2 text-right font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-6 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <div className="mx-auto max-w-[600px] text-muted-foreground space-y-4 text-base md:text-xl">
                <p>
                  📞 Call: <a href="tel:+917795116340" className="text-blue-500 hover:underline">+91 77951 16340</a>
                </p>
                <p>
                  💬 WhatsApp: <a href="https://wa.me/917795116340" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Message on WhatsApp</a>
                </p>
                <p>
                  📧 Email: <a href="mailto:ananyavhegde@gmail.com" className="text-blue-500 hover:underline">ananyavhegde@gmail.com</a>
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium shadow-sm hover:bg-gray-100 dark:bg-muted dark:text-white dark:border-gray-600 dark:hover:bg-muted/60"
                >
                  📄 Download Resume
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
