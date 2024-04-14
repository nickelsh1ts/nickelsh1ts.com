'use client';

export default function About({ activeTab }: { activeTab: string }) {
  return (
    <section
      data-tab-panel="true"
      id="/extras"
      className={`${activeTab === 'tab4' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab4"
    >
      <div className="grid gap-4">Extras...</div>
    </section>
  );
}
