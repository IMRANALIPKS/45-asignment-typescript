/*
40. Album:
Write a function called make_album() that builds an Object describing a music album. The
function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
at least one new function call that includes the number of tracks on an album.
*/
console.log("\n\t\t------FUNCTION ALBUM-------\n");
function makeAlbum(artist, album_title) {
    return { artist, album_title };
}
let album1 = makeAlbum('IMRAN', "45-Assignments");
let album2 = makeAlbum("atif aslam", "Meri khani");
let album3 = makeAlbum("arjit", "yadain");
console.log(album1);
console.log(album2);
console.log(album3);
//optional parameter (if its not avaiable than error doesnt exist)  optional parameter name? add ? , if we dont use ? than its not optional and it doent run error come with out ?.
//number of tracks
function make_Album2(artist, album_title, numoftracks) {
    return { artist, album_title, numoftracks };
}
let album_1 = make_Album2('IMRAN', "typescript-assignment", 45);
let album_2 = make_Album2("Rahat Fateh Ali khan", "Dil-e-umeed");
let album_3 = make_Album2("Shafqat amanat", "zindagi", 36);
console.log(album_1);
console.log(album_2);
console.log(album_3);
