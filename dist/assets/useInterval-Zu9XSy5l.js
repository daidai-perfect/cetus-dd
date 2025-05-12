<<<<<<< HEAD:dist/assets/useInterval-BQqGpXj5.js
import{a as r}from"./vendor-BFGDaAdA.js";function f({interval:t,callback:u}){const n=r.useRef(),e=r.useRef(null);r.useEffect(()=>{n.current=u},[u]);const c=r.useCallback(()=>{e.current&&clearInterval(e.current),t>0&&(e.current=setInterval(()=>{n.current&&n.current(Date.now())},t))},[t]),s=r.useCallback(()=>{e.current&&(clearInterval(e.current),e.current=null)},[]);return r.useEffect(()=>(c(),()=>s()),[]),{startTimer:c,stopTimer:s}}export{f as u};
//# sourceMappingURL=useInterval-BQqGpXj5.js.map
=======
import{a as r}from"./vendor-C6OgHlW5.js";function f({interval:t,callback:u}){const n=r.useRef(),e=r.useRef(null);r.useEffect(()=>{n.current=u},[u]);const c=r.useCallback(()=>{e.current&&clearInterval(e.current),t>0&&(e.current=setInterval(()=>{n.current&&n.current(Date.now())},t))},[t]),s=r.useCallback(()=>{e.current&&(clearInterval(e.current),e.current=null)},[]);return r.useEffect(()=>(c(),()=>s()),[]),{startTimer:c,stopTimer:s}}export{f as u};
//# sourceMappingURL=useInterval-Zu9XSy5l.js.map
>>>>>>> b34a3b536fad2325000a9d474052d22a0b02cdf0:dist/assets/useInterval-Zu9XSy5l.js
