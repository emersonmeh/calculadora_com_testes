/*
    Principios do TDD:
    - São sempre criados 3 casos de teste:
    1 - Fazer o teste falhar;
    2 - Passar no teste da forma mais simples;
    3 - Refatorar;    
*/

import React from 'react';
import ReactDOM from 'react-dom';

//Classa que vai ser testada
import CalculadoraService from './calculadora.service';


//Definição do cenário
describe('Teste do CalculadoraService', () => {

    const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService();

    //1º Caso de teste (Soma)
    it('deve garantir que 1 + 4 = 5', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    //2º Caso de teste (Subtração)
    it('deve garantir que 1 - 4 = -3', () => {
        let subtracao = calcular(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });

    //3º Caso de teste (Divisao)
    it('deve garantir que 1 / 4 = 0.25', () => {
        let divisao = calcular(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25)
    });

    //4º Caso de teste (Multiplicação)
    it('deve garantir que 1 * 5 = 5', () => {
        let multiplicacao = calcular(1, 5, MULTIPLICACAO);
        expect(multiplicacao).toEqual(5);
    });

    // Default
    it('deve retornar 0 para opp inválida', () => {
        let operacaoInvalida = calcular(1, 4, '%');
        expect(operacaoInvalida).toEqual(0);
    });
});