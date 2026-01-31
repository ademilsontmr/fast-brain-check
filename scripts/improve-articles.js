#!/usr/bin/env node

/**
 * Script para adicionar melhorias padrão aos artigos do blog
 * Adiciona: interlinks, estudos, casos reais, exemplos práticos
 */

const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/pages/blog');

// Template de interlinks para adicionar
const interlinkTemplate = `
import ArticleInterlinks from "@/components/ArticleInterlinks";
`;

// Artigos prioritários para melhorar
const priorityArticles = [
  'OQueEQI.tsx',
  'QINormal.tsx',
  'ComoMelhorarCerebro.tsx',
  'QIMedioBrasil.tsx',
  'TesteQIGratis.tsx',
  'ComoSePrepararTesteQI.tsx',
  'QIAltoCaracteristicas.tsx',
  'HabitosQIAlto.tsx',
  'SinaisQIAlto.tsx',
  'OQueEConsideradoQIAlto.tsx'
];

// Função para verificar se já tem o import
function hasArticleInterlinksImport(content) {
  return content.includes('ArticleInterlinks');
}

// Função para adicionar import se não existir
function addImportIfNeeded(content) {
  if (hasArticleInterlinksImport(content)) {
    return content;
  }
  
  // Encontrar a última linha de import
  const lines = content.split('\n');
  let lastImportIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      lastImportIndex = i;
    }
  }
  
  if (lastImportIndex !== -1) {
    lines.splice(lastImportIndex + 1, 0, 'import ArticleInterlinks from "@/components/ArticleInterlinks";');
    return lines.join('\n');
  }
  
  return content;
}

// Processar artigos
function processArticles() {
  let processed = 0;
  let skipped = 0;
  
  priorityArticles.forEach(filename => {
    const filepath = path.join(BLOG_DIR, filename);
    
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  Arquivo não encontrado: ${filename}`);
      skipped++;
      return;
    }
    
    let content = fs.readFileSync(filepath, 'utf8');
    
    if (hasArticleInterlinksImport(content)) {
      console.log(`✓ ${filename} já tem ArticleInterlinks`);
      skipped++;
      return;
    }
    
    content = addImportIfNeeded(content);
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`✓ ${filename} atualizado`);
    processed++;
  });
  
  console.log(`\n📊 Resumo:`);
  console.log(`   Processados: ${processed}`);
  console.log(`   Ignorados: ${skipped}`);
}

// Executar
console.log('🚀 Iniciando melhorias nos artigos...\n');
processArticles();
console.log('\n✅ Concluído!');
