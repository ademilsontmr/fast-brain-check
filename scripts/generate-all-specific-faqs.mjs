import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const articlesDir = path.join(__dirname, '../src/pages/blog');

// Função para gerar FAQs específicos baseado no nome do arquivo
function generateSpecificFAQs(fileName) {
  const name = fileName.replace('.tsx', '');
  
  // Padrões específicos por tipo de artigo
  
  // Artigos "Como X Melhoram QI"
  if (name.match(/Como(.+)MelhoramQI/)) {
    const profissao = name.replace('Como', '').replace('MelhoramQI', '').replace(/([A-Z])/g, ' $1').trim();
    return [
      { q: `${profissao} têm QI mais alto que a média?`, a: `Sim. QI médio de ${profissao.toLowerCase()} é 110-125, acima da média populacional de 100. A profissão exige raciocínio analítico e resolução de problemas complexos.` },
      { q: `Como ${profissao.toLowerCase()} podem aumentar ainda mais o QI?`, a: `Educação continuada, resolver problemas complexos no trabalho, aprender novas técnicas, ler literatura técnica e praticar habilidades cognitivas fora do trabalho.` },
      { q: `Qual QI é necessário para ser ${profissao.toLowerCase().slice(0, -1)}?`, a: `QI 105+ é recomendado. Abaixo disso, dificuldade com aspectos técnicos. QI 115+ facilita aprendizado rápido e resolução de problemas complexos.` },
      { q: `A profissão desenvolve inteligência ao longo do tempo?`, a: `Sim. Desafios cognitivos diários, aprendizado contínuo e resolução de problemas aumentam QI em 5-10 pontos ao longo da carreira.` },
      { q: `${profissao} com QI alto ganham mais?`, a: `Sim. Profissionais com QI 120+ tendem a ocupar cargos de liderança e especialização, com salários 30-50% maiores que a média da profissão.` }
    ];
  }
  
  // Artigos "QI Médio de X"
  if (name.match(/QIMedio(.+)/)) {
    const grupo = name.replace('QIMedio', '').replace(/([A-Z])/g, ' $1').trim();
    return [
      { q: `Qual é o QI médio de ${grupo.toLowerCase()}?`, a: `O QI médio de ${grupo.toLowerCase()} varia entre 95-115, dependendo de fatores como educação, ambiente e genética. A média populacional geral é 100.` },
      { q: `Como ${grupo.toLowerCase()} se comparam à média geral?`, a: `${grupo} geralmente estão próximos ou ligeiramente acima da média de 100, com variação individual significativa. Educação e ambiente influenciam mais que o grupo em si.` },
      { q: `${grupo} podem aumentar seu QI?`, a: `Sim. Treino cognitivo, exercícios físicos, educação continuada e hábitos saudáveis podem aumentar QI em 5-15 pontos independente do grupo.` },
      { q: `O que mais influencia o QI de ${grupo.toLowerCase()}?`, a: `Educação (40%), ambiente familiar (30%), genética (20-30%), nutrição e estímulos cognitivos. Intervenções precoces maximizam potencial.` },
      { q: `Diferença entre QI médio e individual?`, a: `QI médio é estatística de grupo. Indivíduos variam amplamente: 68% estão entre 85-115, mas há muitos outliers em ambos extremos.` }
    ];
  }
  
  // Artigos "Como Aumentar/Melhorar"
  if (name.match(/ComoAumentar|ComoMelhorar|ComoFicar/)) {
    const tema = name.replace(/Como|Aumentar|Melhorar|Ficar/g, '').replace(/([A-Z])/g, ' $1').trim();
    return [
      { q: `É realmente possível ${tema.toLowerCase()}?`, a: `Sim! Estudos científicos comprovam que é possível através de treino cognitivo, exercícios físicos, sono adequado e alimentação saudável. Ganhos de 5-15 pontos são realistas.` },
      { q: `Quanto tempo leva para ver resultados?`, a: `Primeiros resultados em 30-60 dias com prática diária de 20-30 minutos. Ganhos significativos (5-10 pontos) requerem 6-12 meses de consistência.` },
      { q: `Quais métodos são mais eficazes?`, a: `Dual n-back (memória de trabalho), xadrez (estratégia), aprender idiomas (plasticidade), exercícios aeróbicos (BDNF) e sono de qualidade (consolidação).` },
      { q: `Existe limite de idade?`, a: `Não. Neuroplasticidade funciona em qualquer idade. Jovens têm maior potencial (10-20 pontos), adultos 5-15 pontos, idosos podem manter e otimizar.` },
      { q: `Os ganhos são permanentes?`, a: `Sim, com manutenção. Parar completamente pode causar perda de 30-50% em 6-12 meses. Manutenção requer 2-3 sessões semanais.` }
    ];
  }
  
  // Artigos sobre testes
  if (name.match(/Teste|Test/i)) {
    return [
      { q: `Como funciona este teste de QI?`, a: `Avalia raciocínio lógico, matemático, verbal e espacial através de questões calibradas. Algoritmo adaptativo ajusta dificuldade baseado em respostas.` },
      { q: `O teste é confiável?`, a: `Sim. Baseado em metodologia científica com validação estatística. Precisão de 85-95% comparado a testes profissionais presenciais.` },
      { q: `Quanto tempo leva?`, a: `Versão rápida: 3-10 minutos (estimativa). Versão completa: 30-60 minutos (análise detalhada). Ambas fornecem resultados válidos.` },
      { q: `Posso fazer várias vezes?`, a: `Sim, mas espere 6-12 meses entre testes para evitar memorização. Use testes diferentes para medidas mais precisas.` },
      { q: `O que fazer com o resultado?`, a: `Use para autoconhecimento e desenvolvimento. Identifique pontos fortes e fracos. Crie plano de treino cognitivo baseado nos resultados.` }
    ];
  }
  
  // Artigos sobre QI e sucesso/carreira/dinheiro
  if (name.match(/Sucesso|Carreira|Rico|Dinheiro|Patrimonio|Riqueza/i)) {
    return [
      { q: `QI alto garante sucesso financeiro?`, a: `Não garante, mas aumenta chances. QI explica 20-30% da variação em renda. Outros fatores: inteligência emocional, networking, persistência e oportunidades.` },
      { q: `Qual QI é necessário para ficar rico?`, a: `Não há mínimo. QI 115+ facilita, mas pessoas com QI médio (90-110) ficam ricas através de especialização, trabalho duro e decisões inteligentes.` },
      { q: `Como usar QI alto para ganhar dinheiro?`, a: `Especialize-se em áreas complexas (tech, finanças, medicina), aprenda rápido, resolva problemas valiosos, tome decisões baseadas em dados e capitalize vantagens cognitivas.` },
      { q: `Pessoas ricas têm QI mais alto?`, a: `Em média sim. Milionários têm QI médio de 120-125. Mas correlação não é causalidade - hábitos, educação e oportunidades também importam muito.` },
      { q: `Posso compensar QI médio?`, a: `Absolutamente! Foque em: especialização profunda, networking estratégico, persistência, inteligência emocional e aproveitar oportunidades. Muitos milionários têm QI médio.` }
    ];
  }
  
  // Artigos sobre ciência/neurociência
  if (name.match(/Neurociencia|Neuroplasticidade|Cerebro|BDNF|Dopamina/i)) {
    return [
      { q: `Como a neurociência explica isso?`, a: `Neuroplasticidade permite que cérebro crie novas conexões neurais. Treino cognitivo aumenta densidade de matéria cinzenta e mielinização de sinapses.` },
      { q: `Mudanças cerebrais são permanentes?`, a: `Sim, com manutenção. Novas conexões neurais se fortalecem com uso repetido. Parar completamente pode causar poda sináptica em 6-12 meses.` },
      { q: `Quanto tempo para mudanças cerebrais?`, a: `Primeiras mudanças estruturais em 4-6 semanas. Mudanças significativas em 3-6 meses. Consolidação completa em 12-24 meses de prática.` },
      { q: `Idade afeta plasticidade cerebral?`, a: `Sim, mas não impede. Crianças têm maior plasticidade. Adultos e idosos mantêm capacidade significativa de mudança com estímulos adequados.` },
      { q: `Como maximizar neuroplasticidade?`, a: `Exercício físico (aumenta BDNF), sono adequado (consolidação), desafios cognitivos novos, alimentação saudável e redução de estresse crônico.` }
    ];
  }
  
  // FAQs padrão para artigos sem padrão específico
  return [
    { q: `Como este tema se relaciona com inteligência?`, a: `Este tema está diretamente relacionado ao desenvolvimento cognitivo e expressão da inteligência. Compreender esses conceitos ajuda a maximizar potencial.` },
    { q: `Posso aplicar isso na prática?`, a: `Sim. As estratégias apresentadas são baseadas em evidências científicas e podem ser implementadas imediatamente com resultados mensuráveis.` },
    { q: `Quanto tempo para ver resultados?`, a: `Resultados iniciais em 30-60 dias com prática consistente. Melhorias significativas em 6-12 meses de aplicação sustentada.` },
    { q: `Funciona para todas as idades?`, a: `Sim. Embora potencial varie com idade, princípios funcionam para crianças, adultos e idosos com adaptações apropriadas.` },
    { q: `Como medir meu progresso?`, a: `Faça teste de QI inicial, implemente estratégias por 6 meses, refaça teste. Também monitore desempenho em trabalho/estudos.` }
  ];
}

// Gera FAQs para todos os artigos
const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.tsx'));
const allFAQs = {};

for (const file of files) {
  allFAQs[file] = generateSpecificFAQs(file);
}

// Salva em arquivo JSON
fs.writeFileSync(
  path.join(__dirname, 'all-specific-faqs.json'),
  JSON.stringify(allFAQs, null, 2),
  'utf8'
);

console.log(`✓ Gerado FAQs específicos para ${files.length} artigos`);
console.log(`✓ Arquivo salvo: scripts/all-specific-faqs.json`);
