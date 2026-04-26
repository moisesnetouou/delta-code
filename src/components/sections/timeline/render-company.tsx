import { timelineStyles } from "./styles";

const styles = timelineStyles();

export function renderCompany(company: string, companyUrl?: string) {
  if (companyUrl) {
    return (
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.companyLink()}
        onClick={(e) => e.stopPropagation()}
      >
        {company}
      </a>
    );
  }
  return <span className={styles.companyText()}>{company}</span>;
}
