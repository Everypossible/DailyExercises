// Vue统一的错误处理接口
let handleError = null;
export default {
    foo(fn){
        callWithErrorHandling(fn);
    },
    // 用户可以调用该函数注册统一的错误处理函数
    registerErrorHandler(fn){
        handleError = fn;
    }
}

function callWithErrorHandling(){
    try {
        fn && fn();
    } catch (e) {
        handleError(e);
    }
}