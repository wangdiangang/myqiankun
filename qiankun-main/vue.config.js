module.exports ={
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                'primary-color': '#1DA57A',
                'link-color': '#1DA57A',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
            },
          },
        },
      },
    lintOnSave: false,
    devServer: {
        port: 8085,
        headers: {  // 重点1: 允许跨域访问子应用页面
            'Access-Control-Allow-Origin': '*',
        }
    }
}