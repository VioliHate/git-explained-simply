import { motion } from "motion/react";
import {
  GitBranch,
  ArrowRight,
  History,
  CheckCircle2,
  AlertCircle,
  Code,
  Zap,
  Save,
  Terminal as TerminalIcon,
  Cloud,
  Download,
  Upload,
  Eye,
} from "lucide-react";
import { Slide } from "../types/Slide";
import { Terminal } from "../components/Terminal";
import { Card } from "../components/Card";
import { Highlight } from "../components/Highlight";
import { TFunction } from "i18next";
import { MiniGame } from "../components/MiniGame";

export const getSlides = (
  setCurrentSlide: (index: number) => void,
  t: TFunction,
): Slide[] => [
  {
    id: 0,
    title: t("header.title"),
    type: "intro",
    content: (
      <section className='text-center space-y-8'>
        <div className='relative inline-block'>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className='absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl'
          />
          <GitBranch className='w-24 h-24 text-emerald-600 mx-auto relative' />
        </div>
        <header className='space-y-4'>
          <h1 className='text-6xl font-extrabold tracking-tight text-zinc-900'>
            Git {t("i18n.for")}{" "}
            <span className='text-emerald-600 italic'>{t("i18n.humans")}</span>
          </h1>
          <p className='text-xl text-zinc-500 max-w-lg mx-auto'>
            {t("intro.subtitle")}
          </p>
        </header>
        <nav className='flex justify-center gap-4'>
          <button
            onClick={() => setCurrentSlide(1)}
            className='bg-zinc-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95'
          >
            {t("intro.start")} <ArrowRight className='w-5 h-5' />
          </button>
        </nav>
      </section>
    ),
  },
  {
    id: 1,
    title: `${t("slides.concepts", { count: 1 })}`,
    type: "concept",
    content: (
      <section className='grid md:grid-cols-2 gap-8 items-center'>
        <article className='space-y-6'>
          <h2 className='text-4xl font-bold leading-tight'>
            {t("slides.time_machine_title_start")}
            <Highlight color='bg-blue-100 text-blue-700'>
              {t("slides.time_machine_title")}
            </Highlight>
            {t("slides.time_machine_title_end")}
          </h2>
          <Card className='bg-blue-50/50 border-blue-200'>
            <p className='text-lg text-zinc-700 leading-relaxed whitespace-pre-line'>
              {t("slides.time_machine_desc")}
              <strong>{t("slides.no_git")}</strong> {t("slides.no_git_desc")}
              <strong>{t("slides.yes_git")}</strong> {t("slides.yes_git_desc")}
            </p>
          </Card>
        </article>
        <aside className='relative'>
          <div className='absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl' />
          <div className='relative bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl space-y-4'>
            <header className='flex items-center gap-3 text-zinc-400'>
              <History className='w-5 h-5' />
              <span className='text-sm font-mono uppercase tracking-widest'>
                {t("slides.history")}
              </span>
            </header>
            <ul className='space-y-3'>
              <li className='p-3 bg-zinc-50 rounded-lg border border-zinc-100 flex justify-between items-center'>
                <span>{t("slides.v1")}</span>
                <CheckCircle2 className='w-5 h-5 text-emerald-500' />
              </li>
              <li className='p-3 bg-zinc-50 rounded-lg border border-zinc-100 flex justify-between items-center opacity-50'>
                <span>{t("slides.v2")}</span>
                <AlertCircle className='w-5 h-5 text-zinc-300' />
              </li>
            </ul>
          </div>
        </aside>
      </section>
    ),
  },
  {
    id: 2,
    title: `${t("slides.concepts", { count: 2 })}`,
    type: "concept",
    content: (
      <section className='space-y-12'>
        <header className='text-center space-y-4'>
          <h2 className='text-4xl font-bold'>{t("slides.save_concept")}</h2>
          <p className='text-zinc-500 text-lg'>
            {t("slides.videogame_analogy")}
          </p>
        </header>

        <ul className='grid md:grid-cols-3 gap-6 list-none p-0'>
          <Card
            as='li'
            className='text-center space-y-4 hover:border-emerald-500 transition-colors'
          >
            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto'>
              <Code className='text-emerald-600' />
            </div>
            <h3 className='font-bold text-xl'>1. {t("slides.edit")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.edit_desc")}</p>
          </Card>

          <Card
            as='li'
            className='text-center space-y-4 hover:border-amber-500 transition-colors'
          >
            <div className='w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto'>
              <Zap className='text-amber-600' />
            </div>
            <h3 className='font-bold text-xl'>2. {t("slides.stage")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.stage_desc")}</p>
          </Card>

          <Card
            as='li'
            className='text-center space-y-4 hover:border-blue-500 transition-colors'
          >
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto'>
              <Save className='text-blue-600' />
            </div>
            <h3 className='font-bold text-xl'>3. {t("slides.commit")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.commit_desc")}</p>
          </Card>
        </ul>
      </section>
    ),
  },
  {
    id: 3,
    title: t("slides.terminal"),
    type: "terminal",
    content: (
      <section className='space-y-8'>
        <header className='flex items-center gap-4 mb-8'>
          <div className='p-3 bg-zinc-900 rounded-xl'>
            <TerminalIcon className='text-white w-6 h-6' />
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{t("slides.base_commands")}</h2>
            <p className='text-zinc-500'>{t("slides.base_commands_desc")}</p>
          </div>
        </header>

        <div className='space-y-12'>
          <article className='space-y-4'>
            <header className='flex justify-between items-end'>
              <h3 className='text-xl font-bold'>1. {t("slides.init_title")}</h3>
              <code className='text-zinc-400 text-sm font-mono'>git init</code>
            </header>
            <Terminal command='git init' output={[t("slides.init_output")]} />
            <p className='text-zinc-600 text-sm italic'>
              {t("slides.init_human")}
            </p>
          </article>

          <article className='space-y-4'>
            <header className='flex justify-between items-end'>
              <h3 className='text-xl font-bold'>2. {t("slides.add_title")}</h3>
              <code className='text-zinc-400 text-sm font-mono'>git add .</code>
            </header>
            <Terminal command='git add .' output={[t("slides.add_output")]} />
            <p className='text-zinc-600 text-sm italic'>
              {t("slides.add_human")}
            </p>
          </article>
        </div>
      </section>
    ),
  },
  {
    id: 4,
    title: t("slides.terminal"),
    type: "terminal",
    content: (
      <section className='space-y-12'>
        <article className='space-y-4'>
          <header className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>3. {t("slides.commit_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>
              git commit -m "..."
            </code>
          </header>
          <Terminal
            command='git commit -m "Ho aggiunto il logo"'
            output={[t("slides.commit_output_1"), t("slides.commit_output_2")]}
          />
          <p className='text-zinc-600 text-sm italic'>
            {t("slides.commit_human")}
          </p>
        </article>

        <article className='space-y-4'>
          <header className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>4. {t("slides.push_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>git push</code>
          </header>
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <div className='flex-1 w-full'>
              <Terminal
                command='git push origin main'
                output={[
                  "Enumerating objects: 5, done.",
                  "Writing objects: 100% (3/3), 300 bytes, done.",
                  "To github.com:me/progetto.git",
                ]}
              />
            </div>
            <aside className='flex flex-col items-center gap-2 text-zinc-400'>
              <Cloud className='w-12 h-12' />
              <span className='text-xs font-bold uppercase'>
                Cloud / GitHub
              </span>
            </aside>
          </div>
          <p className='text-zinc-600 text-sm italic'>
            {t("slides.push_human")}
          </p>
        </article>
      </section>
    ),
  },
  {
    id: 5,
    title: `${t("summary.title", { count: 1 })}`,
    type: "summary",
    content: (
      <section className='space-y-8'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0'>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-emerald-100 rounded-lg text-emerald-600 font-bold font-mono'
              aria-hidden='true'
            >
              INIT
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.init_title")}</h4>
              <p className='text-zinc-500 text-sm'>{t("summary.init_desc")}</p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-amber-100 rounded-lg text-amber-600 font-bold font-mono'
              aria-hidden='true'
            >
              ADD
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.add_title")}</h4>
              <p className='text-zinc-500 text-sm'>{t("summary.add_desc")}</p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-blue-100 rounded-lg text-blue-600 font-bold font-mono'
              aria-hidden='true'
            >
              COMMIT
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.commit_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("summary.commit_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-purple-100 rounded-lg text-purple-600 font-bold font-mono'
              aria-hidden='true'
            >
              PUSH
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.push_title")}</h4>
              <p className='text-zinc-500 text-sm'>{t("summary.push_desc")}</p>
            </div>
          </Card>
        </ul>
        <article className='bg-zinc-900 text-white p-8 rounded-3xl text-center border border-zinc-800 shadow-lg space-y-4'>
          <h3 className='text-2xl font-bold text-white'>
            {t("summary.mission_title")} 🚀
          </h3>
          <p className='text-zinc-400'>{t("summary.mission_desc")}</p>
        </article>
      </section>
    ),
  },
  {
    id: 6,
    title: `${t("slides.workflow", { count: 3 })}`,
    type: "concept",
    content: (
      <section className='grid md:grid-cols-2 gap-8 items-center'>
        <article className='space-y-6'>
          <h2 className='text-4xl font-bold leading-tight'>
            {t("slides.team_title_start")}
            <Highlight color='bg-blue-100 text-blue-700'>
              {t("slides.team_title")}
            </Highlight>
            {t("slides.team_title_end")}
          </h2>
          <Card className='bg-purple-50/50 border-purple-200'>
            <p className='text-lg text-zinc-700 leading-relaxed whitespace-pre-line'>
              {t("slides.team_desc")}
              <strong>{t("slides.team_desc_problem")}</strong>{" "}
              {t("slides.team_desc_problem_resp")}
              <strong>{t("slides.team_desc_solution")}</strong>{" "}
              {t("slides.team_desc_solution_resp")}
            </p>
          </Card>
        </article>
        <aside className='relative flex justify-center'>
          <div className='space-y-4 w-full max-w-xs'>
            <div className='p-4 bg-white border-2 border-dashed border-zinc-200 rounded-2xl flex items-center gap-3 justify-center'>
              <Cloud className='text-zinc-400' />
              <span className='font-bold text-zinc-400'>
                GITHUB ({t("slides.referee")})
              </span>
            </div>
            <div className='flex justify-between px-4'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold'>
                  {t("slides.you")}
                </div>
                <div className='h-8 w-0.5 bg-zinc-200 border-dashed border-l-2' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold'>
                  {t("slides.him")}
                </div>
                <div className='h-8 w-0.5 bg-zinc-200 border-dashed border-l-2' />
              </div>
            </div>
          </div>
        </aside>
      </section>
    ),
  },
  {
    id: 7,
    title: `${t("slides.workflow", { count: 4 })}`,
    type: "concept",
    content: (
      <section className='space-y-12'>
        <header className='text-center space-y-4'>
          <h2 className='text-4xl font-bold'>{t("slides.workflow_title")}</h2>
          <p className='text-zinc-500 text-lg'>{t("slides.team_analogy")}</p>
        </header>

        <ul className='grid md:grid-cols-3 gap-6 list-none p-0'>
          <Card
            as='li'
            className='text-center space-y-4 hover:border-blue-500 transition-colors'
          >
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto'>
              <Eye className='text-blue-600' />
            </div>
            <h3 className='font-bold text-xl'>1. {t("slides.peek")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.peek_desc")}</p>
          </Card>

          <Card
            as='li'
            className='text-center space-y-4 hover:border-emerald-500 transition-colors'
          >
            <div className='w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto'>
              <Download className='text-emerald-600' />
            </div>
            <h3 className='font-bold text-xl'>2. {t("slides.take")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.take_desc")}</p>
          </Card>

          <Card
            as='li'
            className='text-center space-y-4 hover:border-purple-500 transition-colors'
          >
            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto'>
              <Upload className='text-purple-600' />
            </div>
            <h3 className='font-bold text-xl'>3. {t("slides.share")}</h3>
            <p className='text-zinc-500 text-sm'>{t("slides.share_desc")}</p>
          </Card>
        </ul>
      </section>
    ),
  },
  {
    id: 8,
    title: t("slides.terminal"),
    type: "terminal",
    content: (
      <section className='space-y-8'>
        <article className='space-y-4'>
          <header className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>5. {t("slides.clone_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>
              git clone &lt;url&gt;
            </code>
          </header>
          <Terminal
            command='git clone https://github.com/amico/super-app.git'
            output={[
              "Cloning into 'super-app'...",
              "remote: Enumerating objects: 102, done.",
              "remote: Total 102 (delta 45), reused 98",
              "Receiving objects: 100% (102/102), 1.2 MiB | 4.5 MB/s, done.",
            ]}
          />
          <p className='text-zinc-600 text-sm italic'>
            {t("slides.clone_human")}
          </p>
        </article>
        <Card className='bg-zinc-50 border-zinc-200'>
          <p className='text-sm text-zinc-500'>
            <strong>{t("slides.note")}:</strong> {t("slides.clone_note")}
          </p>
        </Card>
      </section>
    ),
  },
  {
    id: 9,
    title: t("slides.terminal"),
    type: "terminal",
    content: (
      <section className='space-y-12'>
        <article className='space-y-4'>
          <header className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>6. {t("slides.fetch_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>git fetch</code>
          </header>
          <Terminal
            command='git fetch origin'
            output={[
              "remote: Enumerating objects: 5, done.",
              "From github.com:amico/super-app",
              "   a1b2c3d..e5f6g7h  main       -> origin/main",
            ]}
          />
          <p className='text-zinc-600 text-sm italic'>
            {t("slides.fetch_human")}
          </p>
        </article>

        <article className='space-y-4'>
          <header className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>7. {t("slides.pull_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>git pull</code>
          </header>
          <Terminal
            command='git pull origin main'
            output={[
              "Updating a1b2c3d..e5f6g7h",
              "Fast-forward",
              " README.md | 2 +-",
              " 1 file changed, 1 insertion(+), 1 deletion(-)",
            ]}
          />
          <p className='text-zinc-600 text-sm italic'>
            {t("slides.pull_human")}
          </p>
        </article>
      </section>
    ),
  },
  {
    id: 10,
    title: `${t("summary.title", { count: 2 })}`,
    type: "summary",
    content: (
      <section className='space-y-8'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0'>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-purple-100 rounded-lg text-purple-600 font-bold font-mono'
              aria-hidden='true'
            >
              CLONE
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.team_clone_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("summary.team_clone_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-blue-100 rounded-lg text-blue-600 font-bold font-mono'
              aria-hidden='true'
            >
              FETCH
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.team_fetch_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("summary.team_fetch_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-emerald-100 rounded-lg text-emerald-600 font-bold font-mono'
              aria-hidden='true'
            >
              PULL
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.team_pull_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("summary.team_pull_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4 '>
            <div
              className='p-2 bg-amber-100 rounded-lg text-amber-600 font-bold font-mono'
              aria-hidden='true'
            >
              PUSH
            </div>
            <div>
              <h4 className='font-bold'>{t("summary.team_push_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("summary.team_push_desc")}
              </p>
            </div>
          </Card>
        </ul>

        <article className='bg-zinc-900 text-white p-8 rounded-3xl text-center space-y-4'>
          <h3 className='text-2xl font-bold'>{t("summary.team_title")} 🤝</h3>
          <p className='text-zinc-400'>{t("summary.team_desc")}</p>
        </article>
      </section>
    ),
  },
  {
    id: 11,
    title: t("game.summary"),
    type: "terminal",
    content: (
      <section className='space-y-6'>
        <header className='text-center space-y-2'>
          <h2 className='text-3xl font-bold'>{t("game.basics_title")} 🍞</h2>
          <p className='text-zinc-500'>{t("game.basics_desc")}</p>
        </header>
        <MiniGame mission='basics' onComplete={() => setCurrentSlide(12)} />
      </section>
    ),
  },
];
