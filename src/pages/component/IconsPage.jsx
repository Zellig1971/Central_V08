import React, { useState, useEffect } from 'react';
import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

function IconsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fillIcons, setFillIcons] = useState([]);
  const [outlineIcons, setOutlineIcons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('fill');

  useEffect(() => {
    // In a real implementation, this would be a dynamic import of all SVG files
    // For now, we'll use a static list of icon names based on the file structure
    
    // These are the actual icon names from the nucleo_icons directory
    const fillIconNames = [
      'accessibility', 'alarm', 'alarm-add', 'alarm-disable', 'algorithm', 'alpha-order', 
      'app-store', 'archive', 'at-sign', 'attachment', 'b-chart', 'bag-16', 'ban', 
      'banana', 'barcode-qr', 'basket', 'battery-charging', 'battery-low', 'bicep', 
      'blog', 'blueprint', 'book', 'bookmark', 'bouquet', 'briefcase-24', 'bullet-list', 
      'c-add', 'c-check', 'c-delete', 'c-info', 'c-question', 'c-remove', 'c-warning', 
      'calendar', 'chat', 'check', 'check-double', 'child', 'circle-arrow-down', 
      'circle-arrow-left', 'circle-arrow-right', 'circle-arrow-up', 'cloud-forecast', 
      'cogwheel', 'control-panel', 'd-edit', 'data-download', 'data-upload', 'database', 
      'decision-process', 'deer', 'design-system', 'desk-lamp', 'digital-image', 
      'dock-bottom', 'down-arrow', 'download', 'drop', 'drums', 'e-add', 'e-delete', 
      'e-remove', 'ecology', 'edit', 'energy', 'enlarge', 'exclamation-mark', 
      'face-recognition', 'farmer-market', 'file-add', 'file-delete', 'file-text', 
      'filter', 'finger-snap', 'flag-diagonal-33', 'floppy-disk', 'flower-rose', 
      'folder', 'gallery-view', 'gaming-console', 'geometry', 'globe-2', 'grape', 
      'grid-interface', 'grid-layout', 'hair-man', 'hair-woman', 'handshake', 'headphones', 
      'heart', 'hide', 'home', 'hourglass', 'i-check', 'image', 'info', 'interview', 
      'key', 'launch', 'leave', 'license-key', 'lifering', 'light-control', 'like', 
      'link', 'loader-bars', 'lock', 'loop', 'love-song', 'lucky-seven', 'mail', 
      'megaphone', 'menu', 'menu-8', 'microscope', 'mirror-tablet-phone', 'palm-tree', 
      'paragraph', 'park', 'pen', 'phone-call', 'pin', 'position-marker', 'present', 
      'profile', 'progress-2', 'question-mark', 'rat', 'reload', 'replay', 'right-arrow', 
      's-add', 's-delete', 's-info', 's-pulse', 's-question', 's-remove', 's-warning', 
      'salad', 'save-for-later', 'saved-items', 'screen-enlarge', 'selfie-2', 
      'send-message', 'settings', 'shop', 'shopping-bag', 'shopping-cart', 'shopping-label', 
      'sidebar', 'skull', 'spaceship', 'stack', 'star', 'stopwatch', 'switches', 
      'telephone', 'theater', 'time-alarm', 'time-clock', 'toggle', 'translation', 
      'trash-can', 'trumpet', 'unlink', 'up-arrow', 'upload', 'vacuum-cleaner', 'vector', 
      'view', 'warning-sign', 'watering-plants', 'wireframe', 'world', 'yoga'
    ];
    
    const outlineIconNames = [
      'accessibility', 'alarm', 'alarm-add', 'alarm-disable', 'algorithm', 'alpha-order', 
      'app-store', 'archive', 'at-sign', 'attachment', 'b-chart', 'bag-16', 'ban', 
      'banana', 'barcode-qr', 'basket', 'battery-charging', 'battery-low', 'bicep', 
      'blog', 'blueprint', 'book', 'bookmark', 'bouquet', 'briefcase-24', 'bullet-list', 
      'c-add', 'c-check', 'c-delete', 'c-info', 'c-question', 'c-remove', 'c-warning', 
      'calendar', 'chat', 'check', 'check-double', 'child', 'circle-arrow-down', 
      'circle-arrow-left', 'circle-arrow-right', 'circle-arrow-up', 'cloud-forecast', 
      'cogwheel', 'control-panel', 'd-edit', 'data-download', 'data-upload', 'database', 
      'decision-process', 'deer', 'design-system', 'desk-lamp', 'digital-image', 
      'dock-bottom', 'down-arrow', 'download', 'drop', 'drums', 'e-add', 'e-delete', 
      'e-remove', 'ecology', 'edit', 'energy', 'enlarge', 'exclamation-mark', 
      'face-recognition', 'farmer-market', 'file-add', 'file-delete', 'file-text', 
      'filter', 'finger-snap', 'flag-diagonal-33', 'floppy-disk', 'flower-rose', 
      'folder', 'gallery-view', 'gaming-console', 'geometry', 'globe-2', 'grape', 
      'grid-interface', 'grid-layout', 'hair-man', 'hair-woman', 'handshake', 'headphones', 
      'heart', 'hide', 'home', 'hourglass', 'i-check', 'image', 'info', 'interview', 
      'key', 'launch', 'leave', 'license-key', 'lifering', 'light-control', 'like', 
      'link', 'loader-bars', 'lock', 'loop', 'love-song', 'lucky-seven', 'mail', 
      'megaphone', 'menu', 'menu-8', 'microscope', 'mirror-tablet-phone', 'palm-tree', 
      'paragraph', 'park', 'pen', 'phone-call', 'pin', 'position-marker', 'present', 
      'profile', 'progress-2', 'question-mark', 'rat', 'reload', 'replay', 'right-arrow', 
      's-add', 's-delete', 's-info', 's-pulse', 's-question', 's-remove', 's-warning', 
      'salad', 'save-for-later', 'saved-items', 'screen-enlarge', 'selfie-2', 
      'send-message', 'settings', 'shop', 'shopping-bag', 'shopping-cart', 'shopping-label', 
      'sidebar', 'skull', 'spaceship', 'stack', 'star', 'stopwatch', 'switches', 
      'telephone', 'theater', 'time-alarm', 'time-clock', 'toggle', 'translation', 
      'trash-can', 'trumpet', 'unlink', 'up-arrow', 'upload', 'vacuum-cleaner', 'vector', 
      'view', 'warning-sign', 'watering-plants', 'wireframe', 'world', 'yoga'
    ];

    setFillIcons(fillIconNames);
    setOutlineIcons(outlineIconNames);
  }, []);

  const filteredFillIcons = fillIcons.filter(icon => 
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOutlineIcons = outlineIcons.filter(icon => 
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Nucleo Icons</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A comprehensive collection of icons for use in your Central project.
              </p>
            </div>

            {/* Search and tabs */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {/* Search */}
                <div className="w-full sm:w-64">
                  <input
                    type="text"
                    className="form-input w-full"
                    placeholder="Search icons..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Tabs */}
                <div className="flex border border-gray-200 dark:border-gray-700/60 rounded-lg overflow-hidden">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'fill'
                        ? 'bg-violet-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveTab('fill')}
                  >
                    Fill Icons
                  </button>
                  <button
                    className={`px-4 py-2 text-sm font-medium ${
                      activeTab === 'outline'
                        ? 'bg-violet-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                    onClick={() => setActiveTab('outline')}
                  >
                    Outline Icons
                  </button>
                </div>
              </div>
            </div>

            {/* Icon count */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {activeTab === 'fill' ? filteredFillIcons.length : filteredOutlineIcons.length} icons
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            {/* Icons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {activeTab === 'fill' ? (
                filteredFillIcons.map((icon) => (
                  <div
                    key={`fill-${icon}`}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs hover:border-violet-300 dark:hover:border-violet-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-3">
                      <img 
                        src={`/src/nucleo_icons/fill/${icon}.svg`} 
                        alt={icon} 
                        className="w-8 h-8 text-violet-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48bGluZSB4MT0iMTIiIHkxPSI4IiB4Mj0iMTIiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjE2IiB4Mj0iMTIuMDEiIHkyPSIxNiI+PC9saW5lPjwvc3ZnPg==';
                        }}
                      />
                    </div>
                    <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400 break-all">
                      {icon}.svg
                    </div>
                  </div>
                ))
              ) : (
                filteredOutlineIcons.map((icon) => (
                  <div
                    key={`outline-${icon}`}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs hover:border-violet-300 dark:hover:border-violet-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-3">
                      <img 
                        src={`/src/nucleo_icons/outline/${icon}.svg`} 
                        alt={icon} 
                        className="w-8 h-8 text-violet-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIj48L2NpcmNsZT48bGluZSB4MT0iMTIiIHkxPSI4IiB4Mj0iMTIiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjE2IiB4Mj0iMTIuMDEiIHkyPSIxNiI+PC9saW5lPjwvc3ZnPg==';
                        }}
                      />
                    </div>
                    <div className="text-xs text-center font-medium text-gray-600 dark:text-gray-400 break-all">
                      {icon}.svg
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* How to Use Icons */}
            <div className="mt-12 bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700/60 rounded-xl shadow-xs">
              <h2 className="text-xl text-gray-800 dark:text-gray-100 font-bold mb-4">How to Use Nucleo Icons</h2>
              
              <div className="space-y-4">
                <p className="text-sm">
                  Nucleo icons are SVG-based, which allows for easy customization of color, size, and other properties using CSS classes.
                  You can use them by importing the SVG files directly or by copying the SVG code into your components.
                </p>
                
                <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Example Usage:</h3>
                  <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-x-auto">
{`// Method 1: Direct import (if your bundler supports it)
import HomeIcon from '../nucleo_icons/fill/home.svg';

// Method 2: Using an img tag
<img src="/src/nucleo_icons/fill/home.svg" alt="Home" className="w-6 h-6" />

// Method 3: Copy the SVG code directly into your component
<svg className="w-6 h-6 fill-current text-violet-500" viewBox="0 0 24 24">
  <!-- SVG path data here -->
</svg>`}
                  </pre>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">Customizing Icons:</h3>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">w-6 h-6</code> - Controls the size (can use any Tailwind size class)</li>
                    <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">fill-current</code> - For fill icons, makes the icon inherit the text color</li>
                    <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">stroke-current</code> - For outline icons, makes the icon inherit the text color</li>
                    <li><code className="text-xs bg-gray-100 dark:bg-gray-700/50 px-1 py-0.5 rounded">text-violet-500</code> - Sets the color (can be any Tailwind color)</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100">Icon Styles:</h3>
                  <p className="text-sm">
                    The Nucleo icon set includes two styles:
                  </p>
                  <ul className="text-sm space-y-1 list-disc pl-5">
                    <li><strong>Fill</strong> - Solid icons with filled shapes</li>
                    <li><strong>Outline</strong> - Line-based icons with strokes</li>
                  </ul>
                  <p className="text-sm">
                    Choose the style that best fits your design needs. You can mix and match styles for different UI elements.
                  </p>
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