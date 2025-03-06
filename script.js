document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("output");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const startTime = Date.now();
  let arr = [2];
  if (tbody.children.length === 0) {
    td.textContent = "Loading...";
    td.colSpan = 2;
    tr.appendChild(td);
    tbody.appendChild(tr);
    // console.log("hello");
  }
  // first promise
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      arr[0] = Date.now();
      resolve("Promise 1");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });
  //second promise
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      arr[1] = Date.now();
      resolve("Promise 2");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });
  // third promise
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      arr[2] = Date.now();
      resolve("Promise 3");
    }, Math.floor(Math.random() * 2 + 1) * 1000);
  });

  Promise.all([p1, p2, p3]).then((res) => {
    // console.log(res);
   tr.remove();
   
    res.forEach((result, index) => {
      const tr1 = document.createElement("tr");
      console.log(tr1);

      const td1 = document.createElement("td");
      td1.textContent = result;
      console.log(td1);

      const td2 = document.createElement("td");
      td2.textContent = ((arr[index] - startTime) / 1000).toFixed(2);
      console.log(td2);

      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tbody.appendChild(tr1);
    });
   const tr2 = document.createElement("tr");
   td.textContent = "Total";
   td.colSpan = 1;
   const td2 = document.createElement("td");
   lastTime = Date.now();
   td2.textContent = (lastTime - startTime) / 1000;
   
   tr2.appendChild(td);
   tr2.appendChild(td2);
   tbody.appendChild(tr2);
  });
});
