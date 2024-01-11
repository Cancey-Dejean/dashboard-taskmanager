"use strict";(self.webpackChunktask_manager_ui=self.webpackChunktask_manager_ui||[]).push([[280],{"./components/Card/ActivityCard/ActivityCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ActivityCard_stories});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.4_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@7.6.7_@swc+core@1.3.102_esbuild@0.18.20_next@14.0.4_react-dom@18.2.0_react@_xel4fib6bqvpf7d3jviwshmmsm/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react.createElement,ActivityCard=function ActivityCard(_ref){var userImg=_ref.userImg,userName=_ref.userName,title=_ref.title,text=_ref.text,_useState=(0,react.useState)(!1),showMore=_useState[0],setShowMore=_useState[1];return __jsx("div",{className:"max-w-[366px] w-full"},__jsx("div",{className:"flex items-start gap-4"},__jsx("div",{className:"shrink-0"},__jsx(next_image.Z,{src:userImg||"https://dummyimage.com/48x48.png/C4C4C4/000000",width:48,height:48,className:"rounded-full border-2 border-[#EFEFEF]",alt:userName||"User Name"})),__jsx("div",{className:"flex flex-col gap-[10px]"},__jsx("div",{className:"flex flex-col gap-1"},__jsx("p",{className:"text-base"},title||"Your Title Here"),__jsx("p",{className:"text-sm italic text-[#858585]"},__jsx("span",null,"2")," ",__jsx("span",null,"hours")," ago by"," ",__jsx("span",{className:" font-medium text-black "},userName||"John Smith"))),text?__jsx("p",{className:"text-sm text-[#6A6A6A]"},showMore?text:function truncateText(str,n){return str.length<n?str:str.substring(0,str.lastIndexOf(" ",n))+"..."}(text,128),text.length<128?null:__jsx("button",{className:"inline-block ml-1 text-blue-2",onClick:function onClick(){return setShowMore(!showMore)}},showMore?"Read less":"Read more")):null)))};ActivityCard.displayName="ActivityCard";const Card_ActivityCard=ActivityCard;try{ActivityCard.displayName="ActivityCard",ActivityCard.__docgenInfo={description:"",displayName:"ActivityCard",props:{userImg:{defaultValue:null,description:"",name:"userImg",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"",name:"userName",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Card/ActivityCard/index.tsx#ActivityCard"]={docgenInfo:ActivityCard.__docgenInfo,name:"ActivityCard",path:"components/Card/ActivityCard/index.tsx#ActivityCard"})}catch(__react_docgen_typescript_loader_error){}var ActivityCard_stories_jsx=react.createElement;const ActivityCard_stories={title:"Components/ActivityCard",component:Card_ActivityCard,args:{userImg:"https://picsum.photos/200",userName:"John Doe",title:"Your Title Here",text:"Lorem ipsum dolor sit amet Eius nobis dolorum, minima ad quas omnis est alias iure facilis corporis unde ullam commodi numquam cupiditate aliquid accusamus quasi eos nam. Expedita veniam sequi quia esse temporibus excepturi nesciunt, eligendi alias eius minus provident iste sunt harum nemo."},decorators:[function(Story){return ActivityCard_stories_jsx("div",{className:"max-w-[366px] mx-auto"},ActivityCard_stories_jsx(Story,null))}],parameters:{layout:"centered"},argTypes:{}};var Default={render:function render(args){return ActivityCard_stories_jsx(Card_ActivityCard,args)}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <ActivityCard {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);