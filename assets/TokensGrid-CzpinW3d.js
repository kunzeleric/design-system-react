import{j as e}from"./jsx-runtime-CGpYA4L6.js";function n({tokens:d,hasRemValue:r=!1}){return e.jsxs("table",{style:{width:"100%",textAlign:"center"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{border:0},children:[e.jsx("th",{style:{border:0},children:"Name"}),e.jsx("th",{style:{border:0},children:"Value"}),r&&e.jsx("th",{style:{border:0},children:"Pixels"})]})}),e.jsx("tbody",{children:Object.entries(d).map(([s,t])=>e.jsxs("tr",{style:{border:0},children:[e.jsx("td",{style:{border:0},children:s}),e.jsx("td",{style:{border:0},children:t}),r&&e.jsxs("td",{style:{border:0},children:[Number(t.replace("rem",""))*16,"px"]})]},s))})]})}n.__docgenInfo={description:"",methods:[],displayName:"TokensGrid",props:{tokens:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},hasRemValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{n as T};