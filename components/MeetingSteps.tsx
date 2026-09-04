export type MeetingStep = {
  title: string;
  description: string;
};

type MeetingStepsProps = {
  steps: MeetingStep[];
  ariaLabel?: string;
  className?: string;
};

export function MeetingSteps({ steps, ariaLabel = 'Meeting steps', className = '' }: MeetingStepsProps) {
  if (!steps.length) return null;

  return <ol className={`meeting-steps${className ? ` ${className}` : ''}`} aria-label={ariaLabel}>
    {steps.map((step, index) => <li className="meeting-step" key={`${index}-${step.title}`}>
      <div className="meeting-step-marker" aria-hidden="true">{index + 1}</div>
      <div className="meeting-step-copy">
        <strong>{step.title}</strong>
        <span>{step.description}</span>
      </div>
    </li>)}
  </ol>;
}
