import type { CSSProperties } from "react";

const badges = [
  {
    year: "2025",
    label: "Recognized",
    description:
      "NDPC-compliant health platform committed to data privacy and patient rights in Nigeria",
  },
  {
    year: "2025",
    label: "Licensed",
    description:
      "Registered pharmacy providing trusted pharmaceutical care across Lagos and Nigeria",
  },
  {
    year: "2025",
    label: "Verified",
    description:
      "Pharmacist-led telehealth consultations with qualified, licensed healthcare professionals",
  },
  {
    year: "2025",
    label: "Trusted",
    description:
      "Discreet delivery and private consultations trusted by patients across Nigeria",
  },
];

function LaurelLeft() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
      <path d="M14 34C14 34 2 28 2 18C2 8 14 2 14 2" stroke="#D4A843" strokeWidth="1.5" fill="none" />
      <path d="M14 30C14 30 6 25 6 18C6 11 14 6 14 6" stroke="#D4A843" strokeWidth="1.2" fill="none" />
      <ellipse cx="4" cy="12" rx="3" ry="5" fill="#D4A843" opacity="0.8" transform="rotate(-20 4 12)" />
      <ellipse cx="3" cy="19" rx="3" ry="5" fill="#D4A843" opacity="0.8" transform="rotate(-5 3 19)" />
      <ellipse cx="5" cy="26" rx="3" ry="4.5" fill="#D4A843" opacity="0.8" transform="rotate(15 5 26)" />
      <ellipse cx="9" cy="31" rx="2.5" ry="4" fill="#D4A843" opacity="0.7" transform="rotate(30 9 31)" />
      <ellipse cx="8" cy="7" rx="2.5" ry="4" fill="#D4A843" opacity="0.7" transform="rotate(-35 8 7)" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true" style={{ transform: "scaleX(-1)" }}>
      <path d="M14 34C14 34 2 28 2 18C2 8 14 2 14 2" stroke="#D4A843" strokeWidth="1.5" fill="none" />
      <path d="M14 30C14 30 6 25 6 18C6 11 14 6 14 6" stroke="#D4A843" strokeWidth="1.2" fill="none" />
      <ellipse cx="4" cy="12" rx="3" ry="5" fill="#D4A843" opacity="0.8" transform="rotate(-20 4 12)" />
      <ellipse cx="3" cy="19" rx="3" ry="5" fill="#D4A843" opacity="0.8" transform="rotate(-5 3 19)" />
      <ellipse cx="5" cy="26" rx="3" ry="4.5" fill="#D4A843" opacity="0.8" transform="rotate(15 5 26)" />
      <ellipse cx="9" cy="31" rx="2.5" ry="4" fill="#D4A843" opacity="0.7" transform="rotate(30 9 31)" />
      <ellipse cx="8" cy="7" rx="2.5" ry="4" fill="#D4A843" opacity="0.7" transform="rotate(-35 8 7)" />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <section className="trust-badges-section" data-reveal>
      <div className="trust-badges-grid">
        {badges.map((badge, index) => (
          <div
            key={badge.description}
            className="trust-badge"
            data-reveal
            style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
          >
            <div className="trust-badge__laurels">
              <LaurelLeft />
              <div className="trust-badge__year">
                <span className="trust-badge__year-text">{badge.year}</span>
                <span className="trust-badge__label">{badge.label}</span>
              </div>
              <LaurelRight />
            </div>
            <p className="trust-badge__description">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
