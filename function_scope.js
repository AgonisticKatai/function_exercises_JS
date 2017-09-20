function f() {
  var a = 1
  function n() {
    var b = 2
    function g() {
      var c = 5
      return a + b + c
    }
    return g()
  }
  return n()
}
f()