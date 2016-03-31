function workerExample() {
  //var worker = new Worker("path/to/my/worker.js");
  var worker = new Worker("docs/api/workers/worker.js");

  worker.onmessage = function (event) {
    // event.data
    console.log(event.data);
  };

  worker.onerror = function (error) {
  };

  worker.postMessage({msg: "qq"});

  //worker.terminate();

}

workerExample();
