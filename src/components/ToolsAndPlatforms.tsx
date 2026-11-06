import React from 'react';

interface ToolGroup {
  category: string;
  tools: string[];
}

export const ToolsAndPlatforms: React.FC = () => {
  const toolGroups: ToolGroup[] = [
    {
      category: 'AUTOMATION',
      tools: ['n8n', 'Make', 'Zapier']
    },
    {
      category: 'AI',
      tools: ['Claude', 'ChatGPT']
    },
    {
      category: 'CRM & FUNNELS',
      tools: ['GoHighLevel', 'Notion', 'HubSpot']
    },
    {
      category: 'PAYMENTS & WORKSPACE',
      tools: ['Stripe', 'Google Workspace']
    }
  ];

  return (
    <section id="tools" className="py-10 sm:py-14 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small centered label */}
        <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-slate-300 text-center uppercase mb-8 sm:mb-10 select-none">
          TOOLS I WORK WITH
        </p>

        {/* Four small groups in a 2x2 grid on mobile and single row of 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {toolGroups.map((group) => (
            <div key={group.category} className="space-y-2.5">
              {/* Tiny muted label above its tool names */}
              <div className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase select-none">
                {group.category}
              </div>

              {/* Clean text names in legible contrast that brighten on hover */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base sm:text-lg font-medium text-slate-200">
                {group.tools.map((tool, idx) => (
                  <React.Fragment key={tool}>
                    <span className="whitespace-nowrap hover:text-white transition-colors duration-150 cursor-default">
                      {tool}
                    </span>
                    {idx < group.tools.length - 1 && (
                      <span className="text-slate-400 select-none">,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndPlatforms;
