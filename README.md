# Learning react

# Parcel
-Dev Build
-Local Server
-HMR - Hot Module Replacement
- parcel uses file watching algorithm(written in c++) for HMR
-faster builds - because its doing caching (parcel.cache file)
-Image Optimization
-Bundling
-Minification
-File Compression
-Compression
-Consistent-Hashing
-Code-Splittting
-Differential bundling- support older browser
-Diagnostic
-Error handling
-HTTPs
-Tree Shaking Algorithm- remove unused code from App
-Read Parcel Documentatio for more info

-dev and producation build- (for prod build use command npx parcel build index.html(also remove main:"App.js from
package.json which is the entry point)).
-- Prod build will take more time.
-- parcel uses dist (distributio file) file- 
--A dist file (short for "distribution file") is a compiled or bundled version of your source code that is intended for production use
