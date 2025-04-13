// src/components/DotLoader.tsx

export function DotLoader() {
  return (
    <span className="dot-loader">
      <span className="dot delay-0">.</span>
      <span className="dot delay-1">.</span>
      <span className="dot delay-2">.</span>

      <style jsx>{`
        .dot-loader {
          display: inline-block;
        }

        .dot {
          opacity: 0;
          animation: flash 1.2s infinite ease-in-out;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }

        .delay-2 {
          animation-delay: 0.4s;
        }

        @keyframes flash {
          0%,
          20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
