const Loading = () => {
  return (
    <div className="min-h-[70vh] w-full px-4 py-8 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-7xl mx-auto">
        {/* Page Header Skeleton */}
        <div className="mb-8 space-y-3">
          <div className="h-8 w-48 bg-base-300 rounded-lg"></div>
          <div className="h-4 w-64 bg-base-200 rounded-md"></div>
        </div>

        {/* Filter / Sort Skeleton */}
        <div className="flex justify-between items-center mb-6 gap-4">
          <div className="h-6 w-32 bg-base-300 rounded-md"></div>
          <div className="h-10 w-32 sm:w-40 bg-base-200 rounded-lg"></div>
        </div>

        {/* Product List Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden"
            >
              {/* Image Skeleton */}
              <div className="h-44 sm:h-48 bg-base-300"></div>

              <div className="card-body p-4 space-y-4">
                {/* Product Name */}
                <div className="h-5 w-3/4 bg-base-300 rounded-md"></div>

                {/* Category */}
                <div className="h-4 w-1/2 bg-base-200 rounded-md"></div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <div className="h-7 w-24 bg-base-300 rounded-md"></div>
                  <div className="h-6 w-16 bg-base-200 rounded-full"></div>
                </div>

                {/* Price Change */}
                <div className="flex justify-between items-center pt-3 border-t border-base-300">
                  <div className="h-4 w-20 bg-base-200 rounded-md"></div>
                  <div className="h-5 w-20 bg-base-300 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
