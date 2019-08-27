module.exports['dva-path'] = function(rootContext, path) {
  let nestedPath = '';
  let pathPrefix = '';
 
  if (rootContext.default !== undefined) {
    pathPrefix = rootContext.default.pathPrefix;
  } 
 
  if (rootContext.nestedPath !== undefined) {
    nestedPath = rootContext.nestedPath;
  } 
  return pathPrefix + nestedPath + path;
};