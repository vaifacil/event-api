# Desafio do serviço de eventos

O serviço de eventos é uma API que está sendo desenvolvida para registrar ações como entregas e coletas de pacotes.

Um evento é o registro de que um motorista interagiu com um pacote.
Esta interação pode ser uma entrega, uma coleta ou uma ocorrência (problemas com o pacote em geral).

## Problema

Diversos usuários reportaram que não conseguem consultar corretamente os eventos de um motorista, sempre que tentam, recebem eventos de um período diferente do requisitado, às vezes a mais, às vezes a menos e existem casos que o período retornado é completamente diferente do que foi solicitado na consulta.
Os desenvolvedores relataram que não existe problema aparente e que os testes estão passando.

## Objetivos

1. Descobrir o motivo do problema
2. Resolver o problema
3. Consertar os testes caso necessário

### Observações

Não é permitido utilizar bibliotecas adicionais para a resolução deste desafio.

As datas enviadas nas requests devem seguir o padrão "dia-mês-ano", por exemplo: "31-12-2020"
