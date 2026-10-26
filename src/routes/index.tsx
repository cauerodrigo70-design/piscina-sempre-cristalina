import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import dono from "@/assets/dono.png";
import logo from "@/assets/logo.png";
import piscina1 from "@/assets/piscina-1.png";
import piscina2 from "@/assets/piscina-2.png";
import piscina3 from "@/assets/piscina-3.png";
import videoAgua from "@/assets/agua.mp4";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";
import s6 from "@/assets/s6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O Piscineiro | Limpeza e manutenção de piscinas em Joinville SC" },
      {
        name: "description",
        content: "Limpeza, tratamento, bombas, filtros, hidráulica e LED para piscinas em Joinville. Água cristalina o ano todo.",
      },
      { property: "og:title", content: "O Piscineiro | Cuidando do seu lazer" },
      { property: "og:description", content: "Cuidado completo para sua piscina em Joinville SC. Chame no WhatsApp." },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/554791858900";
const TEL = "+55 47 9185-8900";
const TEL_HREF = "tel:+554791858900";
const ENDERECO = "R. Irmã Welter, 25 - Adhemar Garcia, Joinville - SC, 89230-842, Brasil";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO)}`;

const servicos = [
  { img: s1, t: "Limpeza e tratamentos", d: "Limpeza completa e equilíbrio químico para água cristalina e livre de impurezas." },
  { img: s2, t: "Manutenção de bombas", d: "Ajuste e revisão das bombas para uma filtragem eficiente e silenciosa." },
  { img: s3, t: "Troca de areia do filtro", d: "Areia nova para filtrar melhor e aumentar a vida útil do equipamento." },
  { img: s4, t: "Serviços hidráulicos", d: "Vazamentos e falhas no encanamento resolvidos de vez." },
  { img: s5, t: "Manutenção de LED", d: "Iluminação funcionando para noites bonitas e seguras na piscina." },
  { img: s6, t: "Venda de produtos", d: "Cloro, filtros e acessórios de qualidade entregues na sua casa." },
];

const etapas = [
  { t: "Você chama", d: "Manda uma foto da piscina no WhatsApp." },
  { t: "Eu avalio", d: "Digo o que precisa e passo o orçamento na hora." },
  { t: "Água no ponto", d: "Visita marcada e piscina pronta pra mergulho." },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setOn(true), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, on };
}

const FRASE = "Sua piscina merece cuidado de verdade. Você relaxa, eu deixo a água um cristal.";

function Final() {
  const { ref, on } = useReveal<HTMLDivElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!on || n >= FRASE.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 38);
    return () => clearTimeout(t);
  }, [on, n]);
  const done = n >= FRASE.length;

  return (
    <section className="relative bg-deep text-deep-foreground">
      <div ref={ref} className="mx-auto grid max-w-6xl items-end gap-10 px-6 pt-24 md:grid-cols-2">
        <div className="pb-24 md:pb-32">
          <p className="eyebrow text-primary">Fala comigo</p>
          <h2 className="mt-5 min-h-[9em] font-display text-5xl font-black uppercase leading-[0.95] md:min-h-[6em] md:text-6xl">
            {FRASE.slice(0, n)}
            {!done && <span className="ml-1 inline-block w-1 animate-pulse bg-primary">&nbsp;</span>}
          </h2>
          {done && (
            <>
              <a
                href={WHATS}
                className="rise mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-5 text-lg font-extrabold text-primary-foreground shadow-soft transition hover:bg-accent"
              >
                <WhatsIcon /> Chamar no WhatsApp
              </a>
              <div className="rise mt-10 flex flex-col gap-4 text-base text-deep-foreground/75">
                <a href={TEL_HREF} className="flex items-start gap-3 font-semibold transition hover:text-primary">
                  <PhoneIcon />
                  <span>{TEL}</span>
                </a>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-semibold transition hover:text-primary"
                >
                  <PinIcon />
                  <span className="max-w-sm">{ENDERECO}</span>
                </a>
              </div>
            </>
          )}
        </div>
        <div className="relative flex justify-center self-end">
          <div className="absolute bottom-0 h-3/4 w-full rounded-t-[50%] bg-primary/20" />
          <img src={dono} alt="O Piscineiro" loading="lazy" className="relative max-h-[560px] w-auto" />
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-current" aria-hidden>
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1l-2.1 2.3Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-current" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2s-1 .3-3.4-.7a11.6 11.6 0 0 1-4.6-4.1c-.4-.5-1-1.6-1-2.7s.6-1.7.8-2 .5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6a8 8 0 0 0 1.5 1.8 7 7 0 0 0 2 1.3c.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3s.1.7-.1 1.4Z" />
    </svg>
  );
}

function Index() {
  return (
    <main>
      {/* abertura */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <video src={videoAgua} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/50 to-transparent" />
        <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="O Piscineiro" className="h-12 w-12 rounded-full" />
            <span className="font-display text-2xl font-black uppercase tracking-wide text-deep-foreground">O Piscineiro</span>
          </div>
          <nav className="hidden gap-9 text-lg font-semibold text-deep-foreground/80 md:flex">
            <a href="#servicos" className="hover:text-primary">Serviços</a>
            <a href="#como" className="hover:text-primary">Como funciona</a>
            <a href="#trabalhos" className="hover:text-primary">Trabalhos</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
        </header>
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
          <p className="eyebrow rise text-primary">Joinville e região</p>
          <h1 className="rise mt-5 max-w-3xl font-display text-6xl font-black uppercase leading-[0.9] text-deep-foreground md:text-8xl">
            Água limpa, cabeça tranquila.
          </h1>
          <p className="rise mt-6 max-w-lg text-lg text-deep-foreground/80">
            Limpeza, tratamento e manutenção completa para a sua piscina ficar pronta todos os dias.
          </p>
          <a href="#servicos" className="rise mt-10 inline-block rounded-full border-2 border-deep-foreground/60 px-8 py-4 font-extrabold text-deep-foreground transition hover:border-primary hover:bg-primary">
            Conhecer os serviços
          </a>
        </div>
      </section>


      {/* serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-accent">Serviços</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-6xl">Tudo que sua piscina precisa</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Do tratamento da água até a parte elétrica e hidráulica, um só profissional cuidando de tudo.</p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <article key={s.t} className="group">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={s.img} alt={s.t} loading="lazy" width={1024} height={768} className="aspect-[5/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 rounded-full bg-card px-4 py-1 text-sm font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-black uppercase">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* como funciona */}
      <section id="como" className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow text-accent">Como funciona</p>
          <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-6xl">Simples assim</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {etapas.map((e, i) => (
              <div key={e.t} className="rounded-[2rem] bg-card p-8 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-2xl font-black text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-3xl font-black uppercase">{e.t}</h3>
                <p className="mt-2 text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* trabalhos realizados */}
      <section id="trabalhos" className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-accent">Trabalhos</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-6xl">Água cristalina de verdade</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Fotos reais de piscinas que já passaram pelas minhas mãos.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[piscina1, piscina2, piscina3].map((f, i) => (
            <figure key={i} className={`group overflow-hidden rounded-[2rem] shadow-soft ${i === 1 ? "md:translate-y-6" : ""}`}>
              <img
                src={f}
                alt="Piscina limpa atendida pelo O Piscineiro"
                loading="lazy"
                width={682}
                height={662}
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href={WHATS}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-extrabold text-primary-foreground shadow-soft transition hover:bg-accent"
          >
            <WhatsIcon /> Quero a minha assim
          </a>
        </div>
      </section>

      <div id="contato">
        <Final />
      </div>

      <footer className="bg-deep text-deep-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-deep-foreground/10 px-6 py-8 text-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 rounded-full" />
            O Piscineiro · Cuidando do seu lazer
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href={TEL_HREF} className="font-semibold transition hover:text-primary">{TEL}</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
              R. Irmã Welter, 25 · Adhemar Garcia · Joinville/SC
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
