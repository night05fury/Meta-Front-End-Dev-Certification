const { default: TestRunner } = require('jest-runner')
const scopeTest=require('./Test')
test('returns 33 as a result',()=>{
    expect(scopeTest()).toBe('33');
}
    )