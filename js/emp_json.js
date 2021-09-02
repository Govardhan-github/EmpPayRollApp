const createEmployeePayRollJSON = () =>{
    let empPayRollListLocal =[
        {
        _name: "Govardan Reddy",
        _geder : "Male",
        _department : [
            'Engineering',
            'Finance'
        ],
        _salary:'500000',
        _startDate : '04 Aug 2019',
        _id : new Date().getTime(),
        _profilepic : '../assets/profiles/Ellipse -2.png'
    },
    {
        _name: "Nikhila",
        _geder : "Female",
        _department : [
            'Engineering',
        ],
        _salary:'400000',
        _startDate : '04 Aug 2018',
        _id : new Date().getTime() + 1,
        _profilepic : '../assets/profiles/Ellipse -1.png'
    }
];

return empPayRollListLocal;
}