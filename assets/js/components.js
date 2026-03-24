const FALLBACK_NAVBAR = `
<header class="fixed inset-x-0 top-0 z-50">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
    <nav class="glass rounded-2xl">
      <div class="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <a href="./index.html" class="group flex items-center gap-3">
          <div class="shine grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950">
            <span class="text-sm font-black tracking-tight">BPO</span>
          </div>
          <div class="leading-tight">
            <div class="text-lg font-medium tracking-tight text-slate-900 dark:text-slate-50 italic">2ndoffice</div>
          </div>
        </a>

        <div class="hidden items-center gap-1 lg:flex">
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./about.html">About</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./services.html">Services</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./blog.html">Blog</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./reviews.html">Reviews</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./careers.html">Careers</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./locate-us.html">Locate Us</a>
          <a class="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./contact.html">Contact</a>
        </div>

        <div class="flex items-center gap-2">
          <button data-theme-toggle class="magnet inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/60 text-sm font-semibold text-slate-800 shadow-sm hover:bg-white dark:border-slate-700/70 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-950/50" aria-label="Toggle theme">
            
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg dark:text-white text-slate-950">◐</span>
          </button>
          <a href="./contact.html#contact-form" class="magnet hidden items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:opacity-95 dark:bg-white dark:text-slate-950 dark:shadow-white/10 sm:inline-flex">Get a Quote</a>
          <button data-menu-open class="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/60 p-2 text-slate-800 shadow-sm hover:bg-white dark:border-slate-700/70 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-950/50 lg:hidden" aria-label="Open menu">
            <span class="text-lg font-black">≡</span>
          </button>
        </div>
      </div>
    </nav>
  </div>

  <div data-mobile-panel class="pointer-events-none fixed inset-0 z-50 opacity-0 transition-opacity duration-200">
    <div data-menu-overlay class="absolute inset-0 bg-slate-950/40"></div>
    <div data-mobile-drawer class="absolute right-0 top-0 h-full w-[92%] max-w-sm translate-x-full transition-transform duration-300">
      <div class="h-full glass rounded-l-2xl p-5">
        <div class="flex items-center justify-between">
          <div class="text-sm font-extrabold text-slate-900 dark:text-white">Menu</div>
          <button data-menu-close class="rounded-xl border border-slate-200/70 bg-white/60 p-2 text-slate-800 hover:bg-white dark:border-slate-700/70 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:bg-slate-950/50" aria-label="Close menu">✕</button>
        </div>
        <div class="mt-5 grid gap-2 text-sm">
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./index.html">Home</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./about.html">About</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./services.html">Services</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./blog.html">Blog</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./reviews.html">Reviews</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./careers.html">Careers</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./locate-us.html">Locate Us</a>
          <a data-menu-link class="rounded-xl px-3 py-3 font-semibold text-slate-800 hover:bg-white/60 dark:text-slate-100 dark:hover:bg-slate-950/40" href="./contact.html">Contact</a>
        </div>
      </div>
    </div>
  </div>
</header>
`;

const FALLBACK_FOOTER = `
<footer class="relative mt-24 border-t border-slate-200/70 bg-white/50 dark:border-slate-800/70 dark:bg-slate-950/30">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 py-14 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <div class="flex items-center gap-3">
          <div class="shine grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950"><span class="text-sm font-black tracking-tight">BPO</span></div>
          <div class="leading-tight">
            <div class="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">2ndoffice</div>
            <div class="text-xs text-slate-600 dark:text-slate-300">Outsourcing solutions for online businesses</div>
          </div>
        </div>
        <p class="mt-4 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">CX, store ops, back office, and QA—built for speed, quality, and measurable outcomes.</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Company</div>
          <div class="mt-3 grid gap-2 text-sm">
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./about.html">About</a>
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./careers.html">Careers</a>
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./blog.html">Insights</a>
          </div>
        </div>
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Services</div>
          <div class="mt-3 grid gap-2 text-sm">
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./services.html">Services</a>
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./reviews.html">Reviews</a>
            <a class="text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white" href="./locate-us.html">Locate Us</a>
          </div>
        </div>
        <div>
          <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Get in touch</div>
          <div class="mt-3 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
            <div>hello@2ndoffice.example</div>
            <div>+1 (555) 014-2048</div>
            <a class="hover:text-slate-950 dark:hover:text-white" href="./contact.html#contact-form">Request proposal</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start justify-between gap-3 border-t border-slate-200/70 py-6 text-xs text-slate-500 dark:border-slate-800/70 dark:text-slate-400 sm:flex-row sm:items-center">
      <div>© <span id="year"></span> 2ndoffice. All rights reserved.</div>
      <div class="flex flex-wrap gap-3">
        <a class="hover:text-slate-800 dark:hover:text-slate-200" href="./contact.html#faq">FAQ</a>
      </div>
    </div>
  </div>
  <script>(function(){var el=document.getElementById('year'); if(el) el.textContent = new Date().getFullYear();})();</script>
</footer>
`;

async function injectComponent(targetSelector, url, fallbackHtml = "") {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  try {
    const res = await fetch(url, { cache: "no-store" });
    target.innerHTML = await res.text();
  } catch (e) {
    target.innerHTML = fallbackHtml;
  }
}

export async function loadShell() {
  await Promise.all([
    injectComponent("#site-navbar", "./components/navbar.html", FALLBACK_NAVBAR),
    injectComponent("#site-footer", "./components/footer.html", FALLBACK_FOOTER),
  ]);
}
