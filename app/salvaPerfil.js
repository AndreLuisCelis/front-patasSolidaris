const formulario = document.querySelector("[data-formulario]");
const usuario = JSON.parse(localStorage.getItem("usuario"));

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const perfil = {
        "id": usuario.id,
        "nome": e.target.elements.nome.value,
        "telefone": e.target.elements.telefone.value,
        "cidade": e.target.elements.cidade.value,
        "sobre": e.target.elements.sobre.value,
        "foto": usuario.foto      
    }
    const ResponseEditedPerfil = await salvarPerfilUsuario(perfil);
    localStorage.setItem("usuario", JSON.stringify(ResponseEditedPerfil.user));
    window.location.href = "./home.html";
})


const inputNome = document.getElementById("nome")
inputNome.value = usuario.nome;

const inputTelefone = document.getElementById("telefone"); 
inputTelefone.value = usuario.telefone;

const inputCidade = document.getElementById("cidade");
inputCidade.value = usuario.cidade;

const inputSobre = document.getElementById("sobre");  
inputSobre.value = usuario.sobre;

const inputImagem = document.getElementById("imagem");
inputImagem.src = usuario.foto ? usuario.foto : "./img/Usuario.svg";

const imagemHeader = document.getElementById("foto-header");  
imagemHeader.src = usuario.foto ? usuario.foto : "./img/Usuario.svg";


async function salvarPerfilUsuario(user) {
    const credentials = localStorage.getItem('credentials').replace(/"/g, "");
    console.log("Token de autenticação:", `Basic ${credentials}`);
	try {
		const response = await fetch(`${window.apiUrl}/api/user`, {
			method: "PUT", // Método HTTP para adicionar
			headers: {
				"Content-Type": "application/json", // Tipo de conteúdo
                'Authorization': `Basic ${credentials}`,
			},
			body: JSON.stringify(user), // Dados convertidos para JSON
		});
		const jsonResponse = await response.json();
		return jsonResponse;
	} catch (error) {
		console.error("Erro na requisição:", error);
		return error;
	}
}
document.getElementById('input-imagem').addEventListener('change', async (event) => {
    const credentials = localStorage.getItem('credentials').replace(/"/g, "");
    const file = event.target.files[0];  
    if (!file) {
      document.getElementById('status').textContent = "Nenhum arquivo selecionado.";
      return;
    }
    // Cria um FormData e adiciona o arquivo
    const formData = new FormData();
    formData.append("file", file);
    try {
      // Envia o arquivo para a API usando fetch
      const response = await fetch(`${window.apiUrl}/file/uploadFile`, {
        method: "POST",
        headers: {
            'Authorization': `Basic ${credentials}`,
        },
        body: formData,
      });
      // Checa a resposta da API
      if (response.ok) {
        const result = await response.json(); // Obter a resposta como texto
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        
        usuario.foto = result.fileDownloadUri;
        localStorage.setItem("usuario", JSON.stringify(usuario));
        return;
      } 
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  });




