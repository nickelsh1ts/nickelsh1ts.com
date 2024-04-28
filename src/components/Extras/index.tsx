'use client';

export default function Extras({ activeTab }: { activeTab: string }) {
  return (
    <section
      data-tab-panel="true"
      id="/extras"
      className={`${activeTab === 'tab4' ? 'block' : 'hidden'}`}
      role="tabpanel"
      tabIndex={-1}
      aria-labelledby="tab4"
    >
      <div className="px-4">
        <div className="flex justify-end mb-4">
          <a href="/extras" className="text-sm font-bold">
            permalink
          </a>
        </div>
        <p className="mb-8">Coming soon...</p>
      </div>
    </section>
  );
}
