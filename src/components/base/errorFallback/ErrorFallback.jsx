export default function ErrorFallback({
  error,
  resetErrorBoundary,
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M5.455 19h13.09c1.054 0 1.724-1.14 1.196-2.036L13.196 4.964c-.527-.896-1.865-.896-2.392 0L4.259 16.964C3.73 17.86 4.401 19 5.455 19z"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        {/* Description */}
        <p className="mt-2 text-center text-sm text-gray-500">
          An unexpected error occurred. Please try again.
        </p>

        {/* Error Message (optional in dev only) */}
        {import.meta.env.DEV && (
          <pre className="mt-4 text-xs text-red-500 bg-red-50 p-3 rounded-lg overflow-auto">
            {error.message}
          </pre>
        )}

        {/* Button */}
        <button
          onClick={resetErrorBoundary}
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}