import React from 'react';
import './WorkShowcase.css';

// Keep these three areas together so no single speciality defines the whole portfolio.
const areas = [
  {
    id: 'systems',
    number: '01',
    label: 'AUTOMATION + SYSTEMS',
    title: 'Systems that remove repetitive work.',
    description:
      'I design workflows and internal tooling that reduce manual work across reporting, coordination and day-to-day operations. My experience includes fintech and CX, but the approach applies wherever teams need better systems.',
    proof: '60+ automations',
    detail: 'Designed and delivered across support, operations and customer-facing workflows.',
    tags: ['Workflows', 'Reporting', 'AI-assisted operations'],
  },
  {
    id: 'software',
    number: '02',
    label: 'BUSINESS TOOLS + SOFTWARE',
    title: 'Business tools teams actually use.',
    description:
      'I build internal tools, business applications and SaaS products around real operational needs. From integrations to AI-assisted workflows, I turn requirements into practical software that helps teams get things done.',
    proof: 'Internal tools + SaaS',
    detail: 'From shaping the requirements to building, testing and improving the product.',
    tags: ['Internal tools', 'Integrations', 'SaaS'],
  },
  {
    id: 'apps',
    number: '03',
    label: 'APPS + PRODUCT BUILDING',
    title: 'Apps that go from idea to real users.',
    description:
      'I work across product decisions, web and mobile engineering, testing and launch. Ohh shipped on iOS and Android, reached users and earned revenue before we closed it. AfterFight is now in development.',
    proof: 'Web, iOS and Android',
    detail: 'Product thinking, engineering and iteration - from the first idea to the next release.',
    tags: ['React', 'React Native', 'Expo', 'TypeScript'],
  },
];

const process = ['Observe', 'Find friction', 'Build', 'Validate', 'Improve'];

export default function WorkShowcase() {
  return (
    <section
      className="section workShowcase"
      id="case-studies"
      aria-labelledby="work-showcase-title"
    >
      <header className="ws-heading">
        <div>
          <small className="ws-eyebrow">WHAT I BUILD</small>
          <h2 id="work-showcase-title">Systems. Software. Apps.</h2>
        </div>
        <p>
          I build automations, business tools and apps - connecting product
          thinking with the engineering that makes them work.
        </p>
      </header>

      <div className="ws-grid">
        {areas.map((area) => (
          <article
            className={`ws-card ws-card--${area.id}`}
            key={area.id}
            aria-labelledby={`ws-${area.id}-title`}
          >
            <div className="ws-cardTop">
              <span className="ws-number" aria-hidden="true">{area.number}</span>
              <span className="ws-label">{area.label}</span>
            </div>
            <h3 id={`ws-${area.id}-title`}>{area.title}</h3>
            <p className="ws-description">{area.description}</p>
            <ul className="ws-tags" aria-label={`${area.label.toLowerCase()} focus areas`}>
              {area.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <div className="ws-proof">
              <strong>{area.proof}</strong>
              <p>{area.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="ws-process">
        <span className="ws-eyebrow">HOW I WORK</span>
        <ol aria-label="My approach to building">
          {process.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
      <p className="ws-confidentiality">
        Client and employer details stay private. The capabilities are what I bring to your next project.
      </p>
    </section>
  );
}
