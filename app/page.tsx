import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight">
              Smart Math BC
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="#programs"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Programs
            </a>
            <a
              href="#why-us"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </nav>
          <Button size="lg" asChild>
            <a href="#contact">Book a Session</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center px-6 pb-20 pt-24 text-center md:pt-32">
        <Badge variant="secondary" className="mb-6">
          Now enrolling for Summer 2025
        </Badge>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Math confidence starts with the right tutor
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          Personalized one-on-one and small group math tutoring for grades 4-12.
          We meet students where they are and help them get where they want to
          be.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="h-10 px-6 text-sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-10 px-6 text-sm"
            asChild
          >
            <a href="#programs">View Programs</a>
          </Button>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">500+</span>
            students tutored
          </span>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">4.9</span>
            average rating
          </span>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">95%</span>
            see grade improvement
          </span>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Programs for every level
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              From building foundations to preparing for advanced exams, we have
              you covered.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Elementary &amp; Middle School</CardTitle>
                <CardDescription>Grades 4&ndash;8</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Build strong number sense, fractions, decimals, and
                  pre-algebra skills. We make math approachable and even
                  enjoyable for younger students.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>High School Core</CardTitle>
                <CardDescription>
                  Algebra I &bull; Geometry &bull; Algebra II
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Master the fundamentals that every college-bound student needs.
                  Homework help, test prep, and deep conceptual understanding.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced &amp; AP</CardTitle>
                <CardDescription>
                  Pre-Calc &bull; AP Calc AB/BC &bull; AP Stats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Rigorous preparation for advanced coursework and AP exams.
                  Targeted practice, exam strategy, and conceptual depth.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>SAT / ACT Math Prep</CardTitle>
                <CardDescription>Standardized Test Readiness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Timed practice, score diagnostics, and strategy sessions
                  tailored to the math sections of the SAT and ACT.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Math Competitions</CardTitle>
                <CardDescription>
                  AMC &bull; MATHCOUNTS &bull; Math Olympiad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  For students who love a challenge. Problem-solving techniques,
                  competition strategy, and creative mathematical thinking.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Summer Intensive</CardTitle>
                <CardDescription>Catch Up or Get Ahead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Focused multi-week programs to fill gaps or preview the next
                  year&apos;s curriculum before school starts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Why families choose Smart Math BC
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              We&apos;re not a tutoring factory. Every session is intentional.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized approach",
                description:
                  "We assess each student's strengths and gaps, then build a custom learning plan \u2014 not a one-size-fits-all curriculum.",
              },
              {
                title: "Qualified instructors",
                description:
                  "Our tutors hold degrees in mathematics or STEM fields, with years of teaching and tutoring experience.",
              },
              {
                title: "Flexible scheduling",
                description:
                  "In-person or online, weekdays or weekends. Sessions fit your family's schedule, not the other way around.",
              },
              {
                title: "Progress tracking",
                description:
                  "Monthly progress reports so parents and students always know where things stand and what's next.",
              },
              {
                title: "Confidence building",
                description:
                  "We teach students how to think, not just what to memorize. Confidence follows naturally.",
              },
              {
                title: "Proven results",
                description:
                  "95% of our students improve by at least one letter grade within the first two months.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              What parents and students say
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "My daughter went from a C- in Algebra to a solid A. She actually asks to do math now. I never thought I'd see that.",
                name: "Jennifer P.",
                detail: "Parent, 8th grader",
              },
              {
                quote:
                  "The SAT math prep was incredible. My score jumped 120 points in six weeks. The strategies actually made sense.",
                name: "Marcus T.",
                detail: "Student, 11th grade",
              },
              {
                quote:
                  "We've tried three different tutoring services. Smart Math BC is the only one where my son felt comfortable asking questions.",
                name: "David & Lin K.",
                detail: "Parents, 6th grader",
              },
            ].map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-2">
                  <p className="text-xs italic text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-xs font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-[0.625rem] text-muted-foreground">
                      {testimonial.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              No contracts. No hidden fees. Cancel anytime.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Single Session</CardTitle>
                <CardDescription>Try us out</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">
                  $60
                  <span className="text-sm font-normal text-muted-foreground">
                    /hr
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li>1-on-1 session</li>
                  <li>Any subject or level</li>
                  <li>In-person or online</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="ring-2 ring-primary">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Monthly Plan</CardTitle>
                  <Badge className="text-[0.5rem]">Popular</Badge>
                </div>
                <CardDescription>Consistent progress</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">
                  $200
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li>4 sessions per month</li>
                  <li>Progress reports</li>
                  <li>Priority scheduling</li>
                  <li>Email support between sessions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intensive</CardTitle>
                <CardDescription>Test prep &amp; catch-up</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-foreground">
                  $450
                  <span className="text-sm font-normal text-muted-foreground">
                    /mo
                  </span>
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li>10 sessions per month</li>
                  <li>Custom study plan</li>
                  <li>Practice materials included</li>
                  <li>Weekly progress check-ins</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section
        id="contact"
        className="bg-primary px-6 py-20 text-primary-foreground"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-sm opacity-80">
            Book a free 15-minute consultation. We&apos;ll discuss your
            student&apos;s needs and find the right program.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="h-10 px-6 text-sm"
              asChild
            >
              <a href="mailto:hello@summitmath.com">Email Us</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-10 border-primary-foreground/20 px-6 text-sm text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+15551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Smart Math BC Tutoring. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms
            </a>
            <a
              href="mailto:hello@summitmath.com"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
