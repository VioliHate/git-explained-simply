export const Terminal = ({
  command,
  output,
}: {
  command: string;
  output: string[];
}) => (
  <figure className='bg-zinc-900 rounded-xl p-4 font-mono text-sm text-zinc-300 shadow-2xl border border-zinc-800 w-full max-w-2xl mx-auto overflow-hidden'>
    <header className='flex gap-1.5 mb-3 border-b border-zinc-800 pb-2'>
      <div className='w-3 h-3 rounded-full bg-red-500/50' aria-hidden='true' />
      <div
        className='w-3 h-3 rounded-full bg-amber-500/50'
        aria-hidden='true'
      />
      <div
        className='w-3 h-3 rounded-full bg-emerald-500/50'
        aria-hidden='true'
      />
      <span className='ml-2 text-zinc-500 text-xs'>bash — git-demo</span>
    </header>
    <pre className='space-y-1 whitespace-pre-wrap'>
      <code className='flex gap-2'>
        <span className='text-emerald-400' aria-hidden='true'>
          $
        </span>
        <span className='text-zinc-100'>{command}</span>
      </code>
      {output.map((line, i) => (
        <code key={i} className='block text-zinc-400 pl-4'>
          {line}
        </code>
      ))}
      <code className='flex gap-2 animate-pulse'>
        <span className='text-emerald-400' aria-hidden='true'>
          $
        </span>
        <span className='w-2 h-4 bg-zinc-500' aria-hidden='true' />
      </code>
    </pre>
  </figure>
);
