import db from '../models/index';
import CRUDSevices from '../service/CRUDSevices';

let gethomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('------------------------');
        console.log(data)
        console.log('------------------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });


    } catch (e) {
        console.log(e);
    }



}

let getAboutPage = (req, res) => {
    return res.send('Hello Word dinhanh02')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}
let postCRUD = async (req, res) => {
    let messeges = await CRUDSevices.createNewUser(req.body);
    console.log(messeges)
    return res.send('post crud from sever')
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDSevices.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDSevices.getUserInfobyId(userId)
        console.log(userData)
        return res.render('editCRUD.ejs', {
            user: userData,
        })


    } else {
        return res.send('User not found!')

    }


}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDSevices.upDateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUser,
    })



}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDSevices.deleteUserById(id)
        return res.send('delete the user suscess')

    } else {
        return res.send('delete is not found')
    }

}


module.exports = {
    gethomepage: gethomepage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};