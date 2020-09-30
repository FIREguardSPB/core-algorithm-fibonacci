describe('Фибоначчи', function () {
  describe('Тестирование итерационного подсчета фибоначчи', function () {
    it('Функция должна вернуть 55', function () {
      expect(fib(10)).toEqual(55);
    });
  });
  describe('Тестирование рекурсивного подсчета фибоначчи', function () {
    it('Функция должна вернуть 102334155', function () {
      expect(fiboRecurs(40)).toEqual(102334155);
    });
  });
});
