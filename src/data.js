import data from './data.json';


// Challenge 1
export default data

// Challenge 2
const allCategories = data.map(obj => obj.category)

// Challenge 3
// const uniqueCategories = Array.from(new Set(allCategories));
const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0
    return acc
}, {})
const uniqueCategories = Object.keys(cats)

//Challenge 4
const categoriesAndCounts = allCategories.reduce((acc, cat) => {
    if (acc[cat] === undefined) {
        acc[cat] = 1
    } else {
        acc[cat] += 1
    }
    return acc
}, {})

export {
    allCategories,
    uniqueCategories,
    categoriesAndCounts
}