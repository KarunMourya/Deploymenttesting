export const requestLogMiddleware = (request, response, next) => {
  const {query,body,method,url,headers} = request;
  console.log("Request query",query)
  console.log("Request method",method)
  console.log("Request url",url)
  console.log("Request headers",headers)
  console.log("Request body",body);
  next();
};
