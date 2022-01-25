import { xqc2021 } from '../../data/xqc2021'

export default function addPlace() {
  const addPlaceFunction = (array) => {
    // sort by votes
    for (const category of array.categories) {
      category.options.sort((a, b) => b.votesProcent - a.votesProcent)
    }

    // add place property
    for (const category of array.categories) {
      for (let i = 0; i < category.options.length; i++) {
        category.options[i].place = i + 1
      }
    }

    // sort by id
    for (const category of array.categories) {
      category.options.sort((a, b) => a.id - b.id)
    }
    console.log(array.categories)
  }

  addPlaceFunction(xqc2021)

  return <div>🚧</div>
}
