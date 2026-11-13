import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import josyHero from './assets/josy-hero.jpg'
import josySobre from './assets/josy-sobre.jpg'

const WHATSAPP_NUMBER = '5511954962707' // número da Josy com DDI+DDD
const WHATSAPP_MSG = encodeURIComponent('Olá, Josy! Gostaria de saber mais sobre Orientação Parental.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Leaf = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M52 11C25 13 12 29 12 49c20 0 37-12 40-38Z"/>
    <path d="M12 49c10-10 20-17 32-23"/>
  </svg>
)

const Heart = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
)

const Star = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [contactForm, submitContactForm] = useForm('mzezlobo')

  const testimonials = [
    {
      text: 'A Josy me mostrou que conexão vem antes da correção. Hoje me sinto acolhida e mais segura como mãe.',
      name: 'Ana',
      role: 'mãe do Davi, 3 anos',
      context: 'Orientação parental individual',
      bg: 'bg-[#FFF8DC]',
      dot: 'bg-[#F5C842]',
    },
    {
      text: 'A palestra foi muito instrutiva e envolvente, ao mesmo tempo que tratou de um tema complexo, a educação parental, Jôse trouxe os elementos com clareza, objetividade, e abordou as situações com muita gentileza. Gratidão pela partilha generosa!!!',
      name: 'Nícia Okawa',
      role: 'Assistente de Direção, CEI Içami Tiba',
      context: 'Palestra para equipe escolar',
      bg: 'bg-[#E8F6F1]',
      dot: 'bg-[#5BB89A]',
    },
    {
      text: 'Aprendemos a ouvir antes de reagir. Pequenas mudanças que fizeram uma diferença enorme na nossa rotina.',
      name: 'Renata e Caio',
      role: 'pais da Catarina, 4 anos',
      context: 'Orientação parental para o casal',
      bg: 'bg-[#E8F6F1]',
      dot: 'bg-[#5BB89A]',
    },
  ]

  const nav = ['Início', 'Sobre', 'Áreas de atuação', 'Depoimentos', 'Contato']
  const navIds = ['inicio', 'sobre', 'atuacao', 'depoimentos', 'contato']

  const areas = [
    {
      num: '01',
      title: 'Orientação parental',
      copy: 'Um espaço só seu — ou do casal — para respirar, refletir e encontrar novas formas de lidar com os desafios do dia a dia com seus filhos.',
      icon: '✦',
      bg: 'bg-[#E2F2EC]',
      iconBg: 'bg-[#BCE3D6]',
      iconColor: 'text-[#2E7D62]',
    },
    {
      num: '02',
      title: 'Disciplina positiva',
      copy: 'Aprenda a dizer não com amor, estabelecer limites com calma e construir uma relação de confiança com seus filhos — sem gritos, sem punições.',
      icon: '♡',
      bg: 'bg-[#FFF6D0]',
      iconBg: 'bg-[#F9DD8E]',
      iconColor: 'text-[#8A6210]',
    },
    {
      num: '03',
      title: 'Palestras & Workshops',
      copy: 'Momentos instrutivos e envolventes que tornam a educação parental acessível e inspiradora. Encontros pensados para famílias, educadores e comunidades que buscam clareza, conexão e transformação.',
      icon: '◎',
      bg: 'bg-[#E1EFF7]',
      iconBg: 'bg-[#BFDDF2]',
      iconColor: 'text-[#2A6090]',
    },
  ]

  return (
    <main className="overflow-hidden bg-[#FFFDF8] font-sans text-[#315A65] selection:bg-[#F9DD8E]/60">

      {/* ── Navigation ── */}
      <header className="sticky top-0 z-30 border-b border-[#E2EDE9]/70 bg-[#FFFDF8]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#inicio" className="flex items-center gap-3 group" aria-label="Josy de Assis, início">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#BCE3D6] text-[#2E7D62] transition group-hover:bg-[#A8D8C8]">
              <Leaf className="h-6 w-6" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.55rem] tracking-tight text-[#315A65]">josy</span>
              <span className="block pt-0.5 text-[8px] font-bold uppercase tracking-[.22em] text-[#7FA8B0]">de assis</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {nav.map((item, i) => (
              <a
                key={item}
                href={`#${navIds[i]}`}
                className="text-sm font-bold text-[#527780] transition hover:text-[#315A65]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-[#315A65] px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-[#254d57] lg:block"
          >
            Enviar uma mensagem
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 rounded-xl bg-[#ECF6F3] p-3 text-[#315A65] lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 rounded bg-current transition-transform origin-center ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded bg-current transition-transform origin-center ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#E2EDE9] bg-[#FFFDF8] px-6 pb-5 pt-3 lg:hidden" aria-label="Menu mobile">
            {nav.map((item, i) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={`#${navIds[i]}`}
                className="block rounded-xl px-3 py-3 font-bold text-[#315A65] transition hover:bg-[#ECF6F3]"
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block rounded-full bg-[#315A65] px-5 py-3 text-center text-sm font-extrabold text-white"
            >
              Enviar uma mensagem
            </a>
          </nav>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="inicio" className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-20">
        {/* Decorative blobs */}
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[460px] w-[460px] rounded-full bg-[#BFDDF2]/25 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 left-20 h-[320px] w-[320px] rounded-full bg-[#BCE3D6]/30 blur-2xl" />

        <div className="relative z-10 max-w-lg">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#FFF3C6] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-[#9A7132]">
            <Star className="h-3.5 w-3.5 text-[#E8B620]" />
            Educação respeitosa na prática
          </div>

          <h1 className="font-display text-[3.2rem] leading-[1.0] tracking-[-0.04em] text-[#254d57] sm:text-6xl lg:text-[4.2rem]">
            Você não precisa{' '}
            <span className="relative inline-block text-[#E08840]">
              acertar
              <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#F9DD8E]" />
            </span>{' '}
            sempre.
          </h1>
          <p className="mt-4 font-display text-2xl font-medium text-[#4A7882] lg:text-3xl">Só precisa estar presente.</p>

          <p className="mt-7 max-w-md text-[1.05rem] leading-[1.75] text-[#5E7C83]">
            Transformando desafios da rotina em oportunidades de conexão e crescimento.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#E08840] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_0_#C4692A] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#C4692A]"
            >
              Enviar uma mensagem
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-[#C6DDD8] bg-white px-5 py-3.5 text-sm font-extrabold text-[#315A65] transition hover:bg-[#E6F3F0]"
            >
              Como posso ajudar
              <span className="text-base">↓</span>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {['bg-[#F3B6A5]', 'bg-[#A9CBE8]', 'bg-[#C3D999]', 'bg-[#F5C87A]'].map((c, i) => (
                <span key={i} className={`h-9 w-9 rounded-full border-2 border-[#FFFDF8] ${c}`} />
              ))}
            </div>
            <p className="text-sm leading-snug text-[#648188]">
              <b className="font-extrabold text-[#315A65]">Escuta sem fronteiras</b><br /> Vivências com famílias de<br /> diferentes países e culturas
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="relative overflow-hidden rounded-[48%_52%_42%_58%/42%_43%_57%_58%] bg-[#BFDDF2]/40 p-4">
            <img
              className="h-[400px] w-full rounded-[44%_56%_43%_57%/55%_42%_58%_45%] object-cover object-center"
              src={josyHero}
              alt="Educadora em roda de conversa com crianças"
            />
             </div>
        </div>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="bg-[#E8F4F1] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[.88] overflow-hidden rounded-[47%_53%_52%_48%/38%_45%_55%_62%] bg-[#F8DA9B] p-4">
              <img
                className="h-full w-full rounded-[50%_50%_48%_52%/40%_50%_50%_60%] object-cover"
                src={josySobre}
                alt="Josy em um momento de escuta e acolhimento"
              />
            </div>
            <div className="absolute -bottom-4 -right-5 rounded-full bg-[#315A65] px-5 py-4 text-center text-sm font-bold text-white shadow-lg">
              <span className="block font-display text-2xl leading-none">Escuta</span>
              <span className="mt-0.5 block text-[11px] text-[#BDE2D6]">que acolhe</span>
            </div>
          </div>

          <div>
            <p className="eyebrow">prazer, eu sou a Josy</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-[#254d57] lg:text-[2.8rem]">
              Acredito em uma educação que respeita a infância{' '}
              <em className="not-italic text-[#E08840]">e</em> quem cuida dela.
            </h2>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-[#5A7880]">
              Sou mestre e doutora em Ensino de Ciências, especialista em Educação Parental, Neurociência e Disciplina Positiva, e caminho ao lado de famílias que querem se entender melhor — sem culpa, sem receitas prontas, sem julgamentos.
            </p>
            <p className="mt-4 max-w-xl text-[1.02rem] leading-[1.8] text-[#5A7880]">
              Acredito que toda família carrega dentro de si o que precisa para florescer. Meu papel é ajudá-la a encontrar esse caminho com mais leveza, conexão e afeto.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#315A65] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#254d57]"
            >
              Saiba mais
              <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── Áreas de Atuação ── */}
      <section id="atuacao" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">caminhos possíveis</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-[#254d57] lg:text-[2.8rem]">
            Um apoio que encontra sua família onde ela está.
          </h2>
          <p className="mt-5 max-w-lg text-[1.02rem] leading-[1.75] text-[#5E7C83]">
            Cada família tem seu ritmo. Escolha o formato que faz mais sentido para você agora.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {areas.map(({ num, title, copy, icon, bg, iconBg, iconColor }) => (
            <article
              key={title}
              className={`${bg} group flex flex-col rounded-[28px] p-7 transition duration-300 hover:-translate-y-1.5`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-extrabold tracking-widest text-[#7A9EA5]">{num}</span>
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconBg} ${iconColor} text-xl transition group-hover:scale-105`}>
                  {icon}
                </span>
              </div>
              <h3 className="mt-10 font-display text-2xl leading-tight text-[#254d57]">{title}</h3>
              <p className="mt-3 flex-1 text-[.97rem] leading-[1.75] text-[#5D7A80]">{copy}</p>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#315A65] transition hover:gap-2.5"
              >
                Saiba mais <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section id="depoimentos" className="bg-[#FFF8E1] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="eyebrow">palavras que aquecem</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-[#254d57] lg:text-[2.8rem]">
              Histórias de quem viveu essa mudança.
            </h2>
          </div>

          <div className="relative mx-auto mt-12 max-w-2xl">
            <div className={`${testimonials[activeTestimonial].bg} rounded-[32px] p-8 transition-all duration-300 sm:p-12`}>
              <p className="mb-5 inline-flex rounded-full bg-white/70 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#5B7C7A]">
                {testimonials[activeTestimonial].context}
              </p>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#E8B620]" />
                ))}
              </div>
              <blockquote className="font-display text-[1.55rem] leading-[1.45] text-[#254d57] sm:text-[1.7rem]">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div className="mt-7 flex items-center gap-3">
                <span className={`h-10 w-10 rounded-full ${testimonials[activeTestimonial].dot}`} />
                <div>
                  <p className="font-extrabold text-[#315A65]">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-[#718D92]">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-[#315A65]' : 'w-2 bg-[#C8DAD5]'}`}
                />
              ))}
            </div>
            <p className="mt-5 text-center text-xs leading-relaxed text-[#718D92]">
              Depoimentos publicados com autorização de cada participante.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section id="contato" className="relative overflow-hidden bg-[#254d57] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#315A65]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 left-8 h-48 w-48 rounded-full bg-[#1E3D45]" />
        <Leaf className="absolute right-10 top-10 h-52 w-52 rotate-[15deg] text-[#3A6A75]/60" />

        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_.85fr]">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#BCE3D6]">vamos conversar?</p>
            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.2rem]">
              Você não tem que carregar isso sozinho.
            </h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-[#B8D4D8]">
              Educar com respeito transforma o futuro. Dê o primeiro passo — vamos conversar com calma e descobrir juntos o que faz sentido para a sua família.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { icon: '✦', text: 'Atendimentos individual ou familiar — on-line ou presenciais' },
                { icon: '♡', text: 'Palestras & Workshops — encontros instrutivos e acolhedores' },
                { icon: '◎', text: 'Atividades para grupos e comunidades — formatos flexíveis' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#B8D4D8]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#315A65] text-[#BCE3D6]">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submitContactForm}
            className="rounded-[28px] bg-white p-7 text-[#315A65] shadow-2xl sm:p-9"
          >
            <div
              className={contactForm.succeeded ? 'flex min-h-80 flex-col items-center justify-center text-center' : 'hidden'}
              role="status"
              aria-live="polite"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F4F1] text-2xl text-[#2E7D62]">✓</span>
              <h3 className="mt-5 font-display text-2xl text-[#254d57]">Mensagem enviada!</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#5E7C83]">
                Obrigada pelo contato. Em breve, a Josy responderá pelo e-mail informado.
              </p>
            </div>

            <div className={contactForm.succeeded ? 'hidden' : 'block'}>
              <h3 className="font-display text-xl text-[#254d57]">Deixe uma mensagem</h3>

              <div className="mt-6 flex flex-col gap-5">
                  <label className="block">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#7FA8B0]">Seu nome</span>
                    <input
                      name="name"
                      ref={(input) => input?.setCustomValidity(input.value.trim() ? '' : 'Por favor, informe seu nome.')}
                      onInput={(event) => {
                        const input = event.currentTarget
                        input.setCustomValidity(input.value.trim() ? '' : 'Por favor, informe seu nome.')
                      }}
                      placeholder="Como podemos te chamar?"
                      className="mt-2 w-full rounded-xl border border-[#D7E5E2] bg-[#F8FDFC] px-4 py-3 text-sm outline-none placeholder:text-[#9CB1B1] focus:border-[#E08840] focus:ring-2 focus:ring-[#E08840]/20 transition"
                    />
                    <ValidationError field="name" errors={contactForm.errors} className="mt-1 text-xs text-[#B44C3D]" />
                  </label>

                  <label className="block">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#7FA8B0]">Seu e-mail</span>
                    <input
                      name="email"
                      type="email"
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                      ref={(input) => input?.setCustomValidity(input.value ? '' : 'Por favor, informe seu e-mail.')}
                      onInput={(event) => {
                        const input = event.currentTarget
                        input.setCustomValidity('')

                        if (!input.value) {
                          input.setCustomValidity('Por favor, informe seu e-mail.')
                        } else if (input.validity.typeMismatch || input.validity.patternMismatch) {
                          input.setCustomValidity('Por favor, informe um endereço de e-mail válido.')
                        }
                      }}
                      placeholder="voce@email.com"
                      className="mt-2 w-full rounded-xl border border-[#D7E5E2] bg-[#F8FDFC] px-4 py-3 text-sm outline-none placeholder:text-[#9CB1B1] focus:border-[#E08840] focus:ring-2 focus:ring-[#E08840]/20 transition"
                    />
                    <ValidationError field="email" errors={contactForm.errors} className="mt-1 text-xs text-[#B44C3D]" />
                  </label>

                  <label className="block">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#7FA8B0]">Como posso ajudar?</span>
                    <textarea
                      name="message"
                      ref={(textarea) => textarea?.setCustomValidity(textarea.value.trim() ? '' : 'Por favor, escreva uma mensagem.')}
                      onInput={(event) => {
                        const textarea = event.currentTarget
                        textarea.setCustomValidity(textarea.value.trim() ? '' : 'Por favor, escreva uma mensagem.')
                      }}
                      placeholder="Quero contar um pouquinho..."
                      className="mt-2 h-28 w-full resize-none rounded-xl border border-[#D7E5E2] bg-[#F8FDFC] px-4 py-3 text-sm outline-none placeholder:text-[#9CB1B1] focus:border-[#E08840] focus:ring-2 focus:ring-[#E08840]/20 transition"
                    />
                    <ValidationError field="message" errors={contactForm.errors} className="mt-1 text-xs text-[#B44C3D]" />
                  </label>

                  <ValidationError errors={contactForm.errors} className="text-center text-sm font-bold text-[#B44C3D]" />

                  <button
                    type="submit"
                    disabled={contactForm.submitting}
                    aria-busy={contactForm.submitting}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E08840] px-5 py-4 text-sm font-extrabold text-white shadow-[0_4px_0_#C4692A] transition hover:translate-y-0.5 hover:shadow-[0_2px_0_#C4692A] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <span>{contactForm.submitting ? 'Enviando...' : 'Enviar minha mensagem'}</span>
                    <span className={contactForm.submitting ? 'invisible' : 'visible'} aria-hidden="true">
                      <Arrow />
                    </span>
                  </button>
                  <p className="text-center text-xs leading-relaxed text-[#718D92]">
                    Seus dados serão usados apenas para responder a esta mensagem.
                  </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* ── WhatsApp flutuante ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo no WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center justify-start gap-3"
      >
        {/* Tooltip */}
        <span className="pointer-events-none translate-x-2 whitespace-nowrap rounded-full bg-[#254d57] px-3.5 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-x-0 group-hover:opacity-100 group-focus-visible:-translate-x-0 group-focus-visible:opacity-100">
          Prefere conversar pelo WhatsApp?
        </span>

        {/* Botão */}
        <span className="relative flex">
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: '2.4s' }} />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,.40)] transition hover:scale-105 hover:shadow-[0_8px_24px_rgba(37,211,102,.55)]">
            <WhatsAppIcon />
          </span>
        </span>
      </a>

      {/* ── Footer ── */}
      <footer className="bg-[#1E3D45] px-6 py-7 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 text-center text-sm text-[#8AB5BC] sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#315A65]">
              <Leaf className="h-4 w-4 text-[#BCE3D6]" />
            </span>
            <span>© 2026 Josy de Assis · Educação Parental</span>
          </div>
          <span className="flex items-center gap-1.5">
            Feito com muito afeto
            <Heart className="h-3.5 w-3.5 text-[#E08840]" />
          </span>
        </div>
      </footer>
    </main>
  )
}

export default App
