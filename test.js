var test = (function(){
  var bar = function bar(){
    return 'bar'
  }
  
  var foo = function foo(){
    return 'foo';
  }
  
  return {
    bar: function() {
      bar();
    },
    foo: function() {
      foo();
    }
  }
}();
