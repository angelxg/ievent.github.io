(()=>{importScripts("./pngquant.min.js");var t=self,e=Date.now;function a(e){t.postMessage({type:"stdout",data:e})}addEventListener("message",(function(s){var n=s.data;if("command"===n.type){var i={print:a,printErr:a,files:n.files||[],arguments:n.arguments||[]};t.postMessage({type:"start",data:JSON.stringify(i.arguments)}),a("Received command: ".concat(JSON.stringify(i.arguments)));var r=e(),o=pngquant(n.file.data,n.arguments,a),d=e()-r;a("Finished processing (took ".concat(d,"ms)")),t.postMessage({type:"done",data:[o],time:d,id:n.id})}})),t.postMessage({type:"ready"})})();