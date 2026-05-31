import React from "react";

export type PageHeroTheme = "violet" | "blue" | "emerald";

interface PageHeroAction {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

interface PageHeroProps {
  ariaLabel: string;
  imageSrc?: string;
  theme?: PageHeroTheme;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  actions?: PageHeroAction[];
  children?: React.ReactNode;
}

const themeScrimClass: Record<PageHeroTheme, string> = {
  violet: "dal-page-hero__scrim--violet",
  blue: "dal-page-hero__scrim--blue",
  emerald: "dal-page-hero__scrim--emerald",
};

const primaryBtnClass: Record<PageHeroTheme, string> = {
  violet: "text-violet-900 hover:bg-violet-50",
  blue: "text-blue-900 hover:bg-blue-50",
  emerald: "text-emerald-900 hover:bg-emerald-50",
};

const PageHero: React.FC<PageHeroProps> = ({
  ariaLabel,
  imageSrc,
  theme = "blue",
  eyebrow,
  title,
  highlight,
  description,
  actions,
  children,
}) => (
  <section
    className="dal-page-hero"
    aria-label={ariaLabel}
  >
    {imageSrc ? (
      <img
        src={imageSrc}
        alt=""
        className="dal-page-hero__bg"
        aria-hidden
      />
    ) : null}
    <div
      className={`dal-page-hero__scrim ${themeScrimClass[theme]}${imageSrc ? "" : " dal-page-hero__scrim--solid"}`}
      aria-hidden
    />

    <div className="dal-page-hero__content layout-container w-full text-center">
      <p className="dal-hero-eyebrow text-sm font-semibold tracking-wide uppercase mb-3">
        {eyebrow}
      </p>
      <h1 className="dal-hero-title text-4xl md:text-6xl font-black mb-6 leading-tight">
        {title}
        {highlight ? (
          <>
            <br />
            <span className="dal-hero-highlight">{highlight}</span>
          </>
        ) : null}
      </h1>
      <p className="dal-hero-lede text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
        {description}
      </p>

      {children}

      {actions && actions.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions.map(({ label, onClick, variant = "primary" }) =>
            variant === "secondary" ? (
              <button
                key={label}
                type="button"
                onClick={onClick}
                className="dal-btn dal-page-hero__btn-secondary inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold"
              >
                {label}
              </button>
            ) : (
              <button
                key={label}
                type="button"
                onClick={onClick}
                className={`dal-btn dal-page-hero__btn-primary inline-flex items-center justify-center bg-white px-8 py-3 rounded-xl font-semibold shadow-lg ${primaryBtnClass[theme]}`}
              >
                {label}
              </button>
            )
          )}
        </div>
      ) : null}
    </div>
  </section>
);

export default PageHero;
