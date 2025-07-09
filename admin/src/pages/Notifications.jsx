import React from "react";

const notifications = [
  { message: "📉 Milk stock running low", type: "warning", time: "2 mins ago" },
  { message: "☀️ High demand expected for Ice Cream (Hot weather alert)", type: "info", time: "10 mins ago" },
  { message: "✅ Order #4598 marked as 'Delivered'", type: "success", time: "1 hour ago" },
];

const Notifications = () => {
  // ... (keep all the imports and logic the same)

return (
  <div className="p-6 max-w-4xl mx-auto">
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
        <span className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
        </span>
        Real-Time Notifications
      </h1>
      <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
        Refresh
      </button>
    </div>

    <div className="space-y-4">
      {notifications.map((note, idx) => (
        <div
          key={idx}
          className={`p-5 rounded-xl shadow-sm border-l-4 ${
            note.type === "warning"
              ? "border-yellow-400 bg-yellow-50"
              : note.type === "info"
              ? "border-blue-400 bg-blue-50"
              : "border-green-400 bg-green-50"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`mt-1 flex-shrink-0 ${
              note.type === "warning"
                ? "text-yellow-500"
                : note.type === "info"
                ? "text-blue-500"
                : "text-green-500"
            }`}>
              {note.type === "warning" ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              ) : note.type === "info" ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{note.message}</p>
              <p className="text-sm text-gray-500 mt-1">{note.time}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Notifications;
