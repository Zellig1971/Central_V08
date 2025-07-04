import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function IconsPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Icons</h1>
            </div>

            <div>

              {/* Components */}
              <div className="space-y-8 mt-8">

                <div className="text-sm">If you need more icons than what we currently support in Mosaic, check out these great packs 👇</div>

                {/* Nucleo */}
                <div>
                  <div className="flex items-start space-x-3 mb-6">
                    <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Nucleo</h2>
                    <div className="btn-xs text-xs bg-violet-500/20 text-violet-600 px-2.5 py-1 rounded-full shadow-none">Recommended</div>
                  </div>
                  <div className="px-6 py-8 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                    <div className="text-gray-900 dark:text-gray-100 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">99% of the icons used in Mosaic come from Nucleo; a huge library of 3K+ vector icons!</div>
                    <div className="inline-flex space-x-3">
                      <a className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white" href="https://nucleoapp.com/pricing" target="_blank" rel="noreferrer">Buy Nucleo</a>
                      <a className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" href="https://nucleoapp.com/free-icons" target="_blank" rel="noreferrer">Download Free Pack</a>
                    </div>
                  </div>
                </div>

                {/* Tabler Icons */}
                <div>
                  <div className="flex items-start space-x-3 mb-6">
                    <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Tabler Icons</h2>
                    <div className="text-xs inline-flex font-medium bg-green-500/20 text-green-700 rounded-full text-center px-2.5 py-1">Free Alternative</div>
                  </div>
                  <div className="px-6 py-8 bg-gray-100 dark:bg-gray-800/50 rounded-lg text-center xl:text-left xl:flex xl:flex-wrap xl:justify-between xl:items-center">
                    <div className="text-gray-900 dark:text-gray-100 mb-4 xl:mb-0 max-w-lg mx-auto xl:mx-0 2xl:max-w-none">A set of 1250+ icons that are visually consistent with the style used in Mosaic!</div>
                    <div className="inline-flex space-x-3">
                      <a className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" href="https://tabler.io/icons" target="_blank" rel="noreferrer">Download Tabler Icons</a>
                    </div>
                  </div>
                </div>

                {/* Icon Usage Examples */}
                <div>
                  <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Icon Examples from the Project</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    
                    {/* Dashboard Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                          />
                          <path
                            className="fill-current text-violet-600"
                            d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                          />
                          <path
                            className="fill-current text-violet-200"
                            d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Dashboard</div>
                    </div>

                    {/* Finance Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-300"
                            d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z"
                          />
                          <path
                            className="fill-current text-violet-500"
                            d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z"
                          />
                          <path
                            className="fill-current text-violet-600"
                            d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Finance</div>
                    </div>

                    {/* Campaigns Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
                          />
                          <path
                            className="fill-current text-violet-300"
                            d="M14.5 7c4.695 0 8.5 3.805 8.5 8.5s-3.805 8.5-8.5 8.5-8.5-3.805-8.5-8.5 3.805-8.5 8.5-8.5z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Campaigns</div>
                    </div>

                    {/* Messages Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M14.5 0h-13c-.825 0-1.5.675-1.5 1.5v16.5l3-3h11.5c.825 0 1.5-.675 1.5-1.5v-12c0-.825-.675-1.5-1.5-1.5z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Messages</div>
                    </div>

                    {/* Settings Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Settings</div>
                    </div>

                    {/* Notifications Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M16 14v1H0V0h16v14zm-2-2V2H2v10h12z"
                          />
                          <path
                            className="fill-current text-violet-300"
                            d="M6 7H3.5v1h2V11h1V7z"
                          />
                          <path
                            className="fill-current text-violet-200"
                            d="M11.5 7h-2V6h2V3h1v4z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Notifications</div>
                    </div>

                    {/* Search Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                          />
                          <path
                            className="fill-current text-violet-400"
                            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Search</div>
                    </div>

                    {/* Add Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Add</div>
                    </div>

                    {/* Close Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-violet-500"
                            d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Close</div>
                    </div>

                    {/* Success Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-green-500"
                            d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Success</div>
                    </div>

                    {/* Warning Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-yellow-500"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Warning</div>
                    </div>

                    {/* Error Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-red-500"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Error</div>
                    </div>

                    {/* Info Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <path
                            className="fill-current text-blue-500"
                            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Info</div>
                    </div>

                    {/* Facebook Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs mb-2">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                          <circle className="fill-current text-[#1877F2]" cx="12" cy="12" r="12" />
                          <path
                            className="fill-current text-white"
                            d="M16.023 12.5H13v-2.5c0-.69.552-1.25 1.235-1.25h1.788V6.25h-1.788C11.75 6.25 10 8.06 10 10.25v2.25H7.977v2.5H10V21h3v-5.75h3.023v-2.5z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400">Facebook</div>
                    </div>
                  </div>
                </div>

                {/* How to Use Icons */}
                <div className="bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700/60 rounded-xl shadow-xs">
                  <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-4">How to Use Icons</h2>
                  
                  <div className="space-y-4">
                    <p className="text-sm">
                      Icons in this project are primarily SVG-based, which allows for easy customization of color, size, and other properties using CSS classes.
                    </p>
                    
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example Usage:</h3>
                      <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`<svg className="w-6 h-6 fill-current text-violet-500" viewBox="0 0 24 24">
  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
  <path d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
  <path d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
</svg>`}
                      </pre>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">Customizing Icons:</h3>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">w-6 h-6</code> - Controls the size (can use any Tailwind size class)</li>
                        <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">fill-current</code> - Makes the icon inherit the text color</li>
                        <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">text-violet-500</code> - Sets the color (can be any Tailwind color)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100">Multi-color Icons:</h3>
                      <p className="text-sm">
                        For multi-color icons, you can use multiple path elements with different color classes:
                      </p>
                      <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
{`<svg className="w-8 h-8" viewBox="0 0 24 24">
  <path
    className="fill-current text-violet-500"
    d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
  />
  <path
    className="fill-current text-violet-600"
    d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
  />
  <path
    className="fill-current text-violet-200"
    d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
  />
</svg>`}
                      </pre>
                    </div>
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