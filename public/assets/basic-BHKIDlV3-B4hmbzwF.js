import{Y as U,L as j,N as u,l,D as z,j as It,d as D,y as gt,z as Ro,R as Eo,a as Io,T as I}from"./index-Dp1nSgW1-DpPyRJZT.js";import{b as B,k as ee,R as K,A as W,O as $t,S as fe,i as _,e as X,r as H,o as To,m as Dt,a as q,x as $,C as M,d as ie,f as G,g as N,T as Ve,c as ot,W as Xe,E as Ke,h as So,j as ui,M as ao,l as Wt,n as di}from"./solana-D2d9wcV7-B_cdSi_Y.js";import{cm as Lo,aR as Bo}from"./Bridge-D6jo9cd9.js";import"./index-Db1dObS2.js";import"./util--bw7gFPs-BWz0kH9e.js";import"./wallets-DeIxpXbE-BD0sp_Fe.js";import"./index.es-DxME80dw-DDCMXnh8.js";import"./http-BRrcyI2V-LwCP0nWA.js";var hi,pi;function zo(){return pi||(pi=1,hi=function(t){for(var e=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(n=(n-55296)*1024+i-56320+65536,r+=1)}if(n<128){e.push(n);continue}if(n<2048){e.push(n>>6|192),e.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){e.push(n>>12|224),e.push(n>>6&63|128),e.push(n&63|128);continue}if(n>=65536&&n<=1114111){e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(n&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}),hi}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function so(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=t=>t??Ke,Po=_`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Tt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ft=class extends q{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),$`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?$`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:$`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ft.styles=[X,H,Po];Tt([l()],ft.prototype,"size",void 0);Tt([l()],ft.prototype,"name",void 0);Tt([l()],ft.prototype,"imageSrc",void 0);Tt([l()],ft.prototype,"walletIcon",void 0);Tt([l({type:Boolean})],ft.prototype,"installed",void 0);Tt([l()],ft.prototype,"badgeSize",void 0);ft=Tt([I("wui-wallet-image")],ft);const Ao=_`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var lo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Le=4;let oe=class extends q{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Le;return $`${this.walletImages.slice(0,Le).map(({src:e,walletName:o})=>$`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${wt(o)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(Le-this.walletImages.length)].map(()=>$` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};oe.styles=[H,Ao];lo([l({type:Array})],oe.prototype,"walletImages",void 0);oe=lo([I("wui-all-wallets-image")],oe);const jo=_`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var Q=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Y=class extends q{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return $`
      <button ?disabled=${this.disabled} tabindex=${wt(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?$` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?$` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?$`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?$`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?$`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?$`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?$`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Y.styles=[H,X,jo];Q([l({type:Array})],Y.prototype,"walletImages",void 0);Q([l()],Y.prototype,"imageSrc",void 0);Q([l()],Y.prototype,"name",void 0);Q([l()],Y.prototype,"tagLabel",void 0);Q([l()],Y.prototype,"tagVariant",void 0);Q([l()],Y.prototype,"icon",void 0);Q([l()],Y.prototype,"walletIcon",void 0);Q([l()],Y.prototype,"tabIdx",void 0);Q([l({type:Boolean})],Y.prototype,"installed",void 0);Q([l({type:Boolean})],Y.prototype,"disabled",void 0);Q([l({type:Boolean})],Y.prototype,"showAllWallets",void 0);Q([l({type:Boolean})],Y.prototype,"loading",void 0);Q([l({type:String})],Y.prototype,"loadingSpinnerColor",void 0);Y=Q([I("wui-list-wallet")],Y);var Yt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let At=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.count=W.state.count,this.isFetchingRecommendedWallets=W.state.isFetchingRecommendedWallets,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t),W.subscribeKey("count",t=>this.count=t),W.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(a=>a.id==="walletConnect"),{allWallets:e}=$t.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!B.isMobile())return null;const o=W.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,i=n<r?`${n}+`:`${n}`;return u`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${i}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${j(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){ot.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),K.push("AllWallets")}};Yt([D()],At.prototype,"tabIdx",void 0);Yt([z()],At.prototype,"connectors",void 0);Yt([z()],At.prototype,"count",void 0);Yt([z()],At.prototype,"isFetchingRecommendedWallets",void 0);At=Yt([I("w3m-all-wallets-widget")],At);var Qe=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ne=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(ie.showConnector).map(e=>u`
              <wui-list-wallet
                imageSrc=${j(G.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${j(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?B.isMobile()?K.push("AllWallets"):K.push("ConnectingWalletConnect"):K.push("ConnectingExternal",{connector:t})}};Qe([D()],ne.prototype,"tabIdx",void 0);Qe([z()],ne.prototype,"connectors",void 0);ne=Qe([I("w3m-connect-announced-widget")],ne);var be=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let _t=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.loading=!1,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t)),B.isTelegram()&&B.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=$t.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return u`<wui-flex flexDirection="column" gap="xs">
      ${e.map(o=>u`
          <wui-list-wallet
            imageSrc=${j(G.getWalletImage(o))}
            name=${o.name??"Unknown"}
            @click=${()=>this.onConnectWallet(o)}
            data-testid=${`wallet-selector-${o.id}`}
            tabIdx=${j(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=fe.getRecentWallets(),o=this.connectors.map(i=>{var a;return(a=i.info)==null?void 0:a.rdns}).filter(Boolean),r=e.map(i=>i.rdns).filter(Boolean),n=o.concat(r);if(n.includes("io.metamask.mobile")&&B.isMobile()){const i=n.indexOf("io.metamask.mobile");n[i]="io.metamask"}return t.filter(i=>!n.includes(String(i==null?void 0:i.rdns)))}onConnectWallet(t){this.loading||K.push("ConnectingWalletConnect",{wallet:t})}};be([D()],_t.prototype,"tabIdx",void 0);be([z()],_t.prototype,"connectors",void 0);be([z()],_t.prototype,"loading",void 0);_t=be([I("w3m-connect-custom-widget")],_t);var Ze=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let re=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(e=>e.id!==So.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>u`
            <wui-list-wallet
              imageSrc=${j(G.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${j(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){K.push("ConnectingExternal",{connector:t})}};Ze([D()],re.prototype,"tabIdx",void 0);Ze([z()],re.prototype,"connectors",void 0);re=Ze([I("w3m-connect-external-widget")],re);var ti=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ae=class extends U{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>u`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${j(G.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${j(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){M.selectWalletConnector(t)}};ti([D()],ae.prototype,"tabIdx",void 0);ti([D()],ae.prototype,"wallets",void 0);ae=ti([I("w3m-connect-featured-widget")],ae);var ei=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let se=class extends U{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var e;const t=this.connectors;return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)==="Browser Wallet"&&!B.isMobile()?(this.style.cssText="display: none",null):u`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(o=>{var n;const r=(n=o.info)==null?void 0:n.rdns;return!B.isMobile()&&o.name==="Browser Wallet"?null:!r&&!N.checkInstalled()?(this.style.cssText="display: none",null):ie.showConnector(o)?u`
            <wui-list-wallet
              imageSrc=${j(G.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${o.id}`}
              @click=${()=>this.onConnector(o)}
              tabIdx=${j(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){M.setActiveConnector(t),K.push("ConnectingExternal",{connector:t})}};ei([D()],se.prototype,"tabIdx",void 0);ei([D()],se.prototype,"connectors",void 0);se=ei([I("w3m-connect-injected-widget")],se);var ii=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let le=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>u`
            <wui-list-wallet
              imageSrc=${j(G.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${j(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){M.setActiveConnector(t),K.push("ConnectingMultiChain")}};ii([D()],le.prototype,"tabIdx",void 0);ii([z()],le.prototype,"connectors",void 0);le=ii([I("w3m-connect-multi-chain-widget")],le);var me=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let qt=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.loading=!1,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t)),B.isTelegram()&&B.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=fe.getRecentWallets().filter(e=>!this.connectors.some(o=>o.id===e.id||o.name===e.name));return t.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>u`
            <wui-list-wallet
              imageSrc=${j(G.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${j(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||M.selectWalletConnector(t)}};me([D()],qt.prototype,"tabIdx",void 0);me([z()],qt.prototype,"connectors",void 0);me([z()],qt.prototype,"loading",void 0);qt=me([I("w3m-connect-recent-widget")],qt);var ve=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Vt=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,B.isTelegram()&&B.isIos()&&(this.loading=!N.state.wcUri,this.unsubscribe.push(N.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=M.state,{customWallets:e,featuredWalletIds:o}=$t.state,r=fe.getRecentWallets(),n=t.find(c=>c.id==="walletConnect"),i=t.filter(c=>c.type==="INJECTED"||c.type==="ANNOUNCED"||c.type==="MULTI_CHAIN").filter(c=>c.name!=="Browser Wallet");if(!n)return null;if(o||e||!this.wallets.length)return this.style.cssText="display: none",null;const a=i.length+r.length,s=Math.max(0,2-a),d=Xe.filterOutDuplicateWallets(this.wallets).slice(0,s);return d.length?u`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(c=>u`
            <wui-list-wallet
              imageSrc=${j(G.getWalletImage(c))}
              name=${(c==null?void 0:c.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(c)}
              tabIdx=${j(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=M.getConnector(t.id,t.rdns);e?K.push("ConnectingExternal",{connector:e}):K.push("ConnectingWalletConnect",{wallet:t})}};ve([D()],Vt.prototype,"tabIdx",void 0);ve([D()],Vt.prototype,"wallets",void 0);ve([z()],Vt.prototype,"loading",void 0);Vt=ve([I("w3m-connect-recommended-widget")],Vt);var ye=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Kt=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.connectorImages=ui.state.connectorImages,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t),ui.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(B.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(o=>o.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return u`
      <wui-list-wallet
        imageSrc=${j(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${j(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){M.setActiveConnector(t),K.push("ConnectingWalletConnect")}};ye([D()],Kt.prototype,"tabIdx",void 0);ye([z()],Kt.prototype,"connectors",void 0);ye([z()],Kt.prototype,"connectorImages",void 0);Kt=ye([I("w3m-connect-walletconnect-widget")],Kt);const No=It`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Gt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ct=class extends U{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=M.state.connectors,this.recommended=W.state.recommended,this.featured=W.state.featured,this.unsubscribe.push(M.subscribeKey("connectors",t=>this.connectors=t),W.subscribeKey("recommended",t=>this.recommended=t),W.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:i,featured:a,external:s}=ie.getConnectorsByType(this.connectors,this.recommended,this.featured);return ie.getConnectorTypeOrder({custom:t,recent:e,announced:o,injected:r,multiChain:n,recommended:i,featured:a,external:s}).map(d=>{switch(d){case"injected":return u`
            ${n.length?u`<w3m-connect-multi-chain-widget
                  tabIdx=${j(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?u`<w3m-connect-announced-widget
                  tabIdx=${j(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${r.length?u`<w3m-connect-injected-widget
                  .connectors=${r}
                  tabIdx=${j(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return u`<w3m-connect-walletconnect-widget
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return u`<w3m-connect-recent-widget
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return u`<w3m-connect-featured-widget
            .wallets=${a}
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return u`<w3m-connect-custom-widget
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return u`<w3m-connect-external-widget
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return u`<w3m-connect-recommended-widget
            .wallets=${i}
            tabIdx=${j(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${d}`),null}})}};Ct.styles=No;Gt([D()],Ct.prototype,"tabIdx",void 0);Gt([z()],Ct.prototype,"connectors",void 0);Gt([z()],Ct.prototype,"recommended",void 0);Gt([z()],Ct.prototype,"featured",void 0);Ct=Gt([I("w3m-connector-list")],Ct);const Oo=_`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var xt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let lt=class extends q{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var r;const o=e===this.activeTab;return $`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${o}
          data-testid="tab-${(r=t.label)==null?void 0:r.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?$`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const o=this.buttons[this.activeTab],r=this.buttons[t],n=o==null?void 0:o.querySelector("wui-text"),i=r==null?void 0:r.querySelector("wui-text"),a=r==null?void 0:r.getBoundingClientRect(),s=i==null?void 0:i.getBoundingClientRect();o&&n&&!e&&t!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),o.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),r&&a&&s&&i&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(a.width+s.width)+6}px`,r.animate([{width:`${a.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),i.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};lt.styles=[H,X,Oo];xt([l({type:Array})],lt.prototype,"tabs",void 0);xt([l()],lt.prototype,"onTabChange",void 0);xt([l({type:Array})],lt.prototype,"buttons",void 0);xt([l({type:Boolean})],lt.prototype,"disabled",void 0);xt([l()],lt.prototype,"localTabWidth",void 0);xt([so()],lt.prototype,"activeTab",void 0);xt([so()],lt.prototype,"isDense",void 0);lt=xt([I("wui-tabs")],lt);var xe=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ht=class extends U{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(N.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var o;const e=this.platformTabs[t];e&&((o=this.onSelectPlatfrom)==null||o.call(this,e))}};xe([D({type:Array})],Ht.prototype,"platforms",void 0);xe([D()],Ht.prototype,"onSelectPlatfrom",void 0);xe([z()],Ht.prototype,"buffering",void 0);Ht=xe([I("w3m-connecting-header")],Ht);const Mo=_`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ct=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const gi={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},Wo={lg:"paragraph-600",md:"small-600"},Uo={lg:"md",md:"md"};let tt=class extends q{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??Wo[this.size];return $`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=Uo[this.size],e=this.disabled?gi.disabled:gi[this.variant];return $`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return $``}};tt.styles=[H,X,Mo];ct([l()],tt.prototype,"size",void 0);ct([l({type:Boolean})],tt.prototype,"disabled",void 0);ct([l({type:Boolean})],tt.prototype,"fullWidth",void 0);ct([l({type:Boolean})],tt.prototype,"loading",void 0);ct([l()],tt.prototype,"variant",void 0);ct([l({type:Boolean})],tt.prototype,"hasIconLeft",void 0);ct([l({type:Boolean})],tt.prototype,"hasIconRight",void 0);ct([l()],tt.prototype,"borderRadius",void 0);ct([l()],tt.prototype,"textVariant",void 0);tt=ct([I("wui-button")],tt);const Do=_`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var $e=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let jt=class extends q{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return $`
      <button ?disabled=${this.disabled} tabindex=${wt(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};jt.styles=[H,X,Do];$e([l()],jt.prototype,"tabIdx",void 0);$e([l({type:Boolean})],jt.prototype,"disabled",void 0);$e([l()],jt.prototype,"color",void 0);jt=$e([I("wui-link")],jt);const _o=_`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var co=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ce=class extends q{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,o=116+e,r=245+e,n=360+e*1.75;return $`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};ce.styles=[H,_o];co([l({type:Number})],ce.prototype,"radius",void 0);ce=co([I("wui-loading-thumbnail")],ce);const qo=_`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var St=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let bt=class extends q{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return $`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?$`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};bt.styles=[H,X,qo];St([l()],bt.prototype,"variant",void 0);St([l()],bt.prototype,"imageSrc",void 0);St([l({type:Boolean})],bt.prototype,"disabled",void 0);St([l()],bt.prototype,"icon",void 0);St([l()],bt.prototype,"size",void 0);St([l()],bt.prototype,"text",void 0);bt=St([I("wui-chip-button")],bt);const Vo=_`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Ce=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Nt=class extends q{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return $`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Nt.styles=[H,X,Vo];Ce([l({type:Boolean})],Nt.prototype,"disabled",void 0);Ce([l()],Nt.prototype,"label",void 0);Ce([l()],Nt.prototype,"buttonLabel",void 0);Nt=Ce([I("wui-cta-button")],Nt);const Ko=It`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var uo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ue=class extends U{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:o,chrome_store:r,homepage:n}=this.wallet,i=B.isMobile(),a=B.isIos(),s=B.isAndroid(),d=[e,o,n,r].filter(Boolean).length>1,c=gt.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!i?u`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>K.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&n?u`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&a?u`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&s?u`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&B.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&B.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&B.openHref(this.wallet.homepage,"_blank")}};ue.styles=[Ko];uo([D({type:Object})],ue.prototype,"wallet",void 0);ue=uo([I("w3m-mobile-download-links")],ue);const Ho=It`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var rt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};class F extends U{constructor(){var e,o,r,n,i;super(),this.wallet=(e=K.state.data)==null?void 0:e.wallet,this.connector=(o=K.state.data)==null?void 0:o.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=G.getWalletImage(this.wallet)??G.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((n=this.connector)==null?void 0:n.name)??"Wallet",this.isRetrying=!1,this.uri=N.state.wcUri,this.error=N.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(N.subscribeKey("wcUri",a=>{var s;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),N.subscribeKey("wcError",a=>this.error=a),N.subscribeKey("buffering",a=>this.buffering=a)),(B.isTelegram()||B.isSafari())&&B.isIos()&&N.state.wcUri&&((i=this.onConnect)==null||i.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let o=`Continue in ${this.name}`;return this.buffering&&(o="Connecting..."),this.error&&(o="Connection declined"),u`
      <wui-flex
        data-error=${j(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${j(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${o}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e,o;this.error&&!this.showRetry&&(this.showRetry=!0,(o=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button"))==null||o.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,o;this.buffering||(N.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(o=this.onConnect)==null||o.call(this))}loaderTemplate(){const e=Ve.state.themeVariables["--w3m-border-radius-master"],o=e?parseInt(e.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(B.copyToClopboard(this.uri),ee.showSuccess("Link copied"))}catch{ee.showError("Failed to copy")}}}F.styles=Ho;rt([z()],F.prototype,"isRetrying",void 0);rt([z()],F.prototype,"uri",void 0);rt([z()],F.prototype,"error",void 0);rt([z()],F.prototype,"ready",void 0);rt([z()],F.prototype,"showRetry",void 0);rt([z()],F.prototype,"secondaryBtnLabel",void 0);rt([z()],F.prototype,"secondaryLabel",void 0);rt([z()],F.prototype,"buffering",void 0);rt([z()],F.prototype,"isLoading",void 0);rt([D({type:Boolean})],F.prototype,"isMobile",void 0);rt([D()],F.prototype,"onRetry",void 0);var Fo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let wi=class extends F{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=M.state,o=e.find(r=>{var n,i,a;return r.type==="ANNOUNCED"&&((n=r.info)==null?void 0:n.rdns)===((i=this.wallet)==null?void 0:i.rdns)||r.type==="INJECTED"||r.name===((a=this.wallet)==null?void 0:a.name)});if(o)await N.connectExternal(o,o.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ao.close(),ot.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){ot.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};wi=Fo([I("w3m-connecting-wc-browser")],wi);var Yo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let fi=class extends F{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:o}=this.wallet,{redirect:r,href:n}=B.formatNativeUrl(e,this.uri);N.setWcLinking({name:o,href:n}),N.setRecentWallet(this.wallet),B.openHref(r,"_blank")}catch{this.error=!0}}};fi=Yo([I("w3m-connecting-wc-desktop")],fi);var Go=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let bi=class extends F{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:o}=this.wallet,{redirect:r,href:n}=B.formatNativeUrl(e,this.uri);N.setWcLinking({name:o,href:n}),N.setRecentWallet(this.wallet);const i=B.isIframe()?"_top":"_self";B.openHref(r,i),clearTimeout(this.labelTimeout),this.secondaryLabel=Wt.CONNECT_LABELS.MOBILE}catch(e){ot.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=Wt.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=Wt.CONNECT_LABELS.MOBILE},Wt.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},Wt.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){const t=B.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(N.setBuffering(!0),setTimeout(()=>{N.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(N.setWcError(!1),this.onConnect())}};bi=Go([I("w3m-connecting-wc-mobile")],bi);var Pt={},mi,vi;function Jo(){return vi||(vi=1,mi=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),mi}var Be={},yt={},yi;function Lt(){if(yi)return yt;yi=1;let t;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return yt.getSymbolSize=function(o){if(!o)throw new Error('"version" cannot be null or undefined');if(o<1||o>40)throw new Error('"version" should be in range from 1 to 40');return o*4+17},yt.getSymbolTotalCodewords=function(o){return e[o]},yt.getBCHDigit=function(o){let r=0;for(;o!==0;)r++,o>>>=1;return r},yt.setToSJISFunction=function(o){if(typeof o!="function")throw new Error('"toSJISFunc" is not a valid function.');t=o},yt.isKanjiModeEnabled=function(){return typeof t<"u"},yt.toSJIS=function(o){return t(o)},yt}var xi={},$i;function oi(){return $i||($i=1,function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}t.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},t.from=function(o,r){if(t.isValid(o))return o;try{return e(o)}catch{return r}}}(xi)),xi}var ze,Ci;function Xo(){if(Ci)return ze;Ci=1;function t(){this.buffer=[],this.length=0}return t.prototype={get:function(e){const o=Math.floor(e/8);return(this.buffer[o]>>>7-e%8&1)===1},put:function(e,o){for(let r=0;r<o;r++)this.putBit((e>>>o-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const o=Math.floor(this.length/8);this.buffer.length<=o&&this.buffer.push(0),e&&(this.buffer[o]|=128>>>this.length%8),this.length++}},ze=t,ze}var Pe,ki;function Qo(){if(ki)return Pe;ki=1;function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return t.prototype.set=function(e,o,r,n){const i=e*this.size+o;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,o){return this.data[e*this.size+o]},t.prototype.xor=function(e,o,r){this.data[e*this.size+o]^=r},t.prototype.isReserved=function(e,o){return this.reservedBit[e*this.size+o]},Pe=t,Pe}var Ri={},Ei;function Zo(){return Ei||(Ei=1,function(t){const e=Lt().getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=e(o),i=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let s=1;s<r-1;s++)a[s]=a[s-1]-i;return a.push(6),a.reverse()},t.getPositions=function(o){const r=[],n=t.getRowColCoords(o),i=n.length;for(let a=0;a<i;a++)for(let s=0;s<i;s++)a===0&&s===0||a===0&&s===i-1||a===i-1&&s===0||r.push([n[a],n[s]]);return r}}(Ri)),Ri}var Ae={},Ii;function tn(){if(Ii)return Ae;Ii=1;const t=Lt().getSymbolSize,e=7;return Ae.getPositions=function(o){const r=t(o);return[[0,0],[r-e,0],[0,r-e]]},Ae}var Ti={},Si;function en(){return Si||(Si=1,function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const n=r.size;let i=0,a=0,s=0,d=null,c=null;for(let A=0;A<n;A++){a=s=0,d=c=null;for(let k=0;k<n;k++){let p=r.get(A,k);p===d?a++:(a>=5&&(i+=e.N1+(a-5)),d=p,a=1),p=r.get(k,A),p===c?s++:(s>=5&&(i+=e.N1+(s-5)),c=p,s=1)}a>=5&&(i+=e.N1+(a-5)),s>=5&&(i+=e.N1+(s-5))}return i},t.getPenaltyN2=function(r){const n=r.size;let i=0;for(let a=0;a<n-1;a++)for(let s=0;s<n-1;s++){const d=r.get(a,s)+r.get(a,s+1)+r.get(a+1,s)+r.get(a+1,s+1);(d===4||d===0)&&i++}return i*e.N2},t.getPenaltyN3=function(r){const n=r.size;let i=0,a=0,s=0;for(let d=0;d<n;d++){a=s=0;for(let c=0;c<n;c++)a=a<<1&2047|r.get(d,c),c>=10&&(a===1488||a===93)&&i++,s=s<<1&2047|r.get(c,d),c>=10&&(s===1488||s===93)&&i++}return i*e.N3},t.getPenaltyN4=function(r){let n=0;const i=r.data.length;for(let a=0;a<i;a++)n+=r.data[a];return Math.abs(Math.ceil(n*100/i/5)-10)*e.N4};function o(r,n,i){switch(r){case t.Patterns.PATTERN000:return(n+i)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(n+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return n*i%2+n*i%3===0;case t.Patterns.PATTERN110:return(n*i%2+n*i%3)%2===0;case t.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(r,n){const i=n.size;for(let a=0;a<i;a++)for(let s=0;s<i;s++)n.isReserved(s,a)||n.xor(s,a,o(r,s,a))},t.getBestMask=function(r,n){const i=Object.keys(t.Patterns).length;let a=0,s=1/0;for(let d=0;d<i;d++){n(d),t.applyMask(d,r);const c=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(d,r),c<s&&(s=c,a=d)}return a}}(Ti)),Ti}var te={},Li;function ho(){if(Li)return te;Li=1;const t=oi(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return te.getBlocksCount=function(r,n){switch(n){case t.L:return e[(r-1)*4+0];case t.M:return e[(r-1)*4+1];case t.Q:return e[(r-1)*4+2];case t.H:return e[(r-1)*4+3];default:return}},te.getTotalCodewordsCount=function(r,n){switch(n){case t.L:return o[(r-1)*4+0];case t.M:return o[(r-1)*4+1];case t.Q:return o[(r-1)*4+2];case t.H:return o[(r-1)*4+3];default:return}},te}var Bi={},Ut={},zi;function on(){if(zi)return Ut;zi=1;const t=new Uint8Array(512),e=new Uint8Array(256);return function(){let o=1;for(let r=0;r<255;r++)t[r]=o,e[o]=r,o<<=1,o&256&&(o^=285);for(let r=255;r<512;r++)t[r]=t[r-255]}(),Ut.log=function(o){if(o<1)throw new Error("log("+o+")");return e[o]},Ut.exp=function(o){return t[o]},Ut.mul=function(o,r){return o===0||r===0?0:t[e[o]+e[r]]},Ut}var Pi;function nn(){return Pi||(Pi=1,function(t){const e=on();t.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let i=0;i<o.length;i++)for(let a=0;a<r.length;a++)n[i+a]^=e.mul(o[i],r[a]);return n},t.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const i=n[0];for(let s=0;s<r.length;s++)n[s]^=e.mul(r[s],i);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=t.mul(r,new Uint8Array([1,e.exp(n)]));return r}}(Bi)),Bi}var je,Ai;function rn(){if(Ai)return je;Ai=1;const t=nn();function e(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(o){this.degree=o,this.genPoly=t.generateECPolynomial(this.degree)},e.prototype.encode=function(o){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(o.length+this.degree);r.set(o);const n=t.mod(r,this.genPoly),i=this.degree-n.length;if(i>0){const a=new Uint8Array(this.degree);return a.set(n,i),a}return n},je=e,je}var ji={},Ni={},Oi={},Mi;function po(){return Mi||(Mi=1,Oi.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),Oi}var st={},Wi;function go(){if(Wi)return st;Wi=1;const t="[0-9]+",e="[A-Z $%*+\\-./:]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+`)(?:.|[\r
]))+`;st.KANJI=new RegExp(o,"g"),st.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),st.BYTE=new RegExp(r,"g"),st.NUMERIC=new RegExp(t,"g"),st.ALPHANUMERIC=new RegExp(e,"g");const n=new RegExp("^"+o+"$"),i=new RegExp("^"+t+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return st.testKanji=function(s){return n.test(s)},st.testNumeric=function(s){return i.test(s)},st.testAlphanumeric=function(s){return a.test(s)},st}var Ui;function Bt(){return Ui||(Ui=1,function(t){const e=po(),o=go();t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,i){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?n.ccBits[0]:i<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return o.testNumeric(n)?t.NUMERIC:o.testAlphanumeric(n)?t.ALPHANUMERIC:o.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(n,i){if(t.isValid(n))return n;try{return r(n)}catch{return i}}}(Ni)),Ni}var Di;function an(){return Di||(Di=1,function(t){const e=Lt(),o=ho(),r=oi(),n=Bt(),i=po(),a=7973,s=e.getBCHDigit(a);function d(p,T,f){for(let v=1;v<=40;v++)if(T<=t.getCapacity(v,f,p))return v}function c(p,T){return n.getCharCountIndicator(p,T)+4}function A(p,T){let f=0;return p.forEach(function(v){const O=c(v.mode,T);f+=O+v.getBitsLength()}),f}function k(p,T){for(let f=1;f<=40;f++)if(A(p,f)<=t.getCapacity(f,T,n.MIXED))return f}t.from=function(p,T){return i.isValid(p)?parseInt(p,10):T},t.getCapacity=function(p,T,f){if(!i.isValid(p))throw new Error("Invalid QR Code version");typeof f>"u"&&(f=n.BYTE);const v=e.getSymbolTotalCodewords(p),O=o.getTotalCodewordsCount(p,T),h=(v-O)*8;if(f===n.MIXED)return h;const b=h-c(f,p);switch(f){case n.NUMERIC:return Math.floor(b/10*3);case n.ALPHANUMERIC:return Math.floor(b/11*2);case n.KANJI:return Math.floor(b/13);case n.BYTE:default:return Math.floor(b/8)}},t.getBestVersionForData=function(p,T){let f;const v=r.from(T,r.M);if(Array.isArray(p)){if(p.length>1)return k(p,v);if(p.length===0)return 1;f=p[0]}else f=p;return d(f.mode,f.getLength(),v)},t.getEncodedBits=function(p){if(!i.isValid(p)||p<7)throw new Error("Invalid QR Code version");let T=p<<12;for(;e.getBCHDigit(T)-s>=0;)T^=a<<e.getBCHDigit(T)-s;return p<<12|T}}(ji)),ji}var Ne={},_i;function sn(){if(_i)return Ne;_i=1;const t=Lt(),e=1335,o=21522,r=t.getBCHDigit(e);return Ne.getEncodedBits=function(n,i){const a=n.bit<<3|i;let s=a<<10;for(;t.getBCHDigit(s)-r>=0;)s^=e<<t.getBCHDigit(s)-r;return(a<<10|s)^o},Ne}var qi={},Oe,Vi;function ln(){if(Vi)return Oe;Vi=1;const t=Bt();function e(o){this.mode=t.NUMERIC,this.data=o.toString()}return e.getBitsLength=function(o){return 10*Math.floor(o/3)+(o%3?o%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(o){let r,n,i;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),i=parseInt(n,10),o.put(i,10);const a=this.data.length-r;a>0&&(n=this.data.substr(r),i=parseInt(n,10),o.put(i,a*3+1))},Oe=e,Oe}var Me,Ki;function cn(){if(Ki)return Me;Ki=1;const t=Bt(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(r){this.mode=t.ALPHANUMERIC,this.data=r}return o.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){let n;for(n=0;n+2<=this.data.length;n+=2){let i=e.indexOf(this.data[n])*45;i+=e.indexOf(this.data[n+1]),r.put(i,11)}this.data.length%2&&r.put(e.indexOf(this.data[n]),6)},Me=o,Me}var We,Hi;function un(){if(Hi)return We;Hi=1;const t=zo(),e=Bt();function o(r){this.mode=e.BYTE,typeof r=="string"&&(r=t(r)),this.data=new Uint8Array(r)}return o.getBitsLength=function(r){return r*8},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){for(let n=0,i=this.data.length;n<i;n++)r.put(this.data[n],8)},We=o,We}var Ue,Fi;function dn(){if(Fi)return Ue;Fi=1;const t=Bt(),e=Lt();function o(r){this.mode=t.KANJI,this.data=r}return o.getBitsLength=function(r){return r*13},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(r){let n;for(n=0;n<this.data.length;n++){let i=e.toSJIS(this.data[n]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),r.put(i,13)}},Ue=o,Ue}var Yi;function hn(){return Yi||(Yi=1,function(t){const e=Bt(),o=ln(),r=cn(),n=un(),i=dn(),a=go(),s=Lt(),d=Lo();function c(h){return unescape(encodeURIComponent(h)).length}function A(h,b,w){const y=[];let V;for(;(V=h.exec(w))!==null;)y.push({data:V[0],index:V.index,mode:b,length:V[0].length});return y}function k(h){const b=A(a.NUMERIC,e.NUMERIC,h),w=A(a.ALPHANUMERIC,e.ALPHANUMERIC,h);let y,V;return s.isKanjiModeEnabled()?(y=A(a.BYTE,e.BYTE,h),V=A(a.KANJI,e.KANJI,h)):(y=A(a.BYTE_KANJI,e.BYTE,h),V=[]),b.concat(w,y,V).sort(function(g,R){return g.index-R.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function p(h,b){switch(b){case e.NUMERIC:return o.getBitsLength(h);case e.ALPHANUMERIC:return r.getBitsLength(h);case e.KANJI:return i.getBitsLength(h);case e.BYTE:return n.getBitsLength(h)}}function T(h){return h.reduce(function(b,w){const y=b.length-1>=0?b[b.length-1]:null;return y&&y.mode===w.mode?(b[b.length-1].data+=w.data,b):(b.push(w),b)},[])}function f(h){const b=[];for(let w=0;w<h.length;w++){const y=h[w];switch(y.mode){case e.NUMERIC:b.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:b.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:b.push([y,{data:y.data,mode:e.BYTE,length:c(y.data)}]);break;case e.BYTE:b.push([{data:y.data,mode:e.BYTE,length:c(y.data)}])}}return b}function v(h,b){const w={},y={start:{}};let V=["start"];for(let g=0;g<h.length;g++){const R=h[g],L=[];for(let m=0;m<R.length;m++){const S=R[m],E=""+g+m;L.push(E),w[E]={node:S,lastCount:0},y[E]={};for(let C=0;C<V.length;C++){const x=V[C];w[x]&&w[x].node.mode===S.mode?(y[x][E]=p(w[x].lastCount+S.length,S.mode)-p(w[x].lastCount,S.mode),w[x].lastCount+=S.length):(w[x]&&(w[x].lastCount=S.length),y[x][E]=p(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,b))}}V=L}for(let g=0;g<V.length;g++)y[V[g]].end=0;return{map:y,table:w}}function O(h,b){let w;const y=e.getBestModeForData(h);if(w=e.from(b,y),w!==e.BYTE&&w.bit<y.bit)throw new Error('"'+h+'" cannot be encoded with mode '+e.toString(w)+`.
 Suggested mode is: `+e.toString(y));switch(w===e.KANJI&&!s.isKanjiModeEnabled()&&(w=e.BYTE),w){case e.NUMERIC:return new o(h);case e.ALPHANUMERIC:return new r(h);case e.KANJI:return new i(h);case e.BYTE:return new n(h)}}t.fromArray=function(h){return h.reduce(function(b,w){return typeof w=="string"?b.push(O(w,null)):w.data&&b.push(O(w.data,w.mode)),b},[])},t.fromString=function(h,b){const w=k(h,s.isKanjiModeEnabled()),y=f(w),V=v(y,b),g=d.find_path(V.map,"start","end"),R=[];for(let L=1;L<g.length-1;L++)R.push(V.table[g[L]].node);return t.fromArray(T(R))},t.rawSplit=function(h){return t.fromArray(k(h,s.isKanjiModeEnabled()))}}(qi)),qi}var Gi;function pn(){if(Gi)return Be;Gi=1;const t=Lt(),e=oi(),o=Xo(),r=Qo(),n=Zo(),i=tn(),a=en(),s=ho(),d=rn(),c=an(),A=sn(),k=Bt(),p=hn();function T(g,R){const L=g.size,m=i.getPositions(R);for(let S=0;S<m.length;S++){const E=m[S][0],C=m[S][1];for(let x=-1;x<=7;x++)if(!(E+x<=-1||L<=E+x))for(let P=-1;P<=7;P++)C+P<=-1||L<=C+P||(x>=0&&x<=6&&(P===0||P===6)||P>=0&&P<=6&&(x===0||x===6)||x>=2&&x<=4&&P>=2&&P<=4?g.set(E+x,C+P,!0,!0):g.set(E+x,C+P,!1,!0))}}function f(g){const R=g.size;for(let L=8;L<R-8;L++){const m=L%2===0;g.set(L,6,m,!0),g.set(6,L,m,!0)}}function v(g,R){const L=n.getPositions(R);for(let m=0;m<L.length;m++){const S=L[m][0],E=L[m][1];for(let C=-2;C<=2;C++)for(let x=-2;x<=2;x++)C===-2||C===2||x===-2||x===2||C===0&&x===0?g.set(S+C,E+x,!0,!0):g.set(S+C,E+x,!1,!0)}}function O(g,R){const L=g.size,m=c.getEncodedBits(R);let S,E,C;for(let x=0;x<18;x++)S=Math.floor(x/3),E=x%3+L-8-3,C=(m>>x&1)===1,g.set(S,E,C,!0),g.set(E,S,C,!0)}function h(g,R,L){const m=g.size,S=A.getEncodedBits(R,L);let E,C;for(E=0;E<15;E++)C=(S>>E&1)===1,E<6?g.set(E,8,C,!0):E<8?g.set(E+1,8,C,!0):g.set(m-15+E,8,C,!0),E<8?g.set(8,m-E-1,C,!0):E<9?g.set(8,15-E-1+1,C,!0):g.set(8,15-E-1,C,!0);g.set(m-8,8,1,!0)}function b(g,R){const L=g.size;let m=-1,S=L-1,E=7,C=0;for(let x=L-1;x>0;x-=2)for(x===6&&x--;;){for(let P=0;P<2;P++)if(!g.isReserved(S,x-P)){let vt=!1;C<R.length&&(vt=(R[C]>>>E&1)===1),g.set(S,x-P,vt),E--,E===-1&&(C++,E=7)}if(S+=m,S<0||L<=S){S-=m,m=-m;break}}}function w(g,R,L){const m=new o;L.forEach(function(P){m.put(P.mode.bit,4),m.put(P.getLength(),k.getCharCountIndicator(P.mode,g)),P.write(m)});const S=t.getSymbolTotalCodewords(g),E=s.getTotalCodewordsCount(g,R),C=(S-E)*8;for(m.getLengthInBits()+4<=C&&m.put(0,4);m.getLengthInBits()%8!==0;)m.putBit(0);const x=(C-m.getLengthInBits())/8;for(let P=0;P<x;P++)m.put(P%2?17:236,8);return y(m,g,R)}function y(g,R,L){const m=t.getSymbolTotalCodewords(R),S=s.getTotalCodewordsCount(R,L),E=m-S,C=s.getBlocksCount(R,L),x=m%C,P=C-x,vt=Math.floor(m/C),Mt=Math.floor(E/C),$o=Mt+1,si=vt-Mt,Co=new d(si);let Ee=0;const Zt=new Array(C),li=new Array(C);let Ie=0;const ko=new Uint8Array(g.buffer);for(let zt=0;zt<C;zt++){const Se=zt<P?Mt:$o;Zt[zt]=ko.slice(Ee,Ee+Se),li[zt]=Co.encode(Zt[zt]),Ee+=Se,Ie=Math.max(Ie,Se)}const Te=new Uint8Array(m);let ci=0,dt,ht;for(dt=0;dt<Ie;dt++)for(ht=0;ht<C;ht++)dt<Zt[ht].length&&(Te[ci++]=Zt[ht][dt]);for(dt=0;dt<si;dt++)for(ht=0;ht<C;ht++)Te[ci++]=li[ht][dt];return Te}function V(g,R,L,m){let S;if(Array.isArray(g))S=p.fromArray(g);else if(typeof g=="string"){let vt=R;if(!vt){const Mt=p.rawSplit(g);vt=c.getBestVersionForData(Mt,L)}S=p.fromString(g,vt||40)}else throw new Error("Invalid data");const E=c.getBestVersionForData(S,L);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(!R)R=E;else if(R<E)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+E+`.
`);const C=w(R,L,S),x=t.getSymbolSize(R),P=new r(x);return T(P,R),f(P),v(P,R),h(P,L,0),R>=7&&O(P,R),b(P,C),isNaN(m)&&(m=a.getBestMask(P,h.bind(null,P,L))),a.applyMask(m,P),h(P,L,m),{modules:P,version:R,errorCorrectionLevel:L,maskPattern:m,segments:S}}return Be.create=function(g,R){if(typeof g>"u"||g==="")throw new Error("No input text");let L=e.M,m,S;return typeof R<"u"&&(L=e.from(R.errorCorrectionLevel,e.M),m=c.from(R.version),S=a.from(R.maskPattern),R.toSJISFunc&&t.setToSJISFunction(R.toSJISFunc)),V(g,m,L,S)},Be}var Ji={},Xi={},Qi;function wo(){return Qi||(Qi=1,function(t){function e(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,i=o.scale||4;return{width:n,scale:n?4:i,margin:r,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},t.getImageWidth=function(o,r){const n=t.getScale(o,r);return Math.floor((o+r.margin*2)*n)},t.qrToImageData=function(o,r,n){const i=r.modules.size,a=r.modules.data,s=t.getScale(i,n),d=Math.floor((i+n.margin*2)*s),c=n.margin*s,A=[n.color.light,n.color.dark];for(let k=0;k<d;k++)for(let p=0;p<d;p++){let T=(k*d+p)*4,f=n.color.light;if(k>=c&&p>=c&&k<d-c&&p<d-c){const v=Math.floor((k-c)/s),O=Math.floor((p-c)/s);f=A[a[v*i+O]?1:0]}o[T++]=f.r,o[T++]=f.g,o[T++]=f.b,o[T]=f.a}}}(Xi)),Xi}var Zi;function gn(){return Zi||(Zi=1,function(t){const e=wo();function o(n,i,a){n.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=a,i.width=a,i.style.height=a+"px",i.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,i,a){let s=a,d=i;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),i||(d=r()),s=e.getOptions(s);const c=e.getImageWidth(n.modules.size,s),A=d.getContext("2d"),k=A.createImageData(c,c);return e.qrToImageData(k.data,n,s),o(A,d,c),A.putImageData(k,0,0),d},t.renderToDataURL=function(n,i,a){let s=a;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),s||(s={});const d=t.render(n,i,s),c=s.type||"image/png",A=s.rendererOpts||{};return d.toDataURL(c,A.quality)}}(Ji)),Ji}var De={},to;function wn(){if(to)return De;to=1;const t=wo();function e(n,i){const a=n.a/255,s=i+'="'+n.hex+'"';return a<1?s+" "+i+'-opacity="'+a.toFixed(2).slice(1)+'"':s}function o(n,i,a){let s=n+i;return typeof a<"u"&&(s+=" "+a),s}function r(n,i,a){let s="",d=0,c=!1,A=0;for(let k=0;k<n.length;k++){const p=Math.floor(k%i),T=Math.floor(k/i);!p&&!c&&(c=!0),n[k]?(A++,k>0&&p>0&&n[k-1]||(s+=c?o("M",p+a,.5+T+a):o("m",d,0),d=0,c=!1),p+1<i&&n[k+1]||(s+=o("h",A),A=0)):d++}return s}return De.render=function(n,i,a){const s=t.getOptions(i),d=n.modules.size,c=n.modules.data,A=d+s.margin*2,k=s.color.light.a?"<path "+e(s.color.light,"fill")+' d="M0 0h'+A+"v"+A+'H0z"/>':"",p="<path "+e(s.color.dark,"stroke")+' d="'+r(c,d,s.margin)+'"/>',T='viewBox="0 0 '+A+" "+A+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+T+' shape-rendering="crispEdges">'+k+p+`</svg>
`;return typeof a=="function"&&a(null,f),f},De}var eo;function fn(){if(eo)return Pt;eo=1;const t=Jo(),e=pn(),o=gn(),r=wn();function n(i,a,s,d,c){const A=[].slice.call(arguments,1),k=A.length,p=typeof A[k-1]=="function";if(!p&&!t())throw new Error("Callback required as last argument");if(p){if(k<2)throw new Error("Too few arguments provided");k===2?(c=s,s=a,a=d=void 0):k===3&&(a.getContext&&typeof c>"u"?(c=d,d=void 0):(c=d,d=s,s=a,a=void 0))}else{if(k<1)throw new Error("Too few arguments provided");return k===1?(s=a,a=d=void 0):k===2&&!a.getContext&&(d=s,s=a,a=void 0),new Promise(function(T,f){try{const v=e.create(s,d);T(i(v,a,d))}catch(v){f(v)}})}try{const T=e.create(s,d);c(null,i(T,a,d))}catch(T){c(T)}}return Pt.create=e.create,Pt.toCanvas=n.bind(null,o.render),Pt.toDataURL=n.bind(null,o.renderToDataURL),Pt.toString=n.bind(null,function(i,a,s){return r.render(i,s)}),Pt}var bn=fn();const mn=Bo(bn),vn=.1,io=2.5,pt=7;function _e(t,e,o){return t===e?!1:(t-e<0?e-t:t-e)<=o+vn}function yn(t,e){const o=Array.prototype.slice.call(mn.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(o.length);return o.reduce((n,i,a)=>(a%r===0?n.push([i]):n[n.length-1].push(i))&&n,[])}const xn={generate({uri:t,size:e,logoSize:o,dotColor:r="#141414"}){const n="transparent",i=[],a=yn(t,"Q"),s=e/a.length,d=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];d.forEach(({x:f,y:v})=>{const O=(a.length-pt)*s*f,h=(a.length-pt)*s*v,b=.45;for(let w=0;w<d.length;w+=1){const y=s*(pt-w*2);i.push(Dt`
            <rect
              fill=${w===2?r:n}
              width=${w===0?y-5:y}
              rx= ${w===0?(y-5)*b:y*b}
              ry= ${w===0?(y-5)*b:y*b}
              stroke=${r}
              stroke-width=${w===0?5:0}
              height=${w===0?y-5:y}
              x= ${w===0?h+s*w+5/2:h+s*w}
              y= ${w===0?O+s*w+5/2:O+s*w}
            />
          `)}});const c=Math.floor((o+25)/s),A=a.length/2-c/2,k=a.length/2+c/2-1,p=[];a.forEach((f,v)=>{f.forEach((O,h)=>{if(a[v][h]&&!(v<pt&&h<pt||v>a.length-(pt+1)&&h<pt||v<pt&&h>a.length-(pt+1))&&!(v>A&&v<k&&h>A&&h<k)){const b=v*s+s/2,w=h*s+s/2;p.push([b,w])}})});const T={};return p.forEach(([f,v])=>{var O;T[f]?(O=T[f])==null||O.push(v):T[f]=[v]}),Object.entries(T).map(([f,v])=>{const O=v.filter(h=>v.every(b=>!_e(h,b,s)));return[Number(f),O]}).forEach(([f,v])=>{v.forEach(O=>{i.push(Dt`<circle cx=${f} cy=${O} fill=${r} r=${s/io} />`)})}),Object.entries(T).filter(([f,v])=>v.length>1).map(([f,v])=>{const O=v.filter(h=>v.some(b=>_e(h,b,s)));return[Number(f),O]}).map(([f,v])=>{v.sort((h,b)=>h<b?-1:1);const O=[];for(const h of v){const b=O.find(w=>w.some(y=>_e(h,y,s)));b?b.push(h):O.push([h])}return[f,O.map(h=>[h[0],h[h.length-1]])]}).forEach(([f,v])=>{v.forEach(([O,h])=>{i.push(Dt`
              <line
                x1=${f}
                x2=${f}
                y1=${O}
                y2=${h}
                stroke=${r}
                stroke-width=${s/(io/2)}
                stroke-linecap="round"
              />
            `)})}),i}},$n=_`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var mt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const Cn="#3396ff";let nt=class extends q{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??Cn}
    `,$`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return Dt`
      <svg height=${t} width=${t}>
        ${xn.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?$`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?$`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:$`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};nt.styles=[H,$n];mt([l()],nt.prototype,"uri",void 0);mt([l({type:Number})],nt.prototype,"size",void 0);mt([l()],nt.prototype,"theme",void 0);mt([l()],nt.prototype,"imageSrc",void 0);mt([l()],nt.prototype,"alt",void 0);mt([l()],nt.prototype,"color",void 0);mt([l({type:Boolean})],nt.prototype,"arenaClear",void 0);mt([l({type:Boolean})],nt.prototype,"farcaster",void 0);nt=mt([I("wui-qr-code")],nt);const kn=_`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Jt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let kt=class extends q{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,$`<slot></slot>`}};kt.styles=[kn];Jt([l()],kt.prototype,"width",void 0);Jt([l()],kt.prototype,"height",void 0);Jt([l()],kt.prototype,"borderRadius",void 0);Jt([l()],kt.prototype,"variant",void 0);kt=Jt([I("wui-shimmer")],kt);const Rn=_`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var En=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let He=class extends q{render(){return $`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};He.styles=[H,X,Rn];He=En([I("wui-ux-by-reown")],He);const In=It`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Tn=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Fe=class extends F{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return N.setWcLinking(void 0),N.setRecentWallet(this.wallet),u` <wui-qr-code
      size=${t}
      theme=${Ve.state.themeMode}
      uri=${this.uri}
      imageSrc=${j(G.getWalletImage(this.wallet))}
      color=${j(Ve.state.themeVariables["--w3m-qr-color"])}
      alt=${j(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return u`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Fe.styles=In;Fe=Tn([I("w3m-connecting-wc-qrcode")],Fe);var Sn=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let oo=class extends U{constructor(){var t;if(super(),this.wallet=(t=K.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${j(G.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};oo=Sn([I("w3m-connecting-wc-unsupported")],oo);var fo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ye=class extends F{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(N.subscribeKey("wcUri",()=>{this.updateLoadingState()})),ot.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:o}=this.wallet,{redirect:r,href:n}=B.formatUniversalUrl(e,this.uri);N.setWcLinking({name:o,href:n}),N.setRecentWallet(this.wallet),B.openHref(r,"_blank")}catch{this.error=!0}}};fo([z()],Ye.prototype,"isLoading",void 0);Ye=fo([I("w3m-connecting-wc-web")],Ye);var ke=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ft=class extends U{constructor(){var t;super(),this.wallet=(t=K.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!$t.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return u`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||$t.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:o}=N.state;(t||B.isPairingExpired(e)||o==="connecting")&&(await N.connectWalletConnect(),this.isSiwxEnabled||ao.close())}catch(e){ot.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),N.setWcError(!0),ee.showError(e.message??"Connection error"),N.resetWcConnection(),K.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:o,injected:r,rdns:n}=this.wallet,i=r==null?void 0:r.map(({injected_id:T})=>T).filter(Boolean),a=[...n?[n]:i??[]],s=$t.state.isUniversalProvider?!1:a.length,d=t,c=o,A=N.checkInstalled(a),k=s&&A,p=e&&!B.isMobile();k&&!di.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(B.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!k&&s&&!di.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ke([z()],Ft.prototype,"platform",void 0);ke([z()],Ft.prototype,"platforms",void 0);ke([z()],Ft.prototype,"isSiwxEnabled",void 0);Ft=ke([I("w3m-connecting-wc-view")],Ft);var bo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ge=class extends U{constructor(){super(...arguments),this.isMobile=B.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=W.state,{customWallets:o}=$t.state,r=fe.getRecentWallets(),n=t.length||e.length||(o==null?void 0:o.length)||r.length;return u`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${n?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};bo([z()],Ge.prototype,"isMobile",void 0);Ge=bo([I("w3m-connecting-wc-basic-view")],Ge);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni=()=>new Ln;class Ln{}const qe=new WeakMap,ri=Eo(class extends Io{render(t){return Ke}update(t,[e]){var r;const o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),Ke}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let o=qe.get(e);o===void 0&&(o=new WeakMap,qe.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=qe.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bn=_`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var mo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let de=class extends q{constructor(){super(...arguments),this.inputElementRef=ni(),this.checked=void 0}render(){return $`
      <label>
        <input
          ${ri(this.inputElementRef)}
          type="checkbox"
          ?checked=${wt(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};de.styles=[H,X,To,Bn];mo([l({type:Boolean})],de.prototype,"checked",void 0);de=mo([I("wui-switch")],de);const zn=_`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var vo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let he=class extends q{constructor(){super(...arguments),this.checked=void 0}render(){return $`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${wt(this.checked)}></wui-switch>
      </button>
    `}};he.styles=[H,X,zn];vo([l({type:Boolean})],he.prototype,"checked",void 0);he=vo([I("wui-certified-switch")],he);const Pn=_`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var yo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let pe=class extends q{constructor(){super(...arguments),this.icon="copy"}render(){return $`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};pe.styles=[H,X,Pn];yo([l()],pe.prototype,"icon",void 0);pe=yo([I("wui-input-element")],pe);const An=_`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var ut=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let et=class extends q{constructor(){super(...arguments),this.inputElementRef=ni(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return $`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${ri(this.inputElementRef)}
        class=${Ro(e)}
        type=${this.type}
        enterkeyhint=${wt(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${wt(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?$`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};et.styles=[H,X,An];ut([l()],et.prototype,"size",void 0);ut([l()],et.prototype,"icon",void 0);ut([l({type:Boolean})],et.prototype,"disabled",void 0);ut([l()],et.prototype,"placeholder",void 0);ut([l()],et.prototype,"type",void 0);ut([l()],et.prototype,"keyHint",void 0);ut([l()],et.prototype,"value",void 0);ut([l()],et.prototype,"inputRightPadding",void 0);ut([l()],et.prototype,"tabIdx",void 0);et=ut([I("wui-input-text")],et);const jn=_`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Nn=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Je=class extends q{constructor(){super(...arguments),this.inputComponentRef=ni()}render(){return $`
      <wui-input-text
        ${ri(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var e;const t=(e=this.inputComponentRef.value)==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Je.styles=[H,jn];Je=Nn([I("wui-search-bar")],Je);const On=Dt`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Mn=_`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var xo=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ge=class extends q{constructor(){super(...arguments),this.type="wallet"}render(){return $`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?$` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${On}`:$`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ge.styles=[H,X,Mn];xo([l()],ge.prototype,"type",void 0);ge=xo([I("wui-card-select-loader")],ge);const Wn=_`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var it=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let J=class extends q{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&gt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&gt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&gt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&gt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&gt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&gt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&gt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&gt.getSpacingStyles(this.margin,3)};
    `,$`<slot></slot>`}};J.styles=[H,Wn];it([l()],J.prototype,"gridTemplateRows",void 0);it([l()],J.prototype,"gridTemplateColumns",void 0);it([l()],J.prototype,"justifyItems",void 0);it([l()],J.prototype,"alignItems",void 0);it([l()],J.prototype,"justifyContent",void 0);it([l()],J.prototype,"alignContent",void 0);it([l()],J.prototype,"columnGap",void 0);it([l()],J.prototype,"rowGap",void 0);it([l()],J.prototype,"gap",void 0);it([l()],J.prototype,"padding",void 0);it([l()],J.prototype,"margin",void 0);J=it([I("wui-grid")],J);const Un=It`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Xt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Rt=class extends U{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,o;const t=((e=this.wallet)==null?void 0:e.badge_type)==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${j(t?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${t?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="md"
        imageSrc=${j(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=G.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await G.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Rt.styles=Un;Xt([z()],Rt.prototype,"visible",void 0);Xt([z()],Rt.prototype,"imageSrc",void 0);Xt([z()],Rt.prototype,"imageLoading",void 0);Xt([D()],Rt.prototype,"wallet",void 0);Rt=Xt([I("w3m-all-wallets-list-item")],Rt);const Dn=It`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Qt=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};const no="local-paginator";let Et=class extends U{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!W.state.wallets.length,this.wallets=W.state.wallets,this.recommended=W.state.recommended,this.featured=W.state.featured,this.unsubscribe.push(W.subscribeKey("wallets",t=>this.wallets=t),W.subscribeKey("recommended",t=>this.recommended=t),W.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-grid");t&&(await W.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${j(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=B.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return Xe.markWalletsAsInstalled(t).map(e=>u`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:o,count:r}=W.state,n=window.innerWidth<352?3:4,i=t.length+e.length;let a=Math.ceil(i/n)*n-i+n;return a-=t.length?o.length%n:0,r===0&&o.length>0?null:r===0||[...o,...t,...e].length<r?this.shimmerTemplate(a,no):null}createPaginationObserver(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${no}`);t&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:n,wallets:i}=W.state;i.length<n&&W.fetchWallets({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){M.selectWalletConnector(t)}};Et.styles=Dn;Qt([z()],Et.prototype,"loading",void 0);Qt([z()],Et.prototype,"wallets",void 0);Qt([z()],Et.prototype,"recommended",void 0);Qt([z()],Et.prototype,"featured",void 0);Et=Qt([I("w3m-all-wallets-list")],Et);const _n=It`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Re=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Ot=class extends U{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await W.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=W.state,e=Xe.markWalletsAsInstalled(t);return t.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(o=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){M.selectWalletConnector(t)}};Ot.styles=_n;Re([z()],Ot.prototype,"loading",void 0);Re([D()],Ot.prototype,"query",void 0);Re([D()],Ot.prototype,"badge",void 0);Ot=Re([I("w3m-all-wallets-search")],Ot);var ai=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let we=class extends U{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=B.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return u`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            badge=${j(this.badge)}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list badge=${j(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",ee.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return B.isMobile()?u`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){K.push("ConnectingWalletConnect")}};ai([z()],we.prototype,"search",void 0);ai([z()],we.prototype,"badge",void 0);we=ai([I("w3m-all-wallets-view")],we);const qn=_`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var at=function(t,e,o,r){var n=arguments.length,i=n<3?e:r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let Z=class extends q{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return $`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${wt(this.iconVariant)}
        tabindex=${wt(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return $`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return $`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",o=this.iconSize?this.iconSize:e;return $`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${o}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?$`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:$``}chevronTemplate(){return this.chevron?$`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Z.styles=[H,X,qn];at([l()],Z.prototype,"icon",void 0);at([l()],Z.prototype,"iconSize",void 0);at([l()],Z.prototype,"tabIdx",void 0);at([l()],Z.prototype,"variant",void 0);at([l()],Z.prototype,"iconVariant",void 0);at([l({type:Boolean})],Z.prototype,"disabled",void 0);at([l()],Z.prototype,"imageSrc",void 0);at([l()],Z.prototype,"alt",void 0);at([l({type:Boolean})],Z.prototype,"chevron",void 0);at([l({type:Boolean})],Z.prototype,"loading",void 0);Z=at([I("wui-list-item")],Z);var Vn=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(n<3?a(i):n>3?a(e,o,i):a(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let ro=class extends U{constructor(){var t;super(...arguments),this.wallet=(t=K.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&B.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&B.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&B.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&B.openHref(this.wallet.homepage,"_blank")}};ro=Vn([I("w3m-downloads-view")],ro);export{we as W3mAllWalletsView,Ge as W3mConnectingWcBasicView,ro as W3mDownloadsView};
