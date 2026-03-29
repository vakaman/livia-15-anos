# Regras do projeto

## Objetivo

Este repositorio contem um SPA de convite de 15 anos. Toda alteracao futura deve preservar a experiencia de convite digital elegante, rapida e facil de manter.

## Regras de arquitetura

- Cada secao visual deve viver em `src/modules/<secao>`.
- Componentes compartilhados devem ficar em `src/shared/components`.
- Conteudo editavel do convite deve ficar centralizado em `src/config/invitation.ts`.
- Links dinamicos, como Google Maps e Google Agenda, devem ficar em `src/utils`.
- Evite colocar textos fixos diretamente dentro dos componentes, salvo quando forem labels tecnicas.

## Regras de manutencao

- Ao adicionar uma nova secao, crie um modulo proprio em vez de expandir um modulo existente sem necessidade.
- Antes de criar novos estilos globais, verifique se a regra pode viver no modulo ou em componente compartilhado.
- Preserve a identidade visual do convite: tons quentes, tipografia serifada no destaque e composicao leve.
- Prefira componentes pequenos e declarativos.
- Se houver integracao externa nova, encapsule a montagem de URL ou payload em `src/utils`.

## Regras de conteudo

- Atualize nome, data, endereco, PIX e contato apenas em `src/config/invitation.ts`.
- Use datas em ISO para gerar links de agenda corretamente.
- Sempre que o local mudar, valide tambem `mapsQuery` e `address`.
- Sempre que o QR code mudar, substitua `qrCodeDataUrl` por um novo asset ou data URL valido.
