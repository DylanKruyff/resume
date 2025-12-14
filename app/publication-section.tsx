import { BookIcon } from "lucide-react";
import { Section } from "../components/ui/section";

export function PublicationSection() {
  return (
    <Section title="Publications" icon={BookIcon}>
      <div className="flex flex-col gap-4">
        <a
          href="https://ieeexplore.ieee.org/document/9904933"
          target="_blank"
          rel="noopener noreferrer"
          className="italic"
        >
          <h3 className="text-lg font-bold">
            PSEUDo: Interactive Pattern Search in Multivariate Time Series with
            Locality-Sensitive Hashing and Relevance Feedback
          </h3>
        </a>
        <p className="text-sm">
          Master thesis project/paper which proposes a new sub-linear algorithm
          for finding and exploring patterns in multivariate time series data.
        </p>
      </div>
    </Section>
  );
}
