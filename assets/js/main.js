// Portfolio — Lénaïc Dissaké · JS minimal
document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // Année courante dans le footer uniquement (pas les badges certifications .year)
  document.querySelectorAll(".site-footer .year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Terminal animé du hero
  const term = document.getElementById("term-demo");
  if (term) {
    const PROMPT =
      '<span class="term-prompt">lenaic</span><span class="term-path">@vps</span>:<span class="term-path">~</span>$ ';
    const script = [
      { cmd: "whoami", out: '<span class="hl">Lénaïc Dissaké</span> — admin systèmes & réseaux' },
      { cmd: "cat formation.txt", out: 'Bachelor Cybersécurité — labellisé <span class="hl">ANSSI</span>' },
      { cmd: "systemctl status projets", out: 'vSphere (9 VM) <span class="ok">[OK]</span> · VPS Linux <span class="ok">[EN PROD]</span> · THM <span class="ok">[ACTIF]</span>' },
      { cmd: "./recherche-alternance --start", out: '<span class="ok">✓</span> 5 projets chargés — exploration en cours…' },
    ];

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      await sleep(600);
      for (const step of script) {
        const line = document.createElement("div");
        line.className = "term-line";
        line.innerHTML = PROMPT + '<span class="term-cmd"></span><span class="cursor"></span>';
        term.appendChild(line);
        const cmdEl = line.querySelector(".term-cmd");
        const cur = line.querySelector(".cursor");
        for (const ch of step.cmd) {
          cmdEl.textContent += ch;
          await sleep(34 + Math.random() * 40);
        }
        await sleep(220);
        cur.remove();
        const out = document.createElement("div");
        out.className = "term-line term-out";
        out.innerHTML = step.out;
        term.appendChild(out);
        await sleep(420);
      }
      const end = document.createElement("div");
      end.className = "term-line";
      end.innerHTML = PROMPT + '<span class="cursor"></span>';
      term.appendChild(end);
    })();
  }
});
