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

