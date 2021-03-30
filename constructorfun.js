function movie(director, music_director, actress) {
    this.direct = director;
    this.music_director = music_director;
    this.actress = actress;


}


var x1 = movie('shankar', "arr", "shamantha");
var x2 = movie('atlee', 'gv', "nayan");
console.log(x1.direct);
console.log(x2.actress)