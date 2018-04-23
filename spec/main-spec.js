let fs = require("fs");

describe('main()', () => {
    // var input = ['统一建模语言','封装性','继承性','多态性','B','A','ABD','ABC','√','×','模型是对现实世界的简化和描述，模型是对所研究的系统、过程、事物和概念的一种特殊表达形式，可以是物理实体；也可以是某种图形；或者是某种数学表达式。'];
    // var expected = 100;

    it('should pass', () => {
      expect(fs.statSync("index.html").isFile()).toBe(true);
    });

});
