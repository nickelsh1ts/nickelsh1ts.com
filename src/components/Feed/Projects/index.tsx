'use client';

export default function About({ activeTab }: { activeTab: string }) {
  return (
    <section
      data-tab-panel="true"
      id="/projects"
      className={`${activeTab === 'tab3' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab3"
    >
      <div className="grid gap-4">Projects...</div>
    </section>
  );
}
