import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),o=a.querySelector('input[type="email"]'),r=a.querySelector("textarea"),s="feedback-form-state";function l(){const t=localStorage.getItem(s);return t?JSON.parse(t):{}}a.addEventListener("input",t=>{const e=l();t.target.name==="email"&&(e.email=t.target.value.trim()),t.target.name==="message"&&(e.message=t.target.value.trim()),localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{l();const e={email:o.value.trim(),message:r.value.trim()};e.email&&e.message?(t.preventDefault(),localStorage.removeItem(s),o.value="",r.value="",console.log("object:",e)):alert("Заповніть усі поля")});window.addEventListener("load",t=>{const e=l();e.hasOwnProperty("email")&&(o.value=e.email),e.hasOwnProperty("message")&&(r.value=e.message),console.log("got from storage on load: ",e)});
//# sourceMappingURL=commonHelpers2.js.map