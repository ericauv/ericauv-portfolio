import React from "react"
const svgIcons = {
  cart:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="shopping-cart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
    </svg>
  ,
  code:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="code"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
      ></path>
    </svg>
  ,
  image:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="image"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path>
    </svg>
  ,
  video:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-prefix="fas"
      data-icon="video"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
    </svg>
  ,
  user:
  <svg
  aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="user"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>
  ,
  email:
  <svg aria-hidden="true" focusable="false" data-modifications="removed fill from path, removed data-prefix, removed class" data-credit="Icon provided by FontAwesome.com" data-license="https://fontawesome.com/license" data-icon="envelope-square"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"></path></svg>

  ,
  lock:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="lock"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
    </svg>
  ,
  instagram:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon made by Freepik, provided by flaticon.com"
      data-icon="instagram"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
        <path 
          d="m376 91h-240c-24.8125 0-45 20.1875-45 45v240c0 24.8125 20.1875 45 45 45h240c24.8125 0 45-20.1875 45-45v-240c0-24.8125-20.1875-45-45-45zm-120 270c-57.890625 0-105-47.109375-105-105s47.109375-105 105-105 105 47.109375 105 105-47.109375 105-105 105zm105-180c-16.539062 0-30-13.460938-30-30s13.460938-30 30-30 30 13.460938 30 30-13.460938 30-30 30zm0 0"/><path d="m256 181c-41.351562 0-75 33.648438-75 75s33.648438 75 75 75 75-33.648438 75-75-33.648438-75-75-75zm0 0"/><path d="m436 0h-360c-41.351562 0-76 34.648438-76 76v360c0 41.351562 34.648438 76 76 76h360c41.351562 0 76-34.648438 76-76v-360c0-41.351562-34.648438-76-76-76zm15 376c0 41.351562-33.648438 75-75 75h-240c-41.351562 0-75-33.648438-75-75v-240c0-41.351562 33.648438-75 75-75h240c41.351562 0 75 33.648438 75 75zm0 0"/>
    </svg>
  ,
  github:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
  ,
  linkedin:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="linkedin"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
    </svg>
  ,
  pdf:
  <svg 
    aria-hidden="true" 
    focusable="false" 
    data-modifications="removed fill from path, removed data-prefix, removed class" 
    data-credit="Icon made by Freepik from www.flaticon.com"
    data-icon="resume/cv" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="-45 0 512 512">
      <path 
        d="m120.488281 151.710938c-16.652343 0-30.226562 13.445312-30.4375 30.050781h60.875c-.210937-16.605469-13.785156-30.050781-30.4375-30.050781zm0 0"/><path d="m135.511719 106.6875c0-8.285156-6.738281-15.023438-15.023438-15.023438-8.285156 0-15.023437 6.738282-15.023437 15.023438s6.738281 15.023438 15.023437 15.023438c8.285157 0 15.023438-6.738282 15.023438-15.023438zm0 0"/><path d="m323.921875 413.992188v89.222656l89.21875-89.222656zm0 0"/><path d="m293.921875 383.992188h128.007813v-383.992188h-421.929688v512h293.921875zm-218.457031-277.304688c0-24.824219 20.195312-45.023438 45.023437-45.023438 24.824219 0 45.023438 20.199219 45.023438 45.023438 0 10.109375-3.351563 19.449219-8.996094 26.96875 14.804687 11.027344 24.410156 28.660156 24.410156 48.496094v29.609375h-120.878906v-29.609375c0-19.835938 9.605469-37.46875 24.410156-48.496094-5.644531-7.519531-8.992187-16.859375-8.992187-26.96875zm-15.429688 285.214844v-30h113.261719v30zm113.261719 30.050781v30h-113.261719v-30zm188.59375-90.097656h-301.855469v-30h301.855469zm0-60.046875h-301.855469v-30h301.855469zm0-60.046875h-150.925781v-30h150.925781zm0-60.050781h-150.925781v-30h150.925781zm0-60.046876h-150.925781v-30h150.925781zm0 0"/>
  </svg>,
  view:
    <svg
      aria-hidden="true"
      focusable="false"
      data-modifications="removed fill from path, removed data-prefix, removed class"
      data-credit="Icon provided by FontAwesome.com"
      data-license="https://fontawesome.com/license"
      data-icon="globe"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512">
        <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
        </path>
    </svg>

}
export default svgIcons

export const {cart} = svgIcons
export const {code} = svgIcons
export const {image} = svgIcons
export const {video} = svgIcons
export const {user} = svgIcons
export const {email} = svgIcons
export const {lock} = svgIcons
export const {instagram} = svgIcons
export const {github} = svgIcons
export const {linkedin} = svgIcons
export const {pdf} = svgIcons
export const {view} = svgIcons