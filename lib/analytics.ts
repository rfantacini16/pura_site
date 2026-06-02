// Unified Analytics Layer for PURA Site

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: Record<string, any>
    ) => void;
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, any> }
    ) => void;
    posthog?: {
      capture: (eventName: string, properties?: Record<string, any>) => void;
    };
  }
}

export type EventName =
  | "hero_cta_click"
  | "plan_view"
  | "plan_select"
  | "contact_form_submit"
  | "whatsapp_click"
  | "demo_request"
  | "feature_card_click";

/**
 * Tracks a custom event across all configured analytics platforms.
 * Outputs to console in development environment.
 * 
 * @param eventName Name of the event to track
 * @param properties Optional event properties/metadata
 */
export function trackEvent(eventName: EventName, properties?: Record<string, any>) {
  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Track Event: "${eventName}"`, properties || {});
  }

  // 1. Google Analytics (GA4) Support
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, properties);
  }

  // 2. Plausible Analytics Support
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(eventName, { props: properties });
  }

  // 3. PostHog Analytics Support
  if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === "function") {
    window.posthog.capture(eventName, properties);
  }
}
