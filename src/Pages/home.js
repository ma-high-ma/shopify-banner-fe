import React from "react";
let search = window.location.search;
let params = new URLSearchParams(search);
let foo = params.get('website_id');
window.website_id = foo
console.log('outermost part')

function changeButtonStatus(status) {
    // Todo: Store status in variables
    alert('You clicked me')
    return fetch('https://mahima-be.app.vtxhub.com/banners/?website_id='+window.website_id+'&status='+status, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
    });
}

const Home = () => {

    console.log(window.website_id)
  return (
      <div>
      <h1>Main page</h1>
         {/*Todo: Add toggle to enable or disable banner*/}
      <button onClick={() => changeButtonStatus('enabled')}>Enable Banner</button>
      <button onClick={() => changeButtonStatus('disabled')}>Disable Banner</button>
      </div>
  )
};

export default Home;