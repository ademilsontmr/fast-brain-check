#!/bin/bash

# Script para atualizar headers dos artigos do blog

for file in src/pages/blog/*.tsx; do
  # Substituir o header antigo pelo import do ArticleHeader
  sed -i '' '1s/^/import ArticleHeader from "@\/components\/ArticleHeader";\n/' "$file"
  
  # Remover o header inline e substituir pelo componente
  sed -i '' '/{\/\* Header \*\/}/,/<\/header>/c\
      <ArticleHeader />
' "$file"
done

echo "Headers atualizados com sucesso!"
