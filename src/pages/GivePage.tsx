import { Link } from 'react-router-dom'

export default function GivePage() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800/60">
      <div aria-hidden="true" className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/media/giving.mp4"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-emerald-950/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-300">GIVE</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Give to support the ministry
            </h1>
            <p className="mt-3 max-w-prose text-lg text-slate-200">
              Every seed you sow is used towards the growth of the ministry and to expand the reach of the gospel in Australia.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Back to Home
            </Link>
            <a
              href="mailto:info@rccgstrongtower.org.au?subject=Giving%20Enquiry"
              className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
            >
              Ask about giving
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/20 p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">Donation details</h2>
              {/* <p className="mt-2 text-sm text-slate-300">
                Placeholder form — swap the “Continue” action to your official giving link/provider.
              </p> */}

              <form className="mt-6 grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="fund">
                    Fund
                  </label>
                  <select
                    id="fund"
                    name="fund"
                    className="w-full rounded-md border border-emerald-900/50 bg-slate-950/40 px-3 py-2 text-slate-100 outline-none ring-emerald-500/30 focus:ring-2"
                    defaultValue="tithe"
                  >
                    <option value="tithe">Tithe</option>
                    <option value="offering">Offering</option>
                    <option value="thanksgiving">Thanksgiving</option>
                    <option value="missions">Missions</option>
                    <option value="building">Building / Projects</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="amount">
                    Amount (AUD)
                  </label>
                  <input
                    id="amount"
                    name="amount"
                    inputMode="decimal"
                    placeholder="e.g. 50"
                    className="w-full rounded-md border border-emerald-900/50 bg-slate-950/40 px-3 py-2 text-slate-100 outline-none ring-emerald-500/30 placeholder:text-slate-500 focus:ring-2"
                  />
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {['20', '50', '100', '200', '500', '1000'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className="rounded-md border border-emerald-900/50 bg-emerald-950/15 px-3 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-700/70"
                      >
                        ${value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="text-sm font-semibold text-slate-200">Frequency</div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {[
                      { id: 'one-time', label: 'One-time' },
                      { id: 'weekly', label: 'Weekly' },
                      { id: 'monthly', label: 'Monthly' },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        htmlFor={opt.id}
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-emerald-900/50 bg-emerald-950/15 px-3 py-2 text-sm text-slate-200 hover:border-emerald-700/70"
                      >
                        <input id={opt.id} name="frequency" type="radio" defaultChecked={opt.id === 'one-time'} />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-slate-200" htmlFor="firstName">
                      First name (optional)
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="w-full rounded-md border border-emerald-900/50 bg-slate-950/40 px-3 py-2 text-slate-100 outline-none ring-emerald-500/30 placeholder:text-slate-500 focus:ring-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-slate-200" htmlFor="lastName">
                      Last name (optional)
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="w-full rounded-md border border-emerald-900/50 bg-slate-950/40 px-3 py-2 text-slate-100 outline-none ring-emerald-500/30 placeholder:text-slate-500 focus:ring-2"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-slate-200" htmlFor="email">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-emerald-900/50 bg-slate-950/40 px-3 py-2 text-slate-100 outline-none ring-emerald-500/30 placeholder:text-slate-500 focus:ring-2"
                  />
                </div>

                <label className="flex items-start gap-3 rounded-md border border-emerald-900/50 bg-emerald-950/15 p-4 text-sm text-slate-200">
                  <input name="coverFees" type="checkbox" className="mt-1" />
                  <span>
                    Add a little extra to help cover processing costs (optional).
                    <span className="mt-1 block text-xs text-slate-400">This is a placeholder setting.</span>
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
                  >
                    Continue (TBA)
                  </button>
                  <p className="text-xs text-slate-400">
                    Replace this button with your official giving provider link.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/20 p-6">
              <div className="text-sm font-semibold text-white">Other ways to give</div>
              <div className="mt-2 text-sm text-slate-300">
                Add your bank transfer details, cash offering notes, and any giving FAQ.
              </div>
              <div className="mt-5 rounded-lg border border-emerald-900/40 bg-emerald-950/15 p-4 text-sm text-slate-300">
                <div className="font-semibold text-white">Bank transfer (TBA)</div>
                <div className="mt-2">Account name: (TBA)</div>
                <div>BSB: (TBA)</div>
                <div>Account number: (TBA)</div>
                <div className="mt-2 text-xs text-slate-400">Reference: your name / purpose</div>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/20 p-6">
              <div className="text-sm font-semibold text-white">Need help?</div>
              <div className="mt-2 text-sm text-slate-300">
                Email us and we’ll help you with giving options.
              </div>
              <a
                href="mailto:info@rccgstrongtower.org.au?subject=Giving%20Help"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
              >
                Email: info@rccgstrongtower.org.au
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
