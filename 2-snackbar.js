import"./assets/styles-B37gaLlg.js";const t={title:"CRUD",body:"CRUD is awesome!"},e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://jsonplaceholder.typicode.com/posts",e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>console.log(o)).catch(o=>console.log(o));
//# sourceMappingURL=2-snackbar.js.map
