const { data } = require('../users.json');
// const getQueryerrors = require('../validators/users.validators');

const getAllUsers = (req, res) => {
    res.json(data);
}

const getUserByUuid = (req, res) => {
    console.log("Search by user uuid");
    const { uuid } = req.params;
    const result = data.find((item) => item.login.uuid === uuid);

    if (result) {
        res.status(200).json(result);
    } else {
        res.sendStatus(404)
    }
}

const searchUserByQuery = (req, res) => {
    console.log("Search by user called");
    const { gender, age } = req.query;

    // const error = getQueryerrors({ gender, age });

    // if (error) {
    //     return res.status(422).json(error);
    // }

    // if (!gender && !age) {
    //     return res.status(422).json({
    //       message:"Missing Search Parameters, search using age and/ or gender"
    //     });
    //   }

    //   if(age){
    //     if(!Number(age)){
    //         return res.status(422).json({message : 'Age parameter should be number'})
    //     }

    //     if(age >= 100 || age < 0) {
    //         return res.status(422).json({message : 'Age out of bound. It should be a number between 0 to 100'})
    //     }
    //   }

    //   if(gender){
    //     if(!['male', 'female'].includes(gender)){
    //         return res.status(433).json({message : `Gender to search can eithre be 'male' or 'female'`})
    //     }
    //   }

    if (gender && age) {
        const result = data.filter(
            (item) => item.gender === gender && Number(item.dob.age) >= Number(age)
        );
        res.json(result);
    } else if (gender) {
        const result = data.filter((item) => item.gender === gender);
        res.json(result);
    } else if (age) {
        const result = data.filter((item) => Number(item.dob.age) >= Number(age));
        res.json(result);
    } else {
        res.sendStatus(404);
    }
};

module.exports = {
    getAllUsers,
    getUserByUuid,
    searchUserByQuery
}