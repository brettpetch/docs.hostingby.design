"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[8608,6779],{5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(4334),l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),o=n(7294),l=n(4334),r=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,o.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(2389),f="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},r,{className:(0,l.Z)("tabs__item",k,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},6265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905)),l=n(4866),r=n(5162),i=n(432);const s={id:"deluge",title:"Deluge",sidebar_label:"Deluge"},u=void 0,c={unversionedId:"appslots/applications/deluge",id:"appslots/applications/deluge",title:"Deluge",description:"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client.",source:"@site/docs/appslots/applications/deluge.mdx",sourceDirName:"appslots/applications",slug:"/appslots/applications/deluge",permalink:"/appslots/applications/deluge",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/docs/appslots/applications/deluge.mdx",tags:[],version:"current",frontMatter:{id:"deluge",title:"Deluge",sidebar_label:"Deluge"},sidebar:"docs",previous:{title:"rTorrent",permalink:"/appslots/applications/rtorrent"},next:{title:"qBittorrent",permalink:"/appslots/applications/qbittorrent"}},d={},p=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Thin Client (recommended)",id:"thin-client-recommended",level:3},{value:"Web UI",id:"web-ui",level:3},{value:"deluge-console",id:"deluge-console",level:3},{value:"Getting Started",id:"getting-started",level:4},{value:"Connecting to Your Daemon",id:"connecting-to-your-daemon",level:4},{value:"Available Commands",id:"available-commands",level:4},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Plugins",id:"plugins",level:3},{value:"Reannounce Script",id:"reannounce-script",level:3},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"Connecting to a remote client (i.e. Sonarr)",id:"connecting-to-a-remote-client-ie-sonarr",level:3}],m={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,o.kt)("a",{parentName:"p",href:"/appslots/getting-started/how-do-i-connect"},"here"),"."),(0,o.kt)("p",null,"Installing Deluge is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install deluge\n")),(0,o.kt)("p",null,'This command will configure Deluge and the associated web interface "Deluge-Web" for use with your slot.'),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("h3",{id:"thin-client-recommended"},"Thin Client (recommended)"),(0,o.kt)("p",null,'The GTK thin client uses a secure connection to your slot to display the remote contents in the local client. Generally speaking, the thin client is capable of handling more torrents and simply offers better performance than the alternative Web UI. However, in order to use the Thin client, you must have a version of Deluge installed locally on the computer you wish to access your remote client from. Thus the argument of Thin vs Web is generally a choice between "Performance" and "Convenience". Further, the Thin client supports a broader range of plugins -- many plugins have no interface for the Web UI at all.'),(0,o.kt)("p",null,"In order to use the Thin client, you must have a recent version of Deluge installed locally on your computer. Below are instructions for popular operating systems:"),(0,o.kt)(l.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Debian/Ubuntu",value:"debuntu"},{label:"OpenSUSE",value:"opensuse"},{label:"Fedora",value:"fedora"},{label:"Arch Linux",value:"arch"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"Grab the most recent version from ",(0,o.kt)("a",{parentName:"p",href:"https://ftp.osuosl.org/pub/deluge/windows/?C=M;O=D"},"here")," and save it to a common location (i.e. Downloads).\nRun the installer and follow the prompts.")),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,"You can grab a pre-2.0 version of deluge ",(0,o.kt)("a",{parentName:"p",href:"https://ftp.osuosl.org/pub/deluge/mac_osx/?C=M;O=D"},"here"),", or install it via ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," like so"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# For version 1.x\nbrew install --cask deluge\n# For python-based deluge\nbrew install pygobject3 gtk+3 adwaita-icon-theme\nbrew install libtorrent-rasterbar\nbrew link gettext --force\npip3 install deluge\n"))),(0,o.kt)(r.Z,{value:"debuntu",mdxType:"TabItem"},(0,o.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install deluge\n"))),(0,o.kt)(r.Z,{value:"opensuse",mdxType:"TabItem"},(0,o.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zypper install deluge\n"))),(0,o.kt)(r.Z,{value:"fedora",mdxType:"TabItem"},(0,o.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install deluge\n"))),(0,o.kt)(r.Z,{value:"arch",mdxType:"TabItem"},(0,o.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S deluge\n")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that Deluge is installed on your machine, you need to configure it to connect to your slot."),(0,o.kt)("p",null,'First, we must prevent Deluge from starting in "Classic" mode. To do this, open Deluge. In the menu, go to ',(0,o.kt)("inlineCode",{parentName:"p"},"Preferences > Interface"),' and untick the box which states "Classic Mode".'),(0,o.kt)("p",null,'Deluge will prompt you to restart. Click "Ok" and re-open Deluge.'),(0,o.kt)("p",null,'You\'ll notice when you re-open the application that a new connection dialog box will open. Hit the "Add" button and use the following details:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Hostname: <the hostname of your server>\nUsername: <your username>\nPassword: <your password>\nPort: <the daemon port of your instance>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"During the configuration of Deluge on your slot, the setup output both your Daemon and Web ports. If you've forgotten your daemon port, you can find it with the following command:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/deluge/core.conf | grep daemon_port\n"))),(0,o.kt)("p",null,"Once you click okay, you'll be taken back to the connection dialog. Your new connection will be listed and if everything is okay, you'll see a green check box next to it. When you click connect, you'll be taken to your client."),(0,o.kt)("h3",{id:"web-ui"},"Web UI"),(0,o.kt)("p",null,"The web UI is significantly easier to access, which is why many prefer it. You can access deluge-web from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourhost.io/deluge"),"."),(0,o.kt)("p",null,"If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a dialog box from Deluge-Web. This password is the same as the one you just entered."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This second password authetication layer cannot be fully removed due to restrictions in Deluge. However, you can increase the length of time that the cookie is stored locally by your browser to one year (from one hour):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'box stop deluge-web\nsed -i \'s/"session_timeout": 3600,/"session_timeout": 31536000,/g\' ~/.config/deluge/web.conf\nbox start deluge-web\n'))),(0,o.kt)("h3",{id:"deluge-console"},"deluge-console"),(0,o.kt)("h4",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"You can access the command line version of the deluge console by using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"deluge-console\n")),(0,o.kt)("h4",{id:"connecting-to-your-daemon"},"Connecting to Your Daemon"),(0,o.kt)("p",null,"Once loaded, you'll need to specify your daemon port to connect to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"connect 127.0.0.1:<daemon port>\n")),(0,o.kt)("h4",{id:"available-commands"},"Available Commands"),(0,o.kt)("p",null,"Once you have successfully connected to the daemon, you can get started with the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},'>>> help\nadd - Add a torrent\ncache - Show information about the disk cache\nconfig - Show and set configuration values\nconnect - Connect to a new deluge server.\ndebug - Enable and disable debugging\ndel - Remove a torrent\nexit - Exit from the client.\nhalt - Shutdown the deluge server.\nhelp - displays help on other commands\ninfo - Show information about the torrents\npause - Pause a torrent\nplugin - Manage plugins with this command\nquit - Exit from the client.\nreannounce - Update tracker for torrent(s)\nrecheck - Forces a recheck of the torrent data\nresume - Resume a torrent\nrm - Remove a torrent\nupdate-tracker - Update tracker for torrent(s)\n\nFor help on a specific command, use "<command> --help"\n')),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"Like all box configured applications, you can manage Deluge via SSH with box with start, stop, restart, enable and disable commands. To restart the deluge daemon, use ",(0,o.kt)("inlineCode",{parentName:"p"},"deluged"),". To restart the web interface use ",(0,o.kt)("inlineCode",{parentName:"p"},"deluge-web")),(0,o.kt)(i.default,{service:"deluge",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Most of the settings in the preferences should be left alone; however, you're welcome to alter settings such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Download location"),". That said, you should leave the majority of ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection Settings")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ltConfig")," settings alone, as the settings have already been optimized for use on your slot."),(0,o.kt)("h3",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"There are a wide array of plugins available for Deluge. You can find a list of them in the Deluge wiki, ",(0,o.kt)("a",{parentName:"p",href:"https://dev.deluge-torrent.org/wiki/Plugins"},"here"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Not all plugins have a web-ui component. You will likely need to install and manage the options for most of the plugins on the prior page with the ",(0,o.kt)("a",{parentName:"p",href:"#thin-client-recommended"},"thin client"),".")),(0,o.kt)("h3",{id:"reannounce-script"},"Reannounce Script"),(0,o.kt)("p",null,"On our dedicated machines, an included feature is a reannounce script for racing using Deluge. You can replicate this behaviour on the app range by using the respective scripts to your Deluge version. If you cannot remember what version of Deluge you have installed, consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"cat ~/.install/.deluge.lock")," to get your currently installed version of the application."),(0,o.kt)(l.Z,{defaultValue:"d1",values:[{label:"Deluge 1.3.x",value:"d1"},{label:"Deluge 2.0.x",value:"d2"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"d1",mdxType:"TabItem"},(0,o.kt)("p",null,"The Deluge 1.3.x reannounce script can be added to the client by running the command below, then setting the path to the script to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<yourusername>/1.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"curl -sL https://docs.hostingby.design/static/scripts/1.sh -o ~/1.sh && chmod +x ~/1.sh\n"))),(0,o.kt)(r.Z,{value:"d2",mdxType:"TabItem"},(0,o.kt)("p",null,"The Deluge 2.0.x reannounce script can be added to the client by running the command below, then setting the path to the script to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<yourusername>/2.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"curl -sL https://docs.hostingby.design/static/scripts/2.sh -o ~/2.sh && chmod +x ~/2.sh\n")))),(0,o.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,o.kt)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Host: ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},"Daemon port: ",(0,o.kt)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/core.conf | grep daemon_port")),(0,o.kt)("li",{parentName:"ul"},"Web port: ",(0,o.kt)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/web.conf | grep port")),(0,o.kt)("li",{parentName:"ul"},"URL base: ",(0,o.kt)("inlineCode",{parentName:"li"},"/deluge")," (only if accessing via ",(0,o.kt)("inlineCode",{parentName:"li"},"https"),")")),(0,o.kt)("h3",{id:"connecting-to-a-remote-client-ie-sonarr"},"Connecting to a remote client (i.e. Sonarr)"),(0,o.kt)("p",null,"By default, the web interface of Deluge is bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". In other words, the interface isn't directly accessible from a remote connection. If you want to connect Deluge-web to a remote instance of an application (for instance, Sonarr running from home), you'll need to enable remote connections."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/appslots/getting-started/how-do-i-connect"},"SSH")," into your slot and issue the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box stop deluge-web\nsed -i 's/127.0.0.1/0.0.0.0/g' ~/.config/deluge/web.conf\nbox start deluge-web\n")),(0,o.kt)("p",null,"You can now connect to your Deluge-web instance through ",(0,o.kt)("inlineCode",{parentName:"p"},"http://hostname.io:<delugeport>")))}h.isMDXComponent=!0},432:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905)),l=n(4866),r=n(5162),i=n(814);const s={},u=void 0,c={unversionedId:"appslots/snippets/systemdtabs",id:"appslots/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/appslots/snippets/systemdtabs.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/systemdtabs",permalink:"/appslots/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/docs/appslots/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(l.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(r.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"box disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);