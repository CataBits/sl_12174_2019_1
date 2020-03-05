// Atualiza o DOM
var out = '';

// Lê a coleção do DB
db.collection('artigos').get()
    // Se der certo
    .then(function(getData) {

        getData.forEach(function(doc) {

            var art = doc.data();

            out += `
<a href="" class="lista">
    
  <img src="${art.imagem}" alt="${art.titulo}">
  <h4>${art.titulo}</h4>
  ${art.resumo}

</a>
            `;

        });

        // Atualizando o DOM
        $('#artMain').html(out);

    })
    // Se der errado
    .catch(function() {

        out = `
<div class="center">
    <p><i class="fas fa-user-times fa-5x"></i></p>
    <h3>Oooops!</h3>
    <p>Você precisa estar logado para ver os artigos.</p>
    <p>
        <a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i> Entrar / Login</a>
        <div><small>Use sua conta do Google</small></div>
    </p>
</div>
        `;

        // Atualizando o DOM
        $('#artMain').html(out);

    });


/*

// Regra do firestore para permitir apenas leitura:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /artigos/{document=**} {
      allow read: if request.auth.uid != null;
      allow write: if false;
    }
  }
}

// Regra do Firestore para acesso total:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
    
*/