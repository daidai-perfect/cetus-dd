import{fd as d,fe as y,ff as T,fg as L,fh as P,fi as O,fj as I,fk as x,fl as de,fm as c,fn as D,fo as A,fp as ke,fq as gn,fr as j,fs as Ut,ft as Ne,fu as ne,fv as nn,fw as k,fx as U,fy as se,fz as kt,fA as De,fB as mn,fC as wn,fD as bn,fE as yn,fF as Le,fG as Kn,fH as Hn,fI as qn,fJ as Gn,fK as on,fL as $n}from"./index-CDkkHeSg.js";import{c as R,o as E,U as ie}from"./index-1w2EhL34.js";var Se=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pe=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.count=P.state.count,this.filteredCount=P.state.filteredWallets.length,this.isFetchingRecommendedWallets=P.state.isFetchingRecommendedWallets,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e),P.subscribeKey("count",e=>this.count=e),P.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),P.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(u=>u.id==="walletConnect"),{allWallets:i}=O.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!I.isMobile())return null;const o=P.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<r&&(a=`${s}+`);const l=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${E(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){D.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),A.push("AllWallets")}};Se([d()],pe.prototype,"tabIdx",void 0);Se([y()],pe.prototype,"connectors",void 0);Se([y()],pe.prototype,"count",void 0);Se([y()],pe.prototype,"filteredCount",void 0);Se([y()],pe.prototype,"isFetchingRecommendedWallets",void 0);pe=Se([R("w3m-all-wallets-widget")],pe);var gt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let je=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.connections=x.state.connections,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e),x.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e!=null&&e.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${e.filter(ke.showConnector).map(i=>{const r=(this.connections.get(i.chain)??[]).some(n=>gn.isLowerCaseMatch(n.connectorId,i.id));return c`
            <w3m-list-wallet
              imageSrc=${E(j.getConnectorImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnector(i)}
              tagVariant=${r?"info":"success"}
              tagLabel=${r?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${i.id}`}
              .installed=${!0}
              tabIdx=${E(this.tabIdx)}
              rdnsId=${i.id}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?I.isMobile()?A.push("AllWallets"):A.push("ConnectingWalletConnect"):A.push("ConnectingExternal",{connector:e})}};gt([d()],je.prototype,"tabIdx",void 0);gt([y()],je.prototype,"connectors",void 0);gt([y()],je.prototype,"connections",void 0);je=gt([R("w3m-connect-announced-widget")],je);var mt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ze=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.loading=!1,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e)),I.isTelegram()&&I.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=O.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e),o=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`<wui-flex flexDirection="column" gap="2">
      ${i.map(r=>c`
          <w3m-list-wallet
            imageSrc=${E(j.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            size="sm"
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${E(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
            rdnsId=${r.id}
          >
          </w3m-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=Ut.getRecentWallets(),o=this.connectors.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean),r=i.map(a=>a.rdns).filter(Boolean),n=o.concat(r);if(n.includes("io.metamask.mobile")&&I.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return e.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(e){this.loading||A.push("ConnectingWalletConnect",{wallet:e})}};mt([d()],ze.prototype,"tabIdx",void 0);mt([y()],ze.prototype,"connectors",void 0);mt([y()],ze.prototype,"loading",void 0);ze=mt([R("w3m-connect-custom-widget")],ze);var Ft=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let et=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const o=this.connectors.filter(n=>n.type==="EXTERNAL").filter(ke.showConnector).filter(n=>n.id!==de.CONNECTOR_ID.COINBASE_SDK);if(!(o!=null&&o.length))return this.style.cssText="display: none",null;const r=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${o.map(n=>c`
            <w3m-list-wallet
              imageSrc=${E(j.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              data-testid=${`wallet-selector-external-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${E(this.tabIdx)}
              ?disabled=${r}
              rdnsId=${n.id}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){A.push("ConnectingExternal",{connector:e})}};Ft([d()],et.prototype,"tabIdx",void 0);Ft([y()],et.prototype,"connectors",void 0);et=Ft([R("w3m-connect-external-widget")],et);var Vt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let tt=class extends T{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(i=>c`
            <w3m-list-wallet
              data-testid=${`wallet-selector-featured-${i.id}`}
              imageSrc=${E(j.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tabIdx=${E(this.tabIdx)}
              size="sm"
              ?disabled=${e}
              rdnsId=${i.id}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){L.selectWalletConnector(e)}};Vt([d()],tt.prototype,"tabIdx",void 0);Vt([d()],tt.prototype,"wallets",void 0);tt=Vt([R("w3m-connect-featured-widget")],tt);var wt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Me=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=x.state.connections,this.unsubscribe.push(x.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(ke.showConnector);return e.length===0?(this.style.cssText="display: none",null):c`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(i=>{const r=(this.connections.get(i.chain)??[]).some(n=>gn.isLowerCaseMatch(n.connectorId,i.id));return c`
            <w3m-list-wallet
              imageSrc=${E(j.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant=${r?"info":"success"}
              tagLabel=${r?"connected":"installed"}
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${E(this.tabIdx)}
              rdnsId=${i.id}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){L.setActiveConnector(e),A.push("ConnectingExternal",{connector:e})}};wt([d()],Me.prototype,"tabIdx",void 0);wt([d()],Me.prototype,"connectors",void 0);wt([y()],Me.prototype,"connections",void 0);Me=wt([R("w3m-connect-injected-widget")],Me);var Kt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let nt=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="MULTI_CHAIN"&&i.name!=="WalletConnect");return e!=null&&e.length?c`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(i=>c`
            <w3m-list-wallet
              imageSrc=${E(j.getConnectorImage(i))}
              .installed=${!0}
              name=${i.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${i.id}`}
              size="sm"
              @click=${()=>this.onConnector(i)}
              tabIdx=${E(this.tabIdx)}
              rdnsId=${i.id}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){L.setActiveConnector(e),A.push("ConnectingMultiChain")}};Kt([d()],nt.prototype,"tabIdx",void 0);Kt([y()],nt.prototype,"connectors",void 0);nt=Kt([R("w3m-connect-multi-chain-widget")],nt);var bt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ue=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.loading=!1,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e)),I.isTelegram()&&I.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const i=Ut.getRecentWallets().filter(r=>!Ne.isExcluded(r)).filter(r=>!this.hasWalletConnector(r)).filter(r=>this.isWalletCompatibleWithCurrentChain(r));if(!i.length)return this.style.cssText="display: none",null;const o=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(r=>c`
            <w3m-list-wallet
              imageSrc=${E(j.getWalletImage(r))}
              name=${r.name??"Unknown"}
              @click=${()=>this.onConnectWallet(r)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${E(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${o}
              rdnsId=${r.id}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||L.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(i=>i.id===e.id||i.name===e.name)}isWalletCompatibleWithCurrentChain(e){const i=ne.state.activeChain;return i&&e.chains?e.chains.some(o=>{const r=o.split(":")[0];return i===r}):!0}};bt([d()],Ue.prototype,"tabIdx",void 0);bt([y()],Ue.prototype,"connectors",void 0);bt([y()],Ue.prototype,"loading",void 0);Ue=bt([R("w3m-connect-recent-widget")],Ue);var yt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const rn=4;let Fe=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,I.isTelegram()&&I.isIos()&&(this.loading=!x.state.wcUri,this.unsubscribe.push(x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){var g,p,m,f,_,B;const{connectors:e}=L.state,{customWallets:i,featuredWalletIds:o}=O.state,r=e.find(S=>S.id==="walletConnect"),n=e.filter(S=>S.type==="INJECTED"||S.type==="ANNOUNCED"||S.type==="MULTI_CHAIN");if(!r&&!n.length&&!(i!=null&&i.length))return null;const s=!!((g=O.state.features)!=null&&g.email||(p=O.state.remoteFeatures)!=null&&p.email),a=Array.isArray((m=O.state.features)==null?void 0:m.socials)&&((f=O.state.features)==null?void 0:f.socials.length)>0||Array.isArray((_=O.state.remoteFeatures)==null?void 0:_.socials)&&((B=O.state.remoteFeatures)==null?void 0:B.socials.length)>0,l=n.filter(S=>S.name!=="Browser Wallet"),u=(o==null?void 0:o.length)||0,h=(i==null?void 0:i.length)||0,W=l.length||0,$=s?1:0,b=a?1:0,v=u+h+W+$+b;if(v>=rn)return this.style.cssText="display: none",null;const w=Ne.filterOutDuplicateWallets(this.wallets).slice(0,rn-v);if(!w.length)return this.style.cssText="display: none",null;const C=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <wui-flex flexDirection="column" gap="2">
        ${w.map(S=>c`
            <w3m-list-wallet
              imageSrc=${E(j.getWalletImage(S))}
              name=${(S==null?void 0:S.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(S)}
              size="sm"
              tabIdx=${E(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${C}
              rdnsId=${S.id}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const i=L.getConnector({id:e.id,rdns:e.rdns});i?A.push("ConnectingExternal",{connector:i}):A.push("ConnectingWalletConnect",{wallet:e})}};yt([d()],Fe.prototype,"tabIdx",void 0);yt([d()],Fe.prototype,"wallets",void 0);yt([y()],Fe.prototype,"loading",void 0);Fe=yt([R("w3m-connect-recommended-widget")],Fe);var $t=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Ve=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.connectorImages=nn.state.connectorImages,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e),nn.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(I.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(r=>r.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""],o=x.hasAnyConnection(de.CONNECTOR_ID.WALLET_CONNECT);return c`
      <w3m-list-wallet
        imageSrc=${E(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${E(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${o}
        rdnsId=${e.id}
      >
      </w3m-list-wallet>
    `}onConnector(e){L.setActiveConnector(e),A.push("ConnectingWalletConnect")}};$t([d()],Ve.prototype,"tabIdx",void 0);$t([y()],Ve.prototype,"connectors",void 0);$t([y()],Ve.prototype,"connectorImages",void 0);Ve=$t([R("w3m-connect-walletconnect-widget")],Ve);const Jn=k`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var He=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ge=class extends T{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=L.state.connectors,this.recommended=P.state.recommended,this.featured=P.state.featured,this.unsubscribe.push(L.subscribeKey("connectors",e=>this.connectors=e),P.subscribeKey("recommended",e=>this.recommended=e),P.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const e=ke.getConnectorsByType(this.connectors,this.recommended,this.featured),{custom:i,recent:o,announced:r,injected:n,multiChain:s,recommended:a,featured:l,external:u}=e;return ke.getConnectorTypeOrder({custom:i,recent:o,announced:r,injected:n,multiChain:s,recommended:a,featured:l,external:u}).map(W=>{switch(W){case"injected":return c`
            ${s.length?c`<w3m-connect-multi-chain-widget
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?c`<w3m-connect-announced-widget
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${n.length?c`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${E(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return c`<w3m-connect-walletconnect-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return c`<w3m-connect-recent-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return c`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return c`<w3m-connect-custom-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return c`<w3m-connect-external-widget
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return c`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${E(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${W}`),null}})}};ge.styles=Jn;He([d()],ge.prototype,"tabIdx",void 0);He([y()],ge.prototype,"connectors",void 0);He([y()],ge.prototype,"recommended",void 0);He([y()],ge.prototype,"featured",void 0);ge=He([R("w3m-connector-list")],ge);const Yn=k`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[20]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:t})=>t.theme.textPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:t})=>t.theme.textPrimary};
    }
  }
`;var qe=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const Qn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Xn={lg:"md",md:"sm",sm:"sm"};let me=class extends T{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return c`
      <button data-active=${this.active}>
        ${this.icon?c`<wui-icon size=${Xn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Qn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};me.styles=[U,se,Yn];qe([d()],me.prototype,"icon",void 0);qe([d()],me.prototype,"size",void 0);qe([d()],me.prototype,"label",void 0);qe([d({type:Boolean})],me.prototype,"active",void 0);me=qe([R("wui-tab-item")],me);const Zn=k`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Ge=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let we=class extends T{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,i)=>{var r;const o=i===this.activeTab;return c`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r=e.label)==null?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};we.styles=[U,se,Zn];Ge([d({type:Array})],we.prototype,"tabs",void 0);Ge([d()],we.prototype,"onTabChange",void 0);Ge([d()],we.prototype,"size",void 0);Ge([y()],we.prototype,"activeTab",void 0);we=Ge([R("wui-tabs")],we);var Ht=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let it=class extends T{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return c`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){var o;const i=this.platformTabs[e];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};Ht([d({type:Array})],it.prototype,"platforms",void 0);Ht([d()],it.prototype,"onSelectPlatfrom",void 0);it=Ht([R("w3m-connecting-header")],it);const ei=k`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:t})=>t[2]};
    transition:
      scale ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[2]};
    padding: 0 ${({spacing:t})=>t[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:t})=>t[3]};
    padding: 0 ${({spacing:t})=>t[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: 0 ${({spacing:t})=>t[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:t})=>t.theme.backgroundInvert};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:t})=>t.core.textError};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var $e=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const ti={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},ni={lg:"md",md:"md",sm:"sm"};let oe=class extends T{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const e=this.textVariant??ti[this.size];return c`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const e=ni[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return c`<wui-loading-spinner color=${i} size=${e}></wui-loading-spinner>`}return null}};oe.styles=[U,se,ei];$e([d()],oe.prototype,"size",void 0);$e([d({type:Boolean})],oe.prototype,"disabled",void 0);$e([d({type:Boolean})],oe.prototype,"fullWidth",void 0);$e([d({type:Boolean})],oe.prototype,"loading",void 0);$e([d()],oe.prototype,"variant",void 0);$e([d()],oe.prototype,"textVariant",void 0);oe=$e([R("wui-button")],oe);const ii=k`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${t=>t.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var vn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ot=class extends T{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,o=36-e,r=116+o,n=245+o,s=360+o*1.75;return c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};ot.styles=[U,ii];vn([d({type:Number})],ot.prototype,"radius",void 0);ot=vn([R("wui-loading-thumbnail")],ot);const oi=k`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding-left: ${({spacing:t})=>t[3]};
    padding-right: ${({spacing:t})=>t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[6]};
  }

  wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var vt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let xe=class extends T{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};xe.styles=[U,se,oi];vt([d({type:Boolean})],xe.prototype,"disabled",void 0);vt([d()],xe.prototype,"label",void 0);vt([d()],xe.prototype,"buttonLabel",void 0);xe=vt([R("wui-cta-button")],xe);const ri=k`
  :host {
    display: block;
    padding: 0 ${({spacing:t})=>t[5]} ${({spacing:t})=>t[5]};
  }
`;var Cn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let rt=class extends T{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,s=I.isMobile(),a=I.isIos(),l=I.isAndroid(),u=[i,o,n,r].filter(Boolean).length>1,h=ie.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${()=>A.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&n?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&l?c`
        <wui-cta-button
          label=${`Don't have ${h}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&I.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&I.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&I.openHref(this.wallet.homepage,"_blank")}};rt.styles=[ri];Cn([d({type:Object})],rt.prototype,"wallet",void 0);rt=Cn([R("w3m-mobile-download-links")],rt);const si=k`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:t})=>t.lg};
    transition-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var J=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};class N extends T{constructor(){var e,i,o,r,n;super(),this.wallet=(e=A.state.data)==null?void 0:e.wallet,this.connector=(i=A.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=j.getWalletImage(this.wallet)??j.getConnectorImage(this.connector),this.name=((o=this.wallet)==null?void 0:o.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=x.state.wcUri,this.error=x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(x.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),x.subscribeKey("wcError",s=>this.error=s)),(I.isTelegram()||I.isSafari())&&I.isIos()&&x.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),x.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),c`
      <wui-flex
        data-error=${E(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${E(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?c`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;x.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const e=kt.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(I.copyToClopboard(this.uri),De.showSuccess("Link copied"))}catch{De.showError("Failed to copy")}}}N.styles=si;J([y()],N.prototype,"isRetrying",void 0);J([y()],N.prototype,"uri",void 0);J([y()],N.prototype,"error",void 0);J([y()],N.prototype,"ready",void 0);J([y()],N.prototype,"showRetry",void 0);J([y()],N.prototype,"label",void 0);J([y()],N.prototype,"secondaryBtnLabel",void 0);J([y()],N.prototype,"secondaryLabel",void 0);J([y()],N.prototype,"isLoading",void 0);J([d({type:Boolean})],N.prototype,"isMobile",void 0);J([d()],N.prototype,"onRetry",void 0);var ai=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let sn=class extends N{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:A.state.view}})}async onConnectProxy(){var e,i;try{this.error=!1;const{connectors:o}=L.state,r=o.find(n=>{var s,a,l;return n.type==="ANNOUNCED"&&((s=n.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)||n.type==="INJECTED"||n.name===((l=this.wallet)==null?void 0:l.name)});if(r)await x.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");mn.close(),D.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown",view:A.state.view,walletRank:(i=this.wallet)==null?void 0:i.order}})}catch(o){o instanceof wn&&o.originalName===bn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):D.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),this.error=!0}}};sn=ai([R("w3m-connecting-wc-browser")],sn);var li=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let an=class extends N{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:A.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:r,href:n}=I.formatNativeUrl(i,this.uri);x.setWcLinking({name:o,href:n}),x.setRecentWallet(this.wallet),I.openHref(r,"_blank")}catch{this.error=!0}}};an=li([R("w3m-connecting-wc-desktop")],an);var Ae=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let be=class extends N{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=O.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var i;if((i=this.wallet)!=null&&i.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:o,link_mode:r,name:n}=this.wallet,{redirect:s,redirectUniversalLink:a,href:l}=I.formatNativeUrl(o,this.uri,r);this.redirectDeeplink=s,this.redirectUniversalLink=a,this.target=I.isIframe()?"_top":"_self",x.setWcLinking({name:n,href:l}),x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?I.openHref(this.redirectUniversalLink,this.target):I.openHref(this.redirectDeeplink,this.target)}catch(o){D.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:o instanceof Error?o.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=yn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.onHandleURI()})),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:A.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onTryAgain(){var e;x.setWcError(!1),(e=this.onConnect)==null||e.call(this)}};Ae([y()],be.prototype,"redirectDeeplink",void 0);Ae([y()],be.prototype,"redirectUniversalLink",void 0);Ae([y()],be.prototype,"target",void 0);Ae([y()],be.prototype,"preferUniversalLinks",void 0);Ae([y()],be.prototype,"isLoading",void 0);be=Ae([R("w3m-connecting-wc-mobile")],be);var Je={},ci=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},xn={},F={};let qt;const di=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];F.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};F.getSymbolTotalCodewords=function(e){return di[e]};F.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};F.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');qt=e};F.isKanjiModeEnabled=function(){return typeof qt<"u"};F.toSJIS=function(e){return qt(e)};var Ct={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},t.from=function(o,r){if(t.isValid(o))return o;try{return e(o)}catch{return r}}})(Ct);function En(){this.buffer=[],this.length=0}En.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ui=En;function Ye(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Ye.prototype.set=function(t,e,i,o){const r=t*this.size+e;this.data[r]=i,o&&(this.reservedBit[r]=!0)};Ye.prototype.get=function(t,e){return this.data[t*this.size+e]};Ye.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};Ye.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var hi=Ye,_n={};(function(t){const e=F.getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=e(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,a=[n-7];for(let l=1;l<r-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},t.getPositions=function(o){const r=[],n=t.getRowColCoords(o),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||r.push([n[a],n[l]]);return r}})(_n);var Rn={};const fi=F.getSymbolSize,ln=7;Rn.getPositions=function(e){const i=fi(e);return[[0,0],[i-ln,0],[0,i-ln]]};var In={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const n=r.size;let s=0,a=0,l=0,u=null,h=null;for(let W=0;W<n;W++){a=l=0,u=h=null;for(let $=0;$<n;$++){let b=r.get(W,$);b===u?a++:(a>=5&&(s+=e.N1+(a-5)),u=b,a=1),b=r.get($,W),b===h?l++:(l>=5&&(s+=e.N1+(l-5)),h=b,l=1)}a>=5&&(s+=e.N1+(a-5)),l>=5&&(s+=e.N1+(l-5))}return s},t.getPenaltyN2=function(r){const n=r.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const u=r.get(a,l)+r.get(a,l+1)+r.get(a+1,l)+r.get(a+1,l+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(r){const n=r.size;let s=0,a=0,l=0;for(let u=0;u<n;u++){a=l=0;for(let h=0;h<n;h++)a=a<<1&2047|r.get(u,h),h>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|r.get(h,u),h>=10&&(l===1488||l===93)&&s++}return s*e.N3},t.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let l=0;l<s;l++)n+=r.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*e.N4};function i(o,r,n){switch(o){case t.Patterns.PATTERN000:return(r+n)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(r+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return r*n%2+r*n%3===0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}t.applyMask=function(r,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(r,l,a))},t.getBestMask=function(r,n){const s=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){n(u),t.applyMask(u,r);const h=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(u,r),h<l&&(l=h,a=u)}return a}})(In);var xt={};const ce=Ct,Xe=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ze=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];xt.getBlocksCount=function(e,i){switch(i){case ce.L:return Xe[(e-1)*4+0];case ce.M:return Xe[(e-1)*4+1];case ce.Q:return Xe[(e-1)*4+2];case ce.H:return Xe[(e-1)*4+3];default:return}};xt.getTotalCodewordsCount=function(e,i){switch(i){case ce.L:return Ze[(e-1)*4+0];case ce.M:return Ze[(e-1)*4+1];case ce.Q:return Ze[(e-1)*4+2];case ce.H:return Ze[(e-1)*4+3];default:return}};var Tn={},Et={};const Be=new Uint8Array(512),st=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)Be[i]=e,st[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)Be[i]=Be[i-255]})();Et.log=function(e){if(e<1)throw new Error("log("+e+")");return st[e]};Et.exp=function(e){return Be[e]};Et.mul=function(e,i){return e===0||i===0?0:Be[st[e]+st[i]]};(function(t){const e=Et;t.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let a=0;a<r.length;a++)n[s+a]^=e.mul(o[s],r[a]);return n},t.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let l=0;l<r.length;l++)n[l]^=e.mul(r[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},t.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=t.mul(r,new Uint8Array([1,e.exp(n)]));return r}})(Tn);const Wn=Tn;function Gt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Gt.prototype.initialize=function(e){this.degree=e,this.genPoly=Wn.generateECPolynomial(this.degree)};Gt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const o=Wn.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var pi=Gt,Sn={},he={},Jt={};Jt.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var X={};const An="[0-9]+",gi="[A-Z $%*+\\-./:]+";let Ke="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ke=Ke.replace(/u/g,"\\u");const mi="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ke+`)(?:.|[\r
]))+`;X.KANJI=new RegExp(Ke,"g");X.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");X.BYTE=new RegExp(mi,"g");X.NUMERIC=new RegExp(An,"g");X.ALPHANUMERIC=new RegExp(gi,"g");const wi=new RegExp("^"+Ke+"$"),bi=new RegExp("^"+An+"$"),yi=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");X.testKanji=function(e){return wi.test(e)};X.testNumeric=function(e){return bi.test(e)};X.testAlphanumeric=function(e){return yi.test(e)};(function(t){const e=Jt,i=X;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return i.testNumeric(n)?t.NUMERIC:i.testAlphanumeric(n)?t.ALPHANUMERIC:i.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(n,s){if(t.isValid(n))return n;try{return o(n)}catch{return s}}})(he);(function(t){const e=F,i=xt,o=Ct,r=he,n=Jt,s=7973,a=e.getBCHDigit(s);function l($,b,v){for(let w=1;w<=40;w++)if(b<=t.getCapacity(w,v,$))return w}function u($,b){return r.getCharCountIndicator($,b)+4}function h($,b){let v=0;return $.forEach(function(w){const C=u(w.mode,b);v+=C+w.getBitsLength()}),v}function W($,b){for(let v=1;v<=40;v++)if(h($,v)<=t.getCapacity(v,b,r.MIXED))return v}t.from=function(b,v){return n.isValid(b)?parseInt(b,10):v},t.getCapacity=function(b,v,w){if(!n.isValid(b))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=r.BYTE);const C=e.getSymbolTotalCodewords(b),g=i.getTotalCodewordsCount(b,v),p=(C-g)*8;if(w===r.MIXED)return p;const m=p-u(w,b);switch(w){case r.NUMERIC:return Math.floor(m/10*3);case r.ALPHANUMERIC:return Math.floor(m/11*2);case r.KANJI:return Math.floor(m/13);case r.BYTE:default:return Math.floor(m/8)}},t.getBestVersionForData=function(b,v){let w;const C=o.from(v,o.M);if(Array.isArray(b)){if(b.length>1)return W(b,C);if(b.length===0)return 1;w=b[0]}else w=b;return l(w.mode,w.getLength(),C)},t.getEncodedBits=function(b){if(!n.isValid(b)||b<7)throw new Error("Invalid QR Code version");let v=b<<12;for(;e.getBCHDigit(v)-a>=0;)v^=s<<e.getBCHDigit(v)-a;return b<<12|v}})(Sn);var Pn={};const Nt=F,Ln=1335,$i=21522,cn=Nt.getBCHDigit(Ln);Pn.getEncodedBits=function(e,i){const o=e.bit<<3|i;let r=o<<10;for(;Nt.getBCHDigit(r)-cn>=0;)r^=Ln<<Nt.getBCHDigit(r)-cn;return(o<<10|r)^$i};var Bn={};const vi=he;function Ee(t){this.mode=vi.NUMERIC,this.data=t.toString()}Ee.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Ee.prototype.getLength=function(){return this.data.length};Ee.prototype.getBitsLength=function(){return Ee.getBitsLength(this.data.length)};Ee.prototype.write=function(e){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),e.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),e.put(r,n*3+1))};var Ci=Ee;const xi=he,Wt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _e(t){this.mode=xi.ALPHANUMERIC,this.data=t}_e.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};_e.prototype.getLength=function(){return this.data.length};_e.prototype.getBitsLength=function(){return _e.getBitsLength(this.data.length)};_e.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let o=Wt.indexOf(this.data[i])*45;o+=Wt.indexOf(this.data[i+1]),e.put(o,11)}this.data.length%2&&e.put(Wt.indexOf(this.data[i]),6)};var Ei=_e,_i=function(e){for(var i=[],o=e.length,r=0;r<o;r++){var n=e.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=e.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Ri=_i,Ii=he;function Re(t){this.mode=Ii.BYTE,typeof t=="string"&&(t=Ri(t)),this.data=new Uint8Array(t)}Re.getBitsLength=function(e){return e*8};Re.prototype.getLength=function(){return this.data.length};Re.prototype.getBitsLength=function(){return Re.getBitsLength(this.data.length)};Re.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var Ti=Re;const Wi=he,Si=F;function Ie(t){this.mode=Wi.KANJI,this.data=t}Ie.getBitsLength=function(e){return e*13};Ie.prototype.getLength=function(){return this.data.length};Ie.prototype.getBitsLength=function(){return Ie.getBitsLength(this.data.length)};Ie.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=Si.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var Ai=Ie,On={exports:{}};(function(t){var e={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var a=e.PriorityQueue.make();a.push(o,0);for(var l,u,h,W,$,b,v,w,C;!a.empty();){l=a.pop(),u=l.value,W=l.cost,$=i[u]||{};for(h in $)$.hasOwnProperty(h)&&(b=$[h],v=W+b,w=s[h],C=typeof s[h]>"u",(C||w>v)&&(s[h]=v,a.push(h,v),n[h]=u))}if(typeof r<"u"&&typeof s[r]>"u"){var g=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=e.single_source_shortest_paths(i,o,r);return e.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=e.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(On);var Pi=On.exports;(function(t){const e=he,i=Ci,o=Ei,r=Ti,n=Ai,s=X,a=F,l=Pi;function u(g){return unescape(encodeURIComponent(g)).length}function h(g,p,m){const f=[];let _;for(;(_=g.exec(m))!==null;)f.push({data:_[0],index:_.index,mode:p,length:_[0].length});return f}function W(g){const p=h(s.NUMERIC,e.NUMERIC,g),m=h(s.ALPHANUMERIC,e.ALPHANUMERIC,g);let f,_;return a.isKanjiModeEnabled()?(f=h(s.BYTE,e.BYTE,g),_=h(s.KANJI,e.KANJI,g)):(f=h(s.BYTE_KANJI,e.BYTE,g),_=[]),p.concat(m,f,_).sort(function(S,q){return S.index-q.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function $(g,p){switch(p){case e.NUMERIC:return i.getBitsLength(g);case e.ALPHANUMERIC:return o.getBitsLength(g);case e.KANJI:return n.getBitsLength(g);case e.BYTE:return r.getBitsLength(g)}}function b(g){return g.reduce(function(p,m){const f=p.length-1>=0?p[p.length-1]:null;return f&&f.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}function v(g){const p=[];for(let m=0;m<g.length;m++){const f=g[m];switch(f.mode){case e.NUMERIC:p.push([f,{data:f.data,mode:e.ALPHANUMERIC,length:f.length},{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.ALPHANUMERIC:p.push([f,{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.KANJI:p.push([f,{data:f.data,mode:e.BYTE,length:u(f.data)}]);break;case e.BYTE:p.push([{data:f.data,mode:e.BYTE,length:u(f.data)}])}}return p}function w(g,p){const m={},f={start:{}};let _=["start"];for(let B=0;B<g.length;B++){const S=g[B],q=[];for(let le=0;le<S.length;le++){const Y=S[le],Pe=""+B+le;q.push(Pe),m[Pe]={node:Y,lastCount:0},f[Pe]={};for(let Tt=0;Tt<_.length;Tt++){const ee=_[Tt];m[ee]&&m[ee].node.mode===Y.mode?(f[ee][Pe]=$(m[ee].lastCount+Y.length,Y.mode)-$(m[ee].lastCount,Y.mode),m[ee].lastCount+=Y.length):(m[ee]&&(m[ee].lastCount=Y.length),f[ee][Pe]=$(Y.length,Y.mode)+4+e.getCharCountIndicator(Y.mode,p))}}_=q}for(let B=0;B<_.length;B++)f[_[B]].end=0;return{map:f,table:m}}function C(g,p){let m;const f=e.getBestModeForData(g);if(m=e.from(p,f),m!==e.BYTE&&m.bit<f.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(m)+`.
 Suggested mode is: `+e.toString(f));switch(m===e.KANJI&&!a.isKanjiModeEnabled()&&(m=e.BYTE),m){case e.NUMERIC:return new i(g);case e.ALPHANUMERIC:return new o(g);case e.KANJI:return new n(g);case e.BYTE:return new r(g)}}t.fromArray=function(p){return p.reduce(function(m,f){return typeof f=="string"?m.push(C(f,null)):f.data&&m.push(C(f.data,f.mode)),m},[])},t.fromString=function(p,m){const f=W(p,a.isKanjiModeEnabled()),_=v(f),B=w(_,m),S=l.find_path(B.map,"start","end"),q=[];for(let le=1;le<S.length-1;le++)q.push(B.table[S[le]].node);return t.fromArray(b(q))},t.rawSplit=function(p){return t.fromArray(W(p,a.isKanjiModeEnabled()))}})(Bn);const _t=F,St=Ct,Li=ui,Bi=hi,Oi=_n,ki=Rn,Dt=In,jt=xt,Ni=pi,at=Sn,Di=Pn,ji=he,At=Bn;function zi(t,e){const i=t.size,o=ki.getPositions(e);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(n+a,s+l,!0,!0):t.set(n+a,s+l,!1,!0))}}function Mi(t){const e=t.size;for(let i=8;i<e-8;i++){const o=i%2===0;t.set(i,6,o,!0),t.set(6,i,o,!0)}}function Ui(t,e){const i=Oi.getPositions(e);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(r+s,n+a,!0,!0):t.set(r+s,n+a,!1,!0)}}function Fi(t,e){const i=t.size,o=at.getEncodedBits(e);let r,n,s;for(let a=0;a<18;a++)r=Math.floor(a/3),n=a%3+i-8-3,s=(o>>a&1)===1,t.set(r,n,s,!0),t.set(n,r,s,!0)}function Pt(t,e,i){const o=t.size,r=Di.getEncodedBits(e,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?t.set(n,8,s,!0):n<8?t.set(n+1,8,s,!0):t.set(o-15+n,8,s,!0),n<8?t.set(8,o-n-1,s,!0):n<9?t.set(8,15-n-1+1,s,!0):t.set(8,15-n-1,s,!0);t.set(o-8,8,1,!0)}function Vi(t,e){const i=t.size;let o=-1,r=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(r,a-l)){let u=!1;s<e.length&&(u=(e[s]>>>n&1)===1),t.set(r,a-l,u),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Ki(t,e,i){const o=new Li;i.forEach(function(l){o.put(l.mode.bit,4),o.put(l.getLength(),ji.getCharCountIndicator(l.mode,t)),l.write(o)});const r=_t.getSymbolTotalCodewords(t),n=jt.getTotalCodewordsCount(t,e),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let l=0;l<a;l++)o.put(l%2?17:236,8);return Hi(o,t,e)}function Hi(t,e,i){const o=_t.getSymbolTotalCodewords(e),r=jt.getTotalCodewordsCount(e,i),n=o-r,s=jt.getBlocksCount(e,i),a=o%s,l=s-a,u=Math.floor(o/s),h=Math.floor(n/s),W=h+1,$=u-h,b=new Ni($);let v=0;const w=new Array(s),C=new Array(s);let g=0;const p=new Uint8Array(t.buffer);for(let S=0;S<s;S++){const q=S<l?h:W;w[S]=p.slice(v,v+q),C[S]=b.encode(w[S]),v+=q,g=Math.max(g,q)}const m=new Uint8Array(o);let f=0,_,B;for(_=0;_<g;_++)for(B=0;B<s;B++)_<w[B].length&&(m[f++]=w[B][_]);for(_=0;_<$;_++)for(B=0;B<s;B++)m[f++]=C[B][_];return m}function qi(t,e,i,o){let r;if(Array.isArray(t))r=At.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const h=At.rawSplit(t);u=at.getBestVersionForData(h,i)}r=At.fromString(t,u||40)}else throw new Error("Invalid data");const n=at.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Ki(e,i,r),a=_t.getSymbolSize(e),l=new Bi(a);return zi(l,e),Mi(l),Ui(l,e),Pt(l,i,0),e>=7&&Fi(l,e),Vi(l,s),isNaN(o)&&(o=Dt.getBestMask(l,Pt.bind(null,l,i))),Dt.applyMask(o,l),Pt(l,i,o),{modules:l,version:e,errorCorrectionLevel:i,maskPattern:o,segments:r}}xn.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let o=St.M,r,n;return typeof i<"u"&&(o=St.from(i.errorCorrectionLevel,St.M),r=at.from(i.version),n=Dt.from(i.maskPattern),i.toSJISFunc&&_t.setToSJISFunction(i.toSJISFunc)),qi(e,r,o,n)};var kn={},Yt={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:e(o.color.dark||"#000000ff"),light:e(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},t.getImageWidth=function(o,r){const n=t.getScale(o,r);return Math.floor((o+r.margin*2)*n)},t.qrToImageData=function(o,r,n){const s=r.modules.size,a=r.modules.data,l=t.getScale(s,n),u=Math.floor((s+n.margin*2)*l),h=n.margin*l,W=[n.color.light,n.color.dark];for(let $=0;$<u;$++)for(let b=0;b<u;b++){let v=($*u+b)*4,w=n.color.light;if($>=h&&b>=h&&$<u-h&&b<u-h){const C=Math.floor(($-h)/l),g=Math.floor((b-h)/l);w=W[a[C*s+g]?1:0]}o[v++]=w.r,o[v++]=w.g,o[v++]=w.b,o[v]=w.a}}})(Yt);(function(t){const e=Yt;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=o()),l=e.getOptions(l);const h=e.getImageWidth(n.modules.size,l),W=u.getContext("2d"),$=W.createImageData(h,h);return e.qrToImageData($.data,n,l),i(W,u,h),W.putImageData($,0,0),u},t.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=t.render(n,s,l),h=l.type||"image/png",W=l.rendererOpts||{};return u.toDataURL(h,W.quality)}})(kn);var Nn={};const Gi=Yt;function dn(t,e){const i=t.a/255,o=e+'="'+t.hex+'"';return i<1?o+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function Lt(t,e,i){let o=t+e;return typeof i<"u"&&(o+=" "+i),o}function Ji(t,e,i){let o="",r=0,n=!1,s=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),u=Math.floor(a/e);!l&&!n&&(n=!0),t[a]?(s++,a>0&&l>0&&t[a-1]||(o+=n?Lt("M",l+i,.5+u+i):Lt("m",r,0),r=0,n=!1),l+1<e&&t[a+1]||(o+=Lt("h",s),s=0)):r++}return o}Nn.render=function(e,i,o){const r=Gi.getOptions(i),n=e.modules.size,s=e.modules.data,a=n+r.margin*2,l=r.color.light.a?"<path "+dn(r.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+dn(r.color.dark,"stroke")+' d="'+Ji(s,n,r.margin)+'"/>',h='viewBox="0 0 '+a+" "+a+'"',$='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+h+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof o=="function"&&o(null,$),$};const Yi=ci,zt=xn,Dn=kn,Qi=Nn;function Qt(t,e,i,o,r){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Yi())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=e,e=o=void 0):s===3&&(e.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=e,e=o=void 0):s===2&&!e.getContext&&(o=i,i=e,e=void 0),new Promise(function(l,u){try{const h=zt.create(i,o);l(t(h,e,o))}catch(h){u(h)}})}try{const l=zt.create(i,o);r(null,t(l,e,o))}catch(l){r(l)}}Je.create=zt.create;Je.toCanvas=Qt.bind(null,Dn.render);Je.toDataURL=Qt.bind(null,Dn.renderToDataURL);Je.toString=Qt.bind(null,function(t,e,i){return Qi.render(t,i)});const Xi=.1,un=2.5,te=7;function Bt(t,e,i){return t===e?!1:(t-e<0?e-t:t-e)<=i+Xi}function Zi(t,e){const i=Array.prototype.slice.call(Je.create(t,{errorCorrectionLevel:e}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,s)=>(s%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const eo={generate({uri:t,size:e,logoSize:i,padding:o=8,dotColor:r="var(--apkt-tokens-theme-textInvert)"}){const s=[],a=Zi(t,"Q"),l=(e-2*o)/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:w,y:C})=>{const g=(a.length-te)*l*w+o,p=(a.length-te)*l*C+o,m=.45;for(let f=0;f<u.length;f+=1){const _=l*(te-f*2);s.push(Le`
            <rect
              fill=${f===2?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${f===0?_-10:_}
              rx= ${f===0?(_-10)*m:_*m}
              ry= ${f===0?(_-10)*m:_*m}
              stroke=${r}
              stroke-width=${f===0?10:0}
              height=${f===0?_-10:_}
              x= ${f===0?p+l*f+10/2:p+l*f}
              y= ${f===0?g+l*f+10/2:g+l*f}
            />
          `)}});const h=Math.floor((i+25)/l),W=a.length/2-h/2,$=a.length/2+h/2-1,b=[];a.forEach((w,C)=>{w.forEach((g,p)=>{if(a[C][p]&&!(C<te&&p<te||C>a.length-(te+1)&&p<te||C<te&&p>a.length-(te+1))&&!(C>W&&C<$&&p>W&&p<$)){const m=C*l+l/2+o,f=p*l+l/2+o;b.push([m,f])}})});const v={};return b.forEach(([w,C])=>{var g;v[w]?(g=v[w])==null||g.push(C):v[w]=[C]}),Object.entries(v).map(([w,C])=>{const g=C.filter(p=>C.every(m=>!Bt(p,m,l)));return[Number(w),g]}).forEach(([w,C])=>{C.forEach(g=>{s.push(Le`<circle cx=${w} cy=${g} fill=${r} r=${l/un} />`)})}),Object.entries(v).filter(([w,C])=>C.length>1).map(([w,C])=>{const g=C.filter(p=>C.some(m=>Bt(p,m,l)));return[Number(w),g]}).map(([w,C])=>{C.sort((p,m)=>p<m?-1:1);const g=[];for(const p of C){const m=g.find(f=>f.some(_=>Bt(p,_,l)));m?m.push(p):g.push([p])}return[w,g.map(p=>[p[0],p[p.length-1]])]}).forEach(([w,C])=>{C.forEach(([g,p])=>{s.push(Le`
              <line
                x1=${w}
                x2=${w}
                y1=${g}
                y2=${p}
                stroke=${r}
                stroke-width=${l/(un/2)}
                stroke-linecap="round"
              />
            `)})}),s}},to=k`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:t})=>t.theme.backgroundInvert};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:t})=>t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
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
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var fe=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Q=class extends T{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Le`
      <svg height=${this.size} width=${this.size}>
        ${eo.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Q.styles=[U,to];fe([d()],Q.prototype,"uri",void 0);fe([d({type:Number})],Q.prototype,"size",void 0);fe([d()],Q.prototype,"theme",void 0);fe([d()],Q.prototype,"imageSrc",void 0);fe([d()],Q.prototype,"alt",void 0);fe([d({type:Boolean})],Q.prototype,"arenaClear",void 0);fe([d({type:Boolean})],Q.prototype,"farcaster",void 0);Q=fe([R("wui-qr-code")],Q);const no=k`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:t})=>t.theme.foregroundSecondary} 0%,
      ${({tokens:t})=>t.theme.foregroundTertiary} 50%,
      ${({tokens:t})=>t.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Qe=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ye=class extends T{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",c`<slot></slot>`}};ye.styles=[no];Qe([d()],ye.prototype,"width",void 0);Qe([d()],ye.prototype,"height",void 0);Qe([d()],ye.prototype,"variant",void 0);Qe([d({type:Boolean})],ye.prototype,"rounded",void 0);ye=Qe([R("wui-shimmer")],ye);const io=k`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var jn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let lt=class extends N{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){var e,i,o;this.basic||D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:A.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;return x.setWcLinking(void 0),x.setRecentWallet(this.wallet),c` <wui-qr-code
      size=${e}
      theme=${kt.state.themeMode}
      uri=${this.uri}
      imageSrc=${E(j.getWalletImage(this.wallet))}
      color=${E(kt.state.themeVariables["--w3m-qr-color"])}
      alt=${E(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};lt.styles=io;jn([d({type:Boolean})],lt.prototype,"basic",void 0);lt=jn([R("w3m-connecting-wc-qrcode")],lt);var oo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let hn=class extends T{constructor(){var e,i,o;if(super(),this.wallet=(e=A.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:A.state.view}})}render(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${E(j.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};hn=oo([R("w3m-connecting-wc-unsupported")],hn);var zn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Mt=class extends N{constructor(){var e,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=yn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),D.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:A.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:r,href:n}=I.formatUniversalUrl(i,this.uri);x.setWcLinking({name:o,href:n}),x.setRecentWallet(this.wallet),I.openHref(r,"_blank")}catch{this.error=!0}}};zn([y()],Mt.prototype,"isLoading",void 0);Mt=zn([R("w3m-connecting-wc-web")],Mt);var ve=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ue=class extends T{constructor(){var e;super(),this.wallet=(e=A.state.data)==null?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!O.state.siwx,this.remoteFeatures=O.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(O.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return!((e=this.remoteFeatures)!=null&&e.reownBranding)||!this.displayBranding?null:c`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){var i,o;if(!(this.platform==="browser"||O.state.manualWCControl&&!e))try{const{wcPairingExpiry:r,status:n}=x.state;if(e||O.state.enableEmbedded||I.isPairingExpired(r)||n==="connecting"){const s=x.getConnections(ne.state.activeChain),a=(i=this.remoteFeatures)==null?void 0:i.multiWallet,l=s.length>0;await x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(l&&a?(A.replace("ProfileWallets"),De.showSuccess("New Wallet Added")):mn.close())}}catch(r){if(r instanceof Error&&r.message.includes("An error occurred when attempting to switch chain")&&!O.state.enableNetworkSwitch&&ne.state.activeChain){ne.setActiveCaipNetwork(Kn.getUnsupportedNetwork(`${ne.state.activeChain}:${(o=ne.state.activeCaipNetwork)==null?void 0:o.id}`)),ne.showUnsupportedChainUI();return}r instanceof wn&&r.originalName===bn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?D.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:r.message}}):D.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),x.setWcError(!0),De.showError(r.message??"Connection error"),x.resetWcConnection(),A.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:o,injected:r,rdns:n}=this.wallet,s=r==null?void 0:r.map(({injected_id:v})=>v).filter(Boolean),a=[...n?[n]:s??[]],l=O.state.isUniversalProvider?!1:a.length,u=e,h=o,W=x.checkInstalled(a),$=l&&W,b=i&&!I.isMobile();$&&!ne.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(I.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),b&&this.platforms.push("desktop"),!$&&l&&!ne.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return c`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ve([y()],ue.prototype,"platform",void 0);ve([y()],ue.prototype,"platforms",void 0);ve([y()],ue.prototype,"isSiwxEnabled",void 0);ve([y()],ue.prototype,"remoteFeatures",void 0);ve([d({type:Boolean})],ue.prototype,"displayBranding",void 0);ve([d({type:Boolean})],ue.prototype,"basic",void 0);ue=ve([R("w3m-connecting-wc-view")],ue);var Xt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ct=class extends T{constructor(){super(),this.unsubscribe=[],this.isMobile=I.isMobile(),this.remoteFeatures=O.state.remoteFeatures,this.unsubscribe.push(O.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:i}=P.state,{customWallets:o}=O.state,r=Ut.getRecentWallets(),n=e.length||i.length||(o==null?void 0:o.length)||r.length;return c`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return c`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.reownBranding?c` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Xt([y()],ct.prototype,"isMobile",void 0);Xt([y()],ct.prototype,"remoteFeatures",void 0);ct=Xt([R("w3m-connecting-wc-basic-view")],ct);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=(t,e)=>{var o;const i=t._$AN;if(i===void 0)return!1;for(const r of i)(o=r._$AO)==null||o.call(r,e,!1),Oe(r,e);return!0},dt=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},Mn=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),lo(e)}};function so(t){this._$AN!==void 0?(dt(this),this._$AM=t,Mn(this)):this._$AM=t}function ao(t,e=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(o))for(let n=i;n<o.length;n++)Oe(o[n],!1),dt(o[n]);else o!=null&&(Oe(o,!1),dt(o));else Oe(this,t)}const lo=t=>{t.type==qn.CHILD&&(t._$AP??(t._$AP=ao),t._$AQ??(t._$AQ=so))};class co extends Hn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,o){super._$AT(e,i,o),Mn(this),this.isConnected=e._$AU}_$AO(e,i=!0){var o,r;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Oe(this,e),dt(this))}setValue(e){if(ro(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=()=>new uo;class uo{}const Ot=new WeakMap,en=Gn(class extends co{render(t){return on}update(t,[e]){var o;const i=e!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=(o=t.options)==null?void 0:o.host,this.rt(this.ct=t.element)),on}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let i=Ot.get(e);i===void 0&&(i=new WeakMap,Ot.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Ot.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ho=k`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
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
    background-color: ${({colors:t})=>t.neutrals300};
    border-radius: ${({borderRadius:t})=>t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:t})=>t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    background-color: ${({tokens:t})=>t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:t})=>t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:t})=>t.theme.textTertiary};
  }
`;var Rt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let Te=class extends T{constructor(){super(...arguments),this.inputElementRef=Zt(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return c`
      <label data-size=${this.size}>
        <input
          ${en(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};Te.styles=[U,se,ho];Rt([d({type:Boolean})],Te.prototype,"checked",void 0);Rt([d({type:Boolean})],Te.prototype,"disabled",void 0);Rt([d()],Te.prototype,"size",void 0);Te=Rt([R("wui-toggle")],Te);const fo=k`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Un=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ut=class extends T{constructor(){super(...arguments),this.checked=!1}render(){return c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};ut.styles=[U,se,fo];Un([d({type:Boolean})],ut.prototype,"checked",void 0);ut=Un([R("wui-certified-switch")],ut);const po=k`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.textPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:t})=>t[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
    caret-color: ${({tokens:t})=>t.core.textAccentPrimary};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[3]} ${({spacing:t})=>t[10]};
    font-size: ${({textSize:t})=>t.large};
    line-height: ${({typography:t})=>t["lg-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:t})=>t[4]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[4]} ${({spacing:t})=>t[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:t})=>t.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:t})=>t[4]};
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:t})=>t[2]};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:t})=>t[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var K=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let z=class extends T{constructor(){super(...arguments),this.inputElementRef=Zt(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${en(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${E(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var e;return this.onSubmit?c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(e=this.onSubmit)==null?void 0:e.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?c`<wui-icon name="spinner" size="md"></wui-icon>`:c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};z.styles=[U,se,po];K([d()],z.prototype,"icon",void 0);K([d({type:Boolean})],z.prototype,"disabled",void 0);K([d({type:Boolean})],z.prototype,"loading",void 0);K([d()],z.prototype,"placeholder",void 0);K([d()],z.prototype,"type",void 0);K([d()],z.prototype,"value",void 0);K([d()],z.prototype,"errorText",void 0);K([d()],z.prototype,"warningText",void 0);K([d()],z.prototype,"onSubmit",void 0);K([d()],z.prototype,"size",void 0);K([d({attribute:!1})],z.prototype,"onKeyDown",void 0);z=K([R("wui-input-text")],z);const go=k`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:t})=>t[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }
`;var Fn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends T{constructor(){super(...arguments),this.inputComponentRef=Zt(),this.inputValue=""}render(){return c`
      <wui-input-text
        ${en(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,i=e==null?void 0:e.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};ht.styles=[U,go];Fn([d()],ht.prototype,"inputValue",void 0);ht=Fn([R("wui-search-bar")],ht);const mo=Le`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,wo=k`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:t})=>t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Vn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ft=class extends T{constructor(){super(...arguments),this.type="wallet"}render(){return c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${mo}`:c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ft.styles=[U,se,wo];Vn([d()],ft.prototype,"type",void 0);ft=Vn([R("wui-card-select-loader")],ft);const bo=$n`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var H=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let M=class extends T{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ie.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ie.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ie.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ie.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ie.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ie.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ie.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ie.getSpacingStyles(this.margin,3)};
    `,c`<slot></slot>`}};M.styles=[U,bo];H([d()],M.prototype,"gridTemplateRows",void 0);H([d()],M.prototype,"gridTemplateColumns",void 0);H([d()],M.prototype,"justifyItems",void 0);H([d()],M.prototype,"alignItems",void 0);H([d()],M.prototype,"justifyContent",void 0);H([d()],M.prototype,"alignContent",void 0);H([d()],M.prototype,"columnGap",void 0);H([d()],M.prototype,"rowGap",void 0);H([d()],M.prototype,"gap",void 0);H([d()],M.prototype,"padding",void 0);H([d()],M.prototype,"margin",void 0);M=H([R("wui-grid")],M);const yo=k`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[0]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:t})=>t[4]}, 20px);
    transition:
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:t})=>t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:t})=>t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:t})=>t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:t})=>t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var ae=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let G=class extends T{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const e=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${E(e?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${e?c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():c`
      <wui-wallet-image
        size="lg"
        imageSrc=${E(this.imageSrc)}
        name=${E((e=this.wallet)==null?void 0:e.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=j.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await j.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,D.sendEvent({type:"track",event:"WALLET_IMPRESSION",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:A.state.view,query:this.walletQuery,certified:this.certified}}))}};G.styles=yo;ae([y()],G.prototype,"visible",void 0);ae([y()],G.prototype,"imageSrc",void 0);ae([y()],G.prototype,"imageLoading",void 0);ae([y()],G.prototype,"isImpressed",void 0);ae([d()],G.prototype,"explorerId",void 0);ae([d()],G.prototype,"walletQuery",void 0);ae([d()],G.prototype,"certified",void 0);ae([d({type:Object})],G.prototype,"wallet",void 0);G=ae([R("w3m-all-wallets-list-item")],G);const $o=k`
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

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:t})=>t[4]};
    padding-bottom: ${({spacing:t})=>t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ce=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const fn="local-paginator";let re=class extends T{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!P.state.wallets.length,this.wallets=P.state.wallets,this.recommended=P.state.recommended,this.featured=P.state.featured,this.filteredWallets=P.state.filteredWallets,this.unsubscribe.push(P.subscribeKey("wallets",e=>this.wallets=e),P.subscribeKey("recommended",e=>this.recommended=e),P.subscribeKey("featured",e=>this.featured=e),P.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),(e=this.paginationObserver)==null||e.disconnect()}render(){return c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");e&&(await P.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>c`
        <wui-card-select-loader type="wallet" id=${E(i)}></wui-card-select-loader>
      `)}getWallets(){var r;const e=[...this.featured,...this.recommended];((r=this.filteredWallets)==null?void 0:r.length)>0?e.push(...this.filteredWallets):e.push(...this.wallets);const i=I.uniqueBy(e,"id"),o=Ne.markWalletsAsInstalled(i);return Ne.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map(i=>c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:o,count:r,mobileFilteredOutWalletsLength:n}=P.state,s=window.innerWidth<352?3:4,a=e.length+i.length;let u=Math.ceil(a/s)*s-a+s;return u-=e.length?o.length%s:0,r===0&&o.length>0?null:r===0||[...o,...e,...i].length<r-(n??0)?this.shimmerTemplate(u,fn):null}createPaginationObserver(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${fn}`);e&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:n,wallets:s}=P.state;s.length<n&&P.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){L.selectWalletConnector(e)}};re.styles=$o;Ce([y()],re.prototype,"loading",void 0);Ce([y()],re.prototype,"wallets",void 0);Ce([y()],re.prototype,"recommended",void 0);Ce([y()],re.prototype,"featured",void 0);Ce([y()],re.prototype,"filteredWallets",void 0);Ce([y()],re.prototype,"badge",void 0);re=Ce([R("w3m-all-wallets-list")],re);const vo=$n`
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
`;var It=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let We=class extends T{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await P.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=P.state,i=Ne.markWalletsAsInstalled(e);return e.length?c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(o=>c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){L.selectWalletConnector(e)}};We.styles=vo;It([y()],We.prototype,"loading",void 0);It([d()],We.prototype,"query",void 0);It([d()],We.prototype,"badge",void 0);We=It([R("w3m-all-wallets-search")],We);var tn=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pt=class extends T{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=I.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return c`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",De.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return I.isMobile()?c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){A.push("ConnectingWalletConnect")}};tn([y()],pt.prototype,"search",void 0);tn([y()],pt.prototype,"badge",void 0);pt=tn([R("w3m-all-wallets-view")],pt);const Co=k`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      scale ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Z=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let V=class extends T{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",c`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${E(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?c`<wui-image
        icon=${this.icon}
        iconColor=${E(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:c`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};V.styles=[U,se,Co];Z([d()],V.prototype,"imageSrc",void 0);Z([d()],V.prototype,"icon",void 0);Z([d()],V.prototype,"iconColor",void 0);Z([d({type:Boolean})],V.prototype,"loading",void 0);Z([d()],V.prototype,"tabIdx",void 0);Z([d({type:Boolean})],V.prototype,"disabled",void 0);Z([d({type:Boolean})],V.prototype,"rightIcon",void 0);Z([d({type:Boolean})],V.prototype,"rounded",void 0);Z([d({type:Boolean})],V.prototype,"fullSize",void 0);V=Z([R("wui-list-item")],V);var xo=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let pn=class extends T{constructor(){var e;super(...arguments),this.wallet=(e=A.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&I.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&I.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&I.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&I.openHref(this.wallet.homepage,"_blank")}};pn=xo([R("w3m-downloads-view")],pn);export{pt as W3mAllWalletsView,ct as W3mConnectingWcBasicView,pn as W3mDownloadsView};
