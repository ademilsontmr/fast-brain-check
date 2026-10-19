import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BadgePercent,
  Clock,
  CreditCard,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AMAZON_CTA_COPY, AMAZON_CTA_URL } from "@/constants/amazonCta";

type AmazonCtaVariant = "top" | "sidebar" | "faq";

interface AmazonCtaProps {
  variant: AmazonCtaVariant;
  onDismiss?: () => void;
}

const Benefits = ({ compact = false }: { compact?: boolean }) => (
  <div
    className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground ${
      compact ? "hidden sm:flex" : ""
    }`}
  >
    <span className="inline-flex items-center gap-1.5">
      <Truck className="h-3.5 w-3.5 text-primary" />
      {AMAZON_CTA_COPY.benefits.shipping}
    </span>
    <span className="inline-flex items-center gap-1.5">
      <CreditCard className="h-3.5 w-3.5 text-primary" />
      {AMAZON_CTA_COPY.benefits.payment}
    </span>
    <span className={`inline-flex items-center gap-1.5 ${compact ? "" : "hidden sm:inline-flex"}`}>
      <Zap className="h-3.5 w-3.5 text-primary" />
      {AMAZON_CTA_COPY.benefits.prime}
    </span>
  </div>
);

const UrgencyPill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
    <Clock className="h-3 w-3" />
    {children}
  </span>
);

const AmazonCta = ({ variant, onDismiss }: AmazonCtaProps) => {
  if (variant === "top") {
    return (
      <div className="border-b border-primary/15 bg-primary/5">
        <div className="container mx-auto flex items-center gap-2 px-4 py-2 sm:gap-3">
          <a
            href={AMAZON_CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3"
            aria-label={AMAZON_CTA_COPY.cta}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 sm:h-9 sm:w-9">
              <Smartphone className="h-4 w-4 text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-foreground sm:text-sm">
                <span className="text-primary">{AMAZON_CTA_COPY.badge}</span>
                <span className="mx-1.5 text-muted-foreground">·</span>
                {AMAZON_CTA_COPY.headline}
              </p>
              <p className="hidden truncate text-xs text-muted-foreground lg:block">
                {AMAZON_CTA_COPY.subheadline}
              </p>
            </div>

            <span className="hidden shrink-0 items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90 sm:inline-flex">
              {AMAZON_CTA_COPY.ctaShort}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>

            <span className="inline-flex shrink-0 items-center gap-0.5 rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-semibold text-primary-foreground sm:hidden">
              Ver
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>

          {onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Fechar oferta"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <a
        href={AMAZON_CTA_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group relative block overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-card via-primary/5 to-card p-5 shadow-elegant transition-all hover:border-primary/45 hover:shadow-lg"
        aria-label={AMAZON_CTA_COPY.sidebar.cta}
      >
        <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />

        <div className="relative mb-4 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
            <BadgePercent className="h-5 w-5 text-primary" />
          </div>
          <Sparkles className="h-4 w-4 animate-pulse text-primary" />
        </div>

        <p className="relative mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
          {AMAZON_CTA_COPY.sidebar.badge}
        </p>
        <h3 className="relative mb-2 text-base font-bold leading-snug text-foreground">
          {AMAZON_CTA_COPY.sidebar.headline}
        </h3>
        <p className="relative mb-3 text-sm text-muted-foreground">
          {AMAZON_CTA_COPY.sidebar.subheadline}
        </p>

        <div className="relative mb-4 flex flex-col gap-2">
          <Benefits />
        </div>

        <div className="relative mb-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          {AMAZON_CTA_COPY.trust}
        </div>

        <span className="relative inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all group-hover:bg-primary/90">
          {AMAZON_CTA_COPY.sidebar.cta}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    );
  }

  return (
    <div className="relative mb-10 overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-5 shadow-elegant sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex min-w-0 flex-1 items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
          <BadgePercent className="h-6 w-6 text-primary" />
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              {AMAZON_CTA_COPY.faq.badge}
            </p>
            <UrgencyPill>{AMAZON_CTA_COPY.urgency}</UrgencyPill>
          </div>
          <h3 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
            {AMAZON_CTA_COPY.faq.headline}
          </h3>
          <p className="mb-3 text-sm text-muted-foreground">
            {AMAZON_CTA_COPY.faq.subheadline}
          </p>
          <Benefits />
        </div>
      </div>

      <Button
        size="lg"
        className="relative mt-4 w-full shrink-0 gap-2 font-bold shadow-elegant sm:mt-0 sm:w-auto"
        asChild
      >
        <a
          href={AMAZON_CTA_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {AMAZON_CTA_COPY.faq.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default AmazonCta;
