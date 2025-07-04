import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function IconsPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Define icon categories and their icons
  const iconCategories = [
    {
      name: "Interface Icons",
      icons: [
        { name: "Home", path: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" },
        { name: "Dashboard", path: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" },
        { name: "Finance", path: "M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z" },
        { name: "Campaigns", path: "M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z M14.5 7c4.695 0 8.5 3.805 8.5 8.5s-3.805 8.5-8.5 8.5-8.5-3.805-8.5-8.5 3.805-8.5 8.5-8.5z" },
        { name: "Messages", path: "M14.5 0h-13c-.825 0-1.5.675-1.5 1.5v16.5l3-3h11.5c.825 0 1.5-.675 1.5-1.5v-12c0-.825-.675-1.5-1.5-1.5z" },
        { name: "Settings", path: "M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" },
        { name: "Notifications", path: "M16 14v1H0V0h16v14zm-2-2V2H2v10h12z M6 7H3.5v1h2V11h1V7z M11.5 7h-2V6h2V3h1v4z" },
        { name: "Search", path: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" },
        { name: "Add", path: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" },
        { name: "Close", path: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" }
      ]
    },
    {
      name: "Status Icons",
      icons: [
        { name: "Success", path: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" },
        { name: "Warning", path: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" },
        { name: "Error", path: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" },
        { name: "Info", path: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" }
      ]
    },
    {
      name: "Social Icons",
      icons: [
        { name: "Facebook", path: "M16.023 26 16 19h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V16H23l-1 3h-2.72v7h-3.257Z" },
        { name: "Twitter", path: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" },
        { name: "GitHub", path: "M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8Z" },
        { name: "LinkedIn", path: "M14 13.5h2.5v1.25h.035c.353-.668 1.182-1.25 2.428-1.25 2.604 0 3.087 1.725 3.087 3.967V24h-2.5v-5.845c0-1.325-.543-2.21-1.698-2.21-1.023 0-1.667.655-1.667 2.033V24h-2.5v-10.5Zm-9 10.5h3v-10.5H5v10.5ZM6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" }
      ]
    },
    {
      name: "Directional Icons",
      icons: [
        { name: "Arrow Up", path: "M8 0L6.6 1.4 12.2 7H0v2h12.2l-5.6 5.6L8 16l8-8z" },
        { name: "Arrow Right", path: "M8 0l1.4 1.4L3.8 7H16v2H3.8l5.6 5.6L8 16 0 8z" },
        { name: "Arrow Down", path: "M8 16l1.4-1.4-5.6-5.6H16V7H3.8l5.6-5.6L8 0 0 8z" },
        { name: "Arrow Left", path: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" }
      ]
    }
  ];

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} variant="v2" />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-900">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} variant="v3" />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Central Icons</h1>
            </div>

            <div>

              {/* Components */}
              <div className="space-y-8 mt-8">
                <div className="text-sm">Below is a collection of icons available in the Central project. You can use these icons throughout your application.</div>
                
                {/* Icon Categories */}
                {iconCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-8">
                    <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-6">{category.name}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {category.icons.map((icon, iconIndex) => (
                        <div key={iconIndex} className="flex flex-col items-center">
                          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                            <svg className="w-8 h-8 fill-current text-gray-600 dark:text-gray-400" viewBox="0 0 24 24">
                              <path d={icon.path} />
                            </svg>
                          </div>
                          <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">{icon.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                {/* Usage Instructions */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 p-6 rounded-xl shadow-xs">
                  <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-4">How to Use Icons</h2>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      To use these icons in your Central project, you can copy the SVG code and include it in your components.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                      <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
                        {`<svg className="w-6 h-6 fill-current text-gray-600" viewBox="0 0 24 24">
  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
  <!-- Add more path elements as needed -->
</svg>`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      You can customize the appearance by changing the className properties:
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                      <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">w-6 h-6</code> - Controls the size</li>
                      <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">fill-current</code> - Makes the icon inherit the text color</li>
                      <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">text-gray-600</code> - Sets the color (can be any Tailwind color)</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </main>

      </div>

    </div>
  );
}

export default IconsPage;