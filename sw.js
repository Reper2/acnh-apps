if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let b={};const d=e=>i(e,c),n={module:{uri:c},exports:b,require:d};s[c]=Promise.all(a.map((e=>n[e]||d(e)))).then((e=>(r(...e),b)))}}define(["./workbox-2671632a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"Calendar.html",revision:"0eeafa08e66c91027ab1a4da4672de3b"},{url:"Craftulator.html",revision:"9a1ecb4efdf2fa349e9b3bf5dbec8939"},{url:"DIYProfits.html",revision:"5beae9149d3b6600717f6cc499eb1594"},{url:"Encyclopedia.html",revision:"ee6898adb8ab68723a556f4f9bb411a8"},{url:"favicon.ico",revision:"115f64e300409d1e6ae88c3d770248e5"},{url:"icons/android-chrome-192x192.png",revision:"3b239f81cc6f7bb824298293206d8ec0"},{url:"icons/android-chrome-512x512.png",revision:"5b86674b52f878f6c95e7fced85e3162"},{url:"icons/apple-touch-icon.png",revision:"91f112ad47bd0fba97b41900fc47551b"},{url:"icons/favicon-16x16.png",revision:"6df4ba24bdf1f2626127bcc59b662111"},{url:"icons/favicon-32x32.png",revision:"1b22cdc6245f033d0bbe9e8d3d2ac7eb"},{url:"Images/ACPatternsEditor.PNG",revision:"210ca4a54c7b4ac9d277137b304ba4d7"},{url:"Images/back.png",revision:"5f35f42b26abcc9483c983705c10cc1b"},{url:"Images/encyclopedia.png",revision:"d44aa9def96c42448339a2a247ca6032"},{url:"Images/grass/juli august.png",revision:"552e3822431c56b72820bb5f4eb8ac52"},{url:"Images/grass/may june.png",revision:"a2b959ef0d7d8fcad090805a068f3f7f"},{url:"Images/grass/nov1.png",revision:"11d43a5aae686a6829dcb3eec07d0a3a"},{url:"Images/grass/nov2.png",revision:"10254acd7b41989faa523d25cf9dc410"},{url:"Images/grass/okt1.png",revision:"aabbade97c628b4a3b4e0e6e25b6b250"},{url:"Images/grass/okt2.png",revision:"a6cdaf155879c195fbfda9cbe5a21973"},{url:"Images/grass/sept1.png",revision:"2233fbe1795308a4b8e133ae807fc88a"},{url:"Images/grass/sept2.png",revision:"95a632f01fd59281884ac81498d7b9ef"},{url:"Images/grass/snow.png",revision:"d5f681bdb1d981102be6ae734bbb57c0"},{url:"Images/grass/spring feb mrt apr.png",revision:"b745033aed0886450fd1171a35d6f93d"},{url:"Images/left.png",revision:"7a0c13ab52c8edc4974d5357d13d9e95"},{url:"Images/logo.png",revision:"e30b68dc7939e939f3c271c93c83e14d"},{url:"Images/next.png",revision:"2accb92a5b50cfa1f8061da13b638269"},{url:"Images/red-leather-book-cover-260nw-169.png",revision:"9c600ad6aefd557b71ace9603c5a6768"},{url:"Images/right.png",revision:"2e946798bc9ae9a21c120a7ec32bfc6b"},{url:"index.html",revision:"07c744d191e2942587dd2e5692d26485"},{url:"MoreWebsites.html",revision:"591276a7ffcb2b7abb348f6c6d88830e"},{url:"Scripts/Calendar/dayClicked.js",revision:"39ee7ec64332e91934517f3330c65049"},{url:"Scripts/Calendar/fillCalendar.js",revision:"9d1940859a6ef432fbc26244248ace75"},{url:"Scripts/Calendar/showCalendar.js",revision:"9b8c2c46c3df0978f766509bbecf03ef"},{url:"Scripts/craftulator/craftulator.js",revision:"9b84519c19cce264324d65acf3a0ee80"},{url:"Scripts/diyProfits/DIYProfits.js",revision:"09ab39060980f99e8df087644a10f95c"},{url:"Scripts/diyProfits/DIYProfitsRows.js",revision:"13d54d39934c8bbebb22014cc66fed40"},{url:"Scripts/Encyclopedia/bookBehavior.js",revision:"410afa1c3dc02729538a6dc49c10f074"},{url:"Scripts/Encyclopedia/bugPage.js",revision:"f76ad5976541e8b118633bc61ff7491a"},{url:"Scripts/Encyclopedia/divePage.js",revision:"93c9c6428f32ca2fb466a9380ba36492"},{url:"Scripts/Encyclopedia/Encyclopedia.js",revision:"fc0ca2ebcba1409b3ebcf9c1456791fc"},{url:"Scripts/Encyclopedia/encyclopediaIndex.js",revision:"e0bed5662a6170a74fb3571bf217fef3"},{url:"Scripts/Encyclopedia/fishPage.js",revision:"3eb58b2002d2d67a24507e9799f020d0"},{url:"Scripts/Encyclopedia/searchCritter.js",revision:"3c4664ded6b0394e421501e716494be1"},{url:"Scripts/index/birthdays.js",revision:"b2e072806af9457721afb08acb7f499c"},{url:"Scripts/index/events.js",revision:"fa28d5b9dc46547e328d968bb54955ba"},{url:"Scripts/index/hemisphere.js",revision:"00620ebd75872f6867e2791ff49da3a6"},{url:"Scripts/index/seasonalMaterials.js",revision:"476aafab7d004e6ae902aeb75c6c1aff"},{url:"Scripts/lists/birthdays.js",revision:"e5a3a5338c25f2b6ddb3d1b7f60bdb16"},{url:"Scripts/lists/Bugs.js",revision:"b42ce2b50e6a188fd215bb2bb48119f8"},{url:"Scripts/lists/Diving.js",revision:"7e9a1880006d15f07719051ec4b6c3ab"},{url:"Scripts/lists/DIYs-V3.js",revision:"a9bcf91a036af162457b1d86a2360b5a"},{url:"Scripts/lists/events.js",revision:"c86e89cf5e048c004b9b47a7cb4cf930"},{url:"Scripts/lists/Fish.js",revision:"e3373ef7a0012f461ba502fdc86fb6cf"},{url:"Scripts/lists/materials.js",revision:"81dc268b0a1ad547a026a01feeef07dd"},{url:"Scripts/otherCode/bunnyDay.js",revision:"e9c404d5e38760501442bbc3b7151bac"},{url:"Scripts/universalScripts/addSubtractDays.js",revision:"c12620f79aeb295df67dcc1efd2093af"},{url:"Scripts/universalScripts/eventsFunctions.js",revision:"4464f9217f231878bd22e6e304cd9d3e"},{url:"Scripts/universalScripts/header.js",revision:"9e6b1350833da8c035b2aeceff1345a1"},{url:"Scripts/universalScripts/interactiveBackground.js",revision:"783d043a6c33202584bb6bb71f04fd89"},{url:"Scripts/universalScripts/reset.js",revision:"79e7bfb671258f70884d52285fabf5a6"},{url:"Scripts/universalScripts/suggestiveTextbox.js",revision:"6d3bbd9e6467ca58104414ed4d23ebb3"},{url:"Scripts/universalScripts/time.js",revision:"0d787279bb18c7c0c92cdf014c451866"},{url:"site.webmanifest",revision:"87698ffca23a5344b68d784b680a3847"},{url:"Style/Style.css",revision:"1c97672e188eb86aef032b9a5a362d37"},{url:"Style/Style.css.map",revision:"f0699435a3c4f8bd583c767d935da646"},{url:"Style/Style.scss",revision:"6e2db030d5548fdecd6f19a99698430c"},{url:"Style/Styles/_calendarStyles.scss",revision:"747d9572aeb952f3d5b8f8aae00c9a17"},{url:"Style/Styles/_footer.scss",revision:"68c22465330cb3c50e3d29dd0956a078"},{url:"Style/Styles/_header.scss",revision:"f04ec1d6ec792fd81feec5a068aa9fb5"},{url:"Style/Styles/_mainContent.scss",revision:"70258bb47941a09fb81a215481ce8aff"},{url:"Style/Styles/_navMenu.scss",revision:"47a36da5e1ff9a4f3e0c8426ed8a8fcc"},{url:"Style/Styles/_universal.scss",revision:"6ef09fe02ad78af79075c4739fa4749e"},{url:"Style/Styles/BasicStyles/_1-normalize.scss",revision:"db1ee1ecf28eb31fd00bdde5db5dd243"},{url:"Style/Styles/BasicStyles/_2-reset.scss",revision:"588bc9a53fc0dfc24248b50af94290b3"},{url:"Style/Styles/BasicStyles/_3-general.scss",revision:"5db65b55c7aef1bd4bc14f45b6d128a3"},{url:"Style/Styles/BasicStyles/_4-mixins.scss",revision:"942e8b36f89cf5987bbb9f1411ad1574"},{url:"Style/Styles/BasicStyles/_5-variables.scss",revision:"31278d7841067ca18a1705856c93cd96"},{url:"sw.js.map",revision:"067eba701e9c3ea0b43c12f221ce543c"},{url:"workbox-2671632a.js.map",revision:"900845db3b6a5061a83135b2baf84ac3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
