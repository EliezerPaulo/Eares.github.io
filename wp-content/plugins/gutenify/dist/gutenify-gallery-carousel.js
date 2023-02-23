(()=>{var e,t={8936:(e,t,l)=>{"use strict";const n=window.wp.element,a=window.wp.i18n,r=window.wp.components,i=window.wp.blocks;var o=l(4184),c=l.n(o);const s=window.lodash,m=window.wp.data,h=window.wp.blockEditor,d=window.wp.compose,g=window.wp.hooks;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},u.apply(this,arguments)}class v extends n.Component{render(){const e=`gutenify-block-${this.props.hookPrefix}`;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(h.BlockControls,null,(0,g.applyFilters)(`${e}-block-controls`,[],this.props)),(0,n.createElement)(h.InspectorControls,null,(0,g.applyFilters)(`${e}-inspector-controls`,[],this.props)),(0,n.createElement)(h.InspectorAdvancedControls,null,(0,g.applyFilters)(`${e}-inspector-advance-controls`,[],this.props)))}}const p=v,w={hookPrefix:"gallery-carousel",layouts:[{name:"layout-1",label:"Layout 1",imageAlign:"center",titleAlign:"center",ratingAlign:"center"},{name:"layout-2",label:"Layout 2",imageAlign:"center",titleAlign:"left",ratingAlign:"left"},{name:"layout-3",label:"Layout 3",imageAlign:"center",titleAlign:"right",ratingAlign:"right"}]},f=e=>{let{tabs:t=[]}=e;const[{currentTab:l},a]=(0,n.useState)({currentTab:!1});return(0,n.createElement)("div",{className:"gutenify-accordion-wrapper"},t.map((e=>{const t=e.label,i=l===e.name;let o="gutenify-accordion-item";return o+=i?" gutenify-accordion-item-active":"",(0,n.createElement)("div",{className:o,key:`gutenify-accordion-item-${e.name}`},(0,n.createElement)("button",{onClick:()=>{a({currentTab:l===e.name?"":e.name})},className:"gutenify-accordion-item-heading"},(0,n.createElement)("div",{className:"gutenify-accordion-item-heading-arrow"},(0,n.createElement)(r.Icon,{icon:i?"arrow-down-alt2":"arrow-right-alt2"})),(0,n.createElement)("div",{className:"gutenify-accordion-item-label"},(0,n.createElement)(t,null))),(0,n.createElement)("div",{className:"gutenify-accordion-item-content"}," ",e.cb()))})))},{hookPrefix:y,layouts:E}=w;(0,g.addFilter)(`gutenify-block-${y}-options-tab-content`,`Gutenify/Block/${y}/InspectorControls/BasicControls/tabs/content`,((e,t)=>{const{attributes:l,setAttributes:i,updateInnerBlocks:o}=t,{layout:c,columns:s,hasNavigation:m,hasPagination:h,spaceBetween:d}=l;return[...e,(0,n.createElement)(n.Fragment,{key:`gutenify-block-${y}-options-tab-content-basic`},(0,n.createElement)(f,{tabs:[{name:"slider-options",initialOpen:!0,label:()=>(0,a.__)("Slider"),cb:()=>(0,n.createElement)(n.Fragment,null,E&&(0,n.createElement)("div",{className:"gutenify-template-browser"},(0,n.createElement)("h2",null,"Templates"),(0,n.createElement)("ul",null,E.map((e=>{let t="gutenify-template-browser-item";return c===e.name&&(t+=" gutenify-template-browser-item-active"),(0,n.createElement)("li",{className:t,key:e.name},(0,n.createElement)("button",{className:"gutenify-template-browser-selector",onClick:()=>{const t={layout:e.name,socialIconAlign:e.socialIconAlign,imageAlign:e.imageAlign,titleAlign:e.titleAlign};i(t)}},(0,n.createElement)("img",{src:`${window.gutenify_block_data.plugin_directory_url}/assets/images/gallery-carousel-layouts/${e.name}.png`,alt:e.name}),(0,n.createElement)("small",null,e.label)))})))),(0,n.createElement)(r.ToggleControl,{label:(0,a.__)("Enable Navigation","gutenify"),checked:m,help:m?(0,a.__)("Showing slider navigation.","gutenify"):(0,a.__)("Toggle to enable slider navigation.","gutenify"),onChange:()=>i({hasNavigation:!m})}),(0,n.createElement)(r.ToggleControl,{label:(0,a.__)("Enable Pagination","gutenify"),checked:h,help:h?(0,a.__)("Showing slider pagination.","gutenify"):(0,a.__)("Toggle to enable slider pagination.","gutenify"),onChange:()=>i({hasPagination:!h})}),(0,n.createElement)("hr",null),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Columns"),value:s,onChange:e=>{i({columns:e})},min:1,max:(0,g.applyFilters)(`gutenify--${y}--max-columns`,3),step:1}),(0,n.createElement)(r.RangeControl,{label:(0,a.__)("Slider space"),value:d,onChange:e=>{i({spaceBetween:e})},min:0,max:100,step:1,help:(0,a.__)("Space between each slide.")}),(0,g.applyFilters)(`gutenify--${y}--inspector--tab-content--slider`,[],t))}]}))]}));const{hookPrefix:b}=w,C=[{name:"content",title:(0,a.__)("Content")},{name:"style",title:(0,a.__)("Style")},{name:"advance",title:(0,a.__)("Advance")}];(0,g.addFilter)(`gutenify-block-${b}-inspector-controls`,`Gutenify/Block/${b}/InspectorControls/BasicControls`,((e,t)=>{const l={},i=C.filter((e=>{const n=(0,g.applyFilters)(`gutenify-block-${b}-options-tab-${e.name}`,[],{...t},e),a=(0,g.applyFilters)(`gutenify--${b}--inspector--tabs--${e.name}`,[...n],{...t},e);return l[e.name]=a,a.length>0}));return[...e,(0,n.createElement)(r.PanelBody
/* translators: block settings */,{title:(0,a.__)("Options"),key:`gutenify-block-${b}-inspector-controls-basic-controls`},(0,n.createElement)(r.TabPanel,{className:"gutenify-editor-tab-panel",activeClass:"active-tab",tabs:[...i]},(e=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(n.Fragment,null,l[e.name])))))]}));const{hookPrefix:x}=w,z=e=>(0,n.createElement)(p,u({hookPrefix:x},e)),k=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gutenify/gallery-carousel","category":"gutenify","title":"Gallery Carousel","version":"2","attributes":{"blockClientId":{"type":"string","default":""},"blockAdvanceOptions":{"type":"object","default":{"buttonBorderWidth":1,"buttonBorderRadius":0}},"images":{"type":"array","default":[]},"imagesData":{"type":"object","default":{}},"columns":{"type":"number","default":1},"spaceBetween":{"type":"number","default":10},"hasNavigation":{"type":"boolean","default":true},"hasPagination":{"type":"boolean","default":true},"isAutoplay":{"type":"boolean","default":false},"layout":{"type":"string","default":"layout-1"}},"editorScript":"gutenify-gallery-carousel-editor","editorStyle":"gutenify-gallery-carousel-editor","style":"gutenify-gallery-carousel-frontend"}'),{hookPrefix:_}=w,H=(0,d.compose)([(0,m.withDispatch)(((e,t)=>{const{selectBlock:l}=e("core/block-editor");return{selectBlock:()=>{l(t.clientId)}}}))])((e=>{const{isSelected:t,className:l,attributes:r}=e,{images:i,imagesData:o,columns:m,hasPagination:d,hasNavigation:u,spaceBetween:v,blockClientId:p,layout:w}=r;let[f,y]=(0,n.useState)(null);(0,n.useEffect)((()=>{const e=new Swiper(`.gutenify-section-${p}`,{allowTouchMove:!1,slidesPerView:m,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},spaceBetween:v});f=e,y(e)}),[m,v,d,u]),(0,n.useEffect)((()=>{void 0!==f.$el&&(console.log(f),f.update())}),[m,v,d,u]);const E=(e,t)=>{var l;const n=(0,s.find)(t,(t=>parseInt(null==t?void 0:t.id)===(null==e?void 0:e.id)));return Array.isArray(null==n?void 0:n.caption)?null==n||null===(l=n.caption)||void 0===l?void 0:l[0]:(null==n?void 0:n.caption)||(null==e?void 0:e.caption)||""},b=(e,t)=>{const l=(0,s.find)(t,(t=>parseInt(null==t?void 0:t.id)===(null==e?void 0:e.id)));return(null==l?void 0:l.imgLink)||(null==e?void 0:e.imgLink)||""},C=t=>(e.setAttributes({imagesData:{...o}}),t),x=(t,l,n)=>{(0,s.has)(o,t)||(o[t]={}),o[t][l]=n,e.setAttributes({imagesData:{...o}})};let H=[l,`gutenify-section-${p}`,`gutenify--${_}--${w}`,`${k.name.replace(/\//gm,"-")}-version-${k.version}`,"swiper-container"];H=c()((0,g.applyFilters)(`gutenify--${_}--wrapper-class`,H,e));const B=!!i.length,V=!B&&(0,a.__)("Gallery Carousel"),$=c()("gutenify--figure",{}),P=(0,h.useBlockProps)({className:H});return(0,n.createElement)(n.Fragment,null,t&&(0,n.createElement)(z,e),(0,n.createElement)("div",P,B&&(0,n.createElement)("div",{className:"swiper-wrapper"},i.map((e=>(0,n.createElement)("div",{className:"gutenify-gallery-carousel-item swiper-slide",key:e.id||e.url},(0,n.createElement)("div",{className:"gutenify-slider-image-wrapper"},(0,n.createElement)("div",{className:"gutenify-slider-content-image"},(0,n.createElement)("figure",{className:$},(0,n.createElement)("img",{src:e.url,alt:e.alt,"data-link":e.link,"data-id":e.id,className:e.id?`wp-image-${e.id}`:null})))),(0,n.createElement)("div",{className:"gutenify-slider-content-wrapper"},(0,n.createElement)("div",{className:"gutenify-slider-content-inner"},(0,n.createElement)(h.RichText,{tagName:"h2",value:(0,s.has)(o[e.id],"title")?o[e.id].title:"",allowedFormats:["core/bold","core/italic","core/link"],onChange:t=>{x(e.id,"title",t)},placeholder:(0,a.__)("Heading…"),className:"gutenify-slider-title"}),(0,n.createElement)(h.RichText,{tagName:"h3",value:(0,s.has)(o[e.id],"subTitle")?o[e.id].subTitle:"",allowedFormats:["core/bold","core/italic","core/link"],onChange:t=>{x(e.id,"subTitle",t)},placeholder:(0,a.__)("Sub Heading…"),className:"gutenify-slider-sub-title"}),(0,n.createElement)("div",{className:"gutenify-slider-content-inner-wrapper"},(0,n.createElement)("div",{className:"gutenify-slider-content clear-fix"},(0,n.createElement)(h.RichText,{tagName:"p",value:(0,s.has)(o[e.id],"description")?o[e.id].description:"",allowedFormats:["core/bold","core/italic","core/link"],onChange:t=>{x(e.id,"description",t)},placeholder:(0,a.__)("Content…")}))))))))),d&&(0,n.createElement)("div",{className:"swiper-pagination"}),u&&(0,n.createElement)("div",{className:"navigation-wrap"},(0,n.createElement)("div",{className:"swiper-button-prev"}),(0,n.createElement)("div",{className:"swiper-button-next"}))),t&&(0,n.createElement)("div",null,(0,n.createElement)(h.MediaPlaceholder,{addToGallery:B,isAppender:B,className:"gutenify-gallery-figure",disableMediaButtons:B&&!t,labels:{title:V,instructions:!B&&(0,a.__)("Drag images, upload new ones or select files from your library.","coblocks")},onSelect:t=>{e.setAttributes({images:t.map((e=>({...C(e),caption:E(e,i),imgLink:b(e,i)})))})},accept:"image/*",allowedTypes:["image"],multiple:!0,value:B?i:void 0,onError:()=>{}})))})),B=window.wp.primitives;var V,$;const P=null!==(V=window)&&void 0!==V&&null!==($=V.gutenify_components_vars)&&void 0!==$&&$.brand_color?window.gutenify_components_vars.brand_color:"#2196f3",M=((0,n.createElement)(B.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"}))),(0,n.createElement)(B.SVG,{fill:"none","view-box":"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"}))),(0,n.createElement)(B.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)(B.Rect,{height:"14.5",rx:".875",stroke:P,strokeWidth:"1.5",width:"14.5",x:"4.75",y:"4.75",fill:"none"}),(0,n.createElement)(B.Path,{d:"m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",stroke:P,strokeLinejoin:"round",strokeWidth:"1.5",fill:"none"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,n.createElement)(B.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"})))),{hookPrefix:S}=((0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6-3.21 3.2-8.39 3.2-11.6 0C1 12.59 1 7.41 4.2 4.2 7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1zM4 4h13v4H4V4zm1 1v2h3V5H5zm4 0v2h3V5H9zm4 0v2h3V5h-3zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 10h4v1H6v-1zm6 0h5v5h-5v-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 12h4v1H6v-1zm7 0v2h3v-2h-3zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM6 14h4v1H6v-1z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M13 13.14l1.17-5.94c.79-.43 1.33-1.25 1.33-2.2 0-1.38-1.12-2.5-2.5-2.5S10.5 3.62 10.5 5c0 .95.54 1.77 1.33 2.2zm0-9.64c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm1.72 4.8L18 6.97v9L13.12 18 7 15.97l-5 2v-9l5-2 4.27 1.41 1.73 7.3z"}))),(0,n.createElement)(B.SVG,{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"}))),(0,n.createElement)(B.SVG,{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)(B.Path,{d:"m6 4.75h12c.6904 0 1.25.55964 1.25 1.25v12c0 .6904-.5596 1.25-1.25 1.25h-12c-.69036 0-1.25-.5596-1.25-1.25v-12c0-.69036.55964-1.25 1.25-1.25z",stroke:P,strokeWidth:"1.5",fill:"none"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"m7 9h2v2h-2z"}),(0,n.createElement)(B.Path,{d:"m7 13h2v2h-2z"}),(0,n.createElement)(B.Path,{d:"m10 9h7v2h-7z"}),(0,n.createElement)(B.Path,{d:"m10 13h7v2h-7z"}),(0,n.createElement)(B.Path,{d:"m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"}),(0,n.createElement)(B.Path,{d:"m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M10 1l3 6 6 .75-4.12 4.62L16 19l-6-3-6 3 1.13-6.63L1 7.75 7 7z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M8.03 4.46c-.29 1.28.55 3.46 1.97 3.46 1.41 0 2.25-2.18 1.96-3.46-.22-.98-1.08-1.63-1.96-1.63-.89 0-1.74.65-1.97 1.63zm-4.13.9c-.25 1.08.47 2.93 1.67 2.93s1.92-1.85 1.67-2.93c-.19-.83-.92-1.39-1.67-1.39s-1.48.56-1.67 1.39zm8.86 0c-.25 1.08.47 2.93 1.66 2.93 1.2 0 1.92-1.85 1.67-2.93-.19-.83-.92-1.39-1.67-1.39-.74 0-1.47.56-1.66 1.39zm-.59 11.43l1.25-4.3C14.2 10 12.71 8.47 10 8.47c-2.72 0-4.21 1.53-3.44 4.02l1.26 4.3C8.05 17.51 9 18 10 18c.98 0 1.94-.49 2.17-1.21zm-6.1-7.63c-.49.67-.96 1.83-.42 3.59l1.12 3.79c-.34.2-.77.31-1.2.31-.85 0-1.65-.41-1.85-1.03l-1.07-3.65c-.65-2.11.61-3.4 2.92-3.4.27 0 .54.02.79.06-.1.1-.2.22-.29.33zm8.35-.39c2.31 0 3.58 1.29 2.92 3.4l-1.07 3.65c-.2.62-1 1.03-1.85 1.03-.43 0-.86-.11-1.2-.31l1.11-3.77c.55-1.78.08-2.94-.42-3.61-.08-.11-.18-.23-.28-.33.25-.04.51-.06.79-.06z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81 0 0-.41 3.44-2.68 3.44zm0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"}))),(0,n.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)(B.Rect,{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)(B.G,{fill:P},(0,n.createElement)(B.Path,{d:"M10 1c7 0 9 2.91 9 6.5S17 14 10 14s-9-2.91-9-6.5S3 1 10 1zM5.5 9C6.33 9 7 8.33 7 7.5S6.33 6 5.5 6 4 6.67 4 7.5 4.67 9 5.5 9zM10 9c.83 0 1.5-.67 1.5-1.5S10.83 6 10 6s-1.5.67-1.5 1.5S9.17 9 10 9zm4.5 0c.83 0 1.5-.67 1.5-1.5S15.33 6 14.5 6 13 6.67 13 7.5 13.67 9 14.5 9zM6 14.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"}))),(0,n.createElement)(B.SVG,{width:"27",height:"13",viewBox:"0 0 27 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(B.Rect,{width:"27",height:"13",rx:"6.5",fill:"#05A015"}),(0,n.createElement)(B.Path,{d:"M6.57812 6.99609L6.22656 9H5.08203L6.07031 3.3125L8.0625 3.31641C8.67708 3.31641 9.16016 3.48698 9.51172 3.82812C9.86328 4.16927 10.0169 4.61458 9.97266 5.16406C9.93099 5.72135 9.69792 6.16667 9.27344 6.5C8.85156 6.83333 8.3125 7 7.65625 7L6.57812 6.99609ZM6.73828 6.04688L7.69141 6.05469C7.9987 6.05469 8.25391 5.97526 8.45703 5.81641C8.66016 5.65755 8.78125 5.44271 8.82031 5.17188C8.85938 4.90104 8.8151 4.6849 8.6875 4.52344C8.5625 4.36198 8.3763 4.27604 8.12891 4.26562L7.05078 4.26172L6.73828 6.04688ZM12.5664 6.91797H11.6367L11.2734 9H10.1289L11.1172 3.3125L13 3.31641C13.6302 3.31641 14.1146 3.46484 14.4531 3.76172C14.7943 4.05859 14.9453 4.47135 14.9062 5C14.8516 5.78125 14.4349 6.32422 13.6562 6.62891L14.457 8.9375V9H13.2383L12.5664 6.91797ZM11.8008 5.96875L12.6523 5.97656C12.9544 5.97135 13.2031 5.89062 13.3984 5.73438C13.5964 5.57552 13.7148 5.36068 13.7539 5.08984C13.7904 4.83724 13.75 4.63932 13.6328 4.49609C13.5156 4.35286 13.3294 4.27604 13.0742 4.26562L12.0977 4.26172L11.8008 5.96875ZM17.4062 9.07812C17.0286 9.07031 16.6953 8.98177 16.4062 8.8125C16.1198 8.64062 15.8919 8.39453 15.7227 8.07422C15.556 7.7513 15.4596 7.38151 15.4336 6.96484C15.4049 6.53776 15.4505 6.08203 15.5703 5.59766C15.6901 5.11328 15.8828 4.6875 16.1484 4.32031C16.4141 3.95312 16.7253 3.67839 17.082 3.49609C17.4414 3.3138 17.8294 3.22656 18.2461 3.23438C18.6289 3.24219 18.9635 3.33333 19.25 3.50781C19.5365 3.67969 19.7617 3.92839 19.9258 4.25391C20.0898 4.57682 20.1836 4.94401 20.207 5.35547C20.2331 5.8138 20.1836 6.28516 20.0586 6.76953C19.9336 7.25391 19.7396 7.67318 19.4766 8.02734C19.2135 8.38151 18.9049 8.64714 18.5508 8.82422C18.1992 9.0013 17.8177 9.08594 17.4062 9.07812ZM19.0273 6L19.0586 5.62891C19.0846 5.16536 19.0221 4.8138 18.8711 4.57422C18.7227 4.33464 18.4961 4.20964 18.1914 4.19922C17.7148 4.18359 17.3359 4.39453 17.0547 4.83203C16.776 5.26953 16.6185 5.88151 16.582 6.66797C16.556 7.12891 16.6172 7.48438 16.7656 7.73438C16.9141 7.98177 17.1445 8.11068 17.457 8.12109C17.8659 8.13932 18.2044 7.98047 18.4727 7.64453C18.7409 7.30599 18.9167 6.82812 19 6.21094L19.0273 6Z",fill:"white"})),(0,n.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},(0,n.createElement)("path",{d:"M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z",fill:P})),(0,n.createElement)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1080 1080",xmlSpace:"preserve"},(0,n.createElement)("g",null,(0,n.createElement)("g",null,(0,n.createElement)("path",{className:"st0",d:"M828.5,552.9c-6.8,152.9-133.3,275.1-287.9,275.1c-158.9,0-288.2-129.3-288.2-288.2 c0-150.6,116.2-274.5,263.5-287.1V0.4C229.1,13.2,0.5,249.9,0.5,539.9c0,298.2,241.7,540.1,540.1,540.1 c293.9,0,533-234.8,539.8-527H828.5V552.9z"}),(0,n.createElement)("rect",{x:"518.9",y:"254.6",className:"st1",width:"309.8",height:"298.2"})))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z",fill:P}))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M17 10c0-3.87-3.14-7-7-7-3.87 0-7 3.13-7 7s3.13 7 7 7c3.86 0 7-3.13 7-7zm-6.3 1.48H9.14v-.43c0-.38.08-.7.24-.98s.46-.57.88-.89c.41-.29.68-.53.81-.71.14-.18.2-.39.2-.62 0-.25-.09-.44-.28-.58-.19-.13-.45-.19-.79-.19-.58 0-1.25.19-2 .57l-.64-1.28c.87-.49 1.8-.74 2.77-.74.81 0 1.45.2 1.92.58.48.39.71.91.71 1.55 0 .43-.09.8-.29 1.11-.19.32-.57.67-1.11 1.06-.38.28-.61.49-.71.63-.1.15-.15.34-.15.57v.35zm-1.47 2.74c-.18-.17-.27-.42-.27-.73 0-.33.08-.58.26-.75s.43-.25.77-.25c.32 0 .57.09.75.26s.27.42.27.74c0 .3-.09.55-.27.72-.18.18-.43.27-.75.27-.33 0-.58-.09-.76-.26z",fill:P}))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M19 2v6H1V2h18zm-1 5V3H2v4h16zM5 4v2H3V4h2zm3 0v2H6V4h2zm3 0v2H9V4h2zm3 0v2h-2V4h2zm3 0v2h-2V4h2zm2 5v9H1V9h18zm-1 8v-7H2v7h16zM5 11v2H3v-2h2zm3 0v2H6v-2h2zm3 0v2H9v-2h2zm6 0v2h-5v-2h5zm-6 3v2H3v-2h8zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2z",fill:P}))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 278.799 278.799"},(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M265.54,0H13.259C5.939,0,0.003,5.936,0.003,13.256v252.287c0,7.32,5.936,13.256,13.256,13.256H265.54 c7.318,0,13.256-5.936,13.256-13.256V13.255C278.796,5.935,272.86,0,265.54,0z M252.284,252.287H26.515V26.511h225.769V252.287z",fill:P}))),(0,n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,n.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,n.createElement)("g",null,(0,n.createElement)("path",{d:"M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3 3 2 3 2z",fill:P}))),w),{attributes:G,name:N}=k,A={title:(0,a.__)("Gallery Carousel"),description:(0,a.__)("Gutenify Gallery Carousel."),icon:(0,n.createElement)(r.Icon,{icon:M}),keywords:["gutenify",(0,a.__)("Gallery Carousel"),(0,a.__)("Gallery"),(0,a.__)("Carousel"),(0,a.__)("Slider"),(0,a.__)("Sliders")],example:{attributes:{}},attributes:G,edit:H,save:()=>{},supports:{html:!1,align:["center","wide","full"]},gutenify:{customStylesCallback:e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{blockAdvanceOptions:l}=e.attributes,{innerBlock:n}=l;let a="";t=t||`.gutenify-section-${e.clientId} .gutenify-gallery-carousel-item`;let r="";r+=(0,s.has)(n,"textColor")&&!(0,s.isEmpty)(n.textColor)?`color: ${n.textColor};`:"",r+=(0,s.has)(n,"backgroundColor")&&!(0,s.isEmpty)(n.backgroundColor)?`background: ${n.backgroundColor};`:"",(0,s.has)(n,"backgroundGradient")&&!(0,s.isEmpty)(n.backgroundGradient)&&(r+=`background: ${n.backgroundGradient};`),r+=(0,s.has)(n,"borderColor")&&!(0,s.isEmpty)(n.borderColor)?`border-color: ${n.borderColor};`:"",r+=(0,s.has)(n,"borderWidth")&&n.borderWidth>0?`border-width: ${n.borderWidth}px;`:"",r+=(0,s.has)(n,"borderWidth")&&n.borderWidth>0?"border-style: solid;":"",r+=(0,s.has)(n,"borderRadius")&&!(0,s.isEmpty)(n.borderRadius)?`border-radius: ${n.borderRadius};`:"",r&&(a+=`${t} { ${r} }`);let i="";return i+=(0,s.has)(n,"hoverTextColor")&&!(0,s.isEmpty)(n.hoverTextColor)?`color: ${n.hoverTextColor};`:"",i+=(0,s.has)(n,"hoverBackgroundColor")&&!(0,s.isEmpty)(n.hoverBackgroundColor)?`background: ${n.hoverBackgroundColor};`:"",(0,s.has)(n,"hoverBackgroundGradient")&&!(0,s.isEmpty)(n.hoverBackgroundGradient)&&(i+=`background: ${n.hoverBackgroundGradient};`),i+=(0,s.has)(n,"hoverBorderColor")&&!(0,s.isEmpty)(n.hoverBorderColor)?`border-color: ${n.hoverBorderColor};`:"",i&&(a+=`${t}:hover { ${i} }`),(0,g.applyFilters)(`gutenify--${S}--inline-styles`,a,e)}(e)}};(0,i.registerBlockType)(N,{...A})},4184:(e,t)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var i=a.apply(null,l);i&&e.push(i)}}else if("object"===r)if(l.toString===Object.prototype.toString)for(var o in l)n.call(l,o)&&l[o]&&e.push(o);else e.push(l.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,a,r)=>{if(!l){var i=1/0;for(m=0;m<e.length;m++){for(var[l,a,r]=e[m],o=!0,c=0;c<l.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](l[c])))?l.splice(c--,1):(o=!1,r<i&&(i=r));if(o){e.splice(m--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,a,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3549:0,6879:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,r,[i,o,c]=l,s=0;if(i.some((t=>0!==e[t]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var m=c(n)}for(t&&t(l);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(m)},l=globalThis.webpackChunkgutenify=globalThis.webpackChunkgutenify||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[6879],(()=>n(8936)));a=n.O(a)})();