'use client';

export default function About({ activeTab }: { activeTab: string }) {
  return (
    <section
      data-tab-panel="true"
      id="/about"
      className={`${activeTab === 'tab2' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab2"
    >
      <div className="grid gap-4">About...</div>
    </section>
  );
}
