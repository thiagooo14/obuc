# Desafio pratico da Obuc
- Desenvolver aplicação para controle de locais de trabalho utilizando o layout
entregue pela empresa.
- incluir local de trabalho atravez de um formulario
- ter uma tabela com os registros dos cadastros
- salvar a tabela em um array, e utilizar o sessionStorage

### faltou implementar
- ao carregar a pagina ler o sessionStorage e devolver o array se tiver
- caso não tenha criar o estado inicial do array
- montar a tabela de acordo com o array recebido do session storage
- botão delet remover o item da tabela do sesion storage
- funcionalidade do botão edit

### bugs conhecidos
- ao adicionar um item na tabela ou excluir, ele muda visualmente, porem ao reccaregar 
a pagia, a tabela aparece no estado inicial
- o botão delet não remove o item da storage, só da tela
