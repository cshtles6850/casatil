import { towns } from './site';

export type PtContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type PtFaqItem = { q: string; a: string };
export type PtSeoPage = { slug: string; title: string; description: string; twitterTitle?: string; twitterDescription?: string; eyebrow: string; h1: string; lead: string; sections: PtContentSection[]; faq: PtFaqItem[]; related: string[]; route?: { airport: 'kayseri' | 'nevsehir'; town: keyof typeof towns; direction: 'arrival' | 'return' }; };

export const townNamesPt: Record<keyof typeof towns, string> = {
  "goreme": "Goreme",
  "urgup": "Urgup",
  "uchisar": "Uchisar",
  "avanos": "Avanos",
  "ortahisar": "Ortahisar",
  "cavusin": "Cavusin"
};

export const ptPages: PtSeoPage[] = [
  {
    "slug": "cappadocia-shuttle-transfer",
    "title": "Shuttle na Capadócia | Transfer compartilhado do Aeroporto",
    "description": "Reserve shuttle compartilhado na Capadócia de Kayseri (ASR) ou Nevsehir (NAV) para Goreme, Urgup e outras áreas. Reserva pelo WhatsApp.",
    "eyebrow": "Shuttle compartilhado do aeroporto",
    "h1": "Shuttle Compartilhado na Capadócia",
    "lead": "O shuttle compartilhado da Capadócia conecta os aeroportos de Kayseri (ASR) e Nevsehir (NAV) aos hotéis de Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar. A tarifa é de €15 por pessoa em cada trecho, com embarque e desembarque organizados de acordo com o seu voo.",
    "sections": [
      {
        "heading": "O que está incluído",
        "paragraphs": [
          "O serviço inclui o trajeto compartilhado de qualquer um dos dois aeroportos até a sua hospedagem. O voo, os dados dos passageiros e o nome do hotel são confirmados com antecedência. Outros passageiros confirmados e paradas em hotéis podem fazer parte do mesmo percurso; é isso que permite manter a tarifa em €15 por pessoa."
        ]
      },
      {
        "heading": "Aeroporto de Kayseri ou Nevsehir",
        "paragraphs": [
          "A rota depende do aeroporto do seu voo. Se você chega por ASR, veja o [[Shuttle do Aeroporto de Kayseri|kayseri-airport-shuttle]]. Se chega por NAV, use o [[Shuttle do Aeroporto de Nevsehir|nevsehir-airport-shuttle]]. Cada página mostra a distância e o tempo de viagem específicos para a cidade do seu hotel."
        ]
      },
      {
        "heading": "Shuttle compartilhado ou transfer privativo: qual escolher?",
        "paragraphs": [
          "No shuttle, o veículo é compartilhado com outros passageiros confirmados e pode fazer paradas em diferentes hotéis. Se você prefere viajar sem outros passageiros nem desembarques que não fazem parte da sua reserva, compare com o [[transfer privativo do aeroporto|private-airport-transfer-cappadocia]]."
        ]
      },
      {
        "heading": "Só ida, ida e volta ou embarque no hotel",
        "paragraphs": [
          "Você pode reservar Aeroporto → Hotel, Hotel → Aeroporto ou os dois trechos como ida e volta. Informe o número do voo e o nome completo da hospedagem para que o ponto de encontro no aeroporto ou o embarque no hotel seja confirmado corretamente."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle compartilhado na Capadócia?",
        "a": "€15 por pessoa e por trecho de ASR ou NAV para as áreas de hotéis atendidas."
      },
      {
        "q": "Quais aeroportos são atendidos?",
        "a": "Aeroporto de Kayseri (ASR) e Aeroporto de Nevsehir (NAV)."
      },
      {
        "q": "Quais áreas da Capadócia são atendidas?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      },
      {
        "q": "Também posso reservar do hotel para o aeroporto?",
        "a": "Sim. Escolha Hotel → Aeroporto ou Ida e volta."
      },
      {
        "q": "Há transfer privativo?",
        "a": "Sim. Vito e Sprinter privativos têm tarifas fixas de acordo com o aeroporto."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle na Capadócia | Transfer compartilhado do Aeroporto",
    "twitterDescription": "Shuttle compartilhado de Kayseri (ASR) e Nevsehir (NAV) para Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
  },
  {
    "slug": "cappadocia-airport-transfer",
    "title": "Transfer do Aeroporto para a Capadócia | Kayseri e Nevsehir",
    "description": "Transfer para a Capadócia saindo de Kayseri (ASR) e Nevsehir (NAV): shuttle €15 ou Vito/Sprinter privativo. Embarque e desembarque no hotel. Reserve no WhatsApp.",
    "eyebrow": "Serviço de transfer do aeroporto",
    "h1": "Transfer do Aeroporto para a Capadócia",
    "lead": "Um transfer de aeroporto na Capadócia pode seguir rotas diferentes conforme o aeroporto de chegada, a cidade do hotel e o sentido da viagem. Comece pelo aeroporto, depois informe a cidade da hospedagem; a partir daí, fica fácil definir a rota correta.",
    "sections": [
      {
        "heading": "Escolha primeiro o aeroporto",
        "paragraphs": [
          "Dois aeroportos atendem a Capadócia: [[Aeroporto de Kayseri (ASR)|kayseri-airport-shuttle]] e [[Aeroporto de Nevsehir (NAV)|nevsehir-airport-shuttle]]. NAV fica mais perto, por estrada, da maioria das cidades hoteleiras centrais, enquanto ASR pode oferecer horários de voo mais convenientes para o seu roteiro. Se ainda não decidiu por qual chegar, consulte [[Aeroporto mais próximo da Capadócia|nearest-airport-to-cappadocia]] e [[Kayseri ou Nevsehir para a Capadócia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de comprar a passagem."
        ]
      },
      {
        "heading": "Shuttle compartilhado ou transfer privativo",
        "paragraphs": [
          "O [[shuttle compartilhado|cappadocia-shuttle-transfer]] custa €15 por pessoa em cada trecho, saindo de qualquer um dos dois aeroportos, com reserva antecipada e confirmação pelo WhatsApp. Outros passageiros e paradas em hotéis podem fazer parte do mesmo percurso. Para um veículo exclusivo, o [[transfer privativo|private-airport-transfer-cappadocia]] usa Vito (até 5 passageiros) ou Sprinter (até 16), com preço por veículo e tarifas diferentes para Kayseri e Nevsehir. Se estiver em dúvida entre as opções, veja a comparação completa de [[shuttle compartilhado x transfer privativo|cappadocia-shared-shuttle-vs-private-transfer]], com preço, cobertura e horários lado a lado."
        ]
      },
      {
        "heading": "Dados necessários para a reserva",
        "paragraphs": [
          "Toda reserva precisa do nome dos passageiros, números de passaporte, número do voo e nome completo da hospedagem. Alguns [[hotéis-caverna e propriedades em vilas antigas|cappadocia-cave-hotel-airport-transfer]] ficam em ruas onde veículos não conseguem entrar; nesses casos, o embarque ou desembarque pode ser combinado no ponto acessível mais próximo."
        ]
      },
      {
        "heading": "Chegar por um aeroporto e sair pelo outro",
        "paragraphs": [
          "Algumas viagens chegam por NAV e saem por ASR, ou o contrário. Isso não é uma ida e volta padrão pelo mesmo aeroporto, porque cada trecho tem rota e preço de transfer privativo próprios. Envie os dois voos pelo WhatsApp para que cada trecho seja confirmado com o aeroporto correto, em vez de considerar que um único preço cobre os dois sentidos."
        ]
      },
      {
        "heading": "Tamanho do grupo e capacidade do veículo",
        "paragraphs": [
          "O Vito leva até 5 passageiros e o Sprinter, até 16. Como o transfer privativo é cobrado por veículo, um grupo maior muitas vezes paga menos por pessoa em um Sprinter do que no shuttle. Vale comparar as duas opções antes de reservar, especialmente a partir de Nevsehir, onde as tarifas privativas são mais baixas."
        ]
      },
      {
        "heading": "Veja as rotas por cidade",
        "paragraphs": [
          "Já sabe em qual cidade fica o seu hotel? Vá direto para a rota exata do seu aeroporto:"
        ],
        "bullets": [
          "**Goreme** — [[de Kayseri|kayseri-airport-to-goreme-shuttle]] · [[de Nevsehir|nevsehir-airport-to-goreme-shuttle]]",
          "**Urgup** — [[de Kayseri|kayseri-airport-to-urgup-shuttle]] · [[de Nevsehir|nevsehir-airport-to-urgup-shuttle]]",
          "**Uchisar** — [[de Kayseri|kayseri-airport-to-uchisar-shuttle]] · [[de Nevsehir|nevsehir-airport-to-uchisar-shuttle]]",
          "**Avanos** — [[de Kayseri|kayseri-airport-to-avanos-shuttle]] · [[de Nevsehir|nevsehir-airport-to-avanos-shuttle]]",
          "**Cavusin** — [[de Kayseri|kayseri-airport-to-cavusin-shuttle]] · [[de Nevsehir|nevsehir-airport-to-cavusin-shuttle]]",
          "**Ortahisar** — [[de Kayseri|kayseri-airport-to-ortahisar-shuttle]] · [[de Nevsehir|nevsehir-airport-to-ortahisar-shuttle]]"
        ]
      }
    ],
    "faq": [
      {
        "q": "Quais aeroportos atendem a Capadócia?",
        "a": "Aeroporto de Kayseri (ASR) e Aeroporto de Nevsehir (NAV)."
      },
      {
        "q": "Posso chegar por um aeroporto e sair pelo outro?",
        "a": "Sim. Envie os dois voos pelo WhatsApp para confirmar cada trecho separadamente, pois a rota e o preço mudam conforme o aeroporto."
      },
      {
        "q": "Qual aeroporto fica mais perto do meu hotel: Kayseri ou Nevsehir?",
        "a": "Depende da cidade do hotel; NAV é mais próximo da maioria das áreas centrais. Veja [[Kayseri ou Nevsehir para a Capadócia|kayseri-or-nevsehir-airport-for-cappadocia]] para uma comparação completa."
      },
      {
        "q": "O embarque no hotel está incluído na volta ao aeroporto?",
        "a": "Sim, sujeito à confirmação da reserva e ao acesso disponível para o veículo."
      },
      {
        "q": "Quais áreas da Capadócia são atendidas?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      },
      {
        "q": "Quais dados dos passageiros são necessários?",
        "a": "Nomes dos passageiros, números de passaporte, dados do voo, nome do hotel e um contato de WhatsApp."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Transfer do Aeroporto para a Capadócia | Kayseri e Nevsehir",
    "twitterDescription": "Shuttle compartilhado ou transfer privativo de Kayseri (ASR) e Nevsehir (NAV) para Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
  },
  {
    "slug": "private-airport-transfer-cappadocia",
    "title": "Transfer privativo na Capadócia | Vito e Sprinter",
    "description": "Transfer privativo na Capadócia: Kayseri Vito €90 / Sprinter €110; Nevsehir Vito €80 / Sprinter €90. Até 5 ou 16 passageiros, pagamento em dinheiro ao motorista.",
    "eyebrow": "Veículo exclusivo",
    "h1": "Transfer privativo do Aeroporto na Capadócia",
    "lead": "Aeroporto de Kayseri: **Vito €90**, **Sprinter €110** por trecho. Aeroporto de Nevsehir: **Vito €80**, **Sprinter €90**. Os preços são por veículo, não por passageiro. Ida e volta custa €180/€220 a partir de Kayseri e €160/€180 a partir de Nevsehir.",
    "sections": [
      {
        "heading": "Mercedes Vito: até 5 passageiros",
        "paragraphs": [
          "O Vito é indicado para casais, famílias e pequenos grupos que querem um veículo exclusivo, sem paradas em hotéis de outros passageiros e com mais controle sobre o horário de saída do que no shuttle compartilhado. É a opção privativa menor para embarques no aeroporto, [[acesso a hotéis-caverna|cappadocia-cave-hotel-airport-transfer]] e saídas diretas do hotel para o aeroporto."
        ]
      },
      {
        "heading": "Mercedes Sprinter: até 16 passageiros",
        "paragraphs": [
          "O Sprinter é a opção privativa maior para grupos de até 16 pessoas. O preço varia conforme o aeroporto: €110 por trecho em Kayseri e €90 em Nevsehir. Para grupos maiores, o valor por pessoa pode ficar próximo ou até abaixo do shuttle compartilhado."
        ]
      },
      {
        "heading": "Por que Kayseri e Nevsehir têm preços diferentes",
        "paragraphs": [
          "Kayseri e Nevsehir não são o mesmo trajeto. Kayseri fica mais distante, por estrada, da maior parte da região central da Capadócia, por isso a tarifa privativa de ASR é maior. Em NAV, tanto o Vito quanto o Sprinter têm preços menores. Confira sempre o aeroporto selecionado antes de comparar valores."
        ]
      },
      {
        "heading": "Acesso ao hotel continua dependendo da rua",
        "paragraphs": [
          "Um veículo privativo elimina as paradas de outros passageiros, mas não transforma uma rua estreita em uma via acessível. Em hotéis históricos ou hospedagens em encostas, o motorista pode precisar usar o ponto seguro mais próximo onde seja possível parar. O local exato é confirmado de acordo com a propriedade real."
        ]
      },
      {
        "heading": "Reserva, passageiros e pagamento",
        "paragraphs": [
          "Para confirmar um transfer privativo, informe número do voo, nome completo do hotel, nomes dos passageiros, números de passaporte e contato de WhatsApp. O pagamento é feito em dinheiro ao motorista. Os preços publicados estão em EUR; USD ou TRY também podem ser combinados usando a cotação confirmada para a reserva."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa um Vito privativo a partir de Kayseri?",
        "a": "€90 por trecho e por veículo, para até 5 passageiros."
      },
      {
        "q": "Quanto custa um Vito privativo a partir de Nevsehir?",
        "a": "€80 por trecho e por veículo, para até 5 passageiros."
      },
      {
        "q": "Quanto custa um Sprinter a partir de Kayseri?",
        "a": "€110 por trecho e por veículo, para até 16 passageiros."
      },
      {
        "q": "Quanto custa um Sprinter a partir de Nevsehir?",
        "a": "€90 por trecho e por veículo, para até 16 passageiros."
      },
      {
        "q": "Quanto custa ida e volta?",
        "a": "Exatamente o dobro do preço de um trecho."
      },
      {
        "q": "O transfer privativo é sempre porta a porta?",
        "a": "O veículo é exclusivo para a sua reserva, mas o acesso a hotéis históricos ainda depende de a rua permitir entrada e parada com segurança."
      },
      {
        "q": "É preciso informar o passaporte no transfer privativo?",
        "a": "Sim. Os dados de passaporte dos passageiros são necessários para todas as reservas."
      },
      {
        "q": "Como é feito o pagamento?",
        "a": "Em dinheiro ao motorista."
      }
    ],
    "related": [
      "airport-transfer-prices",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Transfer privativo na Capadócia | Vito e Sprinter",
    "twitterDescription": "Transfer privativo na Capadócia com Mercedes Vito ou Sprinter, tarifas fixas para Kayseri e Nevsehir e pagamento em dinheiro ao motorista."
  },
  {
    "slug": "airport-transfer-prices",
    "title": "Preços de transfer na Capadócia | Shuttle, Vito e Sprinter",
    "description": "Preços de transfer na Capadócia: shuttle €15/pessoa/trecho. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Ida e volta custa o dobro.",
    "twitterTitle": "Preços de transfer na Capadócia | Shuttle, Vito e Sprinter",
    "twitterDescription": "Shuttle €15/pessoa. Kayseri Vito €90, Sprinter €110. Nevsehir Vito €80, Sprinter €90. Ida e volta custa exatamente o dobro.",
    "eyebrow": "Tarifas claras",
    "h1": "Preços de transfer do Aeroporto na Capadócia",
    "lead": "O shuttle custa €15 por pessoa em cada trecho a partir dos dois aeroportos. Os transfers privativos são cobrados por veículo e têm tarifas diferentes em Kayseri e Nevsehir.",
    "sections": [
      {
        "heading": "Preço do shuttle compartilhado",
        "paragraphs": [
          "Aeroporto de Kayseri (ASR) → hotéis atendidos na Capadócia: **€15 por pessoa e por trecho**. Aeroporto de Nevsehir (NAV) → hotéis atendidos: **€15 por pessoa e por trecho**. Do hotel para o aeroporto, o valor é o mesmo. Ida e volta custa €30 por pessoa. Veja os detalhes completos na [[página do shuttle|cappadocia-shuttle-transfer]]."
        ]
      },
      {
        "heading": "Preços privativos a partir do Aeroporto de Kayseri",
        "paragraphs": [
          "Mercedes Vito, máximo de 5 passageiros: **€90 só ida / €180 ida e volta**. Mercedes Sprinter, máximo de 16 passageiros: **€110 só ida / €220 ida e volta**."
        ]
      },
      {
        "heading": "Preços privativos a partir do Aeroporto de Nevsehir",
        "paragraphs": [
          "Mercedes Vito, máximo de 5 passageiros: **€80 só ida / €160 ida e volta**. Mercedes Sprinter, máximo de 16 passageiros: **€90 só ida / €180 ida e volta**. Consulte a [[página de transfer privativo|private-airport-transfer-cappadocia]] para ver os veículos e entender quando o serviço exclusivo pode compensar em relação ao shuttle."
        ]
      },
      {
        "heading": "Preço por pessoa x preço por veículo",
        "paragraphs": [
          "O total do shuttle aumenta com o número de passageiros porque a cobrança é por pessoa. No transfer privativo, a cobrança é por veículo, desde que o grupo caiba na categoria escolhida: Vito para até 5 pessoas e Sprinter para até 16. Por isso, em grupos maiores, um Sprinter pode sair mais barato por pessoa do que o shuttle, embora o valor por veículo pareça maior à primeira vista. Também não existe uma única tarifa privativa: em NAV, o Vito custa €80 e o Sprinter €90; em ASR, €90 e €110. Confira o total depois de selecionar o aeroporto."
        ]
      },
      {
        "heading": "Exemplos de total conforme o tamanho do grupo",
        "paragraphs": [
          "Duas pessoas em um shuttle só de ida pagam €30 no total. Cinco pessoas pagam €75. Seis pessoas pagam €90 no shuttle só de ida, o mesmo valor de um Sprinter a partir de Nevsehir. O Vito de Kayseri também custa €90, mas aceita no máximo 5 passageiros e, portanto, não serve para um grupo de seis. Compare o tamanho do grupo com a capacidade do veículo, não apenas o preço em destaque."
        ]
      },
      {
        "heading": "Pagamento, moeda e dados da reserva",
        "paragraphs": [
          "Os preços são publicados em EUR e o pagamento é feito em dinheiro ao motorista. Também é possível combinar pagamento em USD ou TRY usando a cotação confirmada para a reserva. Ida e volta equivale simplesmente a dois trechos pelo preço publicado, sem tarifa especial de pacote. Para reservar, ainda precisamos do número do voo, hotel, nomes e números de passaporte; a reserva é confirmada depois que esses dados forem verificados pelo WhatsApp. Isso é especialmente importante quando o acesso ao hotel é incomum, quando são usados aeroportos diferentes ou quando o pedido foge da cobertura padrão do shuttle compartilhado."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle do aeroporto na Capadócia?",
        "a": "€15 por pessoa e por trecho a partir dos aeroportos de Kayseri e Nevsehir."
      },
      {
        "q": "Quanto custa o shuttle de ida e volta?",
        "a": "€30 por pessoa."
      },
      {
        "q": "Quanto custa o Vito a partir de Kayseri?",
        "a": "€90 só ida; €180 ida e volta."
      },
      {
        "q": "Quanto custa o Sprinter a partir de Kayseri?",
        "a": "€110 só ida; €220 ida e volta."
      },
      {
        "q": "Quanto custa o Vito a partir de Nevsehir?",
        "a": "€80 só ida; €160 ida e volta."
      },
      {
        "q": "Quanto custa o Sprinter a partir de Nevsehir?",
        "a": "€90 só ida; €180 ida e volta."
      },
      {
        "q": "Os preços privativos são por pessoa?",
        "a": "Não. A cobrança é por veículo, dentro da capacidade informada."
      },
      {
        "q": "O preço muda entre Goreme e Urgup?",
        "a": "A tarifa privativa publicada para cada aeroporto é a mesma nas cidades centrais atendidas."
      },
      {
        "q": "Posso pagar em USD ou TRY?",
        "a": "Sim. O pagamento em dinheiro em USD ou TRY pode ser combinado usando a cotação confirmada para a reserva."
      },
      {
        "q": "É preciso informar os passaportes mesmo pagando em dinheiro?",
        "a": "Sim. Os dados de passaporte são necessários em todas as reservas, independentemente do método de pagamento."
      },
      {
        "q": "Há desconto para ida e volta?",
        "a": "Não há desconto específico; ida e volta custa exatamente o dobro de um trecho."
      },
      {
        "q": "Quando a reserva é confirmada?",
        "a": "Depois que os dados da reserva forem confirmados pelo WhatsApp."
      }
    ],
    "related": [
      "private-airport-transfer-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ]
  },
  {
    "slug": "kayseri-airport-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para a Capadócia | Hotéis e Aeroporto",
    "description": "Shuttle do Aeroporto de Kayseri (ASR) para hotéis na Capadócia: €15 por pessoa, pagamento ao motorista, Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar.",
    "eyebrow": "Shuttle a partir de ASR",
    "h1": "Shuttle do Aeroporto de Kayseri para a Capadócia",
    "lead": "Reserve o shuttle compartilhado de €15 por pessoa do Aeroporto Kayseri Erkilet para as hospedagens atendidas na Capadócia, com as instruções de encontro organizadas conforme o seu voo e confirmadas pelo WhatsApp.",
    "sections": [
      {
        "heading": "Shuttle de Kayseri: a rota rodoviária mais longa para a Capadócia",
        "paragraphs": [
          "ASR fica mais distante das principais cidades hoteleiras do que NAV, por isso faz sentido avaliar o trajeto com base no destino real do hotel, e não em um único tempo genérico para “Capadócia”. Goreme fica a cerca de 75 km / 60–75 minutos por estrada, e as cidades atendidas costumam ficar aproximadamente entre 70 e 80 km do aeroporto antes de eventuais paradas compartilhadas em hotéis."
        ]
      },
      {
        "heading": "A tarifa compartilhada continua sendo €15 a partir de ASR",
        "paragraphs": [
          "O shuttle compartilhado de Kayseri custa **€15 por pessoa e por trecho** e **€30 ida e volta**. A tarifa continua em €15 mesmo com ASR mais distante. Quem preferir um veículo exclusivo pode escolher Vito por €90 ou Sprinter por €110 por trecho e por veículo."
        ]
      },
      {
        "heading": "O que ter em mãos ao desembarcar em ASR",
        "paragraphs": [
          "Na reserva, informe o número do voo e o nome completo do hotel. Depois de retirar a bagagem, siga as instruções de encontro enviadas pelo WhatsApp. Os nomes e os dados de passaporte dos passageiros são necessários em todas as reservas. O nome completo do hotel ajuda a identificar a rota correta depois do encontro no aeroporto, seja a hospedagem em Goreme, Urgup, Uchisar, Avanos, Ortahisar ou Cavusin."
        ]
      },
      {
        "heading": "O tempo a partir de ASR depende da cidade do hotel",
        "paragraphs": [
          "O tempo de viagem muda conforme a cidade da hospedagem. Use a distância rodoviária e as informações de acesso específicas do seu hotel, em vez de tratar todos os trajetos como se fossem Kayseri–Goreme."
        ]
      },
      {
        "heading": "A volta para ASR tem um plano de embarque próprio",
        "paragraphs": [
          "A tarifa compartilhada de €15 também vale dos hotéis atendidos para o Aeroporto de Kayseri. A volta não é simplesmente o horário da chegada ao contrário: use os dados do voo de saída e as informações de [[Capadócia para o Aeroporto de Kayseri|cappadocia-to-kayseri-airport-shuttle]], ajustando o embarque à cidade real do seu hotel."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle do Aeroporto de Kayseri para a Capadócia?",
        "a": "€15 por pessoa e por trecho; ida e volta custa €30 por pessoa."
      },
      {
        "q": "Quanto tempo leva de ASR até Goreme por estrada?",
        "a": "Cerca de 75 km / 60–75 minutos antes de eventuais paradas compartilhadas em hotéis."
      },
      {
        "q": "Quais são os preços privativos a partir de Kayseri?",
        "a": "Vito €90 e Sprinter €110 por trecho e por veículo."
      },
      {
        "q": "Quais cidades hoteleiras são atendidas a partir de ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      },
      {
        "q": "Posso reservar ao mesmo tempo o shuttle de volta para ASR?",
        "a": "Sim. Escolha Ida e volta e informe o voo de saída como um trecho separado."
      }
    ],
    "related": [
      "cappadocia-airport-transfer",
      "cappadocia-to-kayseri-airport-shuttle",
      "kayseri-airport-to-goreme-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para a Capadócia",
    "twitterDescription": "Shuttle compartilhado por €15 por pessoa de Kayseri (ASR) para Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar. Pagamento em dinheiro ao motorista."
  },
  {
    "slug": "nevsehir-airport-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para a Capadócia | Aeroporto e hotel",
    "description": "Shuttle do Aeroporto de Nevsehir (NAV) para hotéis na Capadócia: €15 por pessoa, dinheiro ao motorista, Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar.",
    "eyebrow": "Shuttle a partir de NAV",
    "h1": "Shuttle do Aeroporto de Nevsehir para a Capadócia",
    "lead": "Reserve o shuttle compartilhado de €15 por pessoa do Aeroporto Nevsehir Kapadokya para as hospedagens atendidas na Capadócia, com instruções de encontro baseadas no voo e confirmadas pelo WhatsApp.",
    "sections": [
      {
        "heading": "Nevsehir: a porta de entrada rodoviária mais curta para muitas áreas centrais",
        "paragraphs": [
          "NAV fica mais perto, por estrada, de Goreme, Uchisar e várias outras áreas hoteleiras centrais. Uchisar está a cerca de 35 km / 30–40 minutos e Goreme a cerca de 40 km / 35–45 minutos antes de possíveis paradas compartilhadas; Urgup, Avanos, Ortahisar e Cavusin têm tempos de rota próprios."
        ]
      },
      {
        "heading": "O shuttle compartilhado de NAV custa €15 por pessoa",
        "paragraphs": [
          "O shuttle compartilhado do Aeroporto de Nevsehir custa **€15 por pessoa e por trecho** e **€30 ida e volta**. As tarifas privativas são menores do que em ASR: Vito €80 e Sprinter €90 por trecho e por veículo."
        ]
      },
      {
        "heading": "O que ter em mãos depois de pousar em NAV",
        "paragraphs": [
          "O serviço funciona com reserva antecipada, e não como um ônibus público de horário fixo; passageiros com hotéis compatíveis podem viajar no mesmo shuttle. Ao reservar, informe número do voo, nome completo do hotel, dados dos passageiros e contato de WhatsApp. Depois de retirar a bagagem, siga a instrução de encontro confirmada para o aeroporto. Mesmo em uma rota mais curta, são o número do voo e o nome completo da hospedagem que vinculam o viajante ao shuttle correto."
        ]
      },
      {
        "heading": "A cidade do hotel ainda define a rota",
        "paragraphs": [
          "O fato de NAV estar perto da região central não significa que todos os hotéis da Capadócia sigam o mesmo trajeto. Uchisar fica especialmente perto, Avanos e Urgup estão mais afastadas, e as ruas de hotéis-caverna de Goreme ou as estradas de Ortahisar e Cavusin podem mudar o acesso final. Use os tempos e as informações de acesso da cidade real do seu hotel, e não uma estimativa genérica de NAV para a Capadócia."
        ]
      },
      {
        "heading": "A volta para NAV depende da cidade do hotel",
        "paragraphs": [
          "A tarifa compartilhada de volta ao Aeroporto de Nevsehir é €15 por pessoa. Use o voo real de saída e a rota correspondente na página [[Capadócia para o Aeroporto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]], para que uma coleta em Goreme não seja planejada da mesma forma que em Uchisar, Avanos ou outra área hoteleira."
        ]
      },
      {
        "heading": "Nevsehir Kapadokya Airport e NAV se referem ao mesmo aeroporto",
        "paragraphs": [
          "Em pesquisas e documentos de viagem, você pode encontrar **Nevsehir Kapadokya Airport**, **Kapadokya Airport** ou **NAV Airport**. Para este serviço, todos esses nomes indicam o mesmo aeroporto que atende Nevsehir e a Capadócia. Na reserva, selecione NAV e informe o número real do voo."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle do Aeroporto de Nevsehir para a Capadócia?",
        "a": "€15 por pessoa e por trecho; ida e volta custa €30 por pessoa."
      },
      {
        "q": "NAV é o aeroporto mais próximo de Goreme e Uchisar?",
        "a": "Sim. Em geral, NAV fica mais perto por estrada dessas áreas centrais do que ASR."
      },
      {
        "q": "Quais são os preços de transfer privativo em Nevsehir?",
        "a": "Vito €80 e Sprinter €90 por trecho e por veículo."
      },
      {
        "q": "O shuttle de NAV funciona como um ônibus público com horário fixo?",
        "a": "Não. É um serviço compartilhado do aeroporto ao hotel, com reserva antecipada e organizado de acordo com passageiros e voos confirmados."
      },
      {
        "q": "O shuttle de NAV também pode me buscar no hotel para o voo de saída?",
        "a": "Sim. Reserve Hotel → Aeroporto ou Ida e volta e siga o horário de embarque confirmado."
      }
    ],
    "related": [
      "cappadocia-airport-transfer",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nevsehir-airport-to-goreme-shuttle",
      "nevsehir-airport-to-urgup-shuttle",
      "nevsehir-airport-to-uchisar-shuttle",
      "nevsehir-airport-to-avanos-shuttle",
      "nevsehir-airport-to-ortahisar-shuttle",
      "nevsehir-airport-to-cavusin-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para a Capadócia",
    "twitterDescription": "Shuttle compartilhado por €15 por pessoa do Aeroporto de Nevsehir (NAV) para Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar. Dinheiro ao motorista."
  },
  {
    "slug": "cappadocia-to-kayseri-airport-shuttle",
    "title": "Shuttle da Capadócia para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Shuttle de hotéis da Capadócia para o Aeroporto de Kayseri (ASR): €15 por pessoa de Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar.",
    "eyebrow": "Capadócia → ASR",
    "h1": "Shuttle da Capadócia para o Aeroporto de Kayseri",
    "lead": "Reserve o shuttle de €15 por pessoa dos hotéis atendidos na Capadócia para o Aeroporto Kayseri Erkilet, com ponto e horário de embarque confirmados a partir do seu voo de saída.",
    "sections": [
      {
        "heading": "O planejamento da saída para ASR começa antes do que a distância no mapa sugere",
        "paragraphs": [
          "Para a maioria dos hotéis da região central, o Aeroporto de Kayseri é a saída rodoviária mais longa. O horário confirmado de embarque no hotel considera o voo real de saída, a cidade, outras coletas compartilhadas e a margem necessária no aeroporto — não basta simplesmente inverter o tempo da viagem de chegada."
        ]
      },
      {
        "heading": "Seis cidades de hotéis, seis pontos de partida diferentes para a estrada de Kayseri",
        "paragraphs": [
          "O acesso ao hotel muda conforme a cidade e a propriedade, especialmente em hotéis-caverna, ruas estreitas de vilas e endereços mais difíceis de alcançar. O ponto de embarque confirmado deve corresponder à hospedagem real, e não a um local genérico da cidade."
        ]
      },
      {
        "heading": "Esteja pronto antes do início da janela de embarque para ASR",
        "paragraphs": [
          "Como a estrada até Kayseri é mais longa, esteja com a bagagem pronta e no ponto confirmado antes do início da janela de embarque. Não calcule a saída apenas pelo tempo direto de estrada; coletas em outros hotéis e a margem de chegada ao aeroporto já fazem parte do horário confirmado."
        ]
      },
      {
        "heading": "Transfer privativo para Kayseri em uma saída exclusiva",
        "paragraphs": [
          "Um Vito [[privativo|private-airport-transfer-cappadocia]] custa €90 por trecho para até 5 passageiros, e um Sprinter €110 para até 16. O serviço privativo elimina coletas em hotéis de outros passageiros, mas o veículo ainda precisa de um ponto seguro e acessível na propriedade."
        ]
      },
      {
        "heading": "Uma última conferência antes da viagem mais longa do hotel até ASR",
        "paragraphs": [
          "Antes do embarque para Kayseri, finalize o checkout, deixe a bagagem pronta e confirme o número do voo e o ponto de encontro. Um veículo compartilhado pode buscar outro hotel atendido antes de seguir pela estrada mais longa até o aeroporto, por isso trate o horário confirmado como o início da janela de embarque, e não como uma estimativa flexível."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle da Capadócia para o Aeroporto de Kayseri?",
        "a": "€15 por pessoa e por trecho."
      },
      {
        "q": "Por que não devo calcular o embarque para ASR apenas pelo tempo direto de estrada?",
        "a": "A estrada mais longa até o aeroporto, o acesso ao hotel e outras coletas compartilhadas precisam estar incluídos no horário confirmado."
      },
      {
        "q": "Quais cidades podem usar o shuttle compartilhado para ASR?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      },
      {
        "q": "Posso reservar um veículo privativo para o Aeroporto de Kayseri?",
        "a": "Sim. Vito €90 ou Sprinter €110 por trecho e por veículo."
      }
    ],
    "related": [
      "kayseri-airport-shuttle",
      "goreme-to-kayseri-airport-shuttle",
      "urgup-to-kayseri-airport-shuttle",
      "uchisar-to-kayseri-airport-shuttle",
      "avanos-to-kayseri-airport-shuttle",
      "ortahisar-to-kayseri-airport-shuttle",
      "cavusin-to-kayseri-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle da Capadócia para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Shuttle de €15 por pessoa de Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar para o Aeroporto de Kayseri (ASR). Dinheiro ao motorista."
  },
  {
    "slug": "cappadocia-to-nevsehir-airport-shuttle",
    "title": "Shuttle da Capadócia para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Shuttle de hotéis da Capadócia para o Aeroporto de Nevsehir (NAV): €15 por pessoa de Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar.",
    "eyebrow": "Capadócia → NAV",
    "h1": "Shuttle da Capadócia para o Aeroporto de Nevsehir",
    "lead": "Reserve o shuttle de €15 por pessoa dos hotéis atendidos na Capadócia para o Aeroporto Nevsehir Kapadokya, com ponto e horário de embarque confirmados a partir do seu voo de saída.",
    "sections": [
      {
        "heading": "NAV é mais perto, mas o horário de embarque no hotel continua vindo do voo",
        "paragraphs": [
          "O Aeroporto de Nevsehir tem uma distância rodoviária menor a partir de muitas cidades centrais da Capadócia, mas isso não é motivo para inventar um horário mais tarde. A coleta compartilhada é confirmada com base no voo real de saída, na localização do hotel e no planejamento dos passageiros daquele dia."
        ]
      },
      {
        "heading": "A rota curta para NAV muda conforme a cidade do hotel",
        "paragraphs": [
          "Uchisar fica especialmente perto de NAV e Goreme também é relativamente próxima, enquanto Urgup, Avanos, Ortahisar e Cavusin usam estradas locais diferentes. O horário de embarque e o ponto de encontro acessível devem corresponder à cidade real do hotel, e não a uma estimativa ampla de “Capadócia para Nevsehir”."
        ]
      },
      {
        "heading": "Esteja pronto antes do início da janela de embarque para NAV",
        "paragraphs": [
          "NAV é mais próximo de muitas cidades centrais, mas o horário confirmado ainda considera o acesso ao hotel, outras coletas compartilhadas e a margem necessária antes do voo. Deixe a bagagem pronta e esteja no ponto confirmado antes do início da janela de embarque."
        ]
      },
      {
        "heading": "Transfer privativo para Nevsehir é a alternativa direta",
        "paragraphs": [
          "Um Vito [[privativo|private-airport-transfer-cappadocia]] custa €80 por trecho para até 5 passageiros, e um Sprinter €90 para até 16. O serviço evita coletas em hotéis de outros passageiros, embora o ponto final de encontro ainda dependa do acesso seguro do veículo."
        ]
      },
      {
        "heading": "A distância menor de NAV não significa um embarque mais tarde",
        "paragraphs": [
          "Antes do embarque para Nevsehir, deixe a bagagem pronta e confirme o número do voo e o ponto de encontro. O aeroporto é mais perto de muitas cidades, mas um shuttle compartilhado ainda pode buscar outro hotel; portanto, trate o horário confirmado como o início da janela de embarque, e não como uma sugestão aproximada."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto custa o shuttle da Capadócia para o Aeroporto de Nevsehir?",
        "a": "€15 por pessoa e por trecho."
      },
      {
        "q": "Posso sair mais tarde só porque NAV é mais perto?",
        "a": "Não altere o horário por conta própria. Use o horário confirmado com base no seu voo, hotel e coleta compartilhada."
      },
      {
        "q": "Quais cidades podem usar o shuttle compartilhado para NAV?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      },
      {
        "q": "Posso reservar um veículo privativo para o Aeroporto de Nevsehir?",
        "a": "Sim. Vito €80 ou Sprinter €90 por trecho e por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-shuttle",
      "goreme-to-nevsehir-airport-shuttle",
      "urgup-to-nevsehir-airport-shuttle",
      "uchisar-to-nevsehir-airport-shuttle",
      "avanos-to-nevsehir-airport-shuttle",
      "ortahisar-to-nevsehir-airport-shuttle",
      "cavusin-to-nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle da Capadócia para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Shuttle de €15 por pessoa de Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar para o Aeroporto de Nevsehir (NAV). Dinheiro ao motorista."
  },
  {
    "slug": "goreme-airport-transfer",
    "title": "Transfer do Aeroporto para Goreme | Shuttle ASR e NAV",
    "description": "Transfer para Goreme saindo dos aeroportos de Kayseri e Nevsehir. Shuttle €15, Vito/Sprinter privativo, acesso ao hotel, tempos de rota e embarque de volta.",
    "eyebrow": "Guia de transfer para Goreme",
    "h1": "Transfer do Aeroporto para Goreme",
    "lead": "Compare os aeroportos de Kayseri e Nevsehir para uma estadia em Goreme e depois use a rota de shuttle correspondente ao seu voo.",
    "sections": [
      {
        "heading": "O planejamento do transfer em Goreme começa pelas ruas dos hotéis-caverna",
        "paragraphs": [
          "Goreme é uma das principais bases de hospedagem na Capadócia, com muitos hotéis-caverna concentrados no pequeno centro da cidade. Essa praticidade também cria um detalhe importante para o transfer: nem toda entrada de hotel fica em uma rua larga, por isso o nome completo da propriedade é mais útil do que escrever apenas “Goreme” na reserva.",
          "Muitos hotéis de Goreme têm nomes parecidos. Enviar o nome exato da reserva ajuda a diferenciar propriedades que usam palavras como “cave”, “suite”, “house” ou “stone”. Isso é especialmente útil quando uma pousada tem mais de uma entrada ou quando a recepção fica em uma rua diferente do ponto marcado no mapa."
        ]
      },
      {
        "heading": "Hotéis-caverna, ruas em encostas e pontos de desembarque acessíveis",
        "paragraphs": [
          "O acesso aos hotéis de Goreme muda de uma rua para outra. Propriedades próximas à rodoviária e à parte baixa do centro costumam ser mais fáceis de alcançar, enquanto hotéis-caverna nas encostas podem ficar em vias íngremes, estreitas ou de mão única. Se um veículo maior não puder esperar na porta, o shuttle pode usar o ponto seguro mais próximo. O [[acesso com Vito privativo|private-airport-transfer-cappadocia]] pode ser mais fácil em algumas ruas, mas o ponto exato é sempre confirmado a partir da localização real da propriedade, e não prometido antecipadamente."
        ]
      },
      {
        "heading": "ASR ou NAV: qual aeroporto funciona melhor para Goreme?",
        "paragraphs": [
          "Do Aeroporto de Kayseri (ASR) até Goreme são aproximadamente **75 km** / **60–75 min**. Do Aeroporto de Nevsehir (NAV), aproximadamente **40 km** / **35–45 min**. NAV costuma ser mais curto por estrada, mas os horários de voo podem tornar ASR a melhor escolha para a viagem como um todo. Compare [[Kayseri ou Nevsehir|kayseri-or-nevsehir-airport-for-cappadocia]] se os dois voos forem viáveis."
        ]
      },
      {
        "heading": "Hotéis e nomes de hospedagem em Goreme que vale identificar corretamente",
        "paragraphs": [
          "Os nomes conhecidos abaixo aparecem apenas para facilitar o planejamento do transfer; não se trata de um ranking de hotéis. Se a sua hospedagem não estiver na lista, o serviço ainda pode ser solicitado desde que fique dentro da área atendida de Goreme."
        ],
        "bullets": [
          "Divan Cave House",
          "Aydinli Cave Hotel",
          "Aren Cave Hotel and Art Gallery",
          "Arinna Cappadocia",
          "The Owl Cave House",
          "Chelebi Cave House",
          "Sultan Cave Suites",
          "Carus Cappadocia",
          "Cappadocia Caves Hotel",
          "A la Mode Cappadocia Hotel",
          "Cappadocia Cave Suites - Boutique Hotel",
          "Artemis Cave Suites",
          "Kelebek Cave Hotel",
          "Henna Hotel",
          "Goreme Cave Lodge",
          "Zara Cave Hotel",
          "Cappadocia Cave Lodge",
          "Vineyard Cave Hotel",
          "Aza Cave Hotel",
          "Luvi Cave Hotel",
          "Imperial Cave Suites & Spa",
          "Royal Stone Houses - Goreme",
          "Goreme Inn Hotel",
          "Cappa Cave Hotel",
          "Cappadocia Cave Land Hotel",
          "Fairyland Cave Hotel",
          "Anatolian Houses Cave Hotel & Spa",
          "Tulip Cave Suites",
          "Arch Palace",
          "Adelya Cave Hotel",
          "Mithra Cave Hotel",
          "Koza Cave Hotel",
          "Traveller's Cave Hotel",
          "Osmanli Cappadocia Hotel",
          "Local Cave House Hotel",
          "Harman Cave Hotel",
          "Historical Goreme House",
          "Roma Cave Suite Hotel",
          "Naraca Cave House",
          "Zeus Cave Suites",
          "Stone House Cave Hotel",
          "Cappadocia Elite Stone House",
          "Garden Suites Hotel Cappadocia",
          "Doors Of Cappadocia",
          "Paradise Cappadocia Hotel"
        ]
      },
      {
        "heading": "Planejando o embarque no hotel em Goreme para o voo de volta",
        "paragraphs": [
          "No dia da saída, volte ao ponto de embarque confirmado com a bagagem pronta antes do início da janela de coleta. O movimento das estradas ao nascer do sol, o clima de inverno e a ordem das coletas nos hotéis podem afetar o horário, por isso siga o horário confirmado em vez de calcular a saída apenas pela distância no mapa.",
          "Para ASR, use [[Goreme para o Aeroporto de Kayseri|goreme-to-kayseri-airport-shuttle]]; para NAV, use [[Goreme para o Aeroporto de Nevsehir|goreme-to-nevsehir-airport-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O preço do shuttle para Goreme é o mesmo saindo de Kayseri e Nevsehir?",
        "a": "Sim. O shuttle compartilhado custa €15 por pessoa em cada trecho tanto de ASR quanto de NAV. A distância muda, mas a tarifa compartilhada não."
      },
      {
        "q": "Posso reservar a chegada ao aeroporto e a volta do hotel em Goreme de uma vez?",
        "a": "Sim. Escolha Ida e volta e informe os dois números de voo e as duas datas para que a chegada e a saída sejam planejadas separadamente."
      },
      {
        "q": "Preciso escolher ASR ou NAV antes de enviar a reserva para Goreme?",
        "a": "Sim. Selecione o aeroporto indicado na passagem aérea, pois preço privativo, distância, encontro e rota de volta dependem dele."
      },
      {
        "q": "O shuttle chega à porta de todos os hotéis-caverna em Goreme?",
        "a": "Nem sempre. Algumas ruas nas encostas são estreitas demais ou inadequadas para um veículo maior, então o ponto seguro mais próximo pode ser confirmado pelo WhatsApp."
      },
      {
        "q": "O movimento dos balões interfere no embarque em Goreme?",
        "a": "Pode interferir perto do nascer do sol. O movimento das estradas e as coletas em hotéis são motivos para seguir o horário confirmado em vez de calcular apenas pela distância do mapa."
      },
      {
        "q": "Devo informar o nome do hotel ou apenas Goreme?",
        "a": "Informe o nome completo do hotel ou da hospedagem. Goreme tem muitas propriedades-caverna com nomes parecidos, e a identificação exata é importante para planejar a rota."
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-to-kayseri-airport-shuttle",
      "goreme-to-nevsehir-airport-shuttle",
      "cappadocia-airport",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Transfer do Aeroporto para Goreme | Shuttle ASR e NAV",
    "twitterDescription": "Transfer para Goreme a partir dos aeroportos de Kayseri e Nevsehir: shuttle €15, Vito/Sprinter privativo, acesso ao hotel e tempos de rota."
  },
  {
    "slug": "kayseri-airport-to-goreme-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Goreme | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Goreme: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 60–75 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Goreme · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Goreme",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Goreme em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 60–75 minutos. As ruas dos hotéis-caverna de Goreme podem influenciar o ponto de desembarque acessível, por isso o nome completo da hospedagem é importante.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "O que os 75 km desde ASR significam antes de chegar a Goreme",
        "paragraphs": [
          "Kayseri é o mais distante dos dois aeroportos normalmente usados para chegar a Goreme. A referência rodoviária publicada é de cerca de **75 km / 60–75 minutos**. Depois de retirar a bagagem, a principal variável é como o acesso final ao hotel se encaixa nesse trajeto mais longo desde ASR. Para uma visão geral do aeroporto, consulte [[Shuttle do Aeroporto de Kayseri|kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Os últimos minutos podem ser mais lentos do que a estrada principal",
        "paragraphs": [
          "Goreme fica mais compacta e íngreme nas ruas onde se concentram muitos hotéis-caverna. Mesmo quando o trajeto principal foi tranquilo, o acesso final ainda pode levar algum tempo. Informe o nome da propriedade exatamente como aparece na sua reserva para que a equipe identifique a rua correta ou o ponto de desembarque acessível.",
          "Se o seu voo chegar tarde, o melhor primeiro plano costuma ser simples: fazer o check-in e manter o restante do dia flexível. O trajeto desde ASR já representa uma parte considerável da viagem."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      },
      {
        "heading": "Se NAV ainda for uma opção, compare o voo real — não apenas a distância",
        "paragraphs": [
          "O Aeroporto de Nevsehir fica mais perto de Goreme por estrada, mas um voo melhor para ASR ainda pode resultar na viagem total mais simples. Compare [[Shuttle do Aeroporto de Nevsehir para Goreme|nevsehir-airport-to-goreme-shuttle]] se ainda não comprou a passagem. Para ver as duas opções de aeroporto juntas, consulte [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O Aeroporto de Kayseri fica longe demais para usar shuttle até Goreme?",
        "a": "Não. ASR é uma das portas de entrada habituais para a Capadócia; Goreme fica a cerca de 75 km, com estimativa rodoviária típica de 60–75 minutos antes de possíveis variações por paradas compartilhadas."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "goreme-to-kayseri-airport-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Goreme | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Goreme: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 60–75 min, desembarque no hotel e reserva."
  },
  {
    "slug": "kayseri-airport-to-urgup-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Urgup | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Urgup: shuttle compartilhado €15, Vito/Sprinter privativo, 70 km, 60–75 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Urgup · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Urgup",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Urgup em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 70 km, com tempo típico de 60–75 minutos. O centro de Urgup costuma ter acesso simples, enquanto algumas propriedades de pedra e hotéis-caverna nas encostas podem exigir uma abordagem final diferente.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Kayseri para Urgup: cerca de 70 km / 60–75 minutos",
        "paragraphs": [
          "Urgup fica no lado leste da região central da Capadócia. A referência rodoviária habitual desde o Aeroporto de Kayseri é de cerca de 70 km / 60–75 minutos. Se sua hospedagem fica em Urgup, selecione Urgup na reserva para que o acesso final ao hotel seja planejado corretamente."
        ]
      },
      {
        "heading": "O centro de Urgup e os hotéis de pedra nas encostas exigem abordagens diferentes",
        "paragraphs": [
          "Grande parte de Urgup é acessível por ruas urbanas normais, mas algumas propriedades históricas de pedra e hotéis-caverna ficam em ladeiras ou vias menores. O acesso final depende da localização real da hospedagem; não existe um único ponto de desembarque para todos os hotéis de Urgup. Informe o nome da propriedade exatamente como aparece na reserva para que a equipe planeje a abordagem correta."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes. Se preferir NAV em vez de ASR, compare [[Shuttle do Aeroporto de Nevsehir para Urgup|nevsehir-airport-to-urgup-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle do Aeroporto de Kayseri vai diretamente à hospedagem em Urgup?",
        "a": "O serviço atende hospedagens confirmadas dentro da área atendida de Urgup, sujeito ao acesso real do veículo à propriedade."
      },
      {
        "q": "Quanto tempo leva do Aeroporto de Kayseri até Urgup?",
        "a": "A estimativa rodoviária usual é de cerca de 70 km / 60–75 minutos antes de qualquer variação causada por paradas compartilhadas."
      }
    ],
    "related": [
      "urgup-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Urgup | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Urgup: shuttle compartilhado €15, Vito/Sprinter privativo, 70 km, 60–75 min, desembarque no hotel e reserva."
  },
  {
    "slug": "kayseri-airport-to-uchisar-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Uchisar | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Uchisar: shuttle compartilhado €15, Vito/Sprinter privativo, 80 km, 70–85 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Uchisar · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Uchisar",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Uchisar em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 80 km, com tempo típico de 70–85 minutos. As ruas de Uchisar nas encostas podem ser íngremes ou estreitas, por isso o acesso final ao hotel depende da propriedade exata e do acesso disponível para o veículo.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Kayseri para Uchisar: cerca de 80 km / 70–85 minutos",
        "paragraphs": [
          "Uchisar fica em uma área mais elevada do que várias localidades vizinhas, e muitos hotéis se distribuem por ruas inclinadas. A referência rodoviária habitual desde o Aeroporto de Kayseri é de cerca de 80 km / 70–85 minutos. Se sua hospedagem fica em Uchisar, selecione Uchisar na reserva para que o acesso final seja planejado corretamente."
        ]
      },
      {
        "heading": "Por que a parte final do transfer em Uchisar pode levar mais tempo",
        "paragraphs": [
          "Muitas ruas de Uchisar sobem de forma acentuada em direção à parte alta da vila, e vários hotéis de pedra e hotéis-caverna ficam em vias estreitas onde um veículo maior nem sempre consegue chegar diretamente. O acesso final depende da localização real da hospedagem; não há um único ponto de desembarque para todos os hotéis de Uchisar. Informe o nome exato da propriedade para que a equipe planeje a abordagem correta ou o ponto acessível mais próximo."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes. Se preferir NAV em vez de ASR, compare [[Shuttle do Aeroporto de Nevsehir para Uchisar|nevsehir-airport-to-uchisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle do Aeroporto de Kayseri vai diretamente à hospedagem em Uchisar?",
        "a": "O serviço atende hospedagens confirmadas dentro da área atendida de Uchisar, sujeito ao acesso real do veículo à propriedade."
      },
      {
        "q": "Quanto tempo leva do Aeroporto de Kayseri até Uchisar?",
        "a": "A estimativa rodoviária usual é de cerca de 80 km / 70–85 minutos antes de qualquer variação causada por paradas compartilhadas."
      }
    ],
    "related": [
      "uchisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Uchisar | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Uchisar: shuttle compartilhado €15, Vito/Sprinter privativo, 80 km, 70–85 min, desembarque no hotel e reserva."
  },
  {
    "slug": "kayseri-airport-to-avanos-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Avanos | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Avanos: shuttle compartilhado €15, Vito/Sprinter privativo, 70 km, 60–75 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Avanos · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Avanos",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Avanos em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 70 km, com tempo típico de 60–75 minutos. As hospedagens de Avanos ficam espalhadas por uma área maior ao redor do rio, por isso o nome completo do hotel é importante para identificar o ponto final correto.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Avanos fica às margens do rio, cerca de 70 km / 60–75 minutos de ASR",
        "paragraphs": [
          "Avanos se estende ao longo do rio e tem um traçado de ruas mais plano e aberto do que várias localidades próximas construídas em encostas. A referência rodoviária habitual desde o Aeroporto de Kayseri é de cerca de 70 km / 60–75 minutos. Se sua hospedagem fica em Avanos, selecione Avanos na reserva para que o acesso final seja planejado corretamente."
        ]
      },
      {
        "heading": "Avanos é mais espalhada do que as localidades hoteleiras nas encostas",
        "paragraphs": [
          "As hospedagens de Avanos se distribuem por uma área mais ampla e por ruas dos dois lados do rio, em vez de se concentrarem em um único centro compacto. O nome completo da hospedagem ajuda a equipe a identificar o ponto final correto, em vez de planejar apenas a partir de uma localização genérica em “Avanos”."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes. Se preferir NAV em vez de ASR, compare [[Shuttle do Aeroporto de Nevsehir para Avanos|nevsehir-airport-to-avanos-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle do Aeroporto de Kayseri vai diretamente à hospedagem em Avanos?",
        "a": "Sim, para hospedagens confirmadas dentro da área atendida de Avanos, sujeito ao acesso disponível para o veículo até a propriedade."
      },
      {
        "q": "Quanto tempo leva do Aeroporto de Kayseri até Avanos?",
        "a": "A estimativa rodoviária usual é de cerca de 70 km / 60–75 minutos antes de qualquer variação causada por paradas compartilhadas."
      }
    ],
    "related": [
      "avanos-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Avanos | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Avanos: shuttle compartilhado €15, Vito/Sprinter privativo, 70 km, 60–75 min, desembarque no hotel e reserva."
  },
  {
    "slug": "kayseri-airport-to-ortahisar-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Ortahisar | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Ortahisar: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 60–75 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Ortahisar · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Ortahisar",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Ortahisar em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 60–75 minutos. Algumas ruas de hospedagens ficam estreitas perto do centro da vila, por isso o acesso final é definido pela propriedade exata, e não apenas pelo nome Ortahisar.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Ortahisar tem ruas compactas, cerca de 75 km / 60–75 minutos de ASR",
        "paragraphs": [
          "Ortahisar é compacta, e algumas ruas onde ficam hospedagens se estreitam perto do centro da vila. A referência rodoviária habitual desde o Aeroporto de Kayseri é de cerca de 75 km / 60–75 minutos. Se sua hospedagem fica em Ortahisar, selecione Ortahisar na reserva para que o acesso final seja planejado corretamente."
        ]
      },
      {
        "heading": "Mesmo uma vila pequena exige o nome exato da propriedade",
        "paragraphs": [
          "Ser uma vila menor não significa que todos os endereços sejam simples de alcançar: algumas pousadas ficam em vias estreitas onde um veículo maior pode precisar parar antes da porta. O nome completo da hospedagem ajuda a equipe a identificar o ponto final correto e, quando necessário, o ponto de desembarque acessível mais próximo."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes. Se preferir NAV em vez de ASR, compare [[Shuttle do Aeroporto de Nevsehir para Ortahisar|nevsehir-airport-to-ortahisar-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle do Aeroporto de Kayseri vai diretamente à hospedagem em Ortahisar?",
        "a": "Sim, para hospedagens confirmadas dentro da área atendida de Ortahisar, sujeito ao acesso disponível para o veículo até a propriedade."
      },
      {
        "q": "Quanto tempo leva do Aeroporto de Kayseri até Ortahisar?",
        "a": "A estimativa rodoviária usual é de cerca de 75 km / 60–75 minutos antes de qualquer variação causada por paradas compartilhadas."
      }
    ],
    "related": [
      "ortahisar-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Ortahisar | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Ortahisar: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 60–75 min, desembarque no hotel e reserva."
  },
  {
    "slug": "kayseri-airport-to-cavusin-shuttle",
    "title": "Shuttle do Aeroporto de Kayseri para Cavusin | Compartilhado e Privativo",
    "description": "Aeroporto de Kayseri (ASR) para Cavusin: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 65–80 min, desembarque no hotel e reserva.",
    "eyebrow": "ASR → Cavusin · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Kayseri para Cavusin",
    "lead": "Viaje do Aeroporto de Kayseri (ASR) para Cavusin em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 65–80 minutos. Em Cavusin há hospedagens junto à estrada principal e outras nas ruas antigas da encosta, por isso o ponto de parada acessível depende do hotel exato.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Cavusin tem áreas de hospedagem antigas e novas, a cerca de 75 km / 65–80 minutos de ASR",
        "paragraphs": [
          "Cavusin reúne pousadas nas antigas ruas da encosta e hospedagens mais novas ao longo da estrada principal, por isso a abordagem final pode variar bastante de uma propriedade para outra. A referência rodoviária habitual desde o Aeroporto de Kayseri é de cerca de 75 km / 65–80 minutos. Se sua hospedagem fica em Cavusin, selecione Cavusin na reserva para que o acesso final seja planejado corretamente."
        ]
      },
      {
        "heading": "Por que o nome exato da propriedade em Cavusin é importante",
        "paragraphs": [
          "As hospedagens em Cavusin se distribuem entre ruas antigas na encosta e áreas mais novas junto à estrada. Uma localização genérica em “Cavusin” não é suficiente para o acesso final; o nome completo da hospedagem ajuda a equipe a identificar a parte correta da vila e o ponto de parada acessível."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes. Se preferir NAV em vez de ASR, compare [[Shuttle do Aeroporto de Nevsehir para Cavusin|nevsehir-airport-to-cavusin-shuttle]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle do Aeroporto de Kayseri atende hotéis em Cavusin?",
        "a": "O shuttle atende hospedagens confirmadas em Cavusin, mas o ponto exato de desembarque depende do acesso disponível para o veículo até a propriedade."
      },
      {
        "q": "Quanto tempo leva do Aeroporto de Kayseri até Cavusin?",
        "a": "A estimativa rodoviária usual é de cerca de 75 km / 65–80 minutos antes de qualquer variação causada por paradas compartilhadas."
      }
    ],
    "related": [
      "cavusin-to-kayseri-airport-shuttle",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Kayseri para Cavusin | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Kayseri (ASR) para Cavusin: shuttle compartilhado €15, Vito/Sprinter privativo, 75 km, 65–80 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-goreme-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Goreme | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Goreme: shuttle compartilhado €15, Vito/Sprinter privativo, 40 km, 35–45 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Goreme · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Goreme",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Goreme em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 40 km, com tempo típico de 35–45 minutos. As ruas dos hotéis-caverna de Goreme podem influenciar o ponto de desembarque acessível, por isso o nome completo da hospedagem é importante.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV é a opção rodoviária mais curta para Goreme",
        "paragraphs": [
          "A referência rodoviária habitual do Aeroporto de Nevsehir até Goreme é de cerca de 40 km / 35–45 minutos. Esse trajeto mais curto pode tornar o trecho entre aeroporto e hotel mais simples depois da chegada. Isso não significa, porém, que a entrada de todo hotel-caverna seja um ponto fácil à beira da estrada."
        ]
      },
      {
        "heading": "A estrada mais curta desde o aeroporto não elimina o acesso final ao hotel",
        "paragraphs": [
          "NAV fica mais perto de Goreme por estrada, mas os últimos minutos ainda dependem da hospedagem real. Hotéis-caverna em encostas podem exigir uma aproximação mais lenta ou um ponto de parada acessível nas proximidades, por isso o nome completo da hospedagem continua importante mesmo nesta rota mais curta.",
          "Para comparar os dois aeroportos, consulte [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]]. Se ASR tiver o melhor voo, [[Shuttle do Aeroporto de Kayseri para Goreme|kayseri-airport-to-goreme-shuttle]] continua sendo uma alternativa prática."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Nevsehir é o aeroporto mais próximo de Goreme?",
        "a": "Sim. NAV fica a cerca de 40 km de Goreme, em comparação com aproximadamente 75 km desde ASR."
      },
      {
        "q": "A rota mais curta desde NAV garante desembarque na porta do hotel?",
        "a": "Não. O acesso pelas ruas dos hotéis-caverna é uma questão local separada da distância até o aeroporto."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "goreme-to-nevsehir-airport-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Goreme | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Goreme: shuttle compartilhado €15, Vito/Sprinter privativo, 40 km, 35–45 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-urgup-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Urgup | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Urgup: shuttle compartilhado €15, Vito/Sprinter privativo, 50 km, 45–60 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Urgup · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Urgup",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Urgup em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 50 km, com tempo típico de 45–60 minutos. O centro de Urgup costuma ter acesso simples, enquanto algumas propriedades de pedra e hotéis-caverna nas encostas podem exigir uma abordagem final diferente.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "NAV encurta o trajeto regional, mas Urgup fica mais a leste do que Goreme ou Uchisar",
        "paragraphs": [
          "Do Aeroporto de Nevsehir até Urgup são cerca de **50 km / 45–60 minutos**. A rota atravessa a região central da Capadócia até uma cidade com ruas mais abertas e hospedagens mais espalhadas do que em uma vila compacta."
        ]
      },
      {
        "heading": "Shuttle para economizar, veículo privativo para um trajeto exclusivo",
        "paragraphs": [
          "Para uma ou duas pessoas, a opção compartilhada mantém o custo baixo. Um Vito privativo custa €80 por trecho para até 5 passageiros, e um Sprinter privativo €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes ou compare os tipos de serviço em [[Shuttle Compartilhado vs Transfer privativo|cappadocia-shared-shuttle-vs-private-transfer]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto tempo leva do Aeroporto de Nevsehir até Urgup?",
        "a": "A estimativa rodoviária usual é de cerca de 50 km / 45–60 minutos antes de qualquer variação causada por paradas compartilhadas."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "urgup-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Urgup | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Urgup: shuttle compartilhado €15, Vito/Sprinter privativo, 50 km, 45–60 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-uchisar-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Uchisar | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Uchisar: shuttle compartilhado €15, Vito/Sprinter privativo, 35 km, 30–40 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Uchisar · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Uchisar",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Uchisar em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 35 km, com tempo típico de 30–40 minutos. As ruas de Uchisar nas encostas podem ser íngremes ou estreitas, por isso o acesso final ao hotel depende da propriedade exata e do acesso disponível para o veículo.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Nevsehir para Uchisar: cerca de 35 km / 30–40 minutos",
        "paragraphs": [
          "O aeroporto e a cidade ficam a cerca de 35 km de distância, com estimativa rodoviária habitual de 30–40 minutos. Mesmo nesta rota mais curta, o acesso final aos hotéis nas encostas pode acrescentar tempo, dependendo da localização da propriedade e das condições de acesso."
        ]
      },
      {
        "heading": "Mesmo uma rota curta exige o nome completo da hospedagem",
        "paragraphs": [
          "As ruas de Uchisar ficam mais estreitas e íngremes em direção à parte alta da vila, por isso a curta distância até o aeroporto não elimina a necessidade de planejar com cuidado o acesso final ao hotel. O nome completo da hospedagem ajuda a equipe a definir o ponto final correto ou o ponto de desembarque acessível mais próximo.",
          "Chegando por ASR? Veja [[Shuttle do Aeroporto de Kayseri para Uchisar|kayseri-airport-to-uchisar-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto tempo leva do Aeroporto de Nevsehir até Uchisar por estrada?",
        "a": "A estimativa rodoviária usual é de cerca de 35 km / 30–40 minutos, antes de qualquer tempo extra por paradas compartilhadas ou pelo acesso final ao hotel."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "uchisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Uchisar | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Uchisar: shuttle compartilhado €15, Vito/Sprinter privativo, 35 km, 30–40 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-avanos-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Avanos | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Avanos: shuttle compartilhado €15, Vito/Sprinter privativo, 38 km, 35–50 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Avanos · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Avanos",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Avanos em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 38 km, com tempo típico de 35–50 minutos. As hospedagens de Avanos ficam espalhadas por uma área maior ao redor do rio, por isso o nome completo do hotel é importante para identificar o ponto final correto.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Nevsehir para Avanos: cerca de 38 km / 35–50 minutos",
        "paragraphs": [
          "A estimativa rodoviária habitual do Aeroporto de Nevsehir até Avanos é de cerca de 38 km / 35–50 minutos. As hospedagens ficam espalhadas por diferentes partes da cidade, por isso o nome completo da propriedade ajuda a equipe a identificar o ponto final correto em vez de depender apenas de uma localização genérica em “Avanos”."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Avanos fica perto do Aeroporto de Nevsehir?",
        "a": "A estimativa rodoviária habitual é de cerca de 38 km / 35–50 minutos."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "avanos-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Avanos | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Avanos: shuttle compartilhado €15, Vito/Sprinter privativo, 38 km, 35–50 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-ortahisar-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Ortahisar | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Ortahisar: shuttle compartilhado €15, Vito/Sprinter privativo, 45 km, 40–50 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Ortahisar · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Ortahisar",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Ortahisar em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 45 km, com tempo típico de 40–50 minutos. Algumas ruas de hospedagens ficam estreitas perto do centro da vila, por isso o acesso final é confirmado a partir da propriedade exata, e não apenas do nome Ortahisar.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Nevsehir para Ortahisar: cerca de 45 km / 40–50 minutos",
        "paragraphs": [
          "A estimativa rodoviária habitual do Aeroporto de Nevsehir até Ortahisar é de cerca de 45 km / 40–50 minutos. Os últimos minutos dentro da vila podem variar conforme a rua da hospedagem e o acesso disponível para o veículo."
        ]
      },
      {
        "heading": "Por que o nome completo da hospedagem é importante em Ortahisar",
        "paragraphs": [
          "Ortahisar é compacta, e algumas ruas onde ficam hospedagens se estreitam perto do centro da vila. O nome completo da propriedade ajuda a equipe a identificar o ponto de parada correto, pois apenas “Ortahisar” não é preciso o suficiente para planejar o acesso ao hotel.",
          "Vai sair depois por NAV? Veja [[Shuttle de Ortahisar para o Aeroporto de Nevsehir|ortahisar-to-nevsehir-airport-shuttle]] para a viagem de volta."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Ortahisar faz parte da rota do shuttle compartilhado saindo de NAV?",
        "a": "Sim. Há shuttle compartilhado do Aeroporto de Nevsehir (NAV) para hospedagens em Ortahisar."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "ortahisar-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Ortahisar | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Ortahisar: shuttle compartilhado €15, Vito/Sprinter privativo, 45 km, 40–50 min, desembarque no hotel e reserva."
  },
  {
    "slug": "nevsehir-airport-to-cavusin-shuttle",
    "title": "Shuttle do Aeroporto de Nevsehir para Cavusin | Compartilhado e Privativo",
    "description": "Aeroporto de Nevsehir (NAV) para Cavusin: shuttle compartilhado €15, Vito/Sprinter privativo, 42 km, 40–55 min, desembarque no hotel e reserva.",
    "eyebrow": "NAV → Cavusin · shuttle do aeroporto",
    "h1": "Shuttle do Aeroporto de Nevsehir para Cavusin",
    "lead": "Viaje do Aeroporto de Nevsehir (NAV) para Cavusin em shuttle compartilhado por €15 por pessoa e por trecho, ou escolha um Vito ou Sprinter privativo. A distância rodoviária usual é de cerca de 42 km, com tempo típico de 40–55 minutos. Em Cavusin há hospedagens junto à estrada principal e outras nas ruas antigas da encosta, por isso o ponto de parada acessível depende do hotel exato.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "arrival"
    },
    "sections": [
      {
        "heading": "Aeroporto de Nevsehir para Cavusin: cerca de 42 km / 40–55 minutos",
        "paragraphs": [
          "A estimativa rodoviária habitual do Aeroporto de Nevsehir até Cavusin é de cerca de 42 km / 40–55 minutos. As hospedagens podem ficar na estrada principal da vila, perto do núcleo antigo ou mais próximas dos acessos ao vale, por isso o nome completo da propriedade é importante para planejar o ponto final correto."
        ]
      },
      {
        "heading": "O trânsito no início da manhã pode afetar a aproximação final",
        "paragraphs": [
          "O movimento matinal nas áreas próximas aos vales e aos locais de decolagem dos balões pode afetar a parte final da rota até Cavusin, mesmo que a distância total desde NAV seja relativamente curta."
        ]
      },
      {
        "heading": "ASR continua sendo uma alternativa quando o voo é melhor",
        "paragraphs": [
          "A opção mais longa é [[Shuttle do Aeroporto de Kayseri para Cavusin|kayseri-airport-to-cavusin-shuttle]]. Como o preço do shuttle compartilhado é o mesmo saindo de qualquer um dos aeroportos, a conveniência do voo pode pesar mais do que escolher apenas a estrada mais curta."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Cavusin é um destino de shuttle separado de Goreme?",
        "a": "Sim. Cavusin e Goreme são áreas diferentes de embarque e desembarque, por isso o nome completo da hospedagem é necessário para identificar a parada correta."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "cavusin-to-nevsehir-airport-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle do Aeroporto de Nevsehir para Cavusin | Compartilhado e Privativo",
    "twitterDescription": "Aeroporto de Nevsehir (NAV) para Cavusin: shuttle compartilhado €15, Vito/Sprinter privativo, 42 km, 40–55 min, desembarque no hotel e reserva."
  },
  {
    "slug": "goreme-to-kayseri-airport-shuttle",
    "title": "Shuttle de Goreme para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Goreme para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Goreme → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Goreme para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Goreme com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 60–75 minutos. As ruas íngremes e dos hotéis-caverna de Goreme podem acrescentar tempo ao embarque antes de o veículo alcançar a estrada principal. Siga o horário de embarque confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "ASR exige uma margem real de saída desde Goreme",
        "paragraphs": [
          "De Goreme ao Aeroporto de Kayseri são cerca de 75 km / 60–75 minutos por estrada. O horário de embarque confirmado também considera outras coletas em hotéis e a margem necessária para chegar ao aeroporto, por isso pode ser mais cedo do que a duração da estrada, isoladamente, sugere."
        ]
      },
      {
        "heading": "Por que o horário de embarque em Goreme pode variar",
        "paragraphs": [
          "As coletas compartilhadas em hotéis de Goreme podem acrescentar tempo antes de o veículo chegar à estrada principal, especialmente quando várias estão programadas. Siga o horário confirmado enviado para sua reserva em vez de calcular a saída apenas pelo tempo de viagem. Nas manhãs de balões, o trânsito local também pode aumentar antes de o veículo alcançar a estrada aberta.",
          "Vai voar por NAV? Veja [[Shuttle de Goreme para o Aeroporto de Nevsehir|goreme-to-nevsehir-airport-shuttle]]. Para comparar os dois aeroportos, consulte [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Por que o embarque em Goreme pode ser mais cedo do que os 60–75 minutos de estrada sugerem?",
        "a": "Uma saída compartilhada pode incluir tempo para coletas em hotéis, além da margem necessária no aeroporto antes do voo."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Goreme para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Goreme para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "urgup-to-kayseri-airport-shuttle",
    "title": "Shuttle de Urgup para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Urgup para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 70 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Urgup → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Urgup para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Urgup com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 70 km, com tempo típico de 60–75 minutos. As hospedagens de Urgup se distribuem entre ruas centrais e áreas nas encostas, por isso o ponto de embarque confirmado é importante antes de começar o trajeto ao aeroporto. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Por que o ponto de embarque em Urgup é importante",
        "paragraphs": [
          "As hospedagens de Urgup se distribuem entre ruas centrais e áreas nas encostas, por isso a própria coleta no hotel pode acrescentar tempo antes de o veículo chegar à estrada principal. Esteja pronto no ponto confirmado, sem presumir que o veículo conseguirá entrar em todas as vias antigas da cidade."
        ]
      },
      {
        "heading": "Urgup para o Aeroporto de Kayseri: cerca de 70 km / 60–75 minutos",
        "paragraphs": [
          "A estimativa rodoviária é de cerca de 70 km / 60–75 minutos. Siga o horário de embarque confirmado em vez de calcular por conta própria a hora de saída apenas com base na distância.",
          "Para o sentido de chegada, use [[Shuttle do Aeroporto de Kayseri para Urgup|kayseri-airport-to-urgup-shuttle]]. Vai voar por NAV? Veja [[Shuttle de Urgup para o Aeroporto de Nevsehir|urgup-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "O centro de Urgup e as propriedades nas encostas têm acessos de embarque diferentes",
        "paragraphs": [
          "Hotéis centrais costumam ter acesso mais simples para veículos. Propriedades em encostas e hotéis de pedra podem exigir alguns minutos extras para o veículo alcançar o ponto de embarque confirmado, por isso deixe a bagagem pronta com antecedência em saídas de manhã cedo."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle compartilhado pode me buscar em um hotel-caverna de Urgup para ir a ASR?",
        "a": "Sim, sujeito ao ponto de acesso do veículo confirmado para essa hospedagem."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-urgup-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Urgup para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Urgup para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 70 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "uchisar-to-kayseri-airport-shuttle",
    "title": "Shuttle de Uchisar para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Uchisar para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 80 km, 70–85 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Uchisar → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Uchisar para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Uchisar com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 80 km, com tempo típico de 70–85 minutos. As ruas íngremes da parte alta de Uchisar podem exigir um ponto de embarque acessível em vez de acesso direto a todas as portas de hotéis. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar para o Aeroporto de Kayseri: cerca de 80 km / 70–85 minutos",
        "paragraphs": [
          "A estimativa rodoviária habitual de Uchisar ao Aeroporto de Kayseri é de cerca de 80 km / 70–85 minutos. Como a viagem é relativamente longa, seguir o horário de embarque confirmado é importante para a saída ao aeroporto."
        ]
      },
      {
        "heading": "Por que o ponto de embarque em Uchisar é importante",
        "paragraphs": [
          "As ruas de Uchisar ficam mais estreitas e íngremes em direção à parte alta da vila, por isso o veículo pode precisar usar um ponto alternativo em vez de chegar diretamente a todas as portas. Esteja pronto no ponto confirmado antes de começar a janela de embarque, pois o trajeto mais longo até ASR deixa menos margem para recuperar um atraso na saída.",
          "Vai voar por NAV? Veja [[Shuttle de Uchisar para o Aeroporto de Nevsehir|uchisar-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto tempo leva de Uchisar ao Aeroporto de Kayseri por estrada?",
        "a": "A estimativa rodoviária habitual é de cerca de 80 km / 70–85 minutos."
      },
      {
        "q": "E se meu hotel ficar em uma rua íngreme de Uchisar?",
        "a": "Siga o ponto de embarque confirmado e esteja lá com sua bagagem antes do início da janela de embarque."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-uchisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Uchisar para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Uchisar para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 80 km, 70–85 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "avanos-to-kayseri-airport-shuttle",
    "title": "Shuttle de Avanos para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Avanos para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 70 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Avanos → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Avanos para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Avanos com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 70 km, com tempo típico de 60–75 minutos. As hospedagens de Avanos ficam espalhadas por diferentes partes da cidade, por isso o nome completo do hotel ajuda a confirmar o ponto correto de embarque. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos para o Aeroporto de Kayseri: cerca de 70 km / 60–75 minutos",
        "paragraphs": [
          "A estimativa de 60–75 minutos cobre apenas o trajeto rodoviário. Em uma saída compartilhada, siga o horário de embarque confirmado enviado para sua reserva, pois as coletas em hotéis e a margem de chegada ao aeroporto são consideradas separadamente do tempo de estrada.",
          "As hospedagens de Avanos se distribuem por diferentes partes da cidade, por isso o nome completo da propriedade ajuda a equipe a confirmar o ponto correto de embarque, em vez de depender de uma localização genérica em “Avanos”.",
          "Vai voar por NAV? Veja [[Shuttle de Avanos para o Aeroporto de Nevsehir|avanos-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Onde o shuttle vai me buscar em Avanos para ir ao Aeroporto de Kayseri?",
        "a": "O embarque é organizado na hospedagem confirmada ou no ponto acessível mais próximo, conforme o acesso do veículo."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-avanos-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Avanos para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Avanos para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 70 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "ortahisar-to-kayseri-airport-shuttle",
    "title": "Shuttle de Ortahisar para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Ortahisar para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Ortahisar → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Ortahisar para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Ortahisar com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 60–75 minutos. As ruas estreitas da parte antiga da vila podem influenciar os primeiros minutos da coleta, por isso o ponto de encontro confirmado é importante. Siga o horário de embarque confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar para o Aeroporto de Kayseri: cerca de 75 km / 60–75 minutos",
        "paragraphs": [
          "A estimativa rodoviária cobre apenas o trajeto; o horário real de embarque também depende de outras coletas compartilhadas em hotéis e da margem de chegada ao aeroporto. O acesso pela parte antiga da vila pode influenciar os primeiros minutos, por isso o ponto confirmado para sua hospedagem é a referência importante para começar a viagem, e não apenas a distância por estrada."
        ]
      },
      {
        "heading": "Por que o horário de embarque em Ortahisar é importante",
        "paragraphs": [
          "Um veículo compartilhado pode fazer outras coletas em hotéis antes de deixar Ortahisar, e as ruas estreitas da vila podem influenciar o tempo necessário para chegar ao ponto confirmado. Deixe a bagagem pronta antes do início da janela de embarque para que o veículo siga até o Aeroporto de Kayseri sem atrasos desnecessários.",
          "Vai voar por NAV? Veja [[Shuttle de Ortahisar para o Aeroporto de Nevsehir|ortahisar-to-nevsehir-airport-shuttle]]. Para o sentido de chegada, consulte [[Shuttle do Aeroporto de Kayseri para Ortahisar|kayseri-airport-to-ortahisar-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Por que devo estar pronto com antecedência para uma coleta Ortahisar–ASR?",
        "a": "Uma saída compartilhada pode incluir outras coletas em hotéis, por isso siga o horário confirmado enviado para sua reserva."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-ortahisar-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Ortahisar para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Ortahisar para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 60–75 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "cavusin-to-kayseri-airport-shuttle",
    "title": "Shuttle de Cavusin para o Aeroporto de Kayseri | Embarque no hotel",
    "description": "Cavusin para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 65–80 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Cavusin → ASR · shuttle para o aeroporto",
    "h1": "Shuttle de Cavusin para o Aeroporto de Kayseri",
    "lead": "O embarque no hotel em Cavusin com destino ao Aeroporto de Kayseri (ASR) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 75 km, com tempo típico de 65–80 minutos. As hospedagens de Cavusin podem ficar perto da estrada principal, da vila antiga ou de áreas próximas aos vales, por isso o ponto de embarque confirmado é importante. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "kayseri",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin para o Aeroporto de Kayseri: cerca de 75 km / 65–80 minutos",
        "paragraphs": [
          "A estimativa rodoviária cobre apenas o trajeto; o horário real de embarque também depende de outras coletas compartilhadas e da margem de chegada ao aeroporto. As hospedagens de Cavusin podem ficar junto à estrada principal, mais perto da vila antiga ou em direção aos acessos dos vales, por isso o ponto confirmado para sua hospedagem é o que realmente importa ao planejar a saída."
        ]
      },
      {
        "heading": "As manhãs de balões podem aumentar o trânsito local em Cavusin",
        "paragraphs": [
          "A atividade dos balões no início da manhã pode aumentar o movimento local em Cavusin, por isso esteja no ponto de embarque confirmado antes de começar a janela indicada.",
          "Vai voar por NAV? Veja [[Shuttle de Cavusin para o Aeroporto de Nevsehir|cavusin-to-nevsehir-airport-shuttle]]."
        ]
      },
      {
        "heading": "A vila antiga e a estrada principal não são o mesmo ambiente de embarque",
        "paragraphs": [
          "Como as hospedagens de Cavusin se dividem entre diferentes partes da vila, o veículo precisa do ponto de embarque confirmado, e não de uma localização genérica em “Cavusin”, especialmente em uma manhã de saída para o Aeroporto de Kayseri."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Por que o ponto exato de embarque em Cavusin é importante para uma saída por ASR?",
        "a": "As hospedagens se distribuem entre a estrada principal, a vila antiga e áreas próximas aos acessos dos vales, por isso o ponto confirmado ajuda a evitar atrasos antes da viagem ao Aeroporto de Kayseri."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €90 por trecho para até 5 passageiros, e o Sprinter €110 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "kayseri-airport-to-cavusin-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Cavusin para o Aeroporto de Kayseri | Embarque no hotel",
    "twitterDescription": "Cavusin para o Aeroporto de Kayseri (ASR): shuttle €15 por pessoa, 75 km, 65–80 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "goreme-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Goreme para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Goreme para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 40 km, 35–45 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Goreme → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Goreme para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Goreme com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 40 km, com tempo típico de 35–45 minutos. As ruas íngremes e dos hotéis-caverna de Goreme podem acrescentar tempo local à coleta antes de o veículo chegar à estrada principal. Siga o horário de embarque confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "goreme",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Goreme para o Aeroporto de Nevsehir: cerca de 40 km / 35–45 minutos",
        "paragraphs": [
          "O trajeto rodoviário é relativamente curto, mas o horário de embarque confirmado também considera outras coletas em hotéis e a margem necessária para chegar ao aeroporto."
        ]
      },
      {
        "heading": "A coleta em hotel-caverna pode acrescentar tempo antes de sair de Goreme",
        "paragraphs": [
          "A estrada de Goreme até NAV é curta, mas uma hospedagem em caverna ou em uma encosta ainda pode acrescentar tempo local antes de o veículo deixar Goreme. Em uma saída cedo, mantenha a bagagem pronta e esteja no ponto confirmado no horário, mesmo que o trajeto até NAV seja relativamente curto.",
          "Para voos por Kayseri, use [[Shuttle de Goreme para o Aeroporto de Kayseri|goreme-to-kayseri-airport-shuttle]]. Para comparar os dois aeroportos, consulte [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Qual é a distância de Goreme até o Aeroporto de Nevsehir?",
        "a": "A estimativa rodoviária habitual é de cerca de 40 km / 35–45 minutos. O trânsito e outras coletas confirmadas podem alterar o tempo total."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-goreme-shuttle",
      "goreme-airport-transfer",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Goreme para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Goreme para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 40 km, 35–45 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "urgup-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Urgup para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Urgup para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 50 km, 45–60 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Urgup → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Urgup para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Urgup com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 50 km, com tempo típico de 45–60 minutos. As hospedagens de Urgup se distribuem entre ruas centrais e áreas nas encostas, por isso o ponto de embarque confirmado é importante antes de começar o trajeto ao aeroporto. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "urgup",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Urgup para o Aeroporto de Nevsehir: cerca de 50 km / 45–60 minutos",
        "paragraphs": [
          "A estimativa rodoviária cobre apenas o trajeto; o horário real de embarque também depende de outras coletas compartilhadas em hotéis e da margem de chegada ao aeroporto."
        ]
      },
      {
        "heading": "Por que o ponto de embarque confirmado é importante em Urgup",
        "paragraphs": [
          "Algumas hospedagens na parte antiga de Urgup podem exigir um ponto de embarque alternativo, dependendo do acesso do veículo. Siga o ponto confirmado para sua reserva em vez de depender apenas da estimativa rodoviária.",
          "Vai voar por Kayseri? Veja [[Shuttle de Urgup para o Aeroporto de Kayseri|urgup-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto tempo leva de Urgup ao Aeroporto de Nevsehir por estrada?",
        "a": "A estimativa rodoviária habitual é de cerca de 50 km / 45–60 minutos."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-urgup-shuttle",
      "kayseri-airport-to-urgup-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Urgup para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Urgup para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 50 km, 45–60 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "uchisar-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Uchisar para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Uchisar para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 35 km, 30–40 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Uchisar → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Uchisar para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Uchisar com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 35 km, com tempo típico de 30–40 minutos. As ruas íngremes da parte alta de Uchisar podem exigir um ponto de embarque acessível em vez de acesso direto a todas as portas de hotéis. Siga o horário de embarque confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "uchisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Uchisar para o Aeroporto de Nevsehir: cerca de 35 km / 30–40 minutos",
        "paragraphs": [
          "A estimativa rodoviária é de cerca de 35 km / 30–40 minutos, mas o horário confirmado de embarque também considera outras coletas em hotéis e a margem de chegada ao aeroporto."
        ]
      },
      {
        "heading": "Mesmo uma distância curta exige um ponto de embarque confirmado",
        "paragraphs": [
          "As ruas de Uchisar ficam mais estreitas e íngremes em direção à parte alta da vila, por isso a curta distância até o aeroporto não elimina a necessidade de um ponto de embarque específico e confirmado, em vez de uma localização genérica em “Uchisar”.",
          "Vai voar por ASR? Veja [[Shuttle de Uchisar para o Aeroporto de Kayseri|uchisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Os 30–40 minutos são suficientes para eu calcular sozinho o horário de saída do hotel?",
        "a": "Não. Os 30–40 minutos são apenas a estimativa rodoviária. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto."
      },
      {
        "q": "Por que vocês precisam do número do meu voo de saída do Aeroporto de Nevsehir?",
        "a": "Ele ajuda a equipe a confirmar seu voo de partida e a planejar o horário de embarque da sua reserva."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-uchisar-shuttle",
      "kayseri-airport-to-uchisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Uchisar para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Uchisar para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 35 km, 30–40 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "avanos-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Avanos para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Avanos para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 38 km, 35–50 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Avanos → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Avanos para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Avanos com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 38 km, com tempo típico de 35–50 minutos. As hospedagens de Avanos ficam espalhadas por diferentes partes da cidade, por isso o nome completo do hotel ajuda a confirmar o ponto correto de embarque. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "avanos",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Avanos para o Aeroporto de Nevsehir: cerca de 38 km / 35–50 minutos",
        "paragraphs": [
          "A estimativa rodoviária cobre apenas o trajeto; o horário real de embarque também depende de outras coletas compartilhadas em hotéis e da margem de chegada ao aeroporto. As hospedagens de Avanos ficam espalhadas por diferentes partes da cidade, por isso o nome completo da propriedade ajuda a equipe a confirmar o ponto correto de embarque em vez de depender de uma localização genérica em “Avanos”.",
          "Vai voar por ASR? Veja [[Shuttle de Avanos para o Aeroporto de Kayseri|avanos-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Quanto tempo leva de Avanos ao Aeroporto de Nevsehir por estrada?",
        "a": "A estimativa rodoviária habitual é de cerca de 38 km / 35–50 minutos."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-avanos-shuttle",
      "kayseri-airport-to-avanos-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Avanos para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Avanos para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 38 km, 35–50 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "ortahisar-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Ortahisar para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Ortahisar para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 45 km, 40–50 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Ortahisar → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Ortahisar para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Ortahisar com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 45 km, com tempo típico de 40–50 minutos. As ruas estreitas da parte antiga da vila podem influenciar os primeiros minutos da coleta, por isso o ponto de encontro confirmado é importante. Siga o horário de embarque confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "ortahisar",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Ortahisar para o Aeroporto de Nevsehir: cerca de 45 km / 40–50 minutos",
        "paragraphs": [
          "A estimativa rodoviária cobre apenas o trajeto; o horário real de embarque também depende de outras coletas compartilhadas em hotéis e da margem de chegada ao aeroporto. O acesso pela parte antiga da vila pode influenciar os primeiros minutos, por isso o ponto confirmado para sua hospedagem é o que realmente importa ao planejar a saída."
        ]
      },
      {
        "heading": "Mesmo uma viagem curta até NAV exige um embarque confirmado em Ortahisar",
        "paragraphs": [
          "O trajeto até o Aeroporto de Nevsehir é relativamente curto, mas as ruas estreitas da vila ainda podem influenciar onde o shuttle compartilhado consegue encontrar você. Use o ponto confirmado para sua hospedagem e esteja pronto antes da janela de embarque, em vez de planejar a saída apenas com base nos 40–50 minutos de estrada.",
          "Vai voar por ASR? Veja [[Shuttle de Ortahisar para o Aeroporto de Kayseri|ortahisar-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "Onde o shuttle vai me buscar em Ortahisar para ir ao Aeroporto de Nevsehir?",
        "a": "O embarque é organizado na hospedagem confirmada ou no ponto acessível mais próximo, conforme o acesso do veículo."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-ortahisar-shuttle",
      "kayseri-airport-to-ortahisar-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Ortahisar para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Ortahisar para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 45 km, 40–50 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "cavusin-to-nevsehir-airport-shuttle",
    "title": "Shuttle de Cavusin para o Aeroporto de Nevsehir | Embarque no hotel",
    "description": "Cavusin para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 42 km, 40–55 min, embarque no hotel e opção privativa Vito/Sprinter.",
    "eyebrow": "Cavusin → NAV · shuttle para o aeroporto",
    "h1": "Shuttle de Cavusin para o Aeroporto de Nevsehir",
    "lead": "O embarque no hotel em Cavusin com destino ao Aeroporto de Nevsehir (NAV) está disponível por shuttle compartilhado a €15 por pessoa ou por Vito/Sprinter privativo. A distância rodoviária usual é de cerca de 42 km, com tempo típico de 40–55 minutos. As hospedagens de Cavusin podem ficar perto da estrada principal, da vila antiga ou de áreas próximas aos vales, por isso o ponto de embarque confirmado é importante. Siga o horário confirmado, que também considera outras coletas compartilhadas e a margem de chegada ao aeroporto.",
    "route": {
      "airport": "nevsehir",
      "town": "cavusin",
      "direction": "return"
    },
    "sections": [
      {
        "heading": "Cavusin para o Aeroporto de Nevsehir: cerca de 42 km / 40–55 minutos",
        "paragraphs": [
          "A estimativa rodoviária é de cerca de 42 km / 40–55 minutos, mas o horário confirmado de embarque também considera outras coletas compartilhadas em hotéis e a margem de chegada ao aeroporto."
        ]
      },
      {
        "heading": "Um ponto de embarque claro importa mais do que a curta distância",
        "paragraphs": [
          "As hospedagens de Cavusin podem se distribuir entre a estrada da vila e áreas próximas aos vales. Um ponto de embarque claro e confirmado ajuda a evitar atrasos causados por encontros no lugar errado. O acesso do veículo a todas as entradas não é garantido, por isso siga o ponto confirmado ou o ponto acessível mais próximo.",
          "Vai voar por ASR? Veja [[Shuttle de Cavusin para o Aeroporto de Kayseri|cavusin-to-kayseri-airport-shuttle]]."
        ]
      },
      {
        "heading": "Transfer privativo nesta rota",
        "paragraphs": [
          "Prefere um veículo exclusivo? O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16. Veja [[Transfer privativo do Aeroporto|private-airport-transfer-cappadocia]] para todos os detalhes."
        ]
      }
    ],
    "faq": [
      {
        "q": "A atividade dos balões no início da manhã afeta saídas de Cavusin para NAV?",
        "a": "Em algumas manhãs ela pode deixar as ruas locais mais movimentadas, por isso esteja pronto no ponto de embarque confirmado."
      },
      {
        "q": "Onde o shuttle vai me buscar em Cavusin para ir ao Aeroporto de Nevsehir?",
        "a": "O embarque é organizado na hospedagem confirmada ou no ponto acessível mais próximo, conforme o acesso do veículo."
      },
      {
        "q": "Posso reservar um veículo privativo nesta rota em vez do shuttle compartilhado?",
        "a": "Sim. O Vito privativo custa €80 por trecho para até 5 passageiros, e o Sprinter €90 para até 16, ambos por veículo."
      }
    ],
    "related": [
      "nevsehir-airport-to-cavusin-shuttle",
      "kayseri-airport-to-cavusin-shuttle",
      "nevsehir-airport-shuttle",
      "cappadocia-to-kayseri-airport-shuttle",
      "cappadocia-shared-shuttle-vs-private-transfer",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle de Cavusin para o Aeroporto de Nevsehir | Embarque no hotel",
    "twitterDescription": "Cavusin para o Aeroporto de Nevsehir (NAV): shuttle €15 por pessoa, 42 km, 40–55 min, embarque no hotel e opção privativa Vito/Sprinter."
  },
  {
    "slug": "cappadocia-airport",
    "title": "Guia dos Aeroportos da Capadócia | NAV, ASR e Shuttle",
    "description": "Guia dos aeroportos da Capadócia: Nevsehir Kapadokya (NAV), Kayseri (ASR), transfer para Goreme, shuttle €15 e opções privativas.",
    "eyebrow": "Guia de aeroportos",
    "h1": "Aeroportos da Capadócia: NAV, ASR e Transfer para Hotéis",
    "lead": "A expressão “Aeroporto da Capadócia” pode se referir ao Aeroporto Nevsehir Kapadokya (NAV), enquanto o Aeroporto de Kayseri (ASR) também é muito usado em viagens à região. Para a reserva, o código que aparece na sua passagem aérea é o que realmente importa.",
    "sections": [
      {
        "heading": "Qual é o Aeroporto da Capadócia?",
        "paragraphs": [
          "O Aeroporto Nevsehir Kapadokya usa o código IATA **NAV** e é o aeroporto cujo nome oficial inclui Kapadokya/Capadócia. No planejamento de viagem, porém, “aeroporto da Capadócia” também é usado de forma ampla para as duas principais portas de entrada da região: NAV e o Aeroporto de Kayseri **ASR**. Por isso, na reserva do transfer para o hotel, use o código que aparece na passagem, e não apenas a palavra Capadócia.",
          "Se ainda estiver escolhendo o voo, compare [[Aeroporto mais próximo da Capadócia|nearest-airport-to-cappadocia]] e [[Kayseri ou Nevsehir para a Capadócia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de comprar a passagem."
        ]
      },
      {
        "heading": "Aeroporto Nevsehir Kapadokya (NAV)",
        "paragraphs": [
          "NAV normalmente oferece o trajeto rodoviário mais curto para a região central da Capadócia. As estimativas publicadas incluem Goreme em cerca de **40 km / 35–45 minutos**, Uchisar 35 km / 30–40 minutos, Avanos 38 km / 35–50 minutos, Cavusin 42 km / 40–55 minutos, Ortahisar 45 km / 40–50 minutos e Urgup 50 km / 45–60 minutos, antes de possíveis paradas compartilhadas.",
          "O [[shuttle do Aeroporto de Nevsehir|nevsehir-airport-shuttle]] custa **€15 por pessoa e por trecho**. No privativo, a tarifa de ida é Vito €80 para até 5 passageiros ou Sprinter €90 para até 16."
        ]
      },
      {
        "heading": "Aeroporto de Kayseri (ASR)",
        "paragraphs": [
          "ASR fica mais distante por estrada, mas é muito usado para a Capadócia porque horários e disponibilidade de voos podem tornar a viagem total mais conveniente. Goreme fica a cerca de **75 km / 60–75 minutos**, e as outras cidades atendidas costumam ficar na faixa de 70–80 km antes de paradas compartilhadas.",
          "O [[shuttle do Aeroporto de Kayseri|kayseri-airport-shuttle]] também custa **€15 por pessoa e por trecho**. No privativo, a tarifa de ida é Vito €90 ou Sprinter €110. Como o valor do shuttle é o mesmo, você pode comparar os voos sem pagar mais no serviço compartilhado por escolher Kayseri."
        ]
      },
      {
        "heading": "Aeroporto da Capadócia para Goreme: primeiro identifique NAV ou ASR",
        "paragraphs": [
          "Goreme pode ser acessada pelos dois aeroportos, então “Aeroporto da Capadócia para Goreme” não é específico o suficiente para uma reserva. Para NAV, use [[Nevsehir para Goreme|nevsehir-airport-to-goreme-shuttle]]; para ASR, [[Kayseri para Goreme|kayseri-airport-to-goreme-shuttle]]. A página [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]] reúne as duas opções, acesso a hotéis-caverna e detalhes do embarque de volta."
        ]
      },
      {
        "heading": "Do aeroporto ao hotel: shuttle ou veículo privativo",
        "paragraphs": [
          "O shuttle de €15 é a principal opção econômica para Goreme, Urgup, Uchisar, Avanos, Ortahisar e Cavusin. Como é compartilhado, outros passageiros e paradas em hotéis podem fazer parte do percurso. Quem quiser um veículo exclusivo pode escolher Vito ou Sprinter; as tarifas privativas são por veículo, e não por pessoa.",
          "A solicitação de reserva reúne aeroporto, sentido da viagem, dados do voo, hotel, contato de WhatsApp e dados dos passageiros, incluindo números de passaporte necessários em todas as reservas. O pagamento é feito em dinheiro ao motorista depois da confirmação."
        ]
      },
      {
        "heading": "Voltando da Capadócia para o aeroporto",
        "paragraphs": [
          "Na saída, a pergunta útil deixa de ser “qual é o Aeroporto da Capadócia?” e passa a ser “qual aeroporto aparece no meu voo de saída?”. Use [[Capadócia para o Aeroporto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]] para NAV ou [[Capadócia para o Aeroporto de Kayseri|cappadocia-to-kayseri-airport-shuttle]] para ASR. O horário de embarque é confirmado a partir do voo real e do plano de coleta compartilhada, e não por uma regra fixa de relógio."
        ]
      },
      {
        "heading": "NAV ou ASR: confirme o código na sua passagem",
        "paragraphs": [
          "A expressão “Aeroporto da Capadócia” pode indicar Nevsehir Kapadokya (NAV), enquanto Kayseri (ASR) também é amplamente usado. Para reservar, precisamos do código que aparece na sua passagem. Se ainda não escolheu o voo, consulte [[Aeroporto mais próximo da Capadócia|nearest-airport-to-cappadocia]]."
        ]
      }
    ],
    "faq": [
      {
        "q": "Existe mesmo um aeroporto chamado Aeroporto da Capadócia?",
        "a": "Nevsehir Kapadokya (NAV) leva Kapadokya/Capadócia no nome oficial. Kayseri (ASR) também é um dos principais aeroportos usados para a região."
      },
      {
        "q": "Qual é o código do Aeroporto da Capadócia?",
        "a": "Não existe um único código para todos os viajantes. NAV é Nevsehir Kapadokya e ASR é Kayseri."
      },
      {
        "q": "Qual aeroporto da Capadócia fica mais perto de Goreme?",
        "a": "Nevsehir Kapadokya (NAV) fica mais perto de Goreme por estrada."
      },
      {
        "q": "Quanto custa o shuttle saindo de NAV ou ASR?",
        "a": "€15 por pessoa e por trecho de qualquer um dos aeroportos para as áreas hoteleiras centrais atendidas."
      },
      {
        "q": "O que significa NAV Airport?",
        "a": "NAV é o código IATA do Aeroporto Nevsehir Kapadokya."
      },
      {
        "q": "Posso usar o Aeroporto de Kayseri para ir a Goreme?",
        "a": "Sim. ASR fica mais longe por estrada do que NAV, mas é uma porta de entrada comum para a Capadócia."
      },
      {
        "q": "Goreme tem aeroporto próprio?",
        "a": "Não. Os voos comerciais usam NAV ou ASR."
      },
      {
        "q": "Posso chegar por NAV e sair por ASR?",
        "a": "Sim, mas cada trecho deve ser confirmado separadamente porque a rota e a tarifa privativa são diferentes."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "nevsehir-airport-shuttle",
      "kayseri-airport-shuttle",
      "cappadocia-airport-transfer"
    ],
    "twitterTitle": "Guia dos Aeroportos da Capadócia | NAV, ASR e Shuttle",
    "twitterDescription": "Guia de Nevsehir (NAV) e Kayseri (ASR): códigos, preços do shuttle, opções privativas e cidades atendidas."
  },
  {
    "slug": "nearest-airport-to-cappadocia",
    "title": "Aeroporto Mais Próximo da Capadócia | NAV x ASR",
    "description": "Qual aeroporto fica mais perto da Capadócia? Compare Nevsehir NAV e Kayseri ASR por distância, tempo de transfer e preço do shuttle para Goreme e outras cidades.",
    "eyebrow": "Guia para escolher o aeroporto",
    "h1": "Aeroporto Mais Próximo da Capadócia",
    "lead": "O Aeroporto de Nevsehir geralmente fica mais perto por estrada da região central da Capadócia, mas Kayseri ainda pode ser a melhor opção quando o horário ou a tarifa do voo são mais convenientes.",
    "sections": [
      {
        "heading": "A Capadócia tem duas opções práticas de aeroporto",
        "paragraphs": [
          "Nevsehir Kapadokya (NAV) e Kayseri Erkilet (ASR) são os principais aeroportos usados por quem se hospeda na região central da Capadócia. NAV fica mais perto de Goreme, Uchisar e muitas áreas centrais; ASR exige mais estrada, mas pode ter um voo que se encaixe melhor no roteiro."
        ]
      },
      {
        "heading": "O mais próximo nem sempre é o melhor",
        "paragraphs": [
          "Um transfer mais curto ajuda, mas um horário ruim ou uma conexão cara podem anular essa vantagem. Compare a viagem completa desde a sua origem, e não apenas os quilômetros finais por estrada. O shuttle custa €15 por pessoa a partir dos dois aeroportos, então escolher ASR não aumenta a tarifa compartilhada."
        ]
      },
      {
        "heading": "Exemplo: Goreme",
        "paragraphs": [
          "NAV para Goreme tem aproximadamente 40 km / 35–45 minutos. ASR para Goreme tem cerca de 75 km / 60–75 minutos antes de paradas compartilhadas. Para acesso ao hotel e detalhes da chegada, compare [[Nevsehir para Goreme|nevsehir-airport-to-goreme-shuttle]] com [[Kayseri para Goreme|kayseri-airport-to-goreme-shuttle]]."
        ]
      },
      {
        "heading": "Outras cidades podem mudar a comparação",
        "paragraphs": [
          "Uchisar fica especialmente perto de NAV, enquanto Kayseri pode fazer mais sentido em acessos a leste, como Urgup. Compare sempre a cidade onde você realmente vai se hospedar, em vez de tratar toda a Capadócia como se fosse Goreme."
        ]
      },
      {
        "heading": "Aeroporto mais próximo de Uchisar, Goreme e Urgup",
        "paragraphs": [
          "NAV tem uma vantagem clara de distância para Uchisar e Goreme. Urgup fica mais a leste, então a diferença é menor do que em Uchisar. Avanos, Ortahisar e Cavusin têm números próprios de rota. Confira a cidade real do hotel antes de decidir o que “mais próximo” significa para a sua viagem."
        ]
      },
      {
        "heading": "O nome do aeroporto não muda a cobertura de hotéis",
        "paragraphs": [
          "Os shuttles de ASR e NAV atendem as mesmas cidades centrais incluídas. Escolher Kayseri não significa perder acesso a Goreme ou Uchisar; significa apenas uma viagem rodoviária mais longa. Da mesma forma, NAV não garante uma viagem total mais rápida se a conexão aérea for pior."
        ]
      },
      {
        "heading": "O privativo é mais barato em Nevsehir; o shuttle custa o mesmo",
        "paragraphs": [
          "O shuttle custa €15 por pessoa nos dois aeroportos. No privativo, NAV custa €80/€90 para Vito/Sprinter e ASR €90/€110. Essa diferença pesa mais para grupos que querem um veículo exclusivo."
        ]
      }
    ],
    "faq": [
      {
        "q": "Qual é o aeroporto mais próximo da Capadócia?",
        "a": "Nevsehir Kapadokya (NAV) geralmente é o principal aeroporto mais próximo da região central; Kayseri (ASR) é a outra grande porta de entrada."
      },
      {
        "q": "O Aeroporto de Kayseri fica longe da Capadócia?",
        "a": "Fica mais distante por estrada do que NAV, mas continua sendo um aeroporto comum e prático para a região."
      },
      {
        "q": "Qual aeroporto fica mais perto de Goreme?",
        "a": "Aeroporto de Nevsehir."
      },
      {
        "q": "O shuttle é mais barato saindo de NAV?",
        "a": "Não. O shuttle compartilhado custa €15 por pessoa saindo de qualquer um dos dois aeroportos."
      },
      {
        "q": "Qual aeroporto fica mais perto de Uchisar?",
        "a": "Nevsehir Kapadokya (NAV) tem uma forte vantagem de distância para Uchisar."
      },
      {
        "q": "Qual aeroporto devo escolher se o voo para Kayseri for muito melhor?",
        "a": "Compare a viagem completa. Um voo melhor para ASR pode compensar o transfer rodoviário mais longo."
      }
    ],
    "related": [
      "cappadocia-airport",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Aeroporto Mais Próximo da Capadócia | NAV x ASR",
    "twitterDescription": "Compare Nevsehir (NAV) e Kayseri (ASR) por distância, tempo de transfer, preço do shuttle e acesso às cidades da Capadócia."
  },
  {
    "slug": "kayseri-or-nevsehir-airport-for-cappadocia",
    "title": "Kayseri ou Nevsehir para a Capadócia? | Comparação ASR x NAV",
    "description": "Kayseri ou Nevsehir para a Capadócia? Compare ASR e NAV por distância até Goreme, horários de voo, shuttle €15 e preços de transfer privativo.",
    "eyebrow": "Comparação de aeroportos",
    "h1": "Kayseri ou Nevsehir: qual aeroporto escolher para a Capadócia?",
    "lead": "Nevsehir costuma ser mais perto por estrada; Kayseri pode ser a melhor viagem quando oferece um voo mais conveniente. Como o shuttle custa €15 nos dois aeroportos, vale comparar o itinerário completo.",
    "sections": [
      {
        "heading": "A diferença principal é a distância por estrada",
        "paragraphs": [
          "NAV fica mais perto de Goreme, Uchisar e de boa parte da região central. ASR exige uma viagem rodoviária mais longa para essas áreas. A vantagem muda um pouco conforme a cidade do hotel, então compare o destino real, não apenas uma distância genérica para “Capadócia”."
        ]
      },
      {
        "heading": "Horário e preço do voo podem superar a vantagem de NAV",
        "paragraphs": [
          "Um voo direto ou com horário muito melhor para Kayseri pode deixar a viagem total mais simples, mesmo com mais estrada depois do pouso. Se NAV exigir uma conexão ruim, espera longa ou tarifa muito maior, a diferença terrestre pode deixar de ser decisiva."
        ]
      },
      {
        "heading": "O shuttle compartilhado custa €15 nos dois aeroportos",
        "paragraphs": [
          "A tarifa do shuttle é igual em NAV e ASR: **€15 por pessoa e por trecho**. Isso permite escolher o aeroporto com base em voo e distância sem pagar um adicional no serviço compartilhado."
        ]
      },
      {
        "heading": "O transfer privativo favorece Nevsehir no preço",
        "paragraphs": [
          "Em NAV, Vito custa €80 e Sprinter €90 por trecho. Em ASR, Vito custa €90 e Sprinter €110. Para famílias ou grupos, essa diferença pode pesar mais do que para quem usará o shuttle compartilhado."
        ]
      },
      {
        "heading": "Compare a cidade exata do hotel",
        "paragraphs": [
          "Uchisar tem uma vantagem forte de NAV; Goreme também fica bem mais perto de Nevsehir. Urgup, Avanos, Ortahisar e Cavusin têm distâncias próprias. As tabelas abaixo usam as mesmas cifras publicadas nas rotas específicas do site."
        ]
      },
      {
        "heading": "Chegada e saída podem usar aeroportos diferentes",
        "paragraphs": [
          "Você pode chegar por NAV e sair por ASR, ou o contrário. Nesse caso, trate cada trecho como uma viagem específica para aquele aeroporto, pois a rota, o horário e a tarifa privativa mudam. Envie os dois voos para confirmação."
        ]
      },
      {
        "heading": "Decisão prática",
        "paragraphs": [
          "Se os voos forem parecidos em preço e horário, NAV normalmente oferece menos estrada para a parte central da Capadócia. Se ASR tiver um voo muito melhor, a viagem rodoviária maior pode valer a pena. Não escolha apenas pelo nome do aeroporto."
        ]
      }
    ],
    "faq": [
      {
        "q": "Qual é melhor para Goreme: Kayseri ou Nevsehir?",
        "a": "NAV é mais perto por estrada, mas ASR pode ser melhor se oferecer um voo claramente mais conveniente."
      },
      {
        "q": "O shuttle custa mais saindo de Kayseri?",
        "a": "Não. O shuttle compartilhado custa €15 por pessoa e por trecho nos dois aeroportos."
      },
      {
        "q": "Qual é mais barato no transfer privativo?",
        "a": "Nevsehir: Vito €80 e Sprinter €90, contra €90 e €110 em Kayseri."
      },
      {
        "q": "Posso chegar por um aeroporto e sair pelo outro?",
        "a": "Sim. Confirme cada trecho separadamente com o voo e aeroporto corretos."
      },
      {
        "q": "Qual aeroporto é mais perto de Uchisar?",
        "a": "Nevsehir Kapadokya Airport (NAV)."
      }
    ],
    "related": [
      "nearest-airport-to-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Kayseri ou Nevsehir para a Capadócia? | ASR x NAV",
    "twitterDescription": "Compare Kayseri (ASR) e Nevsehir (NAV) por distância, voos, shuttle €15 e preços de transfer privativo antes de escolher."
  },
  {
    "slug": "cappadocia-shared-shuttle-vs-private-transfer",
    "title": "Shuttle Compartilhado x Transfer privativo na Capadócia",
    "description": "Compare shuttle compartilhado e transfer privativo na Capadócia: €15 por pessoa ou Vito/Sprinter por veículo, capacidade, paradas, horários e cobertura.",
    "eyebrow": "Compare as opções",
    "h1": "Shuttle Compartilhado x Transfer privativo na Capadócia",
    "lead": "O shuttle compartilhado é a opção econômica a €15 por pessoa e por trecho. O transfer privativo cobra por veículo e é indicado para quem quer um carro exclusivo, grupos maiores ou menos paradas alheias à reserva.",
    "sections": [
      {
        "heading": "Como funciona o shuttle compartilhado",
        "paragraphs": [
          "O shuttle reúne passageiros confirmados com voos e hotéis compatíveis. Pode haver outras pessoas e paradas em diferentes hospedagens no mesmo percurso. A tarifa é **€15 por pessoa e por trecho** tanto de Kayseri quanto de Nevsehir."
        ]
      },
      {
        "heading": "Como funciona o transfer privativo",
        "paragraphs": [
          "No privativo, o veículo é dedicado à sua reserva. O Vito leva até 5 passageiros e o Sprinter até 16. O preço é por veículo, e não por pessoa: Kayseri €90/€110 e Nevsehir €80/€90 para Vito/Sprinter por trecho."
        ]
      },
      {
        "heading": "Quando o shuttle faz mais sentido",
        "paragraphs": [
          "Para uma ou duas pessoas, ou pequenos grupos que aceitam compartilhar o veículo, o shuttle costuma ser a opção de melhor custo. Ele também mantém a mesma tarifa nos dois aeroportos."
        ]
      },
      {
        "heading": "Quando o privativo pode compensar",
        "paragraphs": [
          "Grupos maiores podem encontrar um custo por pessoa competitivo no Sprinter, especialmente em Nevsehir. O privativo também elimina paradas de outros passageiros e oferece um veículo exclusivo, embora o acesso final ao hotel ainda dependa das condições da rua."
        ]
      },
      {
        "heading": "Cobertura das localidades",
        "paragraphs": [
          "O shuttle compartilhado atende Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar. A reserva deve incluir a cidade e o nome completo da hospedagem para confirmar o ponto correto."
        ]
      },
      {
        "heading": "Acesso a hotéis não muda só porque o veículo é privativo",
        "paragraphs": [
          "Um Vito pode entrar em algumas ruas onde um veículo maior teria mais dificuldade, mas nenhuma categoria garante acesso à porta de toda hospedagem histórica. Em ruas estreitas ou íngremes, usa-se o ponto seguro mais próximo quando necessário."
        ]
      },
      {
        "heading": "Preço total depende do tamanho do grupo",
        "paragraphs": [
          "No shuttle, multiplique €15 pelo número de passageiros e por trecho. No privativo, use o preço do veículo dentro da capacidade escolhida. Em ida e volta, o total é exatamente o dobro."
        ]
      },
      {
        "heading": "Escolha pela viagem real, não apenas pelo rótulo do serviço",
        "paragraphs": [
          "Compare número de passageiros, aeroporto, necessidade de um veículo exclusivo e tolerância a paradas compartilhadas. Depois, confirme voo, hotel e passageiros pelo WhatsApp antes de considerar a reserva concluída."
        ]
      }
    ],
    "faq": [
      {
        "q": "Qual opção é mais barata para uma pessoa?",
        "a": "Normalmente o shuttle compartilhado, a €15 por trecho."
      },
      {
        "q": "O transfer privativo é cobrado por pessoa?",
        "a": "Não. Vito e Sprinter são cobrados por veículo dentro da capacidade indicada."
      },
      {
        "q": "Quantas pessoas cabem no Vito e no Sprinter?",
        "a": "Vito até 5 passageiros; Sprinter até 16."
      },
      {
        "q": "O shuttle faz paradas em outros hotéis?",
        "a": "Pode fazer, porque é um serviço compartilhado organizado com outros passageiros confirmados."
      },
      {
        "q": "O privativo chega sempre à porta do hotel?",
        "a": "Não necessariamente. O acesso final depende de a rua permitir uma parada segura do veículo."
      },
      {
        "q": "Qual é a cobertura do shuttle compartilhado?",
        "a": "Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
      }
    ],
    "related": [
      "cappadocia-shuttle-transfer",
      "private-airport-transfer-cappadocia",
      "airport-transfer-prices"
    ],
    "twitterTitle": "Shuttle Compartilhado x Transfer privativo na Capadócia",
    "twitterDescription": "Compare €15 por pessoa no shuttle com Vito/Sprinter privativo por veículo, capacidade, paradas, horários e cobertura."
  },
  {
    "slug": "cappadocia-cave-hotel-airport-transfer",
    "title": "Transfer para hotéis-caverna na Capadócia | Acesso e embarque",
    "description": "Transfer do aeroporto para hotéis-caverna na Capadócia: informe o nome completo da hospedagem, entenda ruas estreitas e confirme o ponto de embarque acessível ou desembarque.",
    "eyebrow": "Acesso a hotéis-caverna",
    "h1": "Transfer do Aeroporto para hotéis-caverna na Capadócia",
    "lead": "Hotéis-caverna e hospedagens históricas podem ficar em ruas estreitas, íngremes ou onde veículos grandes não conseguem parar. O nome completo da propriedade ajuda a confirmar o ponto acessível mais próximo para embarque ou desembarque.",
    "sections": [
      {
        "heading": "Por que o nome completo do hotel é importante",
        "paragraphs": [
          "Na Capadócia, muitas propriedades usam palavras parecidas como cave, suite, house, stone e boutique. Informe o nome completo que aparece na sua reserva e a cidade da hospedagem. Um pin do mapa pode ajudar, mas não deve substituir o nome correto da propriedade."
        ]
      },
      {
        "heading": "Quando o veículo não consegue parar na porta",
        "paragraphs": [
          "Algumas ruas antigas são estreitas, íngremes ou inadequadas para um shuttle ou Sprinter esperar com segurança. Nesse caso, um ponto acessível próximo pode ser confirmado pelo WhatsApp. Isso é uma questão normal de acesso e não significa que a cidade esteja fora da área atendida."
        ]
      },
      {
        "heading": "Acesso a hotéis-caverna em Goreme",
        "paragraphs": [
          "Goreme concentra muitas hospedagens em ruas compactas e encostas. O acesso pode variar bastante entre hotéis próximos. Informe sempre o nome exato da propriedade e siga o ponto confirmado para a reserva. Veja também [[Transfer do Aeroporto para Goreme|goreme-airport-transfer]]."
        ]
      },
      {
        "heading": "Outras cidades históricas também precisam de confirmação de acesso",
        "paragraphs": [
          "Uchisar, Urgup, Ortahisar e Cavusin também têm hospedagens em ruas antigas ou inclinadas. Avanos é mais espalhada ao redor do rio. Em todas elas, o nome completo do hotel é mais útil para planejar o acesso do que apenas o nome da cidade."
        ]
      },
      {
        "heading": "Chegada e saída exigem o mesmo cuidado com o ponto real",
        "paragraphs": [
          "Na chegada, o objetivo é desembarcar no ponto seguro mais próximo da hospedagem. Na saída, esteja com a bagagem pronta no ponto confirmado antes do início da janela de embarque. Não presuma que o mesmo lugar usado por um táxi pequeno serve para um shuttle maior."
        ]
      },
      {
        "heading": "Shuttle compartilhado ou Vito privativo",
        "paragraphs": [
          "O shuttle custa €15 por pessoa e pode usar um veículo maior conforme o número de passageiros. Um Vito privativo pode ser mais prático em algumas ruas, mas também não há garantia de acesso até a porta. O ponto final depende da rua e da possibilidade de parada segura."
        ]
      }
    ],
    "faq": [
      {
        "q": "O shuttle chega à porta de qualquer hotel-caverna?",
        "a": "Não. Em algumas ruas, o ponto seguro mais próximo é usado e confirmado para a reserva."
      },
      {
        "q": "O que devo informar na reserva?",
        "a": "Nome completo da hospedagem, cidade, voo, dados dos passageiros e contato de WhatsApp."
      },
      {
        "q": "Um Vito privativo sempre consegue entrar onde o shuttle não entra?",
        "a": "Não. Ele pode ser mais prático em algumas ruas, mas o acesso continua dependendo das condições reais e da possibilidade de parada segura."
      },
      {
        "q": "Hotéis de Goreme exigem atenção especial ao nome?",
        "a": "Sim. Há muitas propriedades com nomes parecidos e o nome exato ajuda a identificar o endereço correto."
      },
      {
        "q": "É possível organizar embarque no hotel para a saída?",
        "a": "Sim, usando o ponto confirmado para a propriedade."
      }
    ],
    "related": [
      "goreme-airport-transfer",
      "cappadocia-airport-transfer",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Transfer para hotéis-caverna na Capadócia",
    "twitterDescription": "Embarque e desembarque em hotéis-caverna das áreas atendidas, com nome completo da hospedagem, observações de acesso e pontos confirmados."
  },
  {
    "slug": "istanbul-to-cappadocia",
    "title": "Istambul para a Capadócia | Voo e Shuttle do Aeroporto",
    "description": "Istambul para a Capadócia: voe de IST/SAW para Kayseri ASR ou Nevsehir NAV e continue em shuttle de €15 até o hotel na Capadócia.",
    "eyebrow": "Guia de voo + transfer",
    "h1": "Istambul para a Capadócia: Voo e Transfer do Aeroporto",
    "lead": "Para a maioria dos visitantes, a rota prática é voar de Istambul para Kayseri (ASR) ou Nevsehir (NAV) e depois continuar em um shuttle reservado com antecedência até o hotel.",
    "sections": [
      {
        "heading": "Voe em vez de tratar o trajeto como um transfer rodoviário",
        "paragraphs": [
          "Este serviço não opera um shuttle compartilhado direto por estrada de Istambul para a Capadócia. O normal é voar de Istanbul Airport (IST) ou Sabiha Gokcen (SAW) para ASR ou NAV e continuar de lá em shuttle do aeroporto."
        ]
      },
      {
        "heading": "Escolha ASR ou NAV pensando no itinerário completo",
        "paragraphs": [
          "NAV fica mais perto por estrada de muitos hotéis da Capadócia; ASR pode ter um horário ou uma tarifa de voo que compense o trajeto terrestre mais longo. O shuttle custa €15 nos dois aeroportos, então compare primeiro os voos."
        ]
      },
      {
        "heading": "Depois de pousar na Capadócia",
        "paragraphs": [
          "Retire a bagagem, siga as instruções de encontro confirmadas pelo WhatsApp e use o nome da reserva para se identificar no aeroporto. A reserva precisa do número correto do voo, hotel, nomes e números de passaporte."
        ]
      },
      {
        "heading": "Áreas de desembarque nos hotéis",
        "paragraphs": [
          "O serviço compartilhado atende Goreme, Urgup, Uchisar, Avanos, Cavusin e Ortahisar."
        ]
      },
      {
        "heading": "Organize o transfer a partir do voo, não apenas do aeroporto de Istambul",
        "paragraphs": [
          "Istambul tem dois aeroportos principais, IST e SAW, enquanto na ponta da Capadócia normalmente são usados ASR ou NAV. Para o transfer, o dado importante é o voo que realmente pousa em Kayseri ou Nevsehir. Informe esse número para que a coordenação da chegada corresponda ao pouso correto."
        ]
      },
      {
        "heading": "Reserve tempo para retirar a bagagem antes de encontrar o shuttle",
        "paragraphs": [
          "O shuttle não começa na porta do avião. Depois do pouso, conclua a retirada da bagagem e siga para o ponto de encontro usando as instruções confirmadas pelo WhatsApp. Isso é especialmente útil para quem faz conexão em Istambul e pode estar cansado ou pouco familiarizado com o aeroporto final."
        ]
      },
      {
        "heading": "A volta para Istambul segue o fluxo hotel → aeroporto",
        "paragraphs": [
          "Na viagem de volta, o shuttle busca na área confirmada do hotel e segue para ASR ou NAV, de onde parte o voo doméstico para Istambul. Use o [[guia Capadócia para Istambul|cappadocia-to-istanbul]] e combine o embarque no hotel com o aeroporto de saída e a cidade real da hospedagem."
        ]
      }
    ],
    "faq": [
      {
        "q": "Há shuttle direto de Istambul para a Capadócia?",
        "a": "Não como parte deste serviço compartilhado de aeroporto. Voe para ASR ou NAV e use o shuttle a partir de lá."
      },
      {
        "q": "Quais aeroportos de Istambul têm voos para a Capadócia?",
        "a": "Viajantes costumam usar IST ou SAW para voos a Kayseri ou Nevsehir; consulte os horários atuais das companhias para as suas datas."
      },
      {
        "q": "Qual aeroporto da Capadócia devo escolher?",
        "a": "NAV fica mais perto por estrada; ASR pode ser melhor se o horário do voo for mais conveniente."
      },
      {
        "q": "Quanto custa o shuttle depois do pouso?",
        "a": "€15 por pessoa a partir de ASR ou NAV."
      },
      {
        "q": "Devo reservar o shuttle usando o número do meu voo em Istambul?",
        "a": "Use o número do voo que pousa em Kayseri ou Nevsehir para a chegada à Capadócia."
      },
      {
        "q": "Posso reservar o shuttle de volta para o meu voo a Istambul?",
        "a": "Sim. Use o voo de saída de ASR ou NAV e a direção Hotel → Aeroporto."
      },
      {
        "q": "A retirada de bagagem está incluída no tempo de estrada publicado?",
        "a": "Não. As estimativas rodoviárias começam depois dos procedimentos no aeroporto; a bagagem é retirada antes do início do trajeto de shuttle."
      }
    ],
    "related": [
      "cappadocia-airport",
      "cappadocia-to-istanbul",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "kayseri-airport-shuttle",
      "nevsehir-airport-shuttle"
    ],
    "twitterTitle": "Istambul para a Capadócia: Voo e Transfer do Aeroporto",
    "twitterDescription": "Voe de Istambul (IST/SAW) para Kayseri (ASR) ou Nevsehir (NAV) e continue em shuttle de €15 até o hotel em uma cidade atendida."
  },
  {
    "slug": "cappadocia-to-istanbul",
    "title": "Capadócia para Istambul | Shuttle ao Aeroporto e Voo",
    "description": "Guia Capadócia para Istambul: embarque no hotel para NAV ou ASR, planejamento do voo, contexto de distância e horário de coleta.",
    "eyebrow": "Capadócia → Istambul",
    "h1": "Capadócia para Istambul: Shuttle do Hotel e Voo",
    "lead": "Para a maioria dos viajantes em estadias curtas, a volta prática é um embarque no hotel para Nevsehir (NAV) ou Kayseri (ASR), seguido de voo para Istambul. O shuttle cobre o trecho hotel → aeroporto; a parte até Istambul é aérea.",
    "sections": [
      {
        "heading": "O transfer para o aeroporto é a primeira etapa, não toda a viagem até Istambul",
        "paragraphs": [
          "Este serviço **não** opera um shuttle compartilhado por estrada da Capadócia até Istambul. Reserve o trecho do hotel até o aeroporto na Capadócia e depois use a passagem aérea de NAV ou ASR para Istambul. Assim, um serviço regional de aeroporto fica separado de uma viagem intermunicipal muito mais longa."
        ]
      },
      {
        "heading": "Escolha NAV ou ASR a partir do voo de saída",
        "paragraphs": [
          "NAV costuma ficar mais perto de Goreme, Uchisar e outras cidades centrais. ASR fica mais distante, mas pode oferecer um horário ou tarifa de voo melhores. O shuttle compartilhado do hotel para o aeroporto custa **€15 por pessoa** em ambos; as tarifas privativas são NAV €80/€90 e ASR €90/€110 para Vito/Sprinter.",
          "Se ainda não escolheu o aeroporto de saída, compare [[Aeroporto mais próximo da Capadócia|nearest-airport-to-cappadocia]] e [[Kayseri ou Nevsehir para a Capadócia|kayseri-or-nevsehir-airport-for-cappadocia]] antes de comprar o voo."
        ]
      },
      {
        "heading": "Distância Capadócia–Istambul: não é a distância do shuttle",
        "paragraphs": [
          "De Goreme ao centro de Istambul são aproximadamente **725 km** por estrada, uma viagem muito diferente dos transfers de 35–80 km dentro da Capadócia. O valor exato muda conforme o ponto em Istambul e a cidade de origem. Para a maioria dos visitantes com tempo limitado, voar de NAV ou ASR é a forma prática de separar a longa viagem intermunicipal do curto transfer hotel → aeroporto."
        ]
      },
      {
        "heading": "Embarque no hotel antes do voo para Istambul",
        "paragraphs": [
          "Informe o número do voo de saída, nome completo da hospedagem, dados dos passageiros e contato de WhatsApp. O horário é confirmado com base no voo real e na ordem das coletas compartilhadas. Não calcule a saída apenas pelo tempo direto de estrada, pois o shuttle pode buscar outros hotéis antes de sair da Capadócia. Use [[Capadócia para o Aeroporto de Nevsehir|cappadocia-to-nevsehir-airport-shuttle]] ou [[Capadócia para o Aeroporto de Kayseri|cappadocia-to-kayseri-airport-shuttle]] conforme o voo e combine o horário e o ponto de encontro com Goreme, Urgup, Uchisar, Avanos, Ortahisar ou Cavusin, de acordo com a sua hospedagem."
        ]
      },
      {
        "heading": "O horário de embarque no dia da saída muda conforme a cidade",
        "paragraphs": [
          "O horário pode variar entre Goreme, Urgup, Uchisar, Avanos, Ortahisar e Cavusin porque o acesso por estrada e os pontos de parada acessíveis são diferentes. Siga o horário e o ponto confirmados para a reserva em vez de planejar apenas pelo tempo direto de estrada."
        ]
      },
      {
        "heading": "Voo de volta para IST ou SAW",
        "paragraphs": [
          "Istanbul Airport (IST) e Sabiha Gokcen (SAW) são aeroportos diferentes. Depois de escolher o voo da Capadócia, siga o aeroporto indicado na reserva da companhia aérea. A reserva do shuttle se baseia no aeroporto de saída na Capadócia — NAV ou ASR —, e não em chegar a IST ou SAW."
        ]
      },
      {
        "heading": "Não confunda a distância até Istambul com o horário de embarque para o aeroporto",
        "paragraphs": [
          "A longa distância rodoviária até Istambul é útil para decidir entre voar e viajar por terra, mas nunca deve ser usada para calcular o embarque no hotel. O transfer termina em NAV ou ASR, e o horário é confirmado a partir do voo de saída e do plano de coletas compartilhadas."
        ]
      }
    ],
    "faq": [
      {
        "q": "Há shuttle direto da Capadócia para Istambul?",
        "a": "Não como parte deste serviço de aeroporto. O fluxo normal é transfer do hotel para NAV ou ASR e depois voo para Istambul."
      },
      {
        "q": "Qual é a distância da Capadócia até Istambul por estrada?",
        "a": "De Goreme ao centro de Istambul são cerca de 725 km; a distância exata muda conforme o ponto de partida e de chegada."
      },
      {
        "q": "Qual aeroporto devo usar para voar da Capadócia para Istambul?",
        "a": "Escolha o voo de NAV ou ASR que melhor se encaixe no seu horário; NAV costuma ficar mais perto por estrada da região central."
      },
      {
        "q": "Quanto custa o shuttle do hotel até o aeroporto?",
        "a": "€15 por pessoa e por trecho para NAV ou ASR a partir das cidades hoteleiras atendidas."
      },
      {
        "q": "Posso reservar transfer privativo do hotel para o voo a Istambul?",
        "a": "Sim. Vito e Sprinter estão disponíveis com preços fixos de acordo com o aeroporto."
      },
      {
        "q": "Posso sair por um aeroporto diferente daquele por onde cheguei?",
        "a": "Sim, mas cada trecho deve ser confirmado corretamente porque a rota e o preço privativo mudam."
      },
      {
        "q": "Devo usar o código do aeroporto de Istambul no formulário do shuttle?",
        "a": "Não. Selecione o aeroporto de saída na Capadócia — NAV ou ASR — e informe o número do voo que parte desse aeroporto."
      }
    ],
    "related": [
      "istanbul-to-cappadocia",
      "cappadocia-to-nevsehir-airport-shuttle",
      "nearest-airport-to-cappadocia",
      "kayseri-or-nevsehir-airport-for-cappadocia",
      "cappadocia-to-kayseri-airport-shuttle"
    ],
    "twitterTitle": "Capadócia para Istambul: Shuttle do Hotel e Voo",
    "twitterDescription": "Embarque em hotéis das cidades atendidas para Kayseri (ASR) ou Nevsehir (NAV) a partir de €15 por pessoa, seguido de voo para Istambul."
  }
];

export const ptPageBySlug = new Map(ptPages.map((page) => [page.slug, page]));
export function ptPrettySlug(slug:string){ const page=ptPageBySlug.get(slug); return page?.h1 || slug.split('-').map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' '); }
