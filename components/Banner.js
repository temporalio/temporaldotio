export function Banner() {
  const [open, setOpen] = useLocalStorage('bannerOpen', true);
  if (!open) return null;
  return (
    <div className="relative bg-temporalblue text-spaceblack text-center py-2">
      <a className=" hover:text-blue-800" href="https://docs.temporal.io/blog/funding-announcement">
        <span role="img" aria-label="Celebration" className="hidden md:inline">
          🎉
        </span>
        Announcing our $18.75m Series A
        <span role="img" aria-label="Celebration" className="hidden md:inline">
          {' '}
          led by Sequoia! 🎉
        </span>
      </a>
      <button onClick={() => setOpen(false)}>
        <svg
          className="absolute right-0 top-0 mr-2 mt-3 md:mt-2 w-5 sm:w-6 h-5 sm:h-6 text-spaceblack"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

/**
 * utils
 *
 */

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
