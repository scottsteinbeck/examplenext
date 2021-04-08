import  {  createProxyMiddleware  }  from  'http-proxy-middleware' ;

export  default  createProxyMiddleware ( {
    target : 'http://agritrackingsystems.com:3000',
    changeOrigin : true ,
    prependPath : true ,
} ) ;