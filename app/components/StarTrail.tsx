export default function StarTrail() {
  const spokes = Array.from({ length: 24 }, (_, index) => index * 15);
  const markers = Array.from({ length: 8 }, (_, index) => index * 45);

  return (
    <div className="celestial-bg" aria-hidden="true">
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="project-celestial-fade" cx="74%" cy="49%" r="62%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="58%" stopColor="white" stopOpacity="0.48" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="project-celestial-mask">
            <rect width="1600" height="1000" fill="url(#project-celestial-fade)" />
          </mask>
        </defs>

        <g mask="url(#project-celestial-mask)" className="celestial-orbits">
          <g className="celestial-ring-slow">
            {[165, 235, 315, 405, 520, 650, 790].map((radius) => (
              <circle key={radius} cx="1180" cy="500" r={radius} />
            ))}
            <circle className="orbit-dashed" cx="1180" cy="500" r="365" />
            <circle className="orbit-dashed orbit-dashed-wide" cx="1180" cy="500" r="575" />
          </g>

          <g className="celestial-spokes celestial-ring-reverse">
            {spokes.map((angle) => (
              <line
                key={angle}
                x1="1180"
                y1="355"
                x2="1180"
                y2="-350"
                transform={`rotate(${angle} 1180 500)`}
              />
            ))}
          </g>

          <g className="celestial-details celestial-ring-medium">
            {markers.map((angle) => (
              <circle
                key={angle}
                cx="1180"
                cy="95"
                r="4"
                transform={`rotate(${angle} 1180 500)`}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
