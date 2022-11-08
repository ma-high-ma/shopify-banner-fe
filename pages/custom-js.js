const body_element = document.getElementsByTagName("BODY")
const host = window.location.host
const path = window.location.pathname

console.log(window.location.path)
console.log(host)

function fetchData(){
 return fetch('https://mahima-be.app.vtxhub.com/banners/?host='+host+'', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
});
}

fetchData()
.then((response) =>
    response.json()
)
.then((abc) => {
  console.log(abc);

if (abc['status'] === 'enabled') {
  const pages = abc['pages']
  if (pages[0] === 'all' || pages.includes(path)){
    const banner_div = document.createElement('div')
    banner_div.innerHTML = 'Sale is LIVE'
    banner_div.style.color = abc['style']['text_color']
    banner_div.style.textAlign = abc['style']['text_align']
    banner_div.style.background = abc['style']['background_color']
    banner_div.style.height = abc['style']['height']
    banner_div.style.padding = abc['style']['padding']
    body_element[0].insertBefore(banner_div, body_element[0].firstChild)
    }
  }
});