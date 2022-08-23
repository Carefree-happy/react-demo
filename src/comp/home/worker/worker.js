const workercode = () => {
    self.onmessage = function(e) {
        console.log('接收到主程序发来的数据');
        let workerResult = e.data * e.data;
        console.log('向主程序返回数据');
        self.postMessage(workerResult);
    }
};

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script;