const student = {
    fullName: 'Bishwajit Mondal',
    address: 'Madhabbari, Joydebpur, Gazipur',
    favorite:{book:'Pather Panchali', food:'Ilish Bhat', place:'Sajek'},
    friends:['kabir', 'humayun', 'sagir'],

    myJob: function () {
        console.log(this.fullName);
    }
}
student.myJob();


const output = `
    Name: ${student.name}
    Address: ${student.address}
    Favorite Book: ${student.favorite.book}
    Friend: ${student.friends[2]}

`;
console.log(output);