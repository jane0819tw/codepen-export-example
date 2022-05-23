//引用apiurl(json)
var dataWorks = [{"title": '個人履歷',
"skills": 'pug sass',
"pic":'https://i.imgur.com/rR3sjsU.png',
"link":'https://codepen.io/jane0819tw/details/ymvOMW'},
{"title": '天氣興趣盒子',
"skills": 'pug sass jquery',
"pic":'https://i.imgur.com/AM6xatA.png',
"link":'https://codepen.io/jane0819tw/details/wqdaQN'},
{"title": 'genderLife',
"skills": 'pug sass jquery bootstrap',
"pic":'https://i.imgur.com/KnynXPN.png',
"link":'https://codepen.io/jane0819tw/details/YewWBy'},
{"title": '民主紀念碑',
"skills": 'pug sass',
"pic":'https://i.imgur.com/sAv1CAA.png',
"link":'https://codepen.io/jane0819tw/details/VwZmmdg'},
{"title": '美化人員表',
"skills": 'pug sass jquery bootstrap ajax ',
"pic":'https://i.imgur.com/M1qia3c.png',
"link":'https://codepen.io/jane0819tw/details/zYOZMNP'},
];

var dataVue = [
  {"title": 'v-on / method',
"skills": 'pug sass vue',
"pic":'https://i.imgur.com/XQDFshH.png',
"link":'https://codepen.io/jane0819tw/details/pMaxMo'},
{"title": 'hahow網頁練習',
"skills": 'pug sass vue ajax',
"pic":'https://i.imgur.com/SYkTULn.png',
"link":'https://codepen.io/jane0819tw/details/wVXjeV'}];

var dataPractice = [
  {"title": '吃蛋糕偽元素練習',
"skills": 'pug sass',
"pic":'https://i.imgur.com/k1TTjXM.png',
"link":'https://codepen.io/jane0819tw/details/jONbGOx'},
{"title": 'yellow studio',
"skills": 'pug sass bootstrap',
"pic":'https://i.imgur.com/wCh2wDU.png',
"link":'https://codepen.io/jane0819tw/details/WaoNGv'}];

var vm1 = new Vue({
  el: "#app1",
  data: {
    dataWorks: dataWorks
  },methods: {
    goLink: function(dw) {
      //window.location.href = dw.link;
      window.open(dw.link);
}
  }
});

var vm2 = new Vue({
  el: "#app2",
  data: {
    dataVue: dataVue
  },methods: {
    goLink: function(dv) {
      //window.location.href = dw.link;
      window.open(dv.link);
}
  }
});

var vm3 = new Vue({
  el: "#app3",
  data: {
    dataPractice: dataPractice
  },methods: {
    goLink: function(dp) {
      //window.location.href = dw.link;
      window.open(dp.link);
}
  }
});