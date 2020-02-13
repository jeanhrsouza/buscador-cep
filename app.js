let form = document.querySelector('form');

form.addEventListener('submit', e =>{
  e.preventDefault();

  let cep = form.querySelector('#cep').value;

  getEnderecoByCep(cep);
});

function getEnderecoByCep(cep) {
  let urlToFetch = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(urlToFetch, {
    method: 'get'
  })
    .then( response =>{
      response.json()
        .then( result => {
          showResult(result);
        })
    })
    .catch( err => {
      console.error(err);
    })
}

function showResult(resultJSON) {

  let logradouro = resultJSON.logradouro;
  let bairro = resultJSON.bairro;
  let complemento = resultJSON.complemento;
  let cidade = resultJSON.localidade;
  let uf = resultJSON.uf;

  let tr = document.createElement('tr');

  let trContent = `
    <td>${logradouro}</td>
    <td>${bairro}</td>
    <td>${complemento}</td>
    <td>${cidade}</td>
    <td>${uf}</td>
 `

  tr.innerHTML = trContent;

  document.querySelector('#table tbody').prepend(tr); //Insert in first position
  //document.querySelector('#table tbody').appendChild(tr);	//Insert in last position
}