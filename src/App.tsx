import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GivePage from './pages/GivePage'

function App() {
  const location = useLocation()

  const mobileNavItems: Array<{ label: string; to: string; isActive: boolean }> = [
    {
      label: 'Home',
      to: '/#home',
      isActive: location.pathname !== '/give' && (!location.hash || location.hash === '#home'),
    },
    {
      label: 'About',
      to: '/#about',
      isActive: location.pathname !== '/give' && location.hash === '#about',
    },
    {
      label: 'Events',
      to: '/#times',
      isActive: location.pathname !== '/give' && location.hash === '#times',
    },
    {
      label: 'Ministries',
      to: '/#ministries',
      isActive: location.pathname !== '/give' && location.hash === '#ministries',
    },
    {
      label: 'Give',
      to: '/give',
      isActive: location.pathname === '/give',
    },
    {
      label: 'Contact',
      to: '/#contact',
      isActive: location.pathname !== '/give' && location.hash === '#contact',
    },
  ]

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-200 text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-emerald-700 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-emerald-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="RCCG Strong Tower"
              className="size-10 rounded-lg bg-white/70 object-contain p-1 ring-1 ring-emerald-200/70"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">RCCG Strong Tower Assembly</div>
              <div className="text-xs text-slate-600">A church family in Australia</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <Link className="hover:text-slate-900" to="/#home">
              Home
            </Link>
            <Link className="hover:text-slate-900" to="/#about">
              About
            </Link>
            <Link className="hover:text-slate-900" to="/#times">
              Events
            </Link>
            <Link className="hover:text-slate-900" to="/#ministries">
              Ministries
            </Link>
            <Link className="hover:text-slate-900" to="/give">
              Give
            </Link>
            <Link className="hover:text-slate-900" to="/#contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/#visit"
              className="hidden rounded-md border border-emerald-300 bg-white/60 px-3 py-2 text-sm font-medium text-slate-900 hover:border-emerald-400 md:inline-flex"
            >
              Plan a Visit
            </Link>
            <Link
              to="/#watch"
              className="inline-flex items-center justify-center text-center rounded-md bg-emerald-400 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Watch Online
            </Link>
          </div>
        </div>

        <div className="border-t border-emerald-200/70 bg-white/70 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-4 py-2">
            <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm text-slate-700">
              {mobileNavItems.map((item, index) => {
                const classes = item.isActive
                  ? 'font-semibold text-slate-900'
                  : 'font-medium text-emerald-700 hover:text-emerald-800'

                return (
                  <li key={item.to} className="flex items-center gap-2">
                    {item.isActive ? (
                      <span aria-current="page" className={classes}>
                        {item.label}
                      </span>
                    ) : (
                      <Link to={item.to} className={classes}>
                        {item.label}
                      </Link>
                    )}

                    {index < mobileNavItems.length - 1 ? (
                      <span aria-hidden="true" className="text-slate-300">
                        /
                      </span>
                    ) : null}
                  </li>
                )
              })}
            </ol>
          </nav>
        </div>
      </header>

      <main id="main">
        {location.pathname === '/give' ? (
          <GivePage />
        ) : (
          <>
            <section id="home" className="relative scroll-mt-24 overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              src="/media/worship.mp4"
            />
            <div className="absolute inset-0 bg-white/60" />
            <div className="absolute inset-0 bg-emerald-200/10" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-600">
                Welcome to RCCG Strong Tower Assembly
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                A welcoming place to know Jesus, grow in faith, and serve together.
              </h1>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate-800">
                This is a first draft for the new church website. Replace the placeholder details (service
                times, address, livestream links, and ministry descriptions) with your official information.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#visit"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                >
                  Plan a Visit
                </a>
                <a
                  href="#times"
                  className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-400"
                >
                  See service times
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-700 sm:max-w-md">
                <div className="rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                  <div className="font-semibold text-slate-900">Friendly community</div>
                  <div className="mt-1 text-slate-600">All ages & backgrounds</div>
                </div>
                <div className="rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                  <div className="font-semibold text-slate-900">Practical teaching</div>
                  <div className="mt-1 text-slate-600">Biblical & life-giving</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-200/70 to-white/70 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">This Sunday</div>
                    <div className="mt-1 text-sm text-slate-600">Service times: we look forward to see you</div>
                  </div>
                  {/* <div className="rounded-full border border-emerald-800/60 bg-slate-950/20 px-3 py-1 text-xs font-semibold text-slate-200">
                    Draft
                  </div> */}
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-start justify-between gap-4 rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Sunday Worship</div>
                      <div className="mt-1 text-sm text-slate-600">10:00am – 12:30pm</div>
                    </div>
                    <div className="text-xs text-slate-500">In-person</div>
                  </div>
                  <div className="flex items-start justify-between gap-4 rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Bible Study</div>
                      <div className="mt-1 text-sm text-slate-600">Tuesdays • 7:00 PM (Zoom)</div>
                    </div>
                    <div className="text-xs text-slate-500">Online</div>
                  </div>
                  <div className="flex items-start justify-between gap-4 rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Prayer Meeting</div>
                      <div className="mt-1 text-sm text-slate-600">Fridays • 7:00 PM</div>
                    </div>
                    <div className="text-xs text-slate-500">Online</div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-emerald-200/70 bg-white/70 p-4">
                  <div className="text-sm font-semibold text-slate-900">Location</div>
                  <div className="mt-1 text-sm text-slate-600">
                    30 McLennan Drive, Kensington VIC 3031
                  </div>
                </div>

                <div className="mt-6">
                  <svg viewBox="0 0 400 120" className="h-24 w-full" aria-hidden="true">
                    <path
                      d="M8 92 C 72 28, 120 120, 190 56 S 310 104, 392 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-emerald-300"
                    />
                    <circle cx="190" cy="56" r="5" className="fill-emerald-500" />
                    <circle cx="392" cy="36" r="5" className="fill-emerald-500" />
                    <circle cx="8" cy="92" r="5" className="fill-emerald-500" />
                  </svg>
                  <div className="text-xs text-slate-500">Placeholder visual — swap with real photos later.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute -bottom-24 left-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-600">WELCOME TO RCCG STRONG TOWER</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              A church family where God shapes lives for His purpose.
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-emerald-200/70 to-white/70 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-white/70">
                  <div className="aspect-[4/5] w-full">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white to-emerald-100">
                      <div className="px-6 text-center">
                        <div className="text-sm font-semibold text-slate-900">Image placeholder</div>
                        <div className="mt-2 text-sm text-slate-600">
                          Replace with a welcome photo (e.g., pastors / congregation).
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-emerald-200/70 p-4 text-xs text-slate-500">
                    Tip: use a portrait image for a similar look.
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 sm:p-8">
                  <div className="border-l-2 border-emerald-500/70 pl-5">
                    <p className="text-base leading-relaxed text-slate-700">
                      RCCG Strong Tower Assembly is part of the Redeemed Christian Church of God. Our prayer is
                      that God will mold you into a purpose-filled vessel, strengthened through every season of
                      life, and equipped to bring His hope to others.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-slate-700">
                      Here at Strong Tower, you will discover that we care about you and your family; our desire as a church — a body of believers in Christ Jesus is to assist you on the path towards your spiritual growth. We Endeavor to meet both the spiritual and physical needs of everyone that comes to our church. This is a church where God’s word is taught in a clear and practical manner, relevant to us and to our situations today, resulting in an understanding of the things that God requires of us.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-slate-700">
                      If you are searching for a church where you can enjoy a vibrant, personal fulfilling relationship with our Savior and Lord Jesus Christ, then RCCG STA is the place to be. We offer various programs, activities and ministries that you and your family will benefit from. We speak blessings over your family and invite you to worship with us in-person or online.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-2 text-sm">
                    <div className="font-semibold text-slate-900">Pastor Lola &amp; Pastor Funso Akin-Ojelabi</div>
                    <div className="text-slate-600">RCCG Strong Tower Assembly</div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#visit"
                      className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                    >
                      Plan a Visit
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-400"
                    >
                      Book a time with Pastor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="times" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -top-24 left-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Service times</h2>
                <p className="mt-2 max-w-prose text-lg text-slate-700">
                  Add confirmed times and livestream links when ready.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex w-fit rounded-md border border-emerald-300 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 hover:border-emerald-400"
              >
                Ask a question
              </a>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { title: 'Sunday Worship Service', time: '10:00am – 12:30pm', note: 'In-person gathering' },
                {
                  title: 'Bible Study',
                  time: 'Tuesdays • 7:00 PM',
                  note: 'Via Zoom — grow in God’s Word together',
                  actionLabel: 'Request Zoom link',
                  actionHref:
                    'mailto:info@rccgstrongtower.org.au?subject=Bible%20Study%20Zoom%20Link%20Request',
                },
                { title: 'Prayer Meeting', time: 'Fridays • 7:00 PM', note: 'Pray and stand together' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80"
                >
                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {item.time}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{item.note}</div>
                  {'actionHref' in item && item.actionHref && item.actionLabel ? (
                    <a
                      className="mt-5 inline-flex w-fit rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                      href={item.actionHref}
                    >
                      {item.actionLabel}
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ministries" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -bottom-24 right-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Ministries</h2>
            <p className="mt-2 max-w-prose text-lg text-slate-700">
              A starting set of ministry areas. Rename and adjust to match your church structure.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Kids', desc: 'Safe, fun, and faith-building (details TBA).' },
                { title: 'Youth', desc: 'Community, discipleship, and purpose.' },
                { title: 'Women', desc: 'Support, prayer, and growth together.' },
                { title: 'Men', desc: 'Brotherhood, leadership, and service.' },
                { title: 'Worship', desc: 'Serving through music and excellence.' },
                { title: 'Outreach', desc: 'Caring for our city through practical love.' },
              ].map((m) => (
                <div
                  key={m.title}
                  className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">{m.title}</div>
                    <div aria-hidden="true" className="size-2 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="mt-3 text-sm text-slate-600">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="watch" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -top-24 right-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Watch online</h2>
                <p className="mt-3 max-w-prose text-lg text-slate-700">
                  Join us online via our social channels. Replace/extend with a YouTube livestream and sermon archive when ready.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.facebook.com/rccgsta/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://youtube.com/@rccgsta?si=Vxe-RJO1xKlG0qw6"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-400"
                  >
                    YouTube
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-emerald-200/70 bg-white/70">
                  <iframe
                    title="RCCG Strong Tower Assembly — YouTube player"
                    src="https://www.youtube.com/embed/wetPLRzidP0?si=QhYAJTKsAevfkenB"
                    className="h-full w-full"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -bottom-24 left-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Plan a visit</h2>
                <p className="mt-3 max-w-prose text-lg text-slate-700">
                  Add the essentials: where to park, what to wear, kids check-in, and what the service is
                  like.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                  <div className="text-sm font-semibold text-slate-900">Arrive</div>
                  <div className="mt-2 text-sm text-slate-600">Recommend arrival time (e.g., 10–15 mins early).</div>
                </div>
                <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                  <div className="text-sm font-semibold text-slate-900">Dress</div>
                  <div className="mt-2 text-sm text-slate-600">Whatever you feel comfortable in.</div>
                </div>
                <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                  <div className="text-sm font-semibold text-slate-900">Kids</div>
                  <div className="mt-2 text-sm text-slate-600">Add age groups + check-in details.</div>
                </div>
                <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                  <div className="text-sm font-semibold text-slate-900">After service</div>
                  <div className="mt-2 text-sm text-slate-600">Tea/coffee and a chance to connect.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="give" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -top-24 left-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-8 md:p-10 hover:border-emerald-300 hover:bg-white/80">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Give</h2>
                  <p className="mt-3 max-w-prose text-lg text-slate-700">
                    Add your giving options (bank details, online giving platform, and any notes).
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Link
                    to="/give"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                  >
                    Give online
                  </Link>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md border border-emerald-300 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 hover:border-emerald-400"
                  >
                    Ask about giving
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-emerald-200/70">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50 to-emerald-100" />
            <div className="absolute -bottom-24 right-[-6rem] h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Contact</h2>
                <p className="mt-3 max-w-prose text-lg text-slate-700">
                  We are waiting to hear from you.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <div className="mt-2 text-sm text-slate-600">info@rccgstrongtower.org.au</div>
                  </div>
                  <div className="rounded-xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                    <div className="text-sm font-semibold text-slate-900">Phone</div>
                    <div className="mt-2 text-sm text-slate-600">+61 416 204 106</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-emerald-200/70 bg-white/70 p-6 hover:border-emerald-300 hover:bg-white/80">
                <div className="text-sm font-semibold text-slate-900">Location</div>
                <div className="mt-2 text-sm text-slate-600">30 McLennan Drive, Kensington VIC 3031</div>
                <div className="mt-5 aspect-video w-full overflow-hidden rounded-xl border border-emerald-200/70 bg-white/70">
                  <iframe
                    title="RCCG Strong Tower Assembly location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.148363020108!2d144.92788387551641!3d-37.800017871979065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d12e69e81dd%3A0xc41753e9c7aaf8cb!2s30%20McLennan%20Dr%2C%20Kensington%20VIC%203031!5e0!3m2!1sen!2sau!4v1770967891072!5m2!1sen!2sau"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="mt-3 text-xs text-slate-500">Map provided by Google.</div>
              </div>
            </div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="border-t border-emerald-200/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} RCCG Strong Tower Assembly. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="https://www.facebook.com/rccgsta/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="hover:text-slate-900" href="https://www.instagram.com/rccgsta/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
