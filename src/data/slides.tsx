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
  Users,
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
          <header className='flex items-center gap-4 mb-8'>
            <div className='p-3 bg-zinc-900 rounded-xl'>
              <TerminalIcon className='text-white w-6 h-6' />
            </div>
            <div>
              <h2 className='text-3xl font-bold'>
                {t("slides.share_commands")}
              </h2>
              <p className='text-zinc-500'>{t("slides.share_commands_desc")}</p>
            </div>
          </header>
          <div className='flex justify-between items-end'>
            <h3 className='text-xl font-bold'>5. {t("slides.clone_title")}</h3>
            <code className='text-zinc-400 text-sm font-mono'>
              git clone &lt;url&gt;
            </code>
          </div>
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
  {
    id: 12,
    title: `${t("slides.concepts", { count: 5 })}`,
    type: "concept",
    content: (
      <section className='grid md:grid-cols-2 gap-8 items-center'>
        <article className='space-y-6'>
          <h2 className='text-4xl font-bold leading-tight'>
            {t("slides.splinter_wisdom")} 🐀
          </h2>
          <Card className='bg-emerald-50 border-emerald-200'>
            <p className='text-lg text-zinc-700 italic'>
              "{t("slides.splinter_says")}"
            </p>
          </Card>
        </article>
        <aside className='relative'>
          <div className='absolute inset-0 bg-emerald-500/5 rounded-3xl blur-3xl' />
          <div className='relative bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl flex flex-col items-center gap-6'>
            <div className='flex gap-4'>
              <div
                className='w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-md'
                title={t("turtle.leo")}
              />
              <div
                className='w-12 h-12 bg-red-500 rounded-full border-4 border-white shadow-md'
                title={t("turtle.raph")}
              />
              <div
                className='w-12 h-12 bg-purple-500 rounded-full border-4 border-white shadow-md'
                title={t("turtle.donnie")}
              />
              <div
                className='w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-md'
                title={t("turtle.mikey")}
              />
            </div>
            <div className='text-center w-full'>
              <p className='font-bold text-zinc-400 uppercase tracking-widest text-[10px] mb-2'>
                Main Path (Master)
              </p>
              <div className='h-2 w-full bg-zinc-200 rounded-full relative overflow-hidden'>
                <motion.div
                  className='absolute inset-0 bg-emerald-500'
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className='mt-4 flex justify-around relative'>
                {[
                  { color: "bg-blue-500", label: t("turtle.leo") },
                  { color: "bg-red-500", label: t("turtle.raph") },
                  { color: "bg-purple-500", label: t("turtle.donnie") },
                  { color: "bg-orange-500", label: t("turtle.mikey") },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ delay: i * 0.2, repeat: Infinity }}
                    className='flex flex-col items-center gap-1'
                  >
                    <div className={`w-3 h-3 ${t.color} rounded-full`} />
                    <span className='text-[10px] font-bold text-zinc-400'>
                      {t.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    ),
  },
  {
    id: 13,
    title: `${t("slides.concepts", { count: 6 })}`,
    type: "concept",
    content: (
      <section className='space-y-12'>
        <header className='text-center space-y-4'>
          <h2 className='text-4xl font-bold'>{t("slides.turtle_mission")}</h2>
          <p className='text-zinc-500 text-lg'>
            {t("slides.turtle_mission_desc")}
          </p>
        </header>

        <div className='relative h-80 w-full bg-zinc-50 rounded-3xl border border-zinc-100 p-8 flex items-center justify-center overflow-hidden'>
          <svg
            width='100%'
            height='100%'
            viewBox='0 0 800 300'
            className='overflow-visible'
          >
            {/* Main Branch Line */}
            <line
              x1='50'
              y1='150'
              x2='750'
              y2='150'
              stroke='#d4d4d8'
              strokeWidth='4'
              strokeDasharray='8 4'
            />

            {/* Main Commits */}
            {[50, 200, 350, 450, 600].map((x, i) => (
              <circle key={i} cx={x} cy='150' r='6' fill='#71717a' />
            ))}
            <text
              x='50'
              y='130'
              className='text-[14px] font-mono font-bold fill-zinc-400 uppercase tracking-widest'
            >
              Main Path (Lair)
            </text>

            {/* Branches */}
            {[
              {
                color: "#3b82f6",
                label: "feat/leo-katanas",
                startX: 200,
                endX: 350,
                y: 40,
                delay: 0,
              },
              {
                color: "#ef4444",
                label: "feat/raph-sais",
                startX: 350,
                endX: 450,
                y: 220,
                delay: 0.2,
              },
              {
                color: "#a855f7",
                label: "feat/don-gadgets",
                startX: 450,
                endX: 550,
                y: 60,
                delay: 0.4,
              },
              {
                color: "#f97316",
                label: "feat/mikey-pizza",
                startX: 600,
                endX: 750,
                y: 240,
                delay: 0.6,
              },
            ].map((b, i) => (
              <g key={i}>
                {/* Branch Path */}
                <motion.path
                  d={`M ${b.startX} 150 C ${b.startX + 50} ${b.y}, ${b.startX + 100} ${b.y}, ${b.endX} ${b.y}`}
                  fill='none'
                  stroke={b.color}
                  strokeWidth='3'
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    delay: b.delay,
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
                {/* Branch Commit */}
                <motion.circle
                  cx={b.endX}
                  cy={b.y}
                  r='6'
                  fill={b.color}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: b.delay + 1, type: "spring" }}
                />
                {/* Branch Label */}
                <motion.text
                  x={b.endX + 12}
                  y={b.y + 4}
                  className='text-[14px] font-mono font-bold'
                  style={{ fill: b.color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: b.delay + 1.2 }}
                >
                  {b.label}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>
      </section>
    ),
  },
  {
    id: 14,
    title: t("slides.terminal"),
    type: "terminal",
    content: (
      <section className='space-y-8'>
        <header className='flex items-center gap-4 mb-4'>
          <div className='p-3 bg-zinc-900 rounded-xl'>
            <TerminalIcon className='text-white w-6 h-6' />
          </div>
          <div>
            <h2 className='text-3xl font-bold'>
              {t("slides.training_tunnel_title")}
            </h2>
            <p className='text-zinc-500'>{t("slides.training_tunnel_desc")}</p>
          </div>
        </header>

        <div className='grid md:grid-cols-2 gap-8'>
          <article className='space-y-4'>
            <h3 className='text-lg font-bold'>
              1. {t("slides.branch_command_title")}
            </h3>
            <Terminal
              command='git checkout -b feat/leo-training'
              output={["Switched to a new branch 'feat/leo-training'"]}
            />
            <p className='text-zinc-600 text-xs italic'>
              {t("slides.branch_command_human")}
            </p>
          </article>

          <article className='space-y-4'>
            <h3 className='text-lg font-bold'>
              2. {t("slides.switch_branch")}
            </h3>
            <Terminal
              command='git checkout main'
              output={["Switched to branch 'main'"]}
            />
            <p className='text-zinc-600 text-xs italic'>
              {t("slides.switch_branch_human")}
            </p>
          </article>
        </div>

        <article className='space-y-4'>
          <h3 className='text-lg font-bold'>3. {t("slides.merge_lair")}</h3>
          <Terminal
            command='git merge feat/leo-training'
            output={[
              "Updating a1b2c3d..e5f6g7h",
              "Fast-forward",
              " training_manual.md | 5 +++++",
              " 1 file changed, 5 insertions(+)",
            ]}
          />
          <p className='text-zinc-600 text-xs italic'>
            {t("slides.merge_human")}
          </p>
        </article>
      </section>
    ),
  },
  {
    id: 15,
    title: t("slides.conflict_title"),
    type: "terminal",
    content: (
      <section className='space-y-8'>
        <header className='flex items-center gap-4'>
          <div className='p-3 bg-red-100 rounded-xl'>
            <AlertCircle className='text-red-600 w-6 h-6' />
          </div>
          <div>
            <h2 className='text-3xl font-bold'>
              {t("slides.conflict_title")} 🍕
            </h2>
            <p className='text-zinc-500'>{t("slides.conflict_desc")}</p>
          </div>
        </header>

        <Terminal
          command='git merge feat/raph-pizza'
          output={[
            "Auto-merging pizza_order.md",
            "CONFLICT (content): Merge conflict in pizza_order.md",
            "Automatic merge failed; fix conflicts and then commit the result.",
          ]}
        />

        <Card className='bg-zinc-900 text-zinc-300 p-6 font-mono text-xs leading-relaxed'>
          <p className='text-zinc-500'># pizza_order.md</p>
          <p className='text-red-400'>{"<<<<<<< HEAD"}</p>
          <p>Leo: Pepperoni</p>
          <p className='text-red-400'>{"======="}</p>
          <p>Raph: Mushrooms</p>
          <p className='text-red-400'>{">>>>>>> feat/raph-pizza"}</p>
        </Card>

        <p className='text-zinc-600 text-sm italic'>
          {t("slides.conflict_solve")}
        </p>
      </section>
    ),
  },
  {
    id: 16,
    title: t("slides.story_recap_title"),
    type: "concept",
    content: (
      <section className='space-y-8'>
        <header className='text-center space-y-4'>
          <h2 className='text-4xl font-bold'>
            {t("slides.story_recap_title")} 🐢
          </h2>
          <p className='text-zinc-500 text-lg'>
            {t("slides.story_recap_desc")}
          </p>
        </header>

        <div className='grid md:grid-cols-2 gap-6'>
          <Card className='p-6 space-y-4 border-l-4 border-l-blue-500'>
            <h4 className='font-bold'>1. Leo's Mission</h4>
            <ul className='text-sm space-y-2 text-zinc-600 list-none p-0'>
              <li>
                •{" "}
                <code className='bg-zinc-100 px-1 rounded'>
                  git checkout -b leo-mission
                </code>
              </li>
              <li>• Leo trains hard (commits code)</li>
              <li>
                •{" "}
                <code className='bg-zinc-100 px-1 rounded'>
                  git push origin leo-mission
                </code>
              </li>
            </ul>
          </Card>
          <Card className='p-6 space-y-4 border-l-4 border-l-red-500'>
            <h4 className='font-bold'>2. Raph's Mission</h4>
            <ul className='text-sm space-y-2 text-zinc-600 list-none p-0'>
              <li>
                •{" "}
                <code className='bg-zinc-100 px-1 rounded'>
                  git checkout -b raph-mission
                </code>
              </li>
              <li>• Raph trains hard (commits code)</li>
              <li>
                •{" "}
                <code className='bg-zinc-100 px-1 rounded'>
                  git push origin raph-mission
                </code>
              </li>
            </ul>
          </Card>
        </div>

        <article className='bg-emerald-50 border border-emerald-200 p-6 rounded-3xl flex items-center gap-6'>
          <div className='p-4 bg-emerald-500 rounded-full text-white'>
            <Users className='w-8 h-8' />
          </div>
          <div>
            <h4 className='font-bold text-emerald-900'>
              {t("slides.reunion_title")}
            </h4>
            <p
              className='text-sm text-emerald-700'
              dangerouslySetInnerHTML={{ __html: t("slides.reunion_desc") }}
            />
          </div>
        </article>
      </section>
    ),
  },
  {
    id: 17,
    title: t("slides.summary_title"),
    type: "summary",
    content: (
      <section className='space-y-8'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0'>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-blue-100 rounded-lg text-blue-600 font-bold font-mono'
              aria-hidden='true'
            >
              BRANCH
            </div>
            <div>
              <h4 className='font-bold'>{t("slides.sum_branch_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("slides.sum_branch_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-purple-100 rounded-lg text-purple-600 font-bold font-mono'
              aria-hidden='true'
            >
              SWITCH
            </div>
            <div>
              <h4 className='font-bold'>{t("slides.sum_switch_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("slides.sum_switch_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-emerald-100 rounded-lg text-emerald-600 font-bold font-mono'
              aria-hidden='true'
            >
              MERGE
            </div>
            <div>
              <h4 className='font-bold'>{t("slides.sum_merge_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("slides.sum_merge_desc")}
              </p>
            </div>
          </Card>
          <Card as='li' className='flex items-start gap-4'>
            <div
              className='p-2 bg-red-100 rounded-lg text-red-600 font-bold font-mono'
              aria-hidden='true'
            >
              CONFLICT
            </div>
            <div>
              <h4 className='font-bold'>{t("slides.sum_conflict_title")}</h4>
              <p className='text-zinc-500 text-sm'>
                {t("slides.sum_conflict_desc")}
              </p>
            </div>
          </Card>
        </ul>

        <article className='bg-zinc-900 text-white p-8 rounded-3xl text-center space-y-4'>
          <h3 className='text-2xl font-bold'>Cowabunga! 🐢</h3>
          <p className='text-zinc-400'>{t("slides.team_summary_desc")}</p>
          <button
            onClick={() => setCurrentSlide(18)}
            className='bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition-colors'
          >
            {t("slides.game_branching_title")} →
          </button>
        </article>
      </section>
    ),
  },
  {
    id: 18,
    title: t("game.summary"),
    type: "terminal",
    content: (
      <section className='space-y-6'>
        <header className='text-center space-y-2'>
          <h2 className='text-3xl font-bold'>{t("game.branching_title")} 🥷</h2>
          <p className='text-zinc-500'>{t("game.branching_desc")}</p>
        </header>
        <MiniGame mission='branching' onComplete={() => setCurrentSlide(0)} />
      </section>
    ),
  },
];
