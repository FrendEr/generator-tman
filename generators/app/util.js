exports.templatify = function(src, dest, existsHanlde) {
    src = this.templatePath(src);
    dest = this.destinationPath(dest);

    if (!this.fs.exists(dest)) {
        this.fs.copyTpl(src, dest, this);
    } else {
        this.log(dest, ' already exists');
        existsHanlde && existsHanlde.call(this, src, dest);
    }
};
