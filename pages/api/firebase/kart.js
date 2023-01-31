import { faker } from '@faker-js/faker';
import { getItems, setNewDoc, setNewKart, updateKart, getTitle, setTestAdd, getTestSomething, setNewItemKart, getItemKartByConditional, addFieldDocTest, updateItem} from "../../../service/api";
import { auth } from "../../../firebase-config"
const getUserFirebase = () => {
    return  auth.currentUser
}
const addItemFirebase = async() => {
    const user = await setTestAdd("cities")
    const testGet = await getTestSomething("country", "USA")
    console.log('testGet', testGet)
    return await testGet;
}
const addItemKartToFirebase = async() => {
    const user = await setTestAdd("cities")
    const testGet = await getTestSomething("country", "USA")
    console.log('testGet', testGet)
    return await testGet;
}
export default async function kartHandler(req, res) {
const {items, current_product, user, state} = req.body;
console.log("while I hope", items)
const {email} = await getUserFirebase()
const upItem = await updateItem("users", email, {items: items})
console.log(email)
if(state !== 0 && items.length !== 0){
//console.log(items.length, items)
// let user_exactly = null
// let usertoIf = getUserFirebase()
// //console.log("**", usertoIf)
// if(usertoIf !== null){
//     user_exactly = usertoIf.email
//     //console.log("halla qui to validate", usertoIf)
// }else{
//     user_exactly = user.email
// }
// const getAllKart = await getItems("karts")
// let userData = getAllKart.filter(item => item.id === user.email)
// // console.log("getAllKart", getAllKart)
// // console.log("userdata", userData)
// let indexwrong = userData[0].karts.findIndex((index)=> index.title === current_product.title)
// let new_array = userData[0].karts.filter(index => index.title !== current_product.title)
// //console.log("new_array", new_array)
// // change the value
// //console.log("items", items, "items")
// const filterItems = items.filter(item => item.title === current_product.title)
// let new_values = { ...filterItems[0]}
// new_array.push(new_values)
// userData[0].karts = new_array.slice()
// console.log("current-product", current_product)
// console.log("values", userData[0].karts)

// const container_items = items.slice();
// const array= [{title: "hey", num: 1}, {title: "how"}]
// let newwrong = {...array[indexwrong], lastname: user.lastname, num: array[indexwrong].num + 1}
// console.log(newwrong, "*")
// //newwrong = {nothing: "nothing"}
// new_array.push(newwrong)

//const newValue = [array[indexwrong].num + 1, [indexwrong]]

//newindexwrong = newValue.slice()
// console.log(new_array);

//console.log("indexwrong", indexwrong)
//console.log("value", newValue)

//console.log(container_items)
// const filteritems = items.filter((item)=> item.title === current_product.title)
// const newObj = {...filteritems[0], ...current_product, ...user, id: faker.datatype.uuid()};

  ////////////for testing add kart //////////////////
//   console.log('newObj', newObj.email)
//   const addKartToFirebase = await setNewItemKart(`karts${newObj.email}`, newObj.email, newObj);
//   const getQueryKart = await getItemKartByConditional(`karts${newObj.email}`, "title", newObj.title)

/// new testing
//console.log(newObj, "*")
// const addValue = await updateItem("karts", newObj.email, {karts:  [{...newObj}]});


// const onlyTest = await addFieldDocTest();

//   const updateItemKart = await 

  ////////////for testing add kart //////////////////





// let kartFirebase;
// const rew = await getItems(`karts`)
// // const path = await getItemsWithPathLong('karts', newObj.title, "items")
// // console.log(path)

// const duda = await addItemFirebase()


// const filter_rew_doc = rew.filter((item) => item.id === newObj.email)

// const filterew = filter_rew_doc.filter((item)=> item.title !== newObj.title)
// const refilterew = filterew.filter((item)=> typeof(item.title)=== "string")
// refilterew.push(newObj)
// // console.log(typeof(rew), rew)


// const ress = await setNewKart(`karts/${user.email}`, {...refilterew})
// console.log(rew)


//             return res.status(200).json({state: "Added Kart successfully", getQueryKart: getQueryKart, duda: duda, filter_rew_doc: filter_rew_doc, init: rew, obj: newObj, talUser: kartFirebase, kk: refilterew, filterew: filterew, filter: refilterew, items: items});
            return res.status(200).json({state: "successfully"})
            //return res.status(401).json({obj: newObj, talUser: kartFirebase, items: "items__"});
        }
return res.status(200).json({state: "Add item successfully", upItem:upItem})

}
//const ress = await getTitle(`karts`, newObj.title)
