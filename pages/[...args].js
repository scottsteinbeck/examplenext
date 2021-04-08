import  {  createProxyMiddleware  }  from  'http-proxy-middleware' ;

export  default  createProxyMiddleware ( {
    target : 'http://agritrackingsystems.com:3000',
    changeOrigin: true,
    pathRewrite: {
        "/500": "/500",
        "/400": "/400"
    },
    prependPath : true ,
} ) ;