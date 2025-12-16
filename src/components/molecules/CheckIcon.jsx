export default function CheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="18" rx="9" className="light-fill"></rect>
      <path
        d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 
        13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 
        10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 
        8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 
        12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 
        12.9184 8.31661 12.7561Z"
        className="dark-fill"
      />
    </svg>
  );
}
