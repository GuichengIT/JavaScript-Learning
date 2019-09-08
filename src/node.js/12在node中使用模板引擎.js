
var template = require('art-template');
var fs = require('fs');
// 在浏览器中的用法
// template('script 标签 id', {对象})
// 在node中的用法
// template('要被替换的字符串'，{对象})

var str = `
    大家好，我叫： {{ name }}
    今年:{{age}}
    我喜欢：{{ each hobbies }} {{ $value }} {{/each}}
`;

var ret = template.render(str, {
    name: 'Jack',
    age: '18',
    hobbies: [
        'coding',
        'sing',
        'dance'
    ]
});
console.log(ret);
