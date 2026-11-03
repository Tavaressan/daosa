import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunkText } from '../src/service/llm/index.js';

// limit e overlap são passados explicitamente: o teste não depende de variáveis de ambiente.

test('chunkText divide o texto em janelas com overlap', () => {
  assert.deepEqual(chunkText('abcdefghij', 5, 2), ['abcde', 'defgh', 'ghij']);
});

test('chunkText retorna uma lista vazia para texto vazio ou só com espaços', () => {
  assert.deepEqual(chunkText('', 5, 2), []);
  assert.deepEqual(chunkText('   \n\t  ', 5, 2), []);
});

test('chunkText rejeita entrada que não é string', () => {
  assert.throws(() => chunkText(123, 5, 2), TypeError);
});

test('chunkText rejeita overlap maior ou igual ao limit', () => {
  assert.throws(() => chunkText('abcdefghij', 5, 5), RangeError);
  assert.throws(() => chunkText('abcdefghij', 5, 6), RangeError);
});
