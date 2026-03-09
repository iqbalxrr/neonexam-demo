type SectionHeadingProps = {
  title: string;
  accent?: string;
  text?: string;
};

export function SectionHeading({ title, accent, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>
        {title}
        {accent ? <span className="text-accent"> {accent}</span> : null}
      </h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

