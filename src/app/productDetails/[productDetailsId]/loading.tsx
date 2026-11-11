const Loading = () => {
  return (
    <div className="bg-[#f4f6f4] min-h-screen py-6 px-4 md:px-8 font-sans animate-pulse">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Breadcrumb Skeleton */}
        <nav className="flex items-center gap-2">
          <div className="h-4 w-10 bg-gray-300 rounded"></div>
          <div className="h-3 w-2 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-3 w-2 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </nav>

        {/* Product Information Skeleton */}
        <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Product Image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-200 shrink-0"></div>

            <div className="space-y-3 flex-1 pt-1">
              {/* Product Name */}
              <div className="h-7 sm:h-9 w-40 sm:w-64 bg-gray-300 rounded-lg"></div>

              {/* Unit & Category */}
              <div className="h-4 w-32 bg-gray-200 rounded"></div>

              {/* Price Change Description */}
              <div className="h-4 w-48 sm:w-64 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Today's Price */}
          <div className="bg-[#f7f9f7] rounded-xl p-4 sm:p-5 border border-gray-100 flex flex-col items-center justify-center min-w-[160px] self-stretch md:self-auto gap-3">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Price Summary Skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-40 bg-gray-300 rounded-md"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-3"
              >
                {/* Label */}
                <div className="h-4 w-24 bg-gray-200 rounded"></div>

                {/* Price */}
                <div className="h-8 w-36 bg-gray-300 rounded-md"></div>

                {/* Description */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="h-3 w-40 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Price Table Skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-52 bg-gray-300 rounded-md"></div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                {/* Table Header */}
                <thead className="bg-[#f7f9f7] border-b border-gray-100">
                  <tr>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <th key={index} className="py-4 px-4 sm:px-6">
                        <div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Rows */}
                <tbody className="divide-y divide-gray-50">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <tr key={index}>
                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <td key={colIndex} className="py-5 px-4 sm:px-6">
                          <div className="h-4 w-20 bg-gray-200 rounded mx-auto"></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
