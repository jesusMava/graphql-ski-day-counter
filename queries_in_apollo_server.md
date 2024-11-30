/// queries in apollo server
query {
  totalDays
  allDays {
    id
    date
    conditions
  }
}


mutation($removeDateId: ID!) {
  removeDate(id: $removeDateId) {
    date
    id
  }
}

mutation {
  addDay(input: {
    date: "1/12/2025"
    mountain: "Alpine"
    conditions: HEAVY
  }) {
    id
    mountain
    conditions
  }
}