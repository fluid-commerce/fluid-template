const Cube = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 49"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.792 14.24L41.512 13.74C41.1508 13.1354 40.6414 12.6329 40.032 12.28L26.612 4.54C26.0044 4.1875 25.3146 4.00124 24.612 4H24.032C23.3294 4.00124 22.6396 4.1875 22.032 4.54L8.61203 12.3C8.00597 12.6505 7.50255 13.1539 7.15203 13.76L6.87203 14.26C6.51953 14.8677 6.33327 15.5575 6.33203 16.26V31.76C6.33327 32.4626 6.51953 33.1524 6.87203 33.76L7.15203 34.26C7.51161 34.859 8.01301 35.3604 8.61203 35.72L22.052 43.46C22.6566 43.8198 23.3484 44.0066 24.052 44H24.612C25.3146 43.9988 26.0044 43.8126 26.612 43.46L40.032 35.7C40.644 35.3574 41.1494 34.852 41.492 34.24L41.792 33.74C42.1402 33.1306 42.3262 32.442 42.332 31.74V16.24C42.3308 15.5375 42.1446 14.8477 41.792 14.24ZM24.032 8H24.612L36.332 14.76L24.332 21.68L12.332 14.76L24.032 8ZM26.332 39L38.032 32.24L38.332 31.74V18.22L26.332 25.16V39Z"
      fill="black"
    />
  </svg>
);

export default Cube;
