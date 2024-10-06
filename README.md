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

# Food Delivery App
** Header
    * Logo
    * Nav-Items

** Body
    * Search
    * filter of top rated restaurnats
    * restaurant card
        ** image
        ** Res name, rating, area, deliverytime, cost for two

**Footer
    *copyriight
    *link
    *address
    *contact



// two types of export/ import
        -- export default nameOfComponenet   -- Import nameOfComponenet from "path"
        -- export nameOfComponent            -- Import {nameOfComponenet} from "path"


//React Hooks-  They are normal JS function given by react (writtend by FB developers)
-- useState() - used to generate super powerful state variables
-- useEffect() -

--useState()- whenever state variable updates, react re-renders the component
react is good at DOM manipulation, that's what it makes it fast. it Keeps data layer in sync  with UI layers,

-- useEffect-
-syntax  useEffect(()=>{},[]);

callback functions of useEffect will be called once that component is rendered

//Shimmer- improves UX, as loading data from Api takes time.
-- It loads dummy cards, until API responds