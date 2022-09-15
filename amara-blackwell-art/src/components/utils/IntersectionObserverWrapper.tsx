import React, { useRef } from "react";
import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";

interface ISProps {
  children: React.ReactNode;
  duration?: string;
}

function IntersectionObserverWrapper({ children, duration = "" }: ISProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`${duration} transition ${
        isVisible ? "component-show" : "component-hidden"
      } component-animation`}
    >
      <div>{children}</div>
    </div>
  );
}

export default IntersectionObserverWrapper;
