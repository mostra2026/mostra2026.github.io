const perguntas = [
 {p:"Em que ano Maria Montessori inaugurou a primeira Casa dei Bambini, em Roma?", a:["1892","1907","1929","1938"], c:1},
 {p:"Qual ideia é central no Método Montessori?", a:["Memorização como principal método","Autonomia da criança na aprendizagem","Avaliação igual para todos","Professor como único participante ativo"], c:1},
 {p:"O que significa 'ambiente preparado' no Método Montessori?", a:["Um espaço organizado para favorecer independência e aprendizagem","Uma sala usada apenas para provas","Um ambiente sem materiais","Uma sala em que somente o professor movimenta os objetos"], c:0},
 {p:"Além da educação, qual era a formação profissional de Maria Montessori?", a:["Engenheira","Advogada","Médica","Jornalista"], c:2},
 {p:"Em que ano Nísia Floresta publicou 'Direitos das mulheres e injustiça dos homens'?", a:["1832","1838","1885","1907"], c:0},
 {p:"Qual instituição Nísia Floresta fundou no Rio de Janeiro em 1838?", a:["Sociedade Pestalozzi","Colégio Augusto","Casa dei Bambini","Fazenda do Rosário"], c:1},
 {p:"Uma das principais causas defendidas por Nísia Floresta foi:", a:["Restrição do ensino feminino","Maior acesso das mulheres à educação","Fim da formação intelectual feminina","Ensino exclusivamente doméstico"], c:1},
 {p:"A escrita de Nísia Floresta também abordou quais questões sociais?", a:["Somente Matemática e Medicina","Escravidão e povos indígenas","Apenas desenvolvimento infantil","Somente arquitetura escolar"], c:1},
 {p:"Em que ano Helena Antipoff veio para o Brasil?", a:["1832","1907","1929","1974"], c:2},
 {p:"Helena Antipoff ficou especialmente conhecida por aproximar quais áreas?", a:["Psicologia e Educação","Química e Engenharia","Astronomia e Medicina","Direito e Arquitetura"], c:0},
 {p:"Em 1932, Helena Antipoff participou da criação de qual instituição?", a:["Colégio Augusto","Sociedade Pestalozzi de Minas Gerais","Casa das Crianças","Universidade Montessori"], c:1},
 {p:"Qual projeto de Helena Antipoff tornou-se espaço de experiências educacionais e formação de profissionais em Minas Gerais?", a:["Fazenda do Rosário","Colégio Augusto","Casa dei Bambini","Instituto Floresta"], c:0},
 {p:"Para Helena Antipoff, compreender um estudante exigia considerar:", a:["Apenas suas notas","Somente sua idade","História, ambiente, experiências e características individuais","Apenas resultados de provas"], c:2},
 {p:"Quais três mulheres são destacadas no projeto 'Educação também é ciência'?", a:["Nísia Floresta, Maria Montessori e Helena Antipoff","Marie Curie, Ada Lovelace e Nísia Floresta","Helena Antipoff, Anita Garibaldi e Marie Curie","Maria Montessori, Clarice Lispector e Bertha Lutz"], c:0},
 {p:"Por que o projeto afirma que educação também é ciência?", a:["Porque educação não precisa de pesquisa","Porque ensino e aprendizagem podem ser pesquisados, analisados e melhorados","Porque ciência substitui completamente o professor","Porque somente a Medicina participa da educação"], c:1},
 {p:"Segundo o conteúdo do projeto, qual área estuda aspectos do comportamento e da aprendizagem?", a:["Psicologia","Geologia","Astronomia","Engenharia Civil"], c:0},
 {p:"Qual característica Montessori defendia em relação ao desenvolvimento dos estudantes?", a:["Todos devem aprender no mesmo ritmo","Cada criança possui um ritmo de desenvolvimento","O ambiente não interfere na aprendizagem","A autonomia deve ser evitada"], c:1},
 {p:"Qual foi um dos focos do trabalho de Helena Antipoff na formação de professores?", a:["Ensinar apenas conteúdo técnico","Compreender desenvolvimento, dificuldades e diferenças dos alunos","Eliminar a observação dos estudantes","Usar somente notas para avaliar"], c:1},
 {p:"A Fazenda do Rosário está relacionada principalmente à trajetória de:", a:["Maria Montessori","Nísia Floresta","Helena Antipoff","Nenhuma das três"], c:2},
 {p:"No projeto, a relação de Nísia Floresta com 'Educação também é ciência' aparece principalmente por meio de:", a:["Acesso ao conhecimento","Construção de laboratórios químicos","Criação do Método Montessori","Estudos de astronomia"], c:0}
];

let selecionadas=[], indice=0, acertos=0, respondida=false;
const inicial=document.querySelector('#tela-inicial'), quiz=document.querySelector('#tela-quiz'), final=document.querySelector('#tela-final');
const pergunta=document.querySelector('#pergunta'), alternativas=document.querySelector('#alternativas'), feedback=document.querySelector('#feedback');
const progresso=document.querySelector('#progresso'), placar=document.querySelector('#placar'), barra=document.querySelector('#barra'), proxima=document.querySelector('#proxima');

function embaralhar(lista){return [...lista].sort(()=>Math.random()-.5)}
function iniciar(){selecionadas=embaralhar(perguntas).slice(0,15);indice=0;acertos=0;inicial.classList.add('escondido');final.classList.add('escondido');quiz.classList.remove('escondido');mostrar()}
function mostrar(){respondida=false;feedback.textContent='';proxima.classList.add('escondido');const q=selecionadas[indice];pergunta.textContent=q.p;alternativas.innerHTML='';progresso.textContent=`Pergunta ${indice+1} de ${selecionadas.length}`;placar.textContent=`Acertos: ${acertos}`;barra.style.width=`${(indice/selecionadas.length)*100}%`;q.a.forEach((texto,i)=>{const b=document.createElement('button');b.className='alternativa';b.textContent=texto;b.addEventListener('click',()=>responder(i,b));alternativas.appendChild(b)})}
function responder(escolha,botao){if(respondida)return;respondida=true;const q=selecionadas[indice];const botoes=[...alternativas.children];botoes.forEach(b=>b.disabled=true);botoes[q.c].classList.add('certa');if(escolha===q.c){acertos++;botao.classList.add('certa');feedback.textContent='Boa! Resposta correta.'}else{botao.classList.add('errada');feedback.textContent=`A resposta correta é: ${q.a[q.c]}.`}placar.textContent=`Acertos: ${acertos}`;proxima.classList.remove('escondido')}
function avancar(){indice++;if(indice<selecionadas.length)mostrar();else terminar()}
function terminar(){quiz.classList.add('escondido');final.classList.remove('escondido');barra.style.width='100%';const pct=Math.round(acertos/selecionadas.length*100);document.querySelector('#resultado').textContent=`Você acertou ${acertos} de ${selecionadas.length}!`;let msg=pct===100?'Perfeito! Você acertou tudo.':pct>=80?'Mandou muito bem!':pct>=60?'Bom resultado! Dá para melhorar ainda mais.':'Vale revisar o conteúdo do site e tentar novamente.';document.querySelector('#mensagem-final').textContent=`${msg} Sua pontuação foi ${pct}%.`}
document.querySelector('#comecar').addEventListener('click',iniciar);document.querySelector('#reiniciar').addEventListener('click',iniciar);proxima.addEventListener('click',avancar);
