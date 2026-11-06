MAR DI NIZZA RESIDENCIAL — GROOVER STUDIO
Landing page estática pronta para deploy na Vercel.

EXECUTAR LOCALMENTE
- Abra a pasta e execute um servidor estático (ex.: `npx serve .`) ou use a extensão Live Server.
- Também é possível publicar diretamente como projeto estático na Vercel.

CONFIGURAÇÕES
- WhatsApp: js/config.js > SITE_CONFIG.whatsappNumber (formato internacional, somente números).
- Valores, disponibilidade e condições: js/config.js > commercial. A página não exibe valores enquanto não forem confirmados.
- Meta Pixel: preencher metaPixelId e inserir/ativar o snippet oficial com consentimento adequado.
- Google Analytics 4: preencher gaMeasurementId. O carregamento é condicional.

IMAGENS E PLANTAS OFICIAIS
- A estrutura está preparada em assets/images e assets/plans.
- Adicione as imagens autorizadas da galeria oficial em assets/images e atualize os blocos de galeria em index.html.
- Adicione as seis imagens técnicas em assets/plans com estes nomes exatos:
  planta-final-01.jpg, planta-final-02.jpg, planta-final-03.jpg,
  planta-final-04.jpg, planta-final-05.jpg, planta-final-06.jpg.
- Os espaços visuais de fallback são intencionais: não substituem nem simulam renders oficiais.
- Galeria oficial: https://estilofontana.com.br/imovel-planta/apartamento/laguna-8/mar-di-nizza-residencial-140/fotos
- Plantas oficiais: https://estilofontana.com.br/imovel-planta/apartamento/laguna-8/mar-di-nizza-residencial-140/plantas
- Catálogo: https://estilofontana.com.br/upload/empreendimento/catalogo/mar-di-nizza-residencial-1695056288.pdf

LOGO / FAVICON / COMPARTILHAMENTO
- Os SVGs em assets/logos são placeholders tipográficos próprios para não reproduzir uma marca oficial sem arquivo fornecido.
- Substitua og-mar-di-nizza.svg pela imagem aprovada para compartilhamento e ajuste og:image para o domínio final.
- Configure domínio definitivo e canonical antes da publicação.

PUBLICAR NA VERCEL
1. Envie a pasta para um repositório Git ou importe-a diretamente na Vercel.
2. Framework Preset: Other; Build Command vazio; Output Directory: .
3. Após publicar, configure o domínio e atualize canonical/og:image.

DADOS A CONFIRMAR ANTES DE PUBLICAR
- Número de WhatsApp principal (configurado com o número divulgado no briefing).
- Autorização de uso das imagens oficiais e identidade visual da imobiliária.
- Dados de contato, política de privacidade e texto de consentimento LGPD.
- Previsão de entrega e dados de obra atualizados.
- Valores, unidades e condições comerciais.

OBSERVAÇÕES
- Formulário validado no navegador e encaminhado ao WhatsApp; não armazena dados em servidor.
- Não há CRM/backend integrado.
- O mapa é uma incorporação do Google Maps por busca de endereço; confirme o pin exato.
- A página não afirma parceria ou aprovação da incorporadora.
