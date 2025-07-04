import fs from 'fs-extra';
import path from 'path';

/**
 * Loads all SVG icons from the specified directory
 * @param {string} directory - The directory to load icons from
 * @returns {Array} - Array of icon objects with name and content
 */
export const loadIcons = async (directory) => {
  try {
    const iconDir = path.resolve(directory);
    const files = await fs.readdir(iconDir);
    
    const icons = await Promise.all(
      files
        .filter(file => file.endsWith('.svg'))
        .map(async (file) => {
          const filePath = path.join(iconDir, file);
          const content = await fs.readFile(filePath, 'utf8');
          return {
            name: path.basename(file, '.svg'),
            content
          };
        })
    );
    
    return icons;
  } catch (error) {
    console.error('Error loading icons:', error);
    return [];
  }
};

/**
 * Creates a React component from SVG content
 * @param {string} svgContent - The SVG content
 * @param {string} className - CSS classes to apply
 * @returns {React.Component} - React component
 */
export const createSvgComponent = (svgContent, className = '') => {
  // Clean up SVG content and add className
  const cleanedSvg = svgContent
    .replace(/width="[^"]*"/, '')
    .replace(/height="[^"]*"/, '')
    .replace(/<svg/, `<svg class="${className}"`);
  
  return cleanedSvg;
};