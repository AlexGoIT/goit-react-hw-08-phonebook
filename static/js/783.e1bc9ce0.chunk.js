"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[783],{6783:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,a,i,o,c=t(9434),s=t(2791),l=function(n){return n.contacts.items},u=function(n){return n.contacts.isLoading},d=function(n){return n.contacts.error},f=function(n){return n.filter},x=t(153),p=t(1614),h=t(5264),m=t(2800),b=t(6151),g=t(168),v=t(6487),j=v.ZP.form(r||(r=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),w=t(3329),Z=function(){var n=(0,c.I0)(),e=(0,c.v9)(l);return(0,w.jsxs)(j,{onSubmit:function(t){t.preventDefault();var r=t.target,a=r.name.value,i=r.number.value;e.some((function(n){return n.name===a}))?h.Notify.failure("".concat(a," is already in contacts")):(n((0,x.uK)({name:a,number:i})),r.reset())},children:[(0,w.jsx)(m.Z,{id:"name",name:"name",label:"Name",variant:"outlined",pattern:"^([A-Za-z-']{1,50})|([\u0410-\u042f\u0430-\u044f-']{1,50})$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,sx:{mb:2}}),(0,w.jsx)(m.Z,{id:"tel",name:"number",label:"Number",variant:"outlined",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"^+d{2}(d{3})d{3}-d{2}-d{2}$",required:!0,sx:{mb:2}}),(0,w.jsx)(b.Z,{variant:"contained",type:"submit",sx:{mb:4,color:"#FFD700",fontWeight:"700"},children:"Add contact"})]})},k=v.ZP.ul(a||(a=(0,g.Z)(["\n  max-height: calc(100vh - 500px);\n  margin-top: 16px;\n  padding-block: 4px;\n  padding-left: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    width: 10px;\n    color: aqua;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #1976d2;\n    border-radius: 10px;\n    border: 2px solid #fff;\n  }\n"]))),y=t(3400),C=t(7247),_=v.ZP.li(i||(i=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 500;\n\n  :first-child {\n    margin-right: auto;\n  }\n\n  button {\n    height: 35px;\n    margin-left: 16px;\n    margin-right: 8px;\n    border: none;\n    border-radius: 6px;\n    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);\n    font-size: 18px;\n    font-weight: 700;\n    cursor: pointer;\n  }\n\n  button:is(:hover, :focus) {\n    background-color: #ff8585;\n  }\n"]))),F=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,i=(0,c.I0)();return(0,w.jsxs)(_,{children:[(0,w.jsx)("span",{children:r}),(0,w.jsx)("span",{children:a}),(0,w.jsx)(y.Z,{"aria-label":"delete",onClick:function(){return i((0,x.GK)(t))},children:(0,w.jsx)(C.Z,{})})]})},z=function(){var n=(0,c.v9)(l),e=(0,c.v9)(f),t=(null===n||void 0===n?void 0:n.length)>0;return(0,w.jsx)(k,{children:t&&n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())})).map((function(n){return(0,w.jsx)(F,{contact:n},n.id)}))})},N=function(){var n=(0,c.I0)();return(0,w.jsx)(m.Z,{id:"filter",label:"Filter",name:"filter",variant:"outlined",fullWidth:!0,onChange:function(e){return n((0,x.Tv)(e.target.value))}})},P=t(5823),A=v.ZP.h2(o||(o=(0,g.Z)(["\n  margin-bottom: 16px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 700;\n"]))),I=function(){var n=(0,c.I0)(),e=(0,c.v9)(u),t=(0,c.v9)(d);return(0,s.useEffect)((function(){n((0,x.yF)())}),[n]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(p.Z,{className:"container",maxWidth:"sm",sx:{pt:2,pb:2},children:[(0,w.jsx)(Z,{}),(0,w.jsx)(A,{children:"Contacts"}),(0,w.jsx)(N,{}),!t&&(0,w.jsx)(z,{}),e&&!t&&(0,w.jsx)(P.Z,{})]})})}}}]);
//# sourceMappingURL=783.e1bc9ce0.chunk.js.map