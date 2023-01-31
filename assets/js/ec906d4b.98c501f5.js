"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[864],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const s={id:"mount-service",title:"How to mount service locally (Linux)",sidebar_label:"Mount service (Linux)"},a=void 0,i={unversionedId:"shared-storage/file-access/mount-service",id:"shared-storage/file-access/mount-service",title:"How to mount service locally (Linux)",description:"THIS GUIDE IS A USER WRITTEN GUIDE, SEEDBOX.IO CANNOT GUARANTEE THIS IS STABLE AND WORKING AS INTENDED! ONLY ATTEMPT THIS IF YOU ARE AN EXPERIENCED USER THAT CAN DEBUG THIS ON YOUR OWN!",source:"@site/docs/shared-storage/file-access/mount-service.md",sourceDirName:"shared-storage/file-access",slug:"/shared-storage/file-access/mount-service",permalink:"/shared-storage/file-access/mount-service",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/shared-storage/file-access/mount-service.md",tags:[],version:"current",frontMatter:{id:"mount-service",title:"How to mount service locally (Linux)",sidebar_label:"Mount service (Linux)"},sidebar:"docs",previous:{title:"Connect using FTP",permalink:"/shared-storage/file-access/connect-ftp"},next:{title:"Using bouncer servers",permalink:"/shared-storage/file-access/bouncer"}},u={},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"THIS GUIDE IS A USER WRITTEN GUIDE, SEEDBOX.IO CANNOT GUARANTEE THIS IS STABLE AND WORKING AS INTENDED! ONLY ATTEMPT THIS IF YOU ARE AN EXPERIENCED USER THAT CAN DEBUG THIS ON YOUR OWN!")),(0,o.kt)("p",null,"On-Demand SFTP remote path mapping\nTested OS : Ubuntu 18.04, Ubuntu 16.04.4,"),(0,o.kt)("p",null,"Packages required: sshfs, sshpass, fuse"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For a single use remote mapping (Connection will be lost upon reboot or if SFTP connection is dropped)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo sshfs <username>@<seedbox_id>.seedbox.io:/ <mount path>\n# ie\n$ mkdir ~/seedbox\n$ sshfs psbXXXXX@psbXXXXX.seedbox.io:/ ~/seedbox/\n")),(0,o.kt)("p",null,"Enter your password when prompted, accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/seedbox")," folder"),(0,o.kt)("p",null,"Note: you can add -o allow_other to enable other users/daemons to access this share, and -o sshfs_debug to output any additional information. If your SSH port has been altered to non-custom 22, you can specify the port via -p 2222 etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configuring automatic on-demand mapping")),(0,o.kt)("p",null,"Once you know a single use sshfs session works, you can set it up for automatic logon via systemd."),(0,o.kt)("p",null,"Create an sshpass shell script to automate the password prompt ie:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudoedit /opt/seedbox.sh\n!/bin/bash\nsshpass -p <seedbox_password> ssh $\\*\n")),(0,o.kt)("p",null,"edit the system /etc/fstab to add your mount (uid/gid to match the user id of mount owner)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudoedit /etc/fstab\nsshfs#<username>@<seedbox_id>.seedbox.io:/ <mount path> fuse ssh_command=/opt/seedbox.sh,uid=<gid>,gid=<gid>,users,idmap=user,x-systemd.automount,noatime,allow_other,netdev,auto_cache,reconnect 0 0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<username>")," = your seedbox's username ie psbXXXXX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<seedbox_id>")," = your seedbox's hostname ie psbXXXXX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<mount path>")," = Your mount location, ie, /mnt/seedbox"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<uid>")," = system user id of the mount owner (preferabley a daemon user, sonarr/radarr etc)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<gid>")," = system group id of the mount owner (preferabley a daemon user, sonarr/radarr etc)")),(0,o.kt)("p",null,"activate the auto mount (once) via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl daemon-reload\n$ sudo systemctl restart (mount path).automount\n")))}p.isMDXComponent=!0}}]);