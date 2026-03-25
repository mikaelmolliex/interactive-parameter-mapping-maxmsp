function anything()
{
    var x = arguments[0];
    var y = arguments[1];

    this.patcher.apply(function(o){
        var r = o.rect;
        if (r && x >= r[0] && x <= r[2] && y >= r[1] && y <= r[3]) {
            if (o.varname) {
                outlet(0, o.varname);
            }
        }
    });
}
