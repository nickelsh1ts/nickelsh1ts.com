export default function PdfResumeViewer() {
  return (
    <div className="grid gap-3">
      <iframe
        src="/nicholas.wege.pdf"
        title="Nicholas Wege resume"
        className="h-[40vh] min-h-80 w-full rounded-md border border-zinc-700 bg-zinc-950"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <p className="text-sm text-zinc-400">
        If your browser blocks inline PDF viewing, use the download button
        below.
      </p>
    </div>
  );
}
