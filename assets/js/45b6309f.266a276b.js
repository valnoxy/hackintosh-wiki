"use strict";(self.webpackChunkhackintosh_wiki=self.webpackChunkhackintosh_wiki||[]).push([[294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,title:"Post-Installation"},r=void 0,l={unversionedId:"installation/post-install",id:"installation/post-install",title:"Post-Installation",description:"\ud83d\udcbe Install OpenCore to Hard drive",source:"@site/docs/installation/post-install.md",sourceDirName:"installation",slug:"/installation/post-install",permalink:"/installation/post-install",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Post-Installation"},sidebar:"tutorialSidebar",previous:{title:"Install macOS",permalink:"/installation/install-macos"}},s={},p=[{value:"\ud83d\udcbe Install OpenCore to Hard drive",id:"-install-opencore-to-hard-drive",level:3},{value:"\ud83c\udfa7 Fix Audio Jack noice",id:"-fix-audio-jack-noice",level:3},{value:"\u270f\ufe0f Create a offline install media (Optional)",id:"\ufe0f-create-a-offline-install-media-optional",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"-install-opencore-to-hard-drive"},"\ud83d\udcbe Install OpenCore to Hard drive"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"ALT + SPACE")," and open terminal. Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo diskutil mountDisk disk0s1")," (where disk0s1 corresponds to the EFI partition of the main disk)"),(0,i.kt)("li",{parentName:"ol"},"Open Finder and copy the EFI folder of your USB device to the main disk's EFI partition."),(0,i.kt)("li",{parentName:"ol"},"Unplug the USB device and reboot your laptop. Now you can boot macOS without your USB device.")),(0,i.kt)("h3",{id:"-fix-audio-jack-noice"},"\ud83c\udfa7 Fix Audio Jack noice"),(0,i.kt)("p",null,"This is only necessary for the Lenovo ThinkPad T440p."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},"ALCPlugFix")," to your desktop."),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"WIN + SPACE")," and open terminal. Type the following commands: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo spctl --master-disable\nsudo mkdir /usr/local/bin/\ncd Desktop/ALCPlugFix\n./install.sh\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"After that, type ",(0,i.kt)("inlineCode",{parentName:"li"},"hda-verb 0x1a SET_PIN_WIDGET_CONTROL 0x24"),".")),(0,i.kt)("h3",{id:"\ufe0f-create-a-offline-install-media-optional"},"\u270f\ufe0f Create a offline install media (Optional)"),(0,i.kt)("p",null,"In case of reinstalling macOS, a offline install media can save some time. You also don't need an Ethernet connection for the installation.\nTo create a offline install media, you need the following stuff: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"macOS Installer from the App Store."),(0,i.kt)("li",{parentName:"ul"},"A 16 GB pendrive (Keep in mind, during the preperation we will format the disk to create the install media).")),(0,i.kt)("p",null,"Press ",(0,i.kt)("inlineCode",{parentName:"p"},"ALT + SPACE")," and open Disk utility. Select your USB device and click erase. Name it ",(0,i.kt)("inlineCode",{parentName:"p"},"MyUSB")," and choose ",(0,i.kt)("strong",{parentName:"p"},"Mac OS Extended")," with ",(0,i.kt)("strong",{parentName:"p"},"GUID Partition Map"),". After erasing the USB device, close Disk utility."),(0,i.kt)("p",null,"Now press ",(0,i.kt)("inlineCode",{parentName:"p"},"ALT + SPACE")," and open terminal. Type the following command:"),(0,i.kt)("p",null,"Big Sur:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo /Applications/Install\\ macOS\\ Big\\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyUSB --downloadassets")),(0,i.kt)("p",null,"Monterey:\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo /Applications/Install\\ macOS\\ Monterey.app/Contents/Resources/createinstallmedia --volume /Volumes/MyUSB --downloadassets")),(0,i.kt)("p",null,"After creating the install media, copy your EFI folder to the EFI partition of your USB device."))}d.isMDXComponent=!0}}]);