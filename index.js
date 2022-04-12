// Add your code here
const submitData = (userName, address) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: address,
        }),
    })
    .then (res => res.json())
    .then (data => appendData(data.id))
    .catch (error => appendData(error.message))
}

submitData()

function appendData(stuff) {
    const body = document.querySelector('body');
    console.log(body)
    const p = document.createElement('p');
    p.textContent = stuff;
    body.append(p);
}