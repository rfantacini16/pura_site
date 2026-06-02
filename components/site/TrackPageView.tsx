"use client";

import { useEffect } from "react";
import { trackEvent, EventName } from "@/lib/analytics";

interface TrackPageViewProps {
  eventName: EventName;
  properties?: Record<string, any>;
}

export function TrackPageView({ eventName, properties }: TrackPageViewProps) {
  useEffect(() => {
    trackEvent(eventName, properties);
  }, [eventName, properties]);

  return null;
}
