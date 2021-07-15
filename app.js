async function pullData() {
  return await fetch('./MOCK_DATA.json')
}

// async function Check() {
//  if (Male) {
//      let Male = 'M'
//     } else if (Female) {
//         let Female = 'F'
//     }
//     else {
//        let Other = ['Genderfluid', 'Non-binary', 'Genderqueer']
// ​ }
// }

async function Main() {
  // data = await pullData()
  console.log(await (await pullData()).text())

  let data = JSON.parse(await (await pullData()).text())
  let male = 0
  let female = 0
  for (let index = 0; index < data.length; index++) {
    const element = data[index]
    const gender = element['gender']
    if (gender == 'Female') {
      female++
    }
    if (gender == 'Male') {
      male++
    }
  }

  document.getElementById(
    'Gender',
  ).innerHTML = `Male: ${male} , Female: ${female}`

  console.log(male, female)
}

Main()
